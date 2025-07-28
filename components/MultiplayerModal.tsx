
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { SwordsIcon, CrownIcon } from './icons';

export const MultiplayerModal = () => {
    const { multiplayer, activeModal, setActiveModal, displayMessage } = useGame();
    const [roomIdInput, setRoomIdInput] = useState('');

    const handleCreateRoom = () => {
        // Mock implementation
        const newRoomId = 'XIKF1H';
        displayMessage(`Joined room: ${newRoomId}`, 'success');
        displayMessage('Waiting for location sync from party leader...', 'system');
        // In a real app, this would come from a state update from a hook managing websockets
    };

    const handleJoinRoom = () => {
         // Mock implementation
        if (roomIdInput) {
            displayMessage(`Joined room: ${roomIdInput}`, 'success');
            displayMessage('Vildia joins your party!', 'success');
            displayMessage('Vildia: Greet Hrothgar', 'dialogue');
        }
    }
    
    const handleEndTurn = () => {
        displayMessage('Your turn has ended automatically.', 'system');
        displayMessage("It's Vildia's turn. Please wait...", 'system');
    }

    const isConnected = multiplayer.isConnected || true; // Mocking connection
    const room = 'XIKF1H'; // Mocking room
    const players = [{name: "Hrothgar", isPartyLeader: true}, {name: "Vilidia", isPartyLeader: false}]; // Mock players
    const currentTurn = "Hrothgar";

    return (
        <Modal
            title="Multiplayer"
            isOpen={activeModal === 'multiplayer'}
            onClose={() => setActiveModal(null)}
        >
            <div className="flex items-center gap-2 mb-4">
                <SwordsIcon className="w-6 h-6"/>
                <h3 className="text-lg font-bold">Multiplayer Status</h3>
            </div>

            {isConnected ? (
                <div>
                    <p className="text-green-600 font-bold mb-2">Connected</p>
                    <div className="bg-[#d8c4a1] p-2 rounded border border-[#a58d6e] mb-4">
                        <span className="font-bold">Room:</span> {room}
                    </div>
                    <p className="font-bold mb-2">{players[0].isPartyLeader ? "You are the party leader" : "You are a party member"}</p>
                    
                    <h4 className="font-bold mt-4 mb-2">Players:</h4>
                    <div className="space-y-2">
                        {players.map(p => (
                            <div key={p.name} className="flex items-center gap-2 bg-[#e9e0ca] p-2 rounded border border-[#a58d6e]">
                                {p.name}
                                {p.isPartyLeader && <CrownIcon className="w-5 h-5 text-yellow-500" />}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-[#e9e0ca] p-4 rounded border border-[#a58d6e] text-center">
                        <p className="font-bold">Current Turn: {currentTurn}</p>
                        {currentTurn === players[0].name && (
                             <button 
                                onClick={handleEndTurn}
                                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 shadow"
                             >
                                End Turn
                             </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <button 
                            onClick={handleCreateRoom}
                            className="w-full px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
                        >
                            Create Room
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <hr className="flex-grow border-t border-[#a58d6e]" />
                        <span>OR</span>
                        <hr className="flex-grow border-t border-[#a58d6e]" />
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={roomIdInput}
                            onChange={(e) => setRoomIdInput(e.target.value.toUpperCase())}
                            placeholder="Enter Room ID"
                            className="flex-grow p-2 bg-white border border-[#a58d6e] rounded shadow-inner"
                        />
                        <button
                            onClick={handleJoinRoom}
                            className="px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
                        >
                            Join Room
                        </button>
                    </div>
                </div>
            )}
             <button
                className="mt-6 w-full text-center py-2 bg-red-800 text-white rounded hover:bg-red-900"
             >
                Exit
             </button>
        </Modal>
    );
};
