const WebSocket = require('ws');
const crypto = require('crypto');

const PORT = process.env.PORT || 5000;
const wss = new WebSocket.Server({ 
    port: PORT, 
    host: '0.0.0.0',
    perMessageDeflate: false 
});

// Store active rooms and player connections
const rooms = new Map(); // roomId -> Room
const playerConnections = new Map(); // playerId -> WebSocket

class Room {
    constructor(id, hostPlayerId, initialGameState) {
        this.id = id;
        this.players = new Map(); // playerId -> { id, name, ws, isHost }
        this.hostPlayerId = hostPlayerId;
        this.currentTurn = hostPlayerId;
        this.turnOrder = [hostPlayerId];
        this.fullGameState = initialGameState; // The entire game state is stored here
    }

    addPlayer(playerId, playerName, ws) {
        const isHost = playerId === this.hostPlayerId;
        this.players.set(playerId, {
            id: playerId,
            name: playerName,
            ws: ws,
            isHost: isHost,
        });

        if (!isHost) {
            this.turnOrder.push(playerId);
        }
    }

    removePlayer(playerId) {
        const playerToRemove = this.players.get(playerId);
        if (!playerToRemove) return;

        this.players.delete(playerId);
        this.turnOrder = this.turnOrder.filter(id => id !== playerId);

        // If the player whose turn it was left, move to the next turn
        if (this.currentTurn === playerId) {
            this.nextTurn(false); // Don't broadcast yet
        }

        // If host left, assign a new host
        if (playerToRemove.isHost && this.players.size > 0) {
            const newHostId = this.players.keys().next().value;
            this.hostPlayerId = newHostId;
            const newHost = this.players.get(newHostId);
            newHost.isHost = true;
            if (!this.turnOrder.includes(newHostId)) {
                 this.currentTurn = newHostId;
            }
        }
    }

    nextTurn(broadcastChange = true) {
        if (this.turnOrder.length === 0) {
            this.currentTurn = null;
            return;
        }
        const currentIndex = this.turnOrder.indexOf(this.currentTurn);
        const nextIndex = (currentIndex + 1) % this.turnOrder.length;
        this.currentTurn = this.turnOrder[nextIndex];

        if (broadcastChange) {
            this.broadcast({
                type: 'turn_changed',
                currentTurn: this.currentTurn,
            });
        }
    }

    broadcast(message, excludePlayerId = null) {
        for (const [playerId, player] of this.players) {
            if (playerId !== excludePlayerId && player.ws.readyState === WebSocket.OPEN) {
                try {
                    player.ws.send(JSON.stringify(message));
                } catch (error) {
                    console.error(`Failed to send message to player ${playerId}:`, error);
                }
            }
        }
    }

    getPlayersList() {
        return Array.from(this.players.values()).map(p => ({
            id: p.id,
            name: p.name,
            isPartyLeader: p.isHost, // Use isHost for party leader status
        }));
    }
}

function generateRoomId() {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
}

wss.on('connection', (ws) => {
    let playerId = null;
    let currentRoomId = null;

    const cleanup = () => {
        if (currentRoomId && playerId) {
            const room = rooms.get(currentRoomId);
            if (room) {
                const playerName = room.players.get(playerId)?.name || 'A player';
                room.removePlayer(playerId);

                if (room.players.size === 0) {
                    rooms.delete(currentRoomId);
                    console.log(`Room ${currentRoomId} closed.`);
                } else {
                    room.broadcast({
                        type: 'player_disconnected',
                        playerId: playerId,
                        playerName: playerName,
                        players: room.getPlayersList(),
                        currentTurn: room.currentTurn,
                        isHost: room.players.get(room.hostPlayerId)?.isHost,
                    });
                }
            }
        }
        if (playerId) {
            playerConnections.delete(playerId);
        }
    };

    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data.toString());
            const room = rooms.get(currentRoomId);

            switch (message.type) {
                case 'create_room':
                    playerId = crypto.randomUUID();
                    const roomId = generateRoomId();
                    const newRoom = new Room(roomId, playerId, message.initialGameState);
                    newRoom.addPlayer(playerId, message.playerName, ws);

                    rooms.set(roomId, newRoom);
                    playerConnections.set(playerId, ws);
                    currentRoomId = roomId;

                    ws.send(JSON.stringify({
                        type: 'room_created',
                        roomId: roomId,
                        playerId: playerId,
                        fullGameState: newRoom.fullGameState,
                    }));
                    break;

                case 'join_room':
                    const targetRoom = rooms.get(message.roomId);
                    if (!targetRoom) {
                        return ws.send(JSON.stringify({ type: 'error', message: 'Room not found' }));
                    }
                    if (targetRoom.players.size >= 4) {
                        return ws.send(JSON.stringify({ type: 'error', message: 'Room is full' }));
                    }

                    playerId = crypto.randomUUID();
                    targetRoom.addPlayer(playerId, message.playerName, ws);
                    playerConnections.set(playerId, ws);
                    currentRoomId = message.roomId;

                    // Send join confirmation to the new player with the full game state
                    ws.send(JSON.stringify({
                        type: 'room_joined',
                        roomId: message.roomId,
                        playerId: playerId,
                        fullGameState: targetRoom.fullGameState,
                    }));

                    // Notify other players
                    targetRoom.broadcast({
                        type: 'player_joined',
                        player: { id: playerId, name: message.playerName, isPartyLeader: false },
                        players: targetRoom.getPlayersList(),
                    }, playerId);
                    break;

                case 'player_action':
                    if (room && playerId === room.currentTurn) {
                        const host = room.players.get(room.hostPlayerId);
                        if (host && host.ws.readyState === WebSocket.OPEN) {
                            // Forward the action to the host for processing
                            host.ws.send(JSON.stringify({
                                type: 'process_action',
                                command: message.command,
                                actingPlayerId: playerId,
                            }));
                        }
                    }
                    break;

                case 'sync_game_state':
                    if (room && playerId === room.hostPlayerId) {
                        room.fullGameState = message.state; // Update server state
                        room.nextTurn(); // Move to the next turn after an action
                        room.fullGameState.multiplayer.currentTurn = room.currentTurn; // Sync turn state
                        room.fullGameState.multiplayer.players = room.getPlayersList();

                        // Broadcast the new state and turn change to everyone
                        room.broadcast({
                            type: 'game_state_updated',
                            state: room.fullGameState,
                        });
                    }
                    break;

                case 'leave_room':
                    cleanup();
                    break;
            }
        } catch (error) {
            console.error('Error processing message:', error);
            ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
        }
    });

    ws.on('close', cleanup);
    ws.on('error', (error) => console.error('WebSocket error:', error));
});

console.log(`Multiplayer server running on ws://0.0.0.0:${PORT}`);
