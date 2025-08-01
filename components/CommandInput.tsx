import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { HelpIcon } from './icons';

export const CommandInput = () => {
    const { executeCommand, isLoading, multiplayer } = useGame();
    const [command, setCommand] = useState('');

    const isMyTurn = !multiplayer.isConnected || multiplayer.isMyTurn;
    const isDisabled = isLoading || !isMyTurn;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (command.trim() && !isDisabled) {
            executeCommand(command.trim());
            setCommand('');
        }
    };

    const QuickButton = ({ children, onClick, color, icon: Icon }: {children: React.ReactNode, onClick: () => void, color: string, icon: React.ElementType}) => (
         <button onClick={onClick} disabled={isDisabled} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-white rounded shadow-md transition-all duration-150 ${color} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'}`}>
            <Icon className="w-4 h-4" />
            {children}
        </button>
    );

    return (
        <div className="mt-4">
            <div className="flex items-center gap-4 mb-2">
                <label htmlFor="command-input" className="font-bold text-[#f3e9d3]">
                    {isMyTurn ? "Your Turn:" : "Waiting for turn..."}
                </label>
                <div className="flex gap-2">
                    <QuickButton onClick={() => executeCommand('help')} color="bg-purple-600" icon={HelpIcon}>Help</QuickButton>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    id="command-input"
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder={isMyTurn ? "Type your action here..." : "Waiting for other players..."}
                    className="w-full p-3 bg-[#f3e9d3] text-[#422b15] border-2 border-[#a58d6e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d8c4a1] shadow-inner disabled:bg-gray-200"
                    disabled={isDisabled}
                />
                <button
                    type="submit"
                    disabled={isDisabled}
                    className="px-6 py-3 bg-[#d8c4a1] text-[#422b15] font-bold border-2 border-[#a58d6e] rounded-md hover:bg-[#c9b898] transition-colors disabled:opacity-50 disabled:cursor-wait shadow-md"
                >
                    {isLoading ? 'Executing...' : 'Execute'}
                </button>
            </form>
        </div>
    );
};
