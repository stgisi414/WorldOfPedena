import type { GameState, MultiplayerState, PartyMember } from '../types';

export interface MultiplayerCallbacks {
  onStateUpdate: (state: Partial<MultiplayerState>) => void;
  onFullStateReceived: (state: GameState) => void;
  onProcessAction: (command: string, actingPlayerId: string) => void;
  onDisplayMessage: (content: string, type: string) => void;
}

export class MultiplayerService {
  private ws: WebSocket | null = null;
  private playerId: string | null = null;
  private isHost: boolean = false;
  private callbacks: MultiplayerCallbacks | null = null;
  private connectionPromise: Promise<void> | null = null;

  public getPlayerId = () => this.playerId;
  public getIsHost = () => this.isHost;

  private onOpen = () => {
    console.log('Connected to multiplayer server');
    this.callbacks?.onDisplayMessage('Connected to the multiplayer server!', 'success');
  };

  private onMessage = (event: MessageEvent) => {
    try {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);

      switch (message.type) {
        case 'room_created':
          this.playerId = message.playerId;
          this.isHost = true;
          this.callbacks?.onStateUpdate({
            isConnected: true,
            roomId: message.roomId,
            isMyTurn: true,
            currentTurn: this.playerId,
            players: message.fullGameState.multiplayer.players || [],
          });
          this.callbacks?.onFullStateReceived(message.fullGameState);
          this.callbacks?.onDisplayMessage(`Party room ${message.roomId} created. You are the leader!`, 'success');
          break;

        case 'room_joined':
          this.playerId = message.playerId;
          this.isHost = false;
          this.callbacks?.onFullStateReceived(message.fullGameState);
           this.callbacks?.onDisplayMessage(`Successfully joined room ${message.roomId}.`, 'success');
          break;

        case 'player_joined':
            this.callbacks?.onDisplayMessage(`${message.player.name} has joined the party.`, 'system');
            this.callbacks?.onStateUpdate({ players: message.players });
            break;

        case 'player_disconnected':
            this.callbacks?.onDisplayMessage(`${message.playerName} has left the party.`, 'system');
            this.callbacks?.onStateUpdate({ 
                players: message.players,
                currentTurn: message.currentTurn,
                isMyTurn: message.currentTurn === this.playerId,
            });
            break;

        case 'game_state_updated':
            this.callbacks?.onFullStateReceived(message.state);
             this.callbacks?.onStateUpdate({
                isMyTurn: message.state.multiplayer.currentTurn === this.playerId,
            });
            break;

        case 'process_action':
            if (this.isHost) {
                this.callbacks?.onProcessAction(message.command, message.actingPlayerId);
            }
            break;

        case 'error':
          this.callbacks?.onDisplayMessage(`Error: ${message.message}`, 'error');
          break;
      }
    } catch (error) {
      console.error('Failed to parse message:', error);
      this.callbacks?.onDisplayMessage('Received an invalid message from the server.', 'error');
    }
  };

  private onClose = () => {
    console.log('Disconnected from multiplayer server');
    this.callbacks?.onDisplayMessage('Disconnected from the multiplayer server.', 'system');
    this.resetState();
  };

  private onError = (event: Event) => {
    console.error('WebSocket error:', event);
    this.callbacks?.onDisplayMessage('A multiplayer connection error occurred.', 'error');
    this.resetState();
  };

  private resetState = () => {
    this.ws = null;
    this.playerId = null;
    this.isHost = false;
    this.connectionPromise = null;
    this.callbacks?.onStateUpdate({
        isConnected: false,
        roomId: null,
        players: [],
        isMyTurn: true,
        currentTurn: null,
    });
  }

  public connect = (callbacks: MultiplayerCallbacks): Promise<void> => {
    if (this.ws?.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }

    this.callbacks = callbacks;

    if (!this.connectionPromise) {
        this.connectionPromise = new Promise((resolve, reject) => {
            const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
            const wsUrl = `${protocol}://${window.location.hostname}`;
            console.log(`Attempting to connect to ${wsUrl}`);

            const socket = new WebSocket(wsUrl);

            let hasConnected = false;

            socket.onopen = () => {
              hasConnected = true;
              this.ws = socket;
              this.onOpen();

              // Assign persistent handlers after connection is successful
              socket.onmessage = this.onMessage;
              socket.onclose = this.onClose;
              socket.onerror = this.onError;

              resolve();
            };

            socket.onclose = () => {
                if (!hasConnected) {
                    // If the connection closes before 'onopen' fires, it's a failure.
                    this.callbacks?.onDisplayMessage('Connection to the server failed. Please ensure the multiplayer server is running.', 'error');
                    reject(new Error("WebSocket connection closed before opening."));
                    this.connectionPromise = null;
                } else {
                    // If it was already connected, let the persistent handler manage it.
                    this.onClose();
                }
            };

            socket.onerror = (err) => {
                if (!hasConnected) {
                    this.onError(err);
                    reject(new Error("WebSocket connection failed."));
                    this.connectionPromise = null;
                }
            };
        });
    }

    return this.connectionPromise;
  };

  private sendMessage = (message: object) => {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      this.callbacks?.onDisplayMessage('Not connected to the server.', 'error');
    }
  };

  public createRoom = (playerName: string, initialGameState: GameState) => {
      this.sendMessage({
          type: 'create_room',
          playerName,
          initialGameState
      });
  };

  public joinRoom = (roomId: string, playerName: string) => {
      this.sendMessage({
          type: 'join_room',
          roomId,
          playerName
      });
  };

  public leaveRoom = () => {
      this.sendMessage({ type: 'leave_room' });
      this.disconnect();
  };

  public sendPlayerAction = (command: string) => {
      this.sendMessage({
          type: 'player_action',
          command
      });
  };

  public syncGameState = (state: GameState) => {
      if (this.isHost) {
          this.sendMessage({
              type: 'sync_game_state',
              state
          });
      }
  };

  public disconnect = () => {
    if (this.ws) {
      this.ws.close();
      this.resetState();
    }
  };
}