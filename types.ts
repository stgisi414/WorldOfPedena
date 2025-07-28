




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

export type CharacterClass = 'Warrior' | 'Mage' | 'Rogue' | 'Ranger' | 'Psychic' | 'Paladin' | 'Bard' | 'Cleric' | 'Druid' | 'Monk' | 'Sorcerer' | 'Warlock' | 'Barbarian' | 'Brawler' | 'Assassin' | 'Hunter' | 'Shaman' | 'Gladiator' | 'Ninja' | 'Summoner' | 'Necromancer' | 'Illusionist' | 'Engineer' | 'Alchemist' | 'Scholar' | 'Commoner';

export interface NPC {
  id: string;
  name: string;
  class: CharacterClass;
  description: string;
  relationship: number; // -100 to 100
  hp: number;
  maxHp: number;
  stats: CharacterStats;
}

export interface MapLocation {
  name: string;
  x: number;
  y: number;
}

export interface GameWorld {
  location: string;
  timeOfDay: 'Day' | 'Night';
  nearbyNPCs: NPC[];
  description: string;
  mapUrl?: string;
  mapLocations?: MapLocation[];
}


export interface Player {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: CharacterClass;
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
  party: NPC[];
  backgroundStory: string;
  portraitUrl: string;
  features: string[];
  abilities: string[];
  feats: string[];
  spells: string[];
  cantrips: string[];
}

export type MessageType = 'narration' | 'system' | 'combat' | 'quest' | 'success' | 'error' | 'exploration' | 'player-command' | 'dialogue';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: number;
}

export interface PartyMember {
  id:string;
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
  activeModal: 'inventory' | 'quests' | 'character' | 'settings' | 'multiplayer' | 'map' | null;
  multiplayer: MultiplayerState;
}

// Represents the full save file structure
export interface SaveGameData {
  player: Player;
  gameWorld: GameWorld;
  messages: Message[];
}