import { useState, useCallback, useEffect, useRef } from 'react';
import type { GameState, Player, GameWorld, Message, MessageType, SaveGameData, Item, Quest, NPC, MapLocation, CharacterStats, CharacterClass } from '../types';
import { processPlayerAction, generateMapData } from '../services/geminiService';
import { MultiplayerService, MultiplayerCallbacks } from '../services/multiplayerService';
import { worldData } from '../data/worldData';
import { classProgression } from '../data/classProgression';
import { classPresets } from '../data/classData';

const SAVE_GAME_KEY = 'pedenaRPGSave';

const createWorldFromLocation = (locationName: string): GameWorld | null => {
    const location = worldData.locations.find(l => l.name.toLowerCase() === locationName.toLowerCase());
    if (!location) return null;

    const npcs = location.npcs.map(npcId => {
        const npcData = worldData.npcs.find(n => n.id === npcId);
        if (!npcData) return null;
        const newNpc: NPC = { 
            id: npcData.id,
            name: npcData.name,
            description: npcData.description,
            relationship: 0,
            class: 'Commoner',
            hp: classPresets.Commoner.hp,
            maxHp: classPresets.Commoner.hp,
            stats: classPresets.Commoner.stats,
        };
        return newNpc;
    }).filter((n): n is NPC => n !== null);

    return {
        location: location.name,
        timeOfDay: 'Day',
        nearbyNPCs: npcs,
        description: location.description,
    };
};

export const useGameState = () => {
  const multiplayerService = useRef<MultiplayerService | null>(null);

  const [gameState, setGameState] = useState<GameState>({
    player: null,
    gameWorld: null,
    messages: [],
    isLoading: false,
    activeModal: null,
    multiplayer: {
      isConnected: false,
      roomId: null,
      players: [],
      isMyTurn: true,
      currentTurn: null,
    },
  });

  const displayMessage = useCallback((content: string, type: MessageType) => {
    setGameState(prev => ({
      ...prev,
      messages: [...prev.messages, { id: crypto.randomUUID(), content, type, timestamp: Date.now() }],
    }));
  }, []);

  // Centralized state parsing and application logic
  const parseAndApplyStateChanges = useCallback((jsonString: string, actingPlayerId?: string) => {
    try {
      const changes = JSON.parse(jsonString);

      setGameState(prev => {
        if (!prev.player || !prev.gameWorld) return prev;

        // Create deep copies to modify
        let newPlayer = JSON.parse(JSON.stringify(prev.player));
        const newWorld = JSON.parse(JSON.stringify(prev.gameWorld));
        let newMessages = [...prev.messages];

        const addMessage = (content: string, type: MessageType) => {
            newMessages.push({ id: crypto.randomUUID(), content, type, timestamp: Date.now() });
        };

        if (changes.narration) {
            addMessage(changes.narration, 'narration');
        }

        // Player updates
        if (changes.playerUpdate) {
            const { hp, xp, gold, levelUp, statImprovements } = changes.playerUpdate;
            if (hp) newPlayer.hp = Math.min(newPlayer.maxHp, newPlayer.hp + hp);
            if (gold) newPlayer.gold += gold;
            if (xp) newPlayer.xp += xp;

            if (levelUp) {
                const currentLevel = newPlayer.level;
                const newLevel = currentLevel + 1;
                const playerClass = newPlayer.class.toLowerCase() as keyof typeof classProgression;
                const progressionData = classProgression[playerClass]?.levels[newLevel];

                if (progressionData) {
                    newPlayer.level = newLevel;
                    newPlayer.maxHp += progressionData.hp;
                    newPlayer.hp = newPlayer.maxHp;
                    const xpOver = newPlayer.xp - newPlayer.nextLevelXp;
                    newPlayer.nextLevelXp = Math.floor(newPlayer.nextLevelXp * 1.75);
                    newPlayer.xp = Math.max(0, xpOver);

                    if (progressionData.features) newPlayer.features.push(...progressionData.features);
                    if (progressionData.abilities) newPlayer.abilities.push(...progressionData.abilities);

                    addMessage(`{green:${newPlayer.name} has reached level ${newLevel}!}`, 'success');
                    if (statImprovements) {
                        let statGains = [];
                        for (const [stat, increase] of Object.entries(statImprovements)) {
                            if (newPlayer.stats[stat as keyof CharacterStats] !== undefined && typeof increase === 'number') {
                                newPlayer.stats[stat as keyof CharacterStats] += increase;
                                statGains.push(`${stat.charAt(0).toUpperCase() + stat.slice(1)} +${increase}`);
                            }
                        }
                        if(statGains.length > 0) addMessage(`**Stat Increase:** ${statGains.join(', ')}`, 'success');
                    }
                }
            }
        }

        // World updates
        if (changes.worldUpdate) {
            if (changes.worldUpdate.location && newWorld.location.toLowerCase() !== changes.worldUpdate.location.toLowerCase()) {
                const newLocationName = changes.worldUpdate.location;
                const locationData = worldData.locations.find(l => l.name.toLowerCase() === newLocationName.toLowerCase());
                newWorld.location = newLocationName;
                if (locationData) {
                    newWorld.nearbyNPCs = locationData.npcs.map(id => worldData.npcs.find(n => n.id === id)).filter(Boolean);
                    newWorld.description = changes.worldUpdate.description || locationData.description;
                } else {
                    newWorld.nearbyNPCs = [];
                    newWorld.description = changes.worldUpdate.description || `You have arrived at ${newLocationName}.`;
                }
            } else if (changes.worldUpdate.description) {
                newWorld.description = changes.worldUpdate.description;
            }
        }

        // Inventory Add
        if (changes.inventoryAdd) {
            changes.inventoryAdd.forEach((itemData: any) => {
                const newItem: Item = { id: crypto.randomUUID(), ...itemData };
                newPlayer.inventory.push(newItem);
                addMessage(`${newPlayer.name} obtained: ${newItem.name}`, 'success');
            });
        }

        // Inventory Remove
        if (changes.inventoryRemove) {
           changes.inventoryRemove.forEach((itemName: string) => {
               const itemIndex = newPlayer.inventory.findIndex((i: Item) => i.name.toLowerCase() === itemName.toLowerCase());
               if(itemIndex > -1) {
                   const removedItem = newPlayer.inventory.splice(itemIndex, 1)[0];
                   addMessage(`You lost: ${removedItem.name}`, 'system');
               }
           })
        }

        // Party Add
        if (changes.partyAdd) {
            changes.partyAdd.forEach((npcData: NPC) => {
                if (!newPlayer.party.find((p: NPC) => p.id === npcData.id)) {
                    const npcIndexInWorld = newWorld.nearbyNPCs.findIndex((n: NPC) => n.id === npcData.id);
                    if (npcIndexInWorld > -1) {
                        newWorld.nearbyNPCs.splice(npcIndexInWorld, 1);
                    }
                    newPlayer.party.push(npcData);
                    addMessage(`${npcData.name} has joined your party!`, 'success');
                }
            });
        }

        // Party Remove
        if (changes.partyRemove) {
            changes.partyRemove.forEach((npcIdentifier: string) => {
                const partyIndex = newPlayer.party.findIndex((p: NPC) => p.id === npcIdentifier || p.name.toLowerCase() === npcIdentifier.toLowerCase());
                if (partyIndex > -1) {
                    const removedNpc = newPlayer.party.splice(partyIndex, 1)[0];
                    newWorld.nearbyNPCs.push(removedNpc);
                    addMessage(`${removedNpc.name} has left your party.`, 'system');
                }
            });
        }

        // Quest updates
        if (changes.questUpdate) {
            const { id, title, description, isCompleted } = changes.questUpdate;
            let quest = newPlayer.quests.find((q: Quest) => q.id === id);
            if (quest) {
                if (description) quest.description = description;
                if (isCompleted) {
                    quest.isCompleted = true;
                    addMessage(`Quest Completed: ${quest.title}`, 'quest');
                }
            } else if (id && title && description) { // New quest
                const newQuest: Quest = { id, title, description, isCompleted: false, rewards: { xp: 100 } };
                newPlayer.quests.push(newQuest);
                addMessage(`New Quest: ${title}`, 'quest');
            }
        }

        // Final state object to be returned
        const finalState = { ...prev, player: newPlayer, gameWorld: newWorld, messages: newMessages };

        // If this is the host processing an action, sync the state
        if (prev.multiplayer.isConnected && multiplayerService.current?.getIsHost()) {
            multiplayerService.current.syncGameState(finalState);
        }

        return finalState;
      });
    } catch (error) {
      console.error("Failed to parse AI response:", error);
      displayMessage("A flicker of arcane energy disrupts your connection to the world... (AI response was invalid).", 'error');
    }
  }, [displayMessage]);

  // Setup multiplayer service and its callbacks
  useEffect(() => {
    if (!multiplayerService.current) {
        multiplayerService.current = new MultiplayerService();
    }

    // Callbacks are now defined within the functions that need them (create/join room)
    // to ensure they have the latest gameState closure.

    return () => {
        multiplayerService.current?.disconnect();
    };
  }, []);


  const executeCommand = useCallback(async (command: string) => {
    if (gameState.isLoading || !gameState.player || !gameState.gameWorld) return;

    displayMessage(`${gameState.player.name}: ${command}`, 'player-command');

    if (gameState.multiplayer.isConnected) {
        if (gameState.multiplayer.currentTurn !== multiplayerService.current?.getPlayerId()) {
            displayMessage("It's not your turn! Please wait.", 'error');
            return;
        }
        // In multiplayer, the client just sends the action. The server tells the host to process it.
        multiplayerService.current?.sendPlayerAction(command);
    } else {
        // Single-player logic: process the action directly
        setGameState(prev => ({ ...prev, isLoading: true }));
        try {
            const responseJson = await processPlayerAction(gameState.player, gameState.gameWorld, gameState.messages, command);
            parseAndApplyStateChanges(responseJson);
        } catch (error: any) {
            console.error("Error executing command:", error);
            if (error?.message === 'API_KEY_MISSING') {
                displayMessage("API key is missing! Please set up your Gemini API key in Settings.", 'error');
            } else {
                displayMessage("The threads of fate are tangled. Your action could not be completed.", 'error');
            }
        } finally {
            setGameState(prev => ({ ...prev, isLoading: false }));
        }
    }
  }, [gameState, displayMessage, parseAndApplyStateChanges]);

  const getMultiplayerCallbacks = useCallback(() => {
      // This function generates callbacks with the latest state closure.
      // It's used by create/join functions.
      const callbacks: MultiplayerCallbacks = {
        onStateUpdate: (multiplayerState) => {
            setGameState(prev => ({
                ...prev,
                multiplayer: { ...prev.multiplayer, ...multiplayerState },
            }));
        },
        onFullStateReceived: (fullGameState) => {
            setGameState(fullGameState);
        },
        onProcessAction: async (command, actingPlayerId) => {
            // HOST ONLY: Process the action forwarded by the server
            setGameState(prev => ({ ...prev, isLoading: true }));
            try {
                // Use a functional update to get the most recent state for the API call
                setGameState(currentGameState => {
                    if (currentGameState.player && currentGameState.gameWorld) {
                        processPlayerAction(currentGameState.player, currentGameState.gameWorld, currentGameState.messages, command)
                            .then(responseJson => {
                                parseAndApplyStateChanges(responseJson, actingPlayerId);
                            })
                            .catch(error => {
                                displayMessage("The host's connection to the ethereal plane wavered. Action failed.", 'error');
                            })
                            .finally(() => {
                                setGameState(prev => ({ ...prev, isLoading: false }));
                            });
                    }
                    return currentGameState;
                });
            } catch (error) {
                 setGameState(prev => ({ ...prev, isLoading: false }));
            }
        },
        onDisplayMessage: (content, type) => {
            displayMessage(content, type as MessageType);
        },
    };
    return callbacks;
  }, [displayMessage, parseAndApplyStateChanges])

  const createMultiplayerRoom = useCallback(async () => {
    if (!multiplayerService.current || !gameState.player) return;
    try {
        await multiplayerService.current.connect(getMultiplayerCallbacks());
        multiplayerService.current.createRoom(gameState.player.name, gameState);
    } catch (e) {
        displayMessage('Could not connect to multiplayer server.', 'error');
    }
  }, [gameState, getMultiplayerCallbacks]);

  const joinMultiplayerRoom = useCallback(async (roomId: string) => {
    if (!multiplayerService.current || !gameState.player) return;
     try {
        await multiplayerService.current.connect(getMultiplayerCallbacks());
        multiplayerService.current.joinRoom(roomId, gameState.player.name);
    } catch (e) {
        displayMessage('Could not connect to multiplayer server.', 'error');
    }
  }, [gameState.player, getMultiplayerCallbacks]);

  const leaveMultiplayerRoom = useCallback(() => {
    if (multiplayerService.current) {
      multiplayerService.current.leaveRoom();
      multiplayerService.current.disconnect();
      setGameState(prev => ({
        ...prev,
        multiplayer: { isConnected: false, roomId: null, players: [], isMyTurn: true, currentTurn: null },
      }));
      displayMessage("You have left the multiplayer session.", "system");
    }
  }, []);

  const saveGame = useCallback(() => {
    if (gameState.player && gameState.gameWorld) {
      const saveData: SaveGameData = {
        player: gameState.player,
        gameWorld: gameState.gameWorld,
        messages: gameState.messages.slice(-100),
      };
      localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(saveData));
      displayMessage('Game Saved!', 'success');
    }
  }, [gameState.player, gameState.gameWorld, gameState.messages, displayMessage]);

  const loadGame = useCallback(() => {
    const savedData = localStorage.getItem(SAVE_GAME_KEY);
    if (savedData) {
      const parsedData: SaveGameData = JSON.parse(savedData);
      setGameState(prev => ({
        ...prev,
        player: parsedData.player,
        gameWorld: parsedData.gameWorld,
        messages: parsedData.messages,
      }));
      return true;
    }
    return false;
  }, []);

  const startNewGame = useCallback((player: Player) => {
    const newWorld = createWorldFromLocation("City of Pedena");
    if (!newWorld) return;
    const playerClass = player.class.toLowerCase() as keyof typeof classProgression;
    const level1Data = classProgression[playerClass]?.levels[1];
    if (level1Data) {
        player.features.push(...(level1Data.features || []));
        player.abilities.push(...(level1Data.abilities || []));
    }
    setGameState({
      player,
      gameWorld: newWorld,
      messages: [{ id: crypto.randomUUID(), type: 'narration', content: `Welcome, ${player.name}. Your adventure begins.`, timestamp: Date.now() }],
      isLoading: false,
      activeModal: null,
      multiplayer: { isConnected: false, roomId: null, players: [], isMyTurn: true, currentTurn: null },
    });
  }, []);

  const setActiveModal = useCallback((modal: GameState['activeModal']) => {
    setGameState(prev => ({ ...prev, activeModal: modal }));
  }, []);

  const getOrGenerateMap = useCallback(async () => {
    if (gameState.isLoading || !gameState.gameWorld) return;
    if (gameState.gameWorld.mapUrl && gameState.gameWorld.mapLocations) return;

    setGameState(prev => ({ ...prev, isLoading: true }));
    displayMessage('Unfurling the ancient scrolls to chart your world...', 'system');
    try {
        const { mapUrl, mapLocations } = await generateMapData();
        setGameState(prev => {
            if (!prev.gameWorld) return prev;
            return {
                ...prev,
                gameWorld: { ...prev.gameWorld, mapUrl, mapLocations },
            };
        });
        displayMessage('The world map has been revealed!', 'success');
    } catch (error) {
        console.error("Error generating map:", error);
        displayMessage("The cartographer's ink spills, obscuring the map... (Map generation failed).", 'error');
    } finally {
        setGameState(prev => ({ ...prev, isLoading: false }));
    }
  }, [gameState.isLoading, gameState.gameWorld, displayMessage]);

  return {
    ...gameState,
    saveGame,
    loadGame,
    startNewGame,
    executeCommand,
    setActiveModal,
    displayMessage,
    getOrGenerateMap,
    createMultiplayerRoom,
    joinMultiplayerRoom,
    leaveMultiplayerRoom,
  };
};
