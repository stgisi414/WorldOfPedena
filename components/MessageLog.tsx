import React, { useEffect, useRef } from 'react';
import { useGame } from '../contexts/GameContext';
import { parseRichText } from '../services/textParser';
import type { MessageType } from '../types';
import { SwordsIcon, ScrollIcon, GearIcon, ExploreIcon } from './icons';

const getMessageStyle = (type: MessageType) => {
    switch (type) {
        case 'narration':
            return { icon: '📜', classes: 'text-[#422b15]' };
        case 'player-command':
            return { icon: '>', classes: 'text-blue-700 italic' };
        case 'system':
            return { icon: <GearIcon className="w-4 h-4 inline-block mr-2 text-gray-500"/>, classes: 'text-gray-600' };
        case 'success':
            return { icon: '✅', classes: 'text-green-700' };
        case 'error':
            return { icon: '❌', classes: 'text-red-700 font-bold' };
        case 'combat':
            return { icon: <SwordsIcon className="w-4 h-4 inline-block mr-2 text-red-600"/>, classes: 'text-red-800' };
        case 'quest':
            return { icon: <ScrollIcon className="w-4 h-4 inline-block mr-2 text-yellow-600"/>, classes: 'text-yellow-700' };
        case 'exploration':
            return { icon: <ExploreIcon className="w-4 h-4 inline-block mr-2 text-teal-600"/>, classes: 'text-teal-700' };
        case 'dialogue':
             return { icon: '🗣️', classes: 'text-purple-700' };
        default:
            return { icon: '', classes: 'text-[#422b15]' };
    }
};

export const MessageLog = () => {
    const { messages } = useGame();
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="bg-[#f3e9d3] text-[#422b15] p-4 rounded-lg border-2 border-[#a58d6e] shadow-inner h-full overflow-y-auto flex-grow">
            <div className="space-y-4">
                {messages.map((msg) => {
                    const { icon, classes } = getMessageStyle(msg.type);
                    return (
                        <div key={msg.id} className={`flex items-start gap-3 ${classes} border-b border-[#e9e0ca] pb-2 last:border-b-0`}>
                            <span className="mt-1">{icon}</span>
                            <p className="flex-1 leading-relaxed">{parseRichText(msg.content)}</p>
                        </div>
                    );
                })}
            </div>
            <div ref={endOfMessagesRef} />
        </div>
    );
};