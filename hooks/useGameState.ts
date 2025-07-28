import { useState, useCallback, useEffect } from 'react';
import type { GameState, Player, GameWorld, Message, MessageType, SaveGameData, Item, Quest, NPC, MapLocation, CharacterStats, CharacterClass } from '../types';
import { processPlayerAction, generateMapData } from '../services/geminiService';
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

  const saveGame = useCallback(() => {
    if (gameState.player && gameState.gameWorld) {
      const saveData: SaveGameData = {
        player: gameState.player,
        gameWorld: gameState.gameWorld,
        messages: gameState.messages.slice(-100), // Prevent save file from growing indefinitely
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
       // We don't show the "Game Loaded" message here, it will be handled in the component that calls it
      return true;
    }
    return false;
  }, []);

  const startNewGame = useCallback((player: Player) => {
    localStorage.removeItem(SAVE_GAME_KEY);
    const newWorld = createWorldFromLocation("City of Pedena");
    if (!newWorld) {
        console.error("Starting location 'City of Pedena' not found in world data.");
        return;
    }

    const playerClass = player.class.toLowerCase() as keyof typeof classProgression;
    const level1Data = classProgression[playerClass]?.levels[1];

    if (level1Data) {
        player.features.push(...(level1Data.features || []));
        player.abilities.push(...(level1Data.abilities || []));
        player.feats.push(...(level1Data.feats || []));
        player.spells.push(...(level1Data.spells || []));
        player.cantrips.push(...(level1Data.cantrips || []));
    }
    
    setGameState(prev => ({
      ...prev,
      player: player,
      gameWorld: newWorld,
      messages: [{ id: crypto.randomUUID(), type: 'narration', content: `Welcome, ${player.name}. Your adventure begins in ${newWorld.location}. ${newWorld.description}`, timestamp: Date.now() }],
      isLoading: false,
      activeModal: null,
    }));
  }, []);

  const parseAndApplyStateChanges = useCallback((jsonString: string) => {
    try {
      const changes = JSON.parse(jsonString);

      if (changes.narration) {
        displayMessage(changes.narration, 'narration');
      }

      setGameState(prev => {
        if (!prev.player || !prev.gameWorld) return prev;
        
        let newPlayer = { ...prev.player, party: [...prev.player.party] };
        const newWorld = { ...prev.gameWorld, nearbyNPCs: [...prev.gameWorld.nearbyNPCs] };

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

                  // Update HP
                  newPlayer.maxHp += progressionData.hp;
                  newPlayer.hp = newPlayer.maxHp; // Full heal on level up

                  // Update XP threshold
                  const xpOver = newPlayer.xp - newPlayer.nextLevelXp;
                  newPlayer.nextLevelXp = Math.floor(newPlayer.nextLevelXp * 1.75);
                  newPlayer.xp = Math.max(0, xpOver);
                  
                  // Add new features, abilities, etc.
                  if (progressionData.features) newPlayer.features.push(...progressionData.features);
                  if (progressionData.abilities) newPlayer.abilities.push(...progressionData.abilities);
                  if (progressionData.feats) newPlayer.feats.push(...progressionData.feats);
                  if (progressionData.spells) newPlayer.spells.push(...progressionData.spells);
                  if (progressionData.cantrips) newPlayer.cantrips.push(...progressionData.cantrips);

                  displayMessage(`{green:You have reached level ${newLevel}!} You feel more powerful.`, 'success');

                  // Display gains
                  const gains = [];
                  if (progressionData.features?.length) gains.push(`**Features:** ${progressionData.features.join(', ')}`);
                  if (progressionData.abilities?.length) gains.push(`**Abilities:** ${progressionData.abilities.join(', ')}`);
                  if (progressionData.feats?.length) gains.push(`**Feats:** ${progressionData.feats.join(', ')}`);
                  if (progressionData.spells?.length) gains.push(`**Spells:** ${progressionData.spells.join(', ')}`);
                  if (progressionData.cantrips?.length) gains.push(`**Cantrips:** ${progressionData.cantrips.join(', ')}`);
                  if (gains.length > 0) {
                      displayMessage(`**Gains at level ${newLevel}:**\n${gains.join('\n')}`, 'system');
                  }

                   // Apply stat improvements if provided by AI
                  if (statImprovements) {
                      let statGains = [];
                      for (const [stat, increase] of Object.entries(statImprovements)) {
                          if (newPlayer.stats[stat as keyof CharacterStats] !== undefined && typeof increase === 'number') {
                              newPlayer.stats[stat as keyof CharacterStats] += increase;
                              statGains.push(`${stat.charAt(0).toUpperCase() + stat.slice(1)} +${increase}`);
                          }
                      }
                      if(statGains.length > 0) {
                          displayMessage(`**Stat Increase:** ${statGains.join(', ')}`, 'success');
                      }
                  }

              } else {
                  console.warn(`No progression data found for class ${playerClass} at level ${newLevel}`);
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
                    const npcs = locationData.npcs.map(npcId => {
                        const npcData = worldData.npcs.find(n => n.id === npcId);
                        if(!npcData) return null;
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

                    newWorld.nearbyNPCs = npcs;
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
            const newItem: Item = {
              id: crypto.randomUUID(),
              ...itemData
            };
            newPlayer.inventory.push(newItem);
            displayMessage(`You obtained: ${newItem.name}`, 'success');
          });
        }
        
        // Inventory Remove
        if (changes.inventoryRemove) {
           changes.inventoryRemove.forEach((itemName: string) => {
               const itemIndex = newPlayer.inventory.findIndex(i => i.name.toLowerCase() === itemName.toLowerCase());
               if(itemIndex > -1) {
                   const removedItem = newPlayer.inventory.splice(itemIndex, 1)[0];
                   displayMessage(`You lost: ${removedItem.name}`, 'system');
               }
           })
        }

        // Party Add
        if (changes.partyAdd) {
            changes.partyAdd.forEach((npcData: NPC) => {
                if (!newPlayer.party.find(p => p.id === npcData.id)) {
                    // Remove from nearbyNPCs if they are there
                    const npcIndexInWorld = newWorld.nearbyNPCs.findIndex(n => n.id === npcData.id);
                    if (npcIndexInWorld > -1) {
                        newWorld.nearbyNPCs.splice(npcIndexInWorld, 1);
                    }
                    newPlayer.party.push(npcData);
                    displayMessage(`${npcData.name} has joined your party!`, 'success');
                }
            });
        }

        // Party Remove
        if (changes.partyRemove) {
            changes.partyRemove.forEach((npcIdentifier: string) => {
                const partyIndex = newPlayer.party.findIndex(p => p.id === npcIdentifier || p.name.toLowerCase() === npcIdentifier.toLowerCase());
                if (partyIndex > -1) {
                    const removedNpc = newPlayer.party.splice(partyIndex, 1)[0];
                    // Add them back to the world's nearby NPCs
                    newWorld.nearbyNPCs.push(removedNpc);
                    displayMessage(`${removedNpc.name} has left your party.`, 'system');
                }
            });
        }
        
        // Quest updates
        if (changes.questUpdate) {
            const { id, title, description, isCompleted } = changes.questUpdate;
            let quest = newPlayer.quests.find(q => q.id === id);
            if (quest) {
                if (description) quest.description = description;
                if (isCompleted) {
                    quest.isCompleted = true;
                    displayMessage(`Quest Completed: ${quest.title}`, 'quest');
                }
            } else if (id && title && description) { // New quest
                const newQuest: Quest = { id, title, description, isCompleted: false, rewards: { xp: 100 } };
                newPlayer.quests.push(newQuest);
                displayMessage(`New Quest: ${title}`, 'quest');
            }
        }
        
        return { ...prev, player: newPlayer, gameWorld: newWorld };
      });

    } catch (error) {
      console.error("Failed to parse AI response:", error);
      displayMessage("A flicker of arcane energy disrupts your connection to the world... (AI response was invalid).", 'error');
    }
  }, [displayMessage]);


  const executeCommand = useCallback(async (command: string) => {
    if (gameState.isLoading || !gameState.player || !gameState.gameWorld) return;

    setGameState(prev => ({ ...prev, isLoading: true }));
    displayMessage(command, 'player-command');
    
    try {
      const responseJson = await processPlayerAction(gameState.player, gameState.gameWorld, gameState.messages, command);
      parseAndApplyStateChanges(responseJson);
    } catch (error) {
      console.error("Error executing command:", error);
      displayMessage("The threads of fate are tangled. Your action could not be completed.", 'error');
    } finally {
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  }, [gameState.isLoading, gameState.player, gameState.gameWorld, gameState.messages, displayMessage, parseAndApplyStateChanges]);
  
  const setActiveModal = useCallback((modal: GameState['activeModal']) => {
    setGameState(prev => ({ ...prev, activeModal: modal }));
  }, []);

  const getOrGenerateMap = useCallback(async () => {
    if (gameState.isLoading || !gameState.gameWorld) {
        return;
    }

    // Check if a detailed map with many locations has already been generated.
    if (gameState.gameWorld.mapUrl && gameState.gameWorld.mapLocations && gameState.gameWorld.mapLocations.length > 10) {
        return;
    }

    setGameState(prev => ({ ...prev, isLoading: true }));
    displayMessage('Unfurling the ancient scrolls to chart your world...', 'system');

    try {
        const { mapUrl, mapLocations } = await generateMapData();
        
        setGameState(prev => {
            if (!prev.gameWorld) return prev;
            return {
                ...prev,
                gameWorld: {
                    ...prev.gameWorld,
                    mapUrl,
                    mapLocations,
                },
            }
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
  };
};