
const WebSocket = require('ws');
const crypto = require('crypto');

const PORT = process.env.PORT || 5000;
const wss = new WebSocket.Server({ 
    port: PORT, 
    host: '0.0.0.0',
    perMessageDeflate: false 
});

// Store active rooms and their state
const rooms = new Map();
const playerConnections = new Map(); // playerId -> WebSocket

class Room {
    constructor(id, hostPlayerId) {
        this.id = id;
        this.players = new Map(); // playerId -> playerData
        this.hostPlayerId = hostPlayerId;
        this.currentTurn = hostPlayerId;
        this.gameState = {
            location: 'Village of Millbrook',
            timeOfDay: 'Day',
        };
        this.turnOrder = [hostPlayerId];
    }

    addPlayer(playerId, playerName, ws) {
        this.players.set(playerId, {
            id: playerId,
            name: playerName,
            isPartyLeader: playerId === this.hostPlayerId,
            ws: ws,
            connected: true,
        });
        
        if (playerId !== this.hostPlayerId) {
            this.turnOrder.push(playerId);
        }
    }

    removePlayer(playerId) {
        this.players.delete(playerId);
        this.turnOrder = this.turnOrder.filter(id => id !== playerId);
        
        // If host left, make someone else host
        if (playerId === this.hostPlayerId && this.players.size > 0) {
            const newHost = this.players.keys().next().value;
            this.hostPlayerId = newHost;
            this.currentTurn = newHost;
            this.players.get(newHost).isPartyLeader = true;
        }
    }

    nextTurn() {
        const currentIndex = this.turnOrder.indexOf(this.currentTurn);
        const nextIndex = (currentIndex + 1) % this.turnOrder.length;
        this.currentTurn = this.turnOrder[nextIndex];
    }

    broadcast(message, excludePlayerId = null) {
        for (const [playerId, player] of this.players) {
            if (playerId !== excludePlayerId && player.connected) {
                try {
                    player.ws.send(JSON.stringify(message));
                } catch (error) {
                    console.error(`Failed to send message to player ${playerId}:`, error);
                    player.connected = false;
                }
            }
        }
    }

    getPlayersList() {
        return Array.from(this.players.values()).map(p => ({
            id: p.id,
            name: p.name,
            isPartyLeader: p.isPartyLeader,
        }));
    }
}

function generateRoomId() {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
}

function sendToPlayer(playerId, message) {
    const ws = playerConnections.get(playerId);
    if (ws && ws.readyState === WebSocket.OPEN) {
        try {
            ws.send(JSON.stringify(message));
        } catch (error) {
            console.error(`Failed to send message to player ${playerId}:`, error);
        }
    }
}

wss.on('connection', (ws) => {
    let playerId = null;
    let currentRoom = null;

    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data.toString());
            
            switch (message.type) {
                case 'create_room':
                    playerId = crypto.randomUUID();
                    const roomId = generateRoomId();
                    const room = new Room(roomId, playerId);
                    room.addPlayer(playerId, message.playerName, ws);
                    rooms.set(roomId, room);
                    playerConnections.set(playerId, ws);
                    currentRoom = room;

                    ws.send(JSON.stringify({
                        type: 'room_created',
                        roomId: roomId,
                        playerId: playerId,
                        players: room.getPlayersList(),
                        isHost: true,
                        currentTurn: room.currentTurn,
                        gameState: room.gameState,
                    }));
                    break;

                case 'join_room':
                    const targetRoom = rooms.get(message.roomId);
                    if (!targetRoom) {
                        ws.send(JSON.stringify({
                            type: 'error',
                            message: 'Room not found',
                        }));
                        break;
                    }

                    if (targetRoom.players.size >= 4) {
                        ws.send(JSON.stringify({
                            type: 'error',
                            message: 'Room is full',
                        }));
                        break;
                    }

                    playerId = crypto.randomUUID();
                    targetRoom.addPlayer(playerId, message.playerName, ws);
                    playerConnections.set(playerId, ws);
                    currentRoom = targetRoom;

                    // Send join confirmation to new player
                    ws.send(JSON.stringify({
                        type: 'room_joined',
                        roomId: message.roomId,
                        playerId: playerId,
                        players: targetRoom.getPlayersList(),
                        isHost: false,
                        currentTurn: targetRoom.currentTurn,
                        gameState: targetRoom.gameState,
                    }));

                    // Notify other players
                    targetRoom.broadcast({
                        type: 'player_joined',
                        player: {
                            id: playerId,
                            name: message.playerName,
                            isPartyLeader: false,
                        },
                        players: targetRoom.getPlayersList(),
                    }, playerId);
                    break;

                case 'end_turn':
                    if (currentRoom && playerId === currentRoom.currentTurn) {
                        currentRoom.nextTurn();
                        currentRoom.broadcast({
                            type: 'turn_changed',
                            currentTurn: currentRoom.currentTurn,
                            players: currentRoom.getPlayersList(),
                        });
                    }
                    break;

                case 'travel':
                    if (currentRoom && playerId === currentRoom.hostPlayerId) {
                        currentRoom.gameState.location = message.location;
                        currentRoom.broadcast({
                            type: 'location_changed',
                            location: message.location,
                            gameState: currentRoom.gameState,
                        });
                    }
                    break;

                case 'player_action':
                    if (currentRoom && playerId === currentRoom.currentTurn) {
                        currentRoom.broadcast({
                            type: 'player_action',
                            playerId: playerId,
                            action: message.action,
                            result: message.result,
                        }, playerId);
                    }
                    break;

                case 'chat_message':
                    if (currentRoom) {
                        const player = currentRoom.players.get(playerId);
                        currentRoom.broadcast({
                            type: 'chat_message',
                            playerId: playerId,
                            playerName: player?.name || 'Unknown',
                            message: message.message,
                        }, playerId);
                    }
                    break;

                case 'leave_room':
                    if (currentRoom) {
                        currentRoom.removePlayer(playerId);
                        currentRoom.broadcast({
                            type: 'player_left',
                            playerId: playerId,
                            players: currentRoom.getPlayersList(),
                            currentTurn: currentRoom.currentTurn,
                        });

                        if (currentRoom.players.size === 0) {
                            rooms.delete(currentRoom.id);
                        }
                    }
                    break;
            }
        } catch (error) {
            console.error('Error processing message:', error);
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Invalid message format',
            }));
        }
    });

    ws.on('close', () => {
        if (currentRoom && playerId) {
            currentRoom.removePlayer(playerId);
            currentRoom.broadcast({
                type: 'player_disconnected',
                playerId: playerId,
                players: currentRoom.getPlayersList(),
                currentTurn: currentRoom.currentTurn,
            });

            if (currentRoom.players.size === 0) {
                rooms.delete(currentRoom.id);
            }
        }
        
        if (playerId) {
            playerConnections.delete(playerId);
        }
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log(`Multiplayer server running on ws://0.0.0.0:${PORT}`);
