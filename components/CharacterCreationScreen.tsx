import React, { useState } from 'react';
import type { Player, CharacterClass, Item } from '../types';
import { ItemType } from '../types';
import { initialPlayer, classPresets } from '../data/classData';
import { generateCharacterBackground, generateCharacterPortrait, generateStartingEquipment } from '../services/geminiService';
import { BookIcon } from './icons';

interface CharacterCreationScreenProps {
  onCharacterCreate: (player: Player) => void;
}

const ALL_CLASSES: CharacterClass[] = Object.keys(classPresets) as CharacterClass[];


export const CharacterCreationScreen = ({ onCharacterCreate }: CharacterCreationScreenProps) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [pClass, setPClass] = useState<CharacterClass>('Warrior');
  const [background, setBackground] = useState('');
  const [portrait, setPortrait] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const handleGenerateBackground = async () => {
    if (!name || isLoading) return;
    setIsLoading(true);
    setLoadingText('Generating story & portrait...');
    setBackground('');
    setPortrait(null);
    const bg = await generateCharacterBackground(name, pClass, gender);
    setBackground(bg);
    const pic = await generateCharacterPortrait(bg);
    setPortrait(pic);
    setIsLoading(false);
    setLoadingText('');
  };

  const handleStartAdventure = async () => {
    if(!name || !background || !portrait || isLoading) return;
    setIsLoading(true);
    setLoadingText('Forging your starting equipment...');

    const classData = classPresets[pClass];
    const startingInventory = await generateStartingEquipment(pClass, background);

    const startingEquipment: { weapon?: Item; armor?: Item } = {};
    const weapon = startingInventory.find(item => item.type === ItemType.WEAPON);
    if (weapon) {
        startingEquipment.weapon = weapon;
    }
    const armor = startingInventory.find(item => item.type === ItemType.ARMOR);
    if (armor) {
        startingEquipment.armor = armor;
    }

    const newPlayer: Player = {
      ...initialPlayer,
      name,
      gender,
      class: pClass,
      hp: classData.hp,
      maxHp: classData.hp,
      stats: classData.stats,
      backgroundStory: background,
      portraitUrl: portrait,
      inventory: startingInventory,
      equipment: startingEquipment,
    };
    onCharacterCreate(newPlayer);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#4d3d2e] p-4 text-[#f3e9d3]">
        <div className="w-full max-w-4xl bg-[#f3e9d3] text-[#422b15] p-8 rounded-xl border-4 border-[#a58d6e] shadow-2xl">
            <h1 className="text-4xl font-title text-center mb-8">Create Your Adventurer</h1>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Column: Form */}
                <div className="space-y-6">
                    <div>
                        <label className="block font-bold mb-1">Character Name:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 bg-white border border-[#a58d6e] rounded shadow-inner" disabled={isLoading}/>
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Class:</label>
                        <select value={pClass} onChange={e => setPClass(e.target.value as any)} className="w-full p-2 bg-white border border-[#a58d6e] rounded" disabled={isLoading}>
                            {ALL_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Gender:</label>
                        <div className="flex gap-4">
                            <label className="flex items-center"><input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} className="mr-2" disabled={isLoading}/> Male</label>
                            <label className="flex items-center"><input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} className="mr-2" disabled={isLoading}/> Female</label>
                        </div>
                    </div>
                </div>

                {/* Right Column: AI Generated Content */}
                <div>
                     <label className="block font-bold mb-1">Character Portrait & Story:</label>
                     <div className="w-full p-4 bg-[#e9e0ca] border border-[#a58d6e] rounded shadow-inner">
                        <div className="w-full aspect-square bg-black/10 rounded-md mb-4 flex items-center justify-center text-center text-gray-500">
                            {isLoading && !portrait ? (
                                <div className="animate-pulse">Generating Portrait...</div>
                            ) : portrait ? (
                                <img src={portrait} alt="Character Portrait" className="w-full h-full object-cover rounded-md" />
                            ) : (
                                <div className="p-4">
                                  <BookIcon className="w-16 h-16 mx-auto opacity-50"/>
                                  <p>Your AI-generated portrait will appear here.</p>
                                </div>
                            )}
                        </div>
                        <div className="w-full h-24 overflow-y-auto text-sm italic">
                            {isLoading && !background ? (
                                <div className="animate-pulse">Generating background...</div>
                            ) : background || 'Your AI-generated background story will appear here.'}
                        </div>
                     </div>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                 <button onClick={handleGenerateBackground} disabled={isLoading || !name} className="w-full p-3 bg-[#d8c4a1] border border-[#a58d6e] rounded hover:bg-[#c9b898] transition-colors shadow disabled:opacity-50">
                    {isLoading && loadingText.includes('story') ? loadingText : 'Generate Background & Portrait'}
                </button>
                 <button onClick={handleStartAdventure} disabled={!background || !portrait || !name || isLoading} className="w-full p-4 bg-green-700 text-white font-bold text-lg rounded hover:bg-green-800 transition-colors shadow-lg disabled:opacity-50 font-title flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    {isLoading && loadingText.includes('equipment') ? loadingText : 'Start Adventure!'}
                </button>
            </div>
             <footer className="mt-8 text-sm text-[#d8c4a1] opacity-70 text-center">
                © 2025 The Chronicles of Pedena. Powered by Gemini API & the spirit of adventure.
            </footer>
        </div>
    </div>
  );
};