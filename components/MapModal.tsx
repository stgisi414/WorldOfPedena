
import React, { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { MapIcon } from './icons';

export const MapModal = () => {
    const { gameWorld, activeModal, setActiveModal, getOrGenerateMap, executeCommand, isLoading } = useGame();
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const generateMap = async () => {
            if (activeModal === 'map' && !gameWorld?.mapUrl && !isGenerating) {
                setIsGenerating(true);
                await getOrGenerateMap();
                setIsGenerating(false);
            }
        };
        generateMap();
    }, [activeModal, gameWorld, getOrGenerateMap, isGenerating]);
    
    const handleLocationClick = (locationName: string) => {
        executeCommand(`travel to ${locationName}`);
        setActiveModal(null);
    };

    return (
        <Modal
            title="World Map"
            isOpen={activeModal === 'map'}
            onClose={() => setActiveModal(null)}
        >
            <div className="w-full h-[60vh] bg-[#e9e0ca] border-2 border-[#a58d6e] rounded-lg shadow-inner overflow-auto relative p-1">
                {isLoading || isGenerating ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center text-[#422b15]">
                         <MapIcon className="w-16 h-16 animate-pulse mb-4" />
                        <p className="font-title text-xl">Charting the world...</p>
                        <p className="italic">This may take a moment.</p>
                    </div>
                ) : gameWorld?.mapUrl ? (
                     <div className="relative w-auto h-auto min-w-full min-h-full">
                        <img src={gameWorld.mapUrl} alt="World Map" className="block w-full h-auto" />
                        {gameWorld.mapLocations?.map(loc => (
                            <button
                                key={loc.name}
                                onClick={() => handleLocationClick(loc.name)}
                                className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white font-bold text-xs py-1 px-3 rounded-full border-2 border-white shadow-lg hover:bg-red-600 hover:scale-110 hover:z-10 transition-all duration-150"
                                style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
                                title={`Travel to ${loc.name}`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center text-[#422b15]">
                        <MapIcon className="w-16 h-16 opacity-50 mb-4" />
                        <p className='font-bold'>Map Not Found</p>
                        <p className="italic">The map could not be generated. Please try again later.</p>
                    </div>
                )}
            </div>
        </Modal>
    );
};
