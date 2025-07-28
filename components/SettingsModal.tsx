
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { SaveIcon, BookIcon } from './icons';

export const SettingsModal = () => {
  const { activeModal, setActiveModal, saveGame, loadGame, displayMessage } = useGame();

  const handleLoadGameClick = () => {
    if (loadGame()) {
        displayMessage("Game Loaded. Welcome back!", 'success');
    } else {
        displayMessage("No save file found.", 'error');
    }
    setActiveModal(null);
  };

  return (
    <Modal
      title="Settings"
      isOpen={activeModal === 'settings'}
      onClose={() => setActiveModal(null)}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-title text-center">Game Options</h3>
        <p className="italic text-center py-4">More settings will be available soon! (e.g. Volume, Text Speed)</p>
        <div className="flex flex-col sm:flex-row gap-4">
            <button
                onClick={saveGame}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
            >
                <SaveIcon className="w-5 h-5"/>
                Save Game
            </button>
            <button
                onClick={handleLoadGameClick}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
            >
                <BookIcon className="w-5 h-5"/>
                Load Game
            </button>
        </div>
      </div>
    </Modal>
  );
};
