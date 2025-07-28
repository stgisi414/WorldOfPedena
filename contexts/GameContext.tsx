

import React, { createContext, useContext, ReactNode } from 'react';
import { useGameState } from '../hooks/useGameState';
import type { GameState, Player } from '../types';

// Define the shape of the context
interface GameContextType extends GameState {
  saveGame: () => void;
  loadGame: () => boolean;
  startNewGame: (player: Player) => void;
  executeCommand: (command: string) => Promise<void>;
  setActiveModal: (modal: GameState['activeModal']) => void;
  displayMessage: (content: string, type: 'narration' | 'system' | 'combat' | 'quest' | 'success' | 'error' | 'exploration' | 'player-command' | 'dialogue') => void;
  getOrGenerateMap: () => Promise<void>;
  connectToMultiplayer: () => Promise<void>;
  createMultiplayerRoom: () => Promise<void>;
  joinMultiplayerRoom: (roomId: string) => Promise<void>;
  endMultiplayerTurn: () => void;
  leaveMultiplayerRoom: () => void;
  sendMultiplayerAction: (action: string, result?: string) => void;
}

// Create the context with a default value
const GameContext = createContext<GameContextType | undefined>(undefined);

// Create a provider component
export const GameProvider = ({ children }: { children: ReactNode }) => {
  const gameState = useGameState();
  return <GameContext.Provider value={gameState}>{children}</GameContext.Provider>;
};

// Create a custom hook for easy consumption of the context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};