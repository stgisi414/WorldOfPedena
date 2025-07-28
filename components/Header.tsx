
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { GearIcon } from './icons';

export const Header = () => {
  const { player, gameWorld, setActiveModal } = useGame();

  if (!player || !gameWorld) {
    return (
        <header className="bg-[#e9e0ca] text-[#422b15] p-4 rounded-lg border-2 border-[#a58d6e] shadow-md flex justify-between items-center">
            <h1 className="text-xl font-title">Loading...</h1>
        </header>
    );
  }

  const hpPercentage = (player.hp / player.maxHp) * 100;

  return (
    <header className="bg-[#e9e0ca] text-[#422b15] p-4 rounded-lg border-2 border-[#a58d6e] shadow-md flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
        {/* Left side: Character and location */}
        <div className="flex-1">
            <h2 className="text-3xl font-bold font-title">{player.name} - {gameWorld.location}</h2>
        </div>

        {/* Right side: Stats and settings button */}
        <div className="flex-shrink-0 text-right">
            <div className="flex items-center justify-end gap-2">
                <p>Level: {player.level}</p>
                <button 
                    onClick={() => setActiveModal('settings')} 
                    className="text-[#422b15] hover:text-black"
                    aria-label="Settings"
                >
                    <GearIcon className="w-5 h-5" />
                </button>
            </div>
            <p>HP: {player.hp} / {player.maxHp}</p>
        </div>
      </div>
    
      {/* Bottom: HP Bar */}
      <div className="w-full bg-gray-600/50 rounded-full h-4 border-2 border-gray-900/50 shadow-inner">
          <div className="bg-red-600 h-full rounded-full transition-all duration-500" style={{ width: `${hpPercentage}%` }}></div>
      </div>
    </header>
  );
};
