

import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Header } from './Header';
import { MessageLog } from './MessageLog';
import { CommandInput } from './CommandInput';
import { InventoryModal } from './InventoryModal';
import { QuestsModal } from './QuestsModal';
import { CharacterSheetModal } from './CharacterSheetModal';
import { MultiplayerModal } from './MultiplayerModal';
import { MapModal } from './MapModal';
import { SettingsModal } from './SettingsModal';
import { SaveIcon, InventoryIcon, ScrollIcon, BookIcon, RestIcon, ExploreIcon, SwordsIcon, MapIcon } from './icons';

const ActionButton = ({ children, onClick, icon: Icon } : { children: React.ReactNode, onClick: () => void, icon: React.ElementType }) => {
    const { isLoading } = useGame();
    return (
        <button 
            onClick={onClick}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-[#d8c4a1] text-[#422b15] border border-[#a58d6e] rounded-md hover:bg-[#c9b898] transition-colors shadow text-sm disabled:opacity-50"
        >
            <Icon className="w-4 h-4" />
            <span>{children}</span>
        </button>
    );
}

export const GameUI = () => {
    const { executeCommand, setActiveModal, saveGame } = useGame();

  return (
    <div className="w-full h-screen bg-[#4d3d2e] flex justify-center items-center p-2 sm:p-4">
        <main className="w-full max-w-4xl h-full bg-[#3a2d23] p-4 rounded-xl border-4 border-black shadow-2xl flex flex-col gap-4">
            <Header />
            <div className="flex-grow h-0">
                <MessageLog />
            </div>
            <div>
                <CommandInput />
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-3">
                    <ActionButton onClick={() => executeCommand('explore')} icon={ExploreIcon}>Explore</ActionButton>
                    <ActionButton onClick={() => executeCommand('rest')} icon={RestIcon}>Rest</ActionButton>
                    <ActionButton onClick={() => setActiveModal('inventory')} icon={InventoryIcon}>Inventory</ActionButton>
                    <ActionButton onClick={() => setActiveModal('quests')} icon={ScrollIcon}>Quests</ActionButton>
                    <ActionButton onClick={() => setActiveModal('character')} icon={BookIcon}>Background</ActionButton>
                    <ActionButton onClick={() => setActiveModal('map')} icon={MapIcon}>Map</ActionButton>
                    <ActionButton onClick={saveGame} icon={SaveIcon}>Save</ActionButton>
                    <ActionButton onClick={() => setActiveModal('multiplayer')} icon={SwordsIcon}>Multiplayer</ActionButton>
                </div>
            </div>
            <footer className="text-center text-xs text-[#d8c4a1] opacity-60">
                © 2025 The Chronicles of Pedena. Powered by Gemini API & the spirit of adventure.
            </footer>
        </main>
        
        {/* Modals */}
        <InventoryModal />
        <QuestsModal />
        <CharacterSheetModal />
        <MultiplayerModal />
        <MapModal />
        <SettingsModal />
    </div>
  );
};