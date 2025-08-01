import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import { SwordsIcon, CrownIcon } from './icons';

export const MultiplayerModal = () => {
    const { multiplayer, activeModal, setActiveModal, createMultiplayerRoom, joinMultiplayerRoom, leaveMultiplayerRoom } = useGame();
    const [roomIdInput, setRoomIdInput] = useState('');

    const handleCreateRoom = async () => {
        await createMultiplayerRoom();
    };

    const handleJoinRoom = async () => {
        if (roomIdInput.trim()) {
            await joinMultiplayerRoom(roomIdInput.trim().toUpperCase());
        }
    }

    const handleLeaveRoom = () => {
        leaveMultiplayerRoom();
        if (activeModal === 'multiplayer') {
            setActiveModal(null);
        }
    }

    const { isConnected, roomId, players, currentTurn } = multiplayer;
    const currentPlayerTurnName = players.find(p => p.id === currentTurn)?.name || 'Unknown';

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
                    <p className="text-green-600 font-bold mb-2">Connected to Party</p>
                    <div className="bg-[#d8c4a1] p-2 rounded border border-[#a58d6e] mb-4 text-center">
                        <span className="font-bold text-lg">Room ID: </span> 
                        <span className="font-mono text-lg tracking-widest">{roomId}</span>
                    </div>

                    <h4 className="font-bold mt-4 mb-2">Players in Party:</h4>
                    <div className="space-y-2">
                        {players.map(p => (
                            <div key={p.id} className={`flex items-center gap-3 bg-[#e9e0ca] p-2 rounded border border-[#a58d6e] transition-all ${p.id === currentTurn ? 'ring-2 ring-green-500' : ''}`}>
                                {p.isPartyLeader && <CrownIcon className="w-5 h-5 text-yellow-600 flex-shrink-0" title="Party Leader"/>}
                                <span className="font-bold">{p.name}</span>
                                {p.id === currentTurn && <span className="text-sm font-bold text-green-700 ml-auto"> (Current Turn)</span>}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-[#e9e0ca] p-4 rounded border border-[#a58d6e] text-center">
                        <p className="font-bold">Current Turn: {currentPlayerTurnName}</p>
                        <p className="text-sm italic mt-1">The turn will automatically advance after the current player acts.</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <button 
                            onClick={handleCreateRoom}
                            className="w-full px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
                        >
                            Create a New Party
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
                            maxLength={6}
                            className="flex-grow p-2 bg-white border border-[#a58d6e] rounded shadow-inner font-mono tracking-widest text-center"
                        />
                        <button
                            onClick={handleJoinRoom}
                            className="px-4 py-2 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow"
                        >
                            Join Party
                        </button>
                    </div>
                </div>
            )}
             <button
                onClick={handleLeaveRoom}
                className="mt-6 w-full text-center py-2 bg-red-800 text-white rounded hover:bg-red-900"
             >
                {isConnected ? 'Leave Party' : 'Close'}
             </button>
        </Modal>
    );
};
