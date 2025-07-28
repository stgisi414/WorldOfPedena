
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { SwordsIcon, CrownIcon } from './icons';

export const MultiplayerModal = () => {
    const { multiplayer, activeModal, setActiveModal, displayMessage, createMultiplayerRoom, joinMultiplayerRoom, endMultiplayerTurn, leaveMultiplayerRoom } = useGame();
    const [roomIdInput, setRoomIdInput] = useState('');

    const handleCreateRoom = async () => {
        await createMultiplayerRoom();
    };

    const handleJoinRoom = async () => {
        if (roomIdInput.trim()) {
            await joinMultiplayerRoom(roomIdInput.trim());
        }
    }
    
    const handleEndTurn = () => {
        endMultiplayerTurn();
    }

    const handleLeaveRoom = () => {
        leaveMultiplayerRoom();
    }

    const isConnected = multiplayer.isConnected;
    const room = multiplayer.roomId;
    const players = multiplayer.players;
    const currentTurn = multiplayer.currentTurn;

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
                    <p className="font-bold mb-2">{players.find(p => p.isPartyLeader) ? "You are the party leader" : "You are a party member"}</p>
                    
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
                        <p className="font-bold">Current Turn: {players.find(p => p.id === currentTurn)?.name || 'Unknown'}</p>
                        {multiplayer.isMyTurn && (
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
                onClick={handleLeaveRoom}
                className="mt-6 w-full text-center py-2 bg-red-800 text-white rounded hover:bg-red-900"
             >
                {isConnected ? 'Leave Room' : 'Exit'}
             </button>
        </Modal>
    );
};
