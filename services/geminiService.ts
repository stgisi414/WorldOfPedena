
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import type { Player, GameWorld, Message, Item, Quest, MapLocation, CharacterStats, NPC } from '../types';
import { ItemType, ItemRarity } from '../types';
import { characterData } from '../data/characterData';
import { classPresets } from '../data/classData';
import { countries, cities } from '../data/lore';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const characterStatsSchema = {
    type: Type.OBJECT,
    description: "The character's core attributes.",
    properties: {
        strength: { type: Type.INTEGER },
        dexterity: { type: Type.INTEGER },
        constitution: { type: Type.INTEGER },
        intelligence: { type: Type.INTEGER },
        wisdom: { type: Type.INTEGER },
        charisma: { type: Type.INTEGER },
    }
};

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    narration: { type: Type.STRING, description: "The descriptive text of what is happening in the story. This is a required field." },
    playerUpdate: {
      type: Type.OBJECT,
      description: "Updates to the player's core stats. Omit this field entirely if there are no changes.",
      properties: {
        hp: { type: Type.INTEGER, description: "Change in player's HP (can be negative)." },
        xp: { type: Type.INTEGER, description: "Experience points gained." },
        gold: { type: Type.INTEGER, description: "Change in player's gold." },
        levelUp: { type: Type.BOOLEAN, description: "True if the player leveled up." },
        statImprovements: {
            type: Type.OBJECT,
            description: "An object representing which stats to increase on level up. Only include for level ups with 'Ability Score Improvement'. The value should be the amount to increase by (e.g., { 'strength': 1 }). Example: { 'strength': 1 }",
            properties: {
                strength: { type: Type.INTEGER },
                dexterity: { type: Type.INTEGER },
                constitution: { type: Type.INTEGER },
                intelligence: { type: Type.INTEGER },
                wisdom: { type: Type.INTEGER },
                charisma: { type: Type.INTEGER },
            }
        }
      },
    },
    worldUpdate: {
        type: Type.OBJECT,
        description: "Updates to the game world. Omit this field entirely if there are no changes.",
        properties: {
            location: { 
                type: Type.STRING, 
                description: "The player's new location. IMPORTANT: This MUST be ONLY the proper name of the location, for example 'City of Pedena' or 'Whispergrove'. DO NOT include player names, coordinates, biome data, or any other generated metadata in this string. The name must be clean and simple, ready for display in the UI." 
            },
            description: { type: Type.STRING, description: "The new description of the location." },
        }
    },
    inventoryAdd: {
      type: Type.ARRAY,
      description: "A list of items to be added to the player's inventory. Omit this field entirely if no items are added.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          type: { type: Type.STRING, enum: ['Weapon', 'Armor', 'Potion', 'Quest Item', 'Miscellaneous'] },
          rarity: { type: Type.STRING, enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'] },
          value: { type: Type.INTEGER },
          damage: { type: Type.STRING, description: "The damage roll for the weapon (e.g., '1d8'). Only include for weapons." },
          armor: { type: Type.INTEGER, description: "The armor class provided by the item. Only include for armor." },
        },
        required: ['name', 'description', 'type', 'rarity', 'value'],
      },
    },
    inventoryRemove: {
      type: Type.ARRAY,
      description: "A list of item names to be removed from the player's inventory. Omit this field entirely if no items are removed.",
      items: { type: Type.STRING },
    },
    questUpdate: {
        type: Type.OBJECT,
        description: "Updates to a quest's status, or assigns a new quest. Omit this field entirely if there are no quest updates.",
        properties: {
            id: { type: Type.STRING, description: "The ID of the quest to update. For new quests, provide a new unique ID (e.g., 'quest_shadow_crypt')." },
            title: { type: Type.STRING, description: "The title of the quest." },
            description: { type: Type.STRING, description: "A new description for the quest." },
            isCompleted: { type: Type.BOOLEAN, description: "Set to true if the quest is now completed." },
        },
        required: ['id'],
    },
    partyAdd: {
      type: Type.ARRAY,
      description: "A list of NPCs to be added to the player's party. Provide the full NPC object, including generated stats. Only add NPCs who have explicitly agreed to join.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "A unique ID for the NPC, e.g., 'npc_vildia_strongarm'." },
          name: { type: Type.STRING },
          class: { type: Type.STRING, enum: Object.keys(classPresets) },
          description: { type: Type.STRING, description: "A short, evocative description of the NPC." },
          hp: { type: Type.INTEGER, description: "The NPC's current hit points." },
          maxHp: { type: Type.INTEGER, description: "The NPC's maximum hit points." },
          stats: characterStatsSchema,
          relationship: { type: Type.INTEGER, description: "The NPC's relationship score towards the player (-100 to 100)." }
        },
        required: ['id', 'name', 'class', 'description', 'hp', 'maxHp', 'stats', 'relationship']
      },
    },
    partyRemove: {
      type: Type.ARRAY,
      description: "A list of NPC names or IDs to be removed from the player's party. Only remove NPCs who have explicitly decided to leave.",
      items: { type: Type.STRING },
    },
  },
  required: ['narration'],
};


export const generateCharacterBackground = async (name: string, pClass: string, gender: string): Promise<string> => {
    const prompt = `Generate a short, evocative background story (2-3 sentences) for a fantasy RPG character.
    Name: ${name}
    Class: ${pClass}
    Gender: ${gender}
    Keep it concise and mysterious.`;

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating character background:", error);
        return "A mysterious past, shrouded in shadow and forgotten memories...";
    }
};

export const generateCharacterPortrait = async (background: string): Promise<string> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: `Fantasy RPG character portrait, based on this description: ${background}. Digital art, detailed face, vibrant, high-resolution.`,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });
        const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
        return `data:image/jpeg;base64,${base64ImageBytes}`;
    } catch (error) {
        console.error("Error generating character portrait:", error);
        const seed = background.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10) || 'error';
        return `https://picsum.photos/seed/${seed}/400/400`;
    }
};

export const generateStartingEquipment = async (characterClass: string, backgroundStory: string): Promise<Item[]> => {
    const itemSchema = {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            type: { type: Type.STRING, enum: Object.values(ItemType) },
            rarity: { type: Type.STRING, enum: Object.values(ItemRarity) },
            value: { type: Type.INTEGER },
            damage: { type: Type.STRING, description: "The damage roll for the weapon (e.g., '1d8'). Only for weapons." },
            armor: { type: Type.INTEGER, description: "The armor class. Only for armor." },
        },
        required: ['name', 'description', 'type', 'rarity', 'value'],
    };

    const equipmentSchema = {
        type: Type.OBJECT,
        properties: {
            equipment: {
                type: Type.ARRAY,
                description: "A list of starting items for the character.",
                items: itemSchema,
            }
        },
        required: ['equipment']
    };

    const prompt = `Generate starting equipment for a new fantasy RPG character.
    Class: ${characterClass}
    Background: ${backgroundStory}

    Provide 2-3 items. This should usually include a class-appropriate weapon, maybe some simple armor or a shield, and one other interesting item (a potion, a trinket, a quest item hint).
    The items should be creative and fit the theme of the character's class and background.
    For example, a 'Warrior from a fallen noble house' might get a 'Slightly Rusted Longsword' and a 'Tarnished Signet Ring'.
    A 'Rogue who was a street urchin' might get 'Twin Daggers' and a 'Set of Loaded Dice'.
    A 'Mage from a secluded academy' might get a 'Carved Rowan Staff' and a 'Tome of Minor Cantrips'.
    Ensure the item descriptions are evocative (1-2 sentences).
    Weapon damage should be appropriate for a level 1 character (e.g., '1d6', '1d8', '2d4').
    Armor value should also be appropriate for starting gear (e.g. between 10 and 14).
    The total value of all items should be around 25-50 gold.
    Return ONLY a valid JSON object matching the schema.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: equipmentSchema,
            },
        });
        const parsed = JSON.parse(response.text);
        const itemsData = parsed.equipment || [];
        return itemsData.map((item: any) => ({ ...item, id: crypto.randomUUID() }));
    } catch (error) {
        console.error("Error generating starting equipment:", error);
        // Fallback equipment
        return [
            { id: crypto.randomUUID(), name: 'Worn Shortsword', description: 'A reliable but well-used shortsword. It has seen better days.', type: ItemType.WEAPON, rarity: ItemRarity.COMMON, value: 10, damage: '1d6'},
            { id: crypto.randomUUID(), name: 'Crude Leather Armor', description: 'Simple leather armor providing basic protection.', type: ItemType.ARMOR, rarity: ItemRarity.COMMON, value: 15, armor: 11 },
            { id: crypto.randomUUID(), name: 'Health Potion', description: 'A vial of red liquid that restores a small amount of health.', type: ItemType.POTION, rarity: ItemRarity.COMMON, value: 15 },
        ];
    }
};


export const processPlayerAction = async (player: Player, world: GameWorld, history: Message[], command: string): Promise<string> => {
    // Omit large, irrelevant data from the prompt to avoid exceeding token limits.
    // The AI doesn't need graphical data (map, portrait) to process text commands.
    const { portraitUrl, ...playerForPrompt } = player;
    const { mapUrl, mapLocations, ...worldForPrompt } = world;

    const masterPrompt = `You are the Dungeon Master for 'The Chronicles of Pedena', a text-based RPG. Your responses MUST be in valid JSON format, adhering to the provided schema. Do not include any text outside the JSON structure.

Current Player State (including party members):
${JSON.stringify(playerForPrompt)}

Current World State:
${JSON.stringify(worldForPrompt)}

Conversation History (last 5 turns):
${JSON.stringify(history.slice(-5))}

Player's Action:
"${command}"

INSTRUCTIONS:
1.  Narrate the outcome of the player's action.
2.  Update the world, player stats, inventory, and quests as logically follows from the action.
3.  **Quest Management:** When a player accepts a new quest, you MUST create a new quest entry using the 'questUpdate' field. A new quest requires a unique 'id' (e.g., 'quest_caravan_rescue'), a 'title', and a 'description'. When a player completes a quest, update its 'isCompleted' status to true using its existing 'id'.
4.  Party Management: If the player asks an NPC to join them, decide if the NPC agrees based on the situation and relationship. If they agree, add them to the party using 'partyAdd' and generate their complete stats. If an NPC decides to leave, use 'partyRemove'.
5.  NPC Generation: When creating a new NPC to join the party, ensure they are diverse and interesting. Use the following data as inspiration for their traits. Do not just copy them; use them to generate a unique character.
    Character Generation Data:
    ${JSON.stringify(characterData)}
6.  Level Ups: When a player levels up (levelUp: true), if their class progression includes an 'Ability Score Improvement', you MUST specify which stat to increase in 'statImprovements'. Choose a stat relevant to the class.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: masterPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error processing player action:", error);
        return JSON.stringify({
            narration: "A strange energy crackles in the air, and for a moment, the world seems to stutter. The Dungeon Master appears confused. {red:Please try your action again.}",
        });
    }
};

export const generateMapData = async (): Promise<{ mapUrl: string; mapLocations: MapLocation[] }> => {
    // 1. Generate Map Image from Lore
    const mapImagePrompt = `Create a detailed, hand-drawn, antique-style fantasy world map. The world is called Pedena.
    It features diverse biomes and kingdoms.
    Key Kingdoms:
    - Pedena: Central kingdom, temperate, known for magic.
    - Vaelthara: Militaristic empire in the harsh, cold north.
    - Sylvanmere: Forest federation with eternal spring groves.
    - Dustlands: Arid desert trading nation with oases.
    - Aeria: Civilization on floating islands above the clouds.
    - Deepdelve: Subterranean kingdom of dwarves.
    - The Frostfell Reach: Arctic tundra in the far north.
    - Ignis Caldera: Volcanic dominion.
    - The Azure Archipelago: Tropical islands, likely to the south or in a large sea.
    - Solara Theocracy: A sun-worshipping nation in warm, arid plains.

    The map should show these varied climates: from the frozen north (Frostfell, Vaelthara) to a central temperate zone (Pedena, Sylvanmere), a hot desert (Dustlands), and tropical isles (Azure Archipelago). It should feature mountains, forests, deserts, and a large sea or ocean. Do not include any text labels on the map itself. The style should be reminiscent of classic fantasy novels.`;

    const imageResponse = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: mapImagePrompt,
        config: {
            numberOfImages: 1,
            outputMimeType: 'image/jpeg',
            aspectRatio: '16:9',
        },
    });
    const base64ImageBytes: string = imageResponse.generatedImages[0].image.imageBytes;
    const mapUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

    // 2. Generate Map Coordinates from Lore
    const cityList = Object.values(cities).map(c => ({ name: c.name, country: countries[c.country as keyof typeof countries].name, description: c.description }));

    const coordinatesPrompt = `Based on the following fantasy world data, assign coordinates (x, y) to each city on a 100x100 grid. The top-left is (0,0) and bottom-right is (100,100).
    The layout must be geographically consistent with the descriptions.
    - Kingdoms like The Frostfell Reach and Vaelthara Empire are in the north (y values between 5-30).
    - Dustlands Consortium (desert) and Solara Theocracy (warm plains) are in a hot region, likely south (y values between 70-95).
    - The Azure Archipelago (islands) must be placed in a sea area, off the southern coast.
    - Aeria (floating islands) should be placed centrally, perhaps over mountains.
    - Deepdelve (subterranean) would be located within mountain ranges.
    - Pedena is central. Sylvanmere is a forest realm.
    - 'port' cities should be on a coast. 'mountain' towns in mountains.

    Here is the list of cities:
    ${JSON.stringify(cityList)}

    Return ONLY a valid JSON object matching the schema.`;

    const locationSchema = {
        type: Type.OBJECT,
        properties: {
            locations: {
                type: Type.ARRAY,
                description: "An array of all city locations.",
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING, description: "The name of the city." },
                        x: { type: Type.NUMBER, description: "The x-coordinate (0-100)." },
                        y: { type: Type.NUMBER, description: "The y-coordinate (0-100)." },
                    },
                    required: ["name", "x", "y"],
                }
            }
        },
        required: ["locations"]
    };

    const coordinatesResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: coordinatesPrompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: locationSchema,
        },
    });
    
    const parsedData = JSON.parse(coordinatesResponse.text);
    const mapLocations: MapLocation[] = parsedData.locations;
    
    return {
        mapUrl,
        mapLocations,
    };
};
