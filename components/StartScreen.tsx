import React, { useState, useEffect } from 'react';
import { BookIcon, SwordsIcon } from './icons';

interface StartScreenProps {
  onNewGame: () => void;
  onLoadGame: () => void;
}

const MainButton = ({ onClick, disabled, children, icon: React.ElementType }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-full flex items-center justify-center gap-3 text-2xl font-title p-4 bg-[#d8c4a1] text-[#422b15] border-2 border-[#a58d6e] rounded-lg shadow-lg hover:bg-[#c9b898] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
    >
        <Icon className="w-8 h-8"/>
        {children}
    </button>
);


export const StartScreen = ({ onNewGame, onLoadGame }: StartScreenProps) => {
    const [saveExists, setSaveExists] = useState(false);
    const [apiKeyExists, setApiKeyExists] = useState(false);
    const [showApiKeyWarning, setShowApiKeyWarning] = useState(false);

    useEffect(() => {
        setSaveExists(!!localStorage.getItem('pedenaRPGSave'));
        setApiKeyExists(!!localStorage.getItem('gemini_api_key'));
    }, []);

    const handleNewGame = () => {
        if (!apiKeyExists) {
            setShowApiKeyWarning(true);
            return;
        }
        onNewGame();
    };

    const handleLoadGame = () => {
        if (!apiKeyExists) {
            setShowApiKeyWarning(true);
            return;
        }
        onLoadGame();
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#4d3d2e] p-4 text-[#f3e9d3]">
            <div className="w-full max-w-md bg-[#f3e9d3] text-[#422b15] p-8 rounded-xl border-4 border-[#a58d6e] shadow-2xl text-center">
                 <div className="flex items-center justify-center gap-4 mb-2">
                    <img src="/pedena-logo.png" alt="Shield Logo" className="w-16 h-16" />
                    <div>
                        <h1 className="text-4xl font-title">The Chronicles</h1>
                        <h1 className="text-4xl font-title -mt-1">of Pedena</h1>
                    </div>
                 </div>
                <p className="text-lg mb-8 italic">A Text-Based RPG Adventure</p>

                {!apiKeyExists && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-700 font-semibold mb-2">API Key Required!</p>
                        <p className="text-sm text-red-600 mb-3">
                            You need a Gemini API key to play. Get your free key from{' '}
                            <a 
                                href="https://aistudio.google.com/app/apikey" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Google AI Studio
                            </a>.
                        </p>
                        <button
                            onClick={() => {
                                const key = prompt("Enter your Gemini API key:");
                                if (key && key.trim()) {
                                    localStorage.setItem('gemini_api_key', key.trim());
                                    setApiKeyExists(true);
                                    setShowApiKeyWarning(false);
                                }
                            }}
                            className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
                        >
                            Enter API Key
                        </button>
                    </div>
                )}

                {showApiKeyWarning && (
                    <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
                        <p className="text-yellow-700 text-sm">Please set up your API key first!</p>
                    </div>
                )}

                <div className="space-y-6">
                    <MainButton onClick={handleNewGame} disabled={!apiKeyExists} icon={SwordsIcon}>New Game</MainButton>
                    <MainButton onClick={handleLoadGame} disabled={!saveExists || !apiKeyExists} icon={BookIcon}>Load Game</MainButton>
                </div>
            </div>
            <footer className="mt-8 text-sm text-[#d8c4a1] opacity-70">
                © 2025 The Chronicles of Pedena. Powered by Gemini API & the spirit of adventure.
            </footer>
        </div>
    );
};