
import React, { useState, useEffect } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { StartScreen } from './components/StartScreen';
import { CharacterCreationScreen } from './components/CharacterCreationScreen';
import { GameUI } from './components/GameUI';
import type { Player } from './types';

type AppView = 'start' | 'character_creation' | 'game';

const AppContent = () => {
    const [view, setView] = useState<AppView>('start');
    const { player, startNewGame, loadGame, displayMessage } = useGame();

    useEffect(() => {
        if (player && view !== 'game') {
            setView('game');
        } else if (!player && view === 'game') {
            setView('start');
        }
    }, [player, view]);


    const handleNewGame = () => {
        setView('character_creation');
    };

    const handleLoadGame = () => {
        if (loadGame()) {
           displayMessage("Game Loaded. Welcome back!", 'success');
           setView('game');
        } else {
           displayMessage("No save file found.", 'error');
        }
    };
    
    const handleCharacterCreated = (newPlayer: Player) => {
        startNewGame(newPlayer);
        setView('game');
    };

    switch(view) {
        case 'start':
            return <StartScreen onNewGame={handleNewGame} onLoadGame={handleLoadGame} />;
        case 'character_creation':
            return <CharacterCreationScreen onCharacterCreate={handleCharacterCreated} />;
        case 'game':
            return <GameUI />;
        default:
            return <StartScreen onNewGame={handleNewGame} onLoadGame={handleLoadGame} />;
    }
};

const App = () => {
    return (
        <GameProvider>
            <AppContent />
        </GameProvider>
    );
};

export default App;