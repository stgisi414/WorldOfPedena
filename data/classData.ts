import { Player, Item, ItemType, ItemRarity, CharacterClass } from '../types';

export const initialPlayer: Omit<Player, 'name' | 'gender' | 'class' | 'backgroundStory' | 'portraitUrl'> = {
  level: 1,
  hp: 100,
  maxHp: 100,
  xp: 0,
  nextLevelXp: 100,
  gold: 25,
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  inventory: [
    { id: 'item-1', name: 'Wooden Club', description: 'A common, serviceable item. It is a weapon.', type: ItemType.WEAPON, rarity: ItemRarity.COMMON, value: 10, damage: '1d6'},
    { id: 'item-2', name: 'Health Potion', description: 'A vial of red liquid that restores a small amount of health.', type: ItemType.POTION, rarity: ItemRarity.COMMON, value: 15 },
  ],
  equipment: {},
  quests: [],
  party: [],
  features: [],
  abilities: [],
  feats: [],
  spells: [],
  cantrips: [],
};

export const classPresets: Record<CharacterClass, { hp: number, stats: Player['stats']}> = {
  Warrior: {
    hp: 120,
    stats: { strength: 14, dexterity: 10, constitution: 12, intelligence: 8, wisdom: 10, charisma: 10 },
  },
  Mage: {
    hp: 80,
    stats: { strength: 8, dexterity: 10, constitution: 10, intelligence: 14, wisdom: 12, charisma: 10 },
  },
  Rogue: {
    hp: 90,
    stats: { strength: 10, dexterity: 14, constitution: 10, intelligence: 10, wisdom: 8, charisma: 12 },
  },
  Gladiator: {
    hp: 110,
    stats: { strength: 13, dexterity: 12, constitution: 11, intelligence: 8, wisdom: 10, charisma: 11 },
  },
  Ranger: {
      hp: 100,
      stats: { strength: 10, dexterity: 14, constitution: 12, intelligence: 10, wisdom: 13, charisma: 8 },
  },
  Psychic: {
      hp: 80,
      stats: { strength: 8, dexterity: 10, constitution: 10, intelligence: 14, wisdom: 12, charisma: 13 },
  },
  Paladin: {
      hp: 115,
      stats: { strength: 13, dexterity: 8, constitution: 12, intelligence: 10, wisdom: 11, charisma: 14 },
  },
  Bard: {
      hp: 90,
      stats: { strength: 8, dexterity: 12, constitution: 10, intelligence: 10, wisdom: 10, charisma: 15 },
  },
  Cleric: {
      hp: 95,
      stats: { strength: 12, dexterity: 8, constitution: 13, intelligence: 10, wisdom: 15, charisma: 10 },
  },
  Druid: {
      hp: 95,
      stats: { strength: 10, dexterity: 10, constitution: 13, intelligence: 12, wisdom: 15, charisma: 8 },
  },
  Monk: {
      hp: 100,
      stats: { strength: 10, dexterity: 15, constitution: 12, intelligence: 8, wisdom: 14, charisma: 8 },
  },
  Sorcerer: {
      hp: 80,
      stats: { strength: 8, dexterity: 10, constitution: 13, intelligence: 10, wisdom: 10, charisma: 15 },
  },
  Warlock: {
      hp: 90,
      stats: { strength: 8, dexterity: 10, constitution: 14, intelligence: 10, wisdom: 10, charisma: 15 },
  },
  Barbarian: {
      hp: 130,
      stats: { strength: 15, dexterity: 10, constitution: 14, intelligence: 8, wisdom: 9, charisma: 8 },
  },
  Brawler: {
      hp: 125,
      stats: { strength: 14, dexterity: 12, constitution: 15, intelligence: 8, wisdom: 8, charisma: 8 },
  },
  Assassin: {
      hp: 90,
      stats: { strength: 10, dexterity: 15, constitution: 10, intelligence: 13, wisdom: 8, charisma: 10 },
  },
  Hunter: {
      hp: 100,
      stats: { strength: 10, dexterity: 15, constitution: 12, intelligence: 10, wisdom: 13, charisma: 8 },
  },
  Shaman: {
      hp: 95,
      stats: { strength: 10, dexterity: 8, constitution: 14, intelligence: 10, wisdom: 15, charisma: 10 },
  },
  Ninja: {
      hp: 95,
      stats: { strength: 8, dexterity: 15, constitution: 10, intelligence: 12, wisdom: 14, charisma: 8 },
  },
  Summoner: {
      hp: 80,
      stats: { strength: 8, dexterity: 10, constitution: 12, intelligence: 15, wisdom: 10, charisma: 13 },
  },
  Necromancer: {
      hp: 80,
      stats: { strength: 8, dexterity: 10, constitution: 13, intelligence: 15, wisdom: 12, charisma: 8 },
  },
  Illusionist: {
      hp: 80,
      stats: { strength: 8, dexterity: 12, constitution: 10, intelligence: 15, wisdom: 10, charisma: 13 },
  },
  Engineer: {
      hp: 90,
      stats: { strength: 10, dexterity: 12, constitution: 13, intelligence: 15, wisdom: 10, charisma: 8 },
  },
  Alchemist: {
      hp: 90,
      stats: { strength: 8, dexterity: 13, constitution: 12, intelligence: 15, wisdom: 10, charisma: 8 },
  },
  Scholar: {
      hp: 85,
      stats: { strength: 8, dexterity: 10, constitution: 10, intelligence: 15, wisdom: 14, charisma: 10 },
  },
  Commoner: {
      hp: 70,
      stats: { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 },
  },
};