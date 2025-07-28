
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import type { CharacterStats } from '../types';

const StatRow = ({ name, value }: { name: string; value: number }) => {
    const modifier = Math.floor((value - 10) / 2);
    return (
        <div className="flex justify-between items-center py-2 border-b border-[#d8c4a1]">
            <span className="font-bold capitalize">{name}</span>
            <span>{value} <span className="text-sm text-gray-500">({modifier >= 0 ? '+' : ''}{modifier})</span></span>
        </div>
    );
}

const InfoList = ({ title, items }: { title: string; items: string[] | undefined }) => {
    if (!items || items.length === 0) return null;
    return (
        <>
            <h3 className="text-xl font-bold font-title mt-4 mb-2">{title}</h3>
            <div className="bg-[#e9e0ca] p-4 rounded-md border border-[#a58d6e]">
                <ul className="list-disc list-inside text-sm space-y-1 columns-1 sm:columns-2">
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </>
    );
};

export const CharacterSheetModal = () => {
  const { player, activeModal, setActiveModal } = useGame();

  if (!player) return null;

  return (
    <Modal
      title="Character"
      isOpen={activeModal === 'character'}
      onClose={() => setActiveModal(null)}
    >
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
                <h2 className="text-3xl font-title text-center mb-4">{player.name}</h2>
                <img src={player.portraitUrl} alt={`Portrait of ${player.name}`} className="w-full aspect-square object-cover rounded-lg border-2 border-[#a58d6e] shadow-lg" />
                 <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                    <div><span className="font-bold">Class:</span> {player.class}</div>
                    <div><span className="font-bold">Level:</span> {player.level}</div>
                    <div><span className="font-bold">Gender:</span> {player.gender}</div>
                    <div><span className="font-bold">Gold:</span> <span className="text-yellow-600">{player.gold}</span></div>
                    <div className="col-span-2"><span className="font-bold">HP:</span> <span className="text-red-700">{player.hp} / {player.maxHp}</span></div>
                    <div className="col-span-2"><span className="font-bold">XP:</span> <span className="text-blue-600">{player.xp} / {player.nextLevelXp}</span></div>
                </div>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-xl font-bold font-title mb-2">Character Statistics</h3>
                <div className="bg-[#e9e0ca] p-4 rounded-md border border-[#a58d6e]">
                    {Object.entries(player.stats).map(([stat, value]) => (
                        <StatRow key={stat} name={stat} value={value} />
                    ))}
                </div>
                <h3 className="text-xl font-bold font-title mt-6 mb-2">Background Story</h3>
                <p className="text-sm italic leading-relaxed">{player.backgroundStory}</p>
                
                <InfoList title="Features" items={player.features} />
                <InfoList title="Abilities" items={player.abilities} />
                <InfoList title="Feats" items={player.feats} />
                <InfoList title="Spells" items={player.spells} />
                <InfoList title="Cantrips" items={player.cantrips} />
            </div>
        </div>

        {player.party && player.party.length > 0 && (
            <div className="mt-6 pt-6 border-t-2 border-[#a58d6e]">
                <h3 className="text-2xl font-bold font-title mb-4">Your Party</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {player.party.map(member => (
                        <div key={member.id} className="bg-[#e9e0ca] p-4 rounded-md border border-[#a58d6e] shadow-sm">
                            <div className="flex justify-between items-baseline">
                                <h4 className="text-xl font-bold font-title">{member.name}</h4>
                                <span className="text-sm font-semibold">{member.class}</span>
                            </div>
                            <p className="text-sm italic my-2">{member.description}</p>
                            <div className="text-xs font-bold text-red-700">
                                HP: {member.hp} / {member.maxHp}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </Modal>
  );
};