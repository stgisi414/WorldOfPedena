
import type { PartyMember, MultiplayerState } from '../types';

export interface MultiplayerMessage {
  type: string;
  [key: string]: any;
}

export class MultiplayerService {
  private ws: WebSocket | null = null;
  private playerId: string | null = null;
  private roomId: string | null = null;
  private isHost: boolean = false;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectDelay: number = 1000;
  private messageHandlers: Map<string, (message: any) => void> = new Map();

  constructor(private serverUrl: string = 'ws://localhost:5000') {}

  connect(onStateUpdate: (state: Partial<MultiplayerState>) => void, onMessage: (content: string, type: string) => void): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.serverUrl);

        this.ws.onopen = () => {
          console.log('Connected to multiplayer server');
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            this.handleMessage(message, onStateUpdate, onMessage);
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        };

        this.ws.onclose = () => {
          console.log('Disconnected from multiplayer server');
          onStateUpdate({
            isConnected: false,
          });
          this.attemptReconnect(onStateUpdate, onMessage);
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  private handleMessage(message: any, onStateUpdate: (state: Partial<MultiplayerState>) => void, onMessage: (content: string, type: string) => void) {
    switch (message.type) {
      case 'room_created':
      case 'room_joined':
        this.playerId = message.playerId;
        this.roomId = message.roomId;
        this.isHost = message.isHost;
        onStateUpdate({
          isConnected: true,
          roomId: message.roomId,
          players: message.players,
          isMyTurn: message.currentTurn === this.playerId,
          currentTurn: message.currentTurn,
        });
        onMessage(`${message.isHost ? 'Created' : 'Joined'} room: ${message.roomId}`, 'success');
        if (!message.isHost) {
          onMessage('Waiting for location sync from party leader...', 'system');
        }
        break;

      case 'player_joined':
        onStateUpdate({
          players: message.players,
        });
        onMessage(`${message.player.name} joins your party!`, 'success');
        break;

      case 'player_left':
      case 'player_disconnected':
        onStateUpdate({
          players: message.players,
          isMyTurn: message.currentTurn === this.playerId,
          currentTurn: message.currentTurn,
        });
        onMessage(`A player has ${message.type === 'player_left' ? 'left' : 'disconnected from'} the party.`, 'system');
        break;

      case 'turn_changed':
        onStateUpdate({
          isMyTurn: message.currentTurn === this.playerId,
          currentTurn: message.currentTurn,
          players: message.players,
        });
        const currentPlayer = message.players.find((p: PartyMember) => p.id === message.currentTurn);
        if (message.currentTurn === this.playerId) {
          onMessage("It's your turn!", 'success');
        } else {
          onMessage(`It's ${currentPlayer?.name || 'Unknown'}'s turn. Please wait...`, 'system');
        }
        break;

      case 'location_changed':
        onMessage(`The party leader has moved everyone to: ${message.location}`, 'system');
        // This would trigger a location update in the game state
        break;

      case 'player_action':
        const player = message.players?.find((p: PartyMember) => p.id === message.playerId);
        onMessage(`${player?.name || 'A player'} performed: ${message.action}`, 'system');
        if (message.result) {
          onMessage(message.result, 'narration');
        }
        break;

      case 'chat_message':
        onMessage(`${message.playerName}: ${message.message}`, 'dialogue');
        break;

      case 'error':
        onMessage(message.message, 'error');
        break;
    }
  }

  private attemptReconnect(onStateUpdate: (state: Partial<MultiplayerState>) => void, onMessage: (content: string, type: string) => void) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        onMessage(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`, 'system');
        this.connect(onStateUpdate, onMessage).catch(() => {
          if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            onMessage('Failed to reconnect to multiplayer server.', 'error');
          }
        });
      }, this.reconnectDelay * this.reconnectAttempts);
    }
  }

  createRoom(playerName: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'create_room',
        playerName: playerName,
      }));
    }
  }

  joinRoom(roomId: string, playerName: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'join_room',
        roomId: roomId,
        playerName: playerName,
      }));
    }
  }

  endTurn(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'end_turn',
      }));
    }
  }

  sendPlayerAction(action: string, result?: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'player_action',
        action: action,
        result: result,
      }));
    }
  }

  sendTravel(location: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN && this.isHost) {
      this.ws.send(JSON.stringify({
        type: 'travel',
        location: location,
      }));
    }
  }

  sendChatMessage(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'chat_message',
        message: message,
      }));
    }
  }

  leaveRoom(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'leave_room',
      }));
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.playerId = null;
    this.roomId = null;
    this.isHost = false;
  }

  getPlayerId(): string | null {
    return this.playerId;
  }

  getRoomId(): string | null {
    return this.roomId;
  }

  getIsHost(): boolean {
    return this.isHost;
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }
}
