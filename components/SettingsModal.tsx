
import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { SaveIcon, BookIcon } from './icons';

export const SettingsModal = () => {
  const { activeModal, setActiveModal, saveGame, loadGame, displayMessage } = useGame();
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Load API key from localStorage on component mount
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('gemini_api_key', apiKey.trim());
      displayMessage("API key saved successfully!", 'success');
    } else {
      localStorage.removeItem('gemini_api_key');
      displayMessage("API key cleared.", 'system');
    }
  };

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
        
        {/* API Key Configuration */}
        <div className="space-y-2">
          <label htmlFor="gemini-api-key-input" className="block text-sm font-semibold">
            Gemini API Key (Required):
          </label>
          <input
            type="password"
            id="gemini-api-key-input"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key here"
            className="w-full p-2 border border-[#a58d6e] rounded bg-[#f3e9d3] focus:outline-none focus:ring-2 focus:ring-[#8b7355] text-[#422b15]"
          />
          <button
            onClick={handleSaveApiKey}
            className="w-full px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
          >
            Save API Key
          </button>
          <p className="text-xs text-gray-600 italic">
            Your API key is stored locally in your browser. Get your free API key from{' '}
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google AI Studio
            </a>.
          </p>
        </div>

        <hr className="border-[#a58d6e]" />
        
        <p className="italic text-center py-2">More settings will be available soon! (e.g. Volume, Text Speed)</p>
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
