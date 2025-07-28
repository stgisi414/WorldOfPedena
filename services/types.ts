

export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export enum ItemType {
  WEAPON = 'Weapon',
  ARMOR = 'Armor',
  POTION = 'Potion',
  QUEST = 'Quest Item',
  MISC = 'Miscellaneous'
}

export enum ItemRarity {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
  EPIC = 'Epic',
  LEGENDARY = 'Legendary'
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: ItemType;
  rarity: ItemRarity;
  value: number;
  damage?: string;
  armor?: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  rewards: {
    xp: number;
    gold?: number;
    items?: Item[];
  };
}

export interface NPC {
  id: string;
  name: string;
  description: string;
  relationship: number; // -100 to 100
}

export interface GameWorld {
  location: string;
  timeOfDay: 'Day' | 'Night';
  nearbyNPCs: NPC[];
  description: string;
}

export interface Player {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue' | 'Gladiator';
  level: number;
  hp: number;
  maxHp: number;
  xp: number;
  nextLevelXp: number;
  gold: number;
  stats: CharacterStats;
  inventory: Item[];
  equipment: {
    weapon?: Item;
    armor?: Item;
  };
  quests: Quest[];
  backgroundStory: string;
  portraitUrl: string;
}

export type MessageType = 'narration' | 'system' | 'combat' | 'quest' | 'success' | 'error' | 'exploration' | 'player-command' | 'dialogue';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: number;
}

export interface PartyMember {
  id: string;
  name: string;
  isPartyLeader: boolean;
}

export interface MultiplayerState {
  isConnected: boolean;
  roomId: string | null;
  players: PartyMember[];
  isMyTurn: boolean;
  currentTurn: string | null;
}

export interface GameState {
  player: Player | null;
  gameWorld: GameWorld | null;
  messages: Message[];
  isLoading: boolean;
  activeModal: 'inventory' | 'quests' | 'character' | 'settings' | 'multiplayer' | null;
  multiplayer: MultiplayerState;
}

// Represents the full save file structure
export interface SaveGameData {
  player: Player;
  gameWorld: GameWorld;
  messages: Message[];
}