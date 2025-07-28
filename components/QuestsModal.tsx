
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import type { Quest } from '../types';
import { ScrollIcon } from './icons';

const QuestCard = ({ quest }: { quest: Quest }) => (
  <div className={`bg-[#e9e0ca] p-4 rounded-md border border-[#a58d6e] shadow-sm mb-4 ${quest.isCompleted ? 'opacity-60' : ''}`}>
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold font-title">{quest.title}</h3>
      {quest.isCompleted && <span className="text-green-600 font-bold">COMPLETED</span>}
    </div>
    <p className="text-sm italic my-2">{quest.description}</p>
  </div>
);

export const QuestsModal = () => {
  const { player, activeModal, setActiveModal } = useGame();

  if (!player) return null;

  return (
    <Modal
      title="Quests"
      isOpen={activeModal === 'quests'}
      onClose={() => setActiveModal(null)}
    >
      <div className="flex items-center gap-2 mb-4">
        <ScrollIcon className="w-6 h-6"/>
        <p>Active Quests: {player.quests.filter(q => !q.isCompleted).length}</p>
      </div>
      {player.quests.length > 0 ? (
        player.quests.map(quest => <QuestCard key={quest.id} quest={quest} />)
      ) : (
        <p className="text-center italic py-8">You have no active quests.</p>
      )}
    </Modal>
  );
};
