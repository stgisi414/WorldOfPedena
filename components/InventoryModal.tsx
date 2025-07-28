
import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Modal } from './Modal';
import type { Item, ItemRarity } from '../types';

const rarityColorMap: Record<ItemRarity, string> = {
    Common: 'text-gray-500',
    Uncommon: 'text-green-600',
    Rare: 'text-blue-600',
    Epic: 'text-purple-600',
    Legendary: 'text-orange-500'
};

const ItemCard = ({ item }: { item: Item }) => {
    const { executeCommand } = useGame();
    return (
        <div className="bg-[#e9e0ca] p-4 rounded-md border border-[#a58d6e] shadow-sm mb-4">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold font-title">{item.name}</h3>
                <span className={`px-2 py-1 text-xs font-bold rounded ${rarityColorMap[item.rarity]}`}>
                    {item.rarity.toUpperCase()}
                </span>
            </div>
            <p className="text-sm italic my-2">{item.description}</p>
            <div className="text-sm text-[#6a4d35]">
                {item.damage && <p><span className="font-bold">Damage:</span> {item.damage}</p>}
                {item.armor && <p><span className="font-bold">Armor:</span> {item.armor}</p>}
                <p><span className="font-bold">Value:</span> <span className="text-yellow-600">{item.value} gold</span></p>
            </div>
            <div className="mt-3 space-x-2">
                <button 
                  className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 shadow"
                  onClick={() => executeCommand(`sell ${item.name}`)}
                >
                  Sell
                </button>
                <button 
                  className="px-3 py-1 bg-red-700 text-white text-sm rounded hover:bg-red-800 shadow"
                  onClick={() => executeCommand(`drop ${item.name}`)}
                >
                  Drop
                </button>
            </div>
        </div>
    );
};

export const InventoryModal = () => {
  const { player, activeModal, setActiveModal } = useGame();

  if (!player) return null;

  return (
    <Modal
      title="Inventory"
      isOpen={activeModal === 'inventory'}
      onClose={() => setActiveModal(null)}
    >
      <div className="flex justify-between items-baseline mb-4">
        <p>Items: {player.inventory.length} total</p>
        <p className="text-yellow-600 font-bold">Gold: {player.gold}</p>
      </div>
      {player.inventory.length > 0 ? (
        player.inventory.map(item => <ItemCard key={item.id} item={item} />)
      ) : (
        <p className="text-center italic py-8">Your backpack is empty.</p>
      )}
    </Modal>
  );
};
