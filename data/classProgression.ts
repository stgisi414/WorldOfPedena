// Class Progression System - Complete leveling data for all classes
export const classProgression = {

    warrior: {
        name: "Warrior",
        hitDie: "d10",
        primaryStats: ["strength", "constitution"],
        savingThrows: ["strength", "constitution"],
        skillChoices: ["Athletics", "Intimidation", "Survival", "Animal Handling", "Insight", "Perception"],
        numSkillChoices: 2,

        levels: {
            1: {
                hp: 10,
                features: ["Fighting Style", "Second Wind"],
                abilities: ["Power Strike", "Shield Bash"],
                feats: ["Weapon Mastery"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 6,
                features: ["Action Surge (1 use)"],
                abilities: ["Cleave Attack"],
                feats: ["Armor Expertise"],
                spells: [],
                cantrips: []
            },
            3: {
                hp: 6,
                features: ["Martial Archetype"],
                abilities: ["Battle Fury", "Defensive Stance"],
                feats: ["Combat Reflexes"],
                spells: [],
                cantrips: []
            },
            4: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Weapon Throw"],
                feats: ["Improved Critical"],
                spells: [],
                cantrips: []
            },
            5: {
                hp: 6,
                features: ["Extra Attack (1)"],
                abilities: ["Whirlwind Strike", "Intimidating Shout"],
                feats: ["Master Warrior"],
                spells: [],
                cantrips: []
            },
            6: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["War Cry", "Sunder Armor"],
                feats: ["Heavy Armor Master"],
                spells: [],
                cantrips: []
            },
            7: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Retaliation", "Earthshaker Slam"],
                feats: ["Dual Wielding Adept"],
                spells: [],
                cantrips: []
            },
            8: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Concussive Blow", "Rallying Cry"],
                feats: ["Shield Wall Expert"],
                spells: [],
                cantrips: []
            },
            9: {
                hp: 6,
                features: ["Indomitable (1 use)"],
                abilities: ["Heroic Leap", "Berserker Rage"],
                feats: ["Great Weapon Master"],
                spells: [],
                cantrips: []
            },
            10: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Executioner's Strike", "Terrifying Presence"],
                feats: ["Polearm Master"],
                spells: [],
                cantrips: []
            },
            11: {
                hp: 6,
                features: ["Extra Attack (2)"],
                abilities: ["Unstoppable Force", "Stunning Strike"],
                feats: ["Blade Master"],
                spells: [],
                cantrips: []
            },
            12: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Overpower", "Iron Will"],
                feats: ["Sentinel"],
                spells: [],
                cantrips: []
            },
            13: {
                hp: 6,
                features: ["Indomitable (2 uses)"],
                abilities: ["Shockwave", "Last Stand"],
                feats: ["Resilient Warrior"],
                spells: [],
                cantrips: []
            },
            14: {
                hp: 6,
                features: ["Martial Archetype Feature"],
                abilities: ["Warlord's Command", "Bladestorm"],
                feats: ["Inspiring Leader"],
                spells: [],
                cantrips: []
            },
            15: {
                hp: 6,
                features: ["Superior Critical"], // Crits on 18-20
                abilities: ["Avatar of War", "Crippling Blow"],
                feats: ["Tough as Nails"],
                spells: [],
                cantrips: []
            },
            16: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Death Wish", "Undying Rage"],
                feats: ["Legendary Warrior"],
                spells: [],
                cantrips: []
            },
            17: {
                hp: 6,
                features: ["Action Surge (2 uses)", "Indomitable (3 uses)"],
                abilities: ["Titanic Smash", "War God's Blessing"],
                feats: ["Unbreakable Will"],
                spells: [],
                cantrips: []
            }
        }
    },

    mage: {
        name: "Mage",
        hitDie: "d6",
        primaryStats: ["intelligence", "wisdom"],
        savingThrows: ["intelligence", "wisdom"],
        skillChoices: ["Arcana", "History", "Investigation", "Medicine", "Religion", "Insight"],
        numSkillChoices: 2,

        levels: {
            1: {
                hp: 6,
                features: ["Spellcasting", "Arcane Recovery"],
                abilities: ["Spell Focus", "Mana Shield"],
                feats: ["Spell Power"],
                spells: ["Magic Missile", "Shield", "Burning Hands", "Chromatic Orb", "Sleep"],
                cantrips: ["Spark", "Mage Hand", "Prestidigitation", "Light"]
            },
            2: {
                hp: 4,
                features: ["Arcane Tradition"],
                abilities: ["Spell Surge"],
                feats: ["Metamagic Adept"],
                spells: ["Scorching Ray", "Misty Step", "Web", "Mirror Image", "Invisibility"],
                cantrips: ["Minor Illusion", "Ray of Frost"]
            },
            3: {
                hp: 4,
                features: ["Cantrip Formulas"], // Learn new cantrip
                abilities: ["Elemental Mastery", "Spell Steal"],
                feats: ["Arcane Scholar"],
                spells: ["Fireball", "Lightning Bolt", "Counterspell", "Fly", "Haste"],
                cantrips: ["Frost Bolt", "Shocking Grasp"]
            },
            4: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Spell Penetration"],
                feats: ["Spell Critical"],
                spells: ["Dimension Door", "Greater Invisibility", "Ice Storm", "Phantasmal Killer"],
                cantrips: ["Acid Splash"]
            },
            5: {
                hp: 4,
                features: ["Fifth Level Spells Access"], // Name corrected based on spell access
                abilities: ["Arcane Mastery", "Time Stop (Minor)"], // Renamed to avoid clash with actual Time Stop spell
                feats: ["Grand Magus"],
                spells: ["Cone of Cold", "Teleport (Short Range)", "Polymorph", "Wall of Force", "Animate Objects"],
                cantrips: ["Eldritch Blast"] // (Typically Warlock, added as example of cross-cantrip)
            },
            6: {
                hp: 4,
                features: ["Arcane Tradition Feature", "Sixth Level Spells Access"],
                abilities: ["Empowered Elements", "Arcane Warding"],
                feats: ["Elemental Adept (Fire)"],
                spells: ["Chain Lightning", "Disintegrate", "Globe of Invulnerability", "True Seeing"],
                cantrips: ["Dancing Lights"]
            },
            7: {
                hp: 4,
                features: ["Seventh Level Spells Access"],
                abilities: ["Rapid Casting", "Spell Reflection"],
                feats: ["War Caster"],
                spells: ["Delayed Blast Fireball", "Finger of Death", "Plane Shift", "Prismatic Spray"],
                cantrips: []
            },
            8: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Arcane Infusion", "Mind Blank (Self)"],
                feats: ["Potent Cantrips"],
                spells: ["Teleport (Long Range)", "Maze", "Forcecage"], // Added more 7th, started 8th
                cantrips: ["Blade Ward"]
            },
            9: {
                hp: 4,
                features: ["Arcane Tradition Feature", "Eighth Level Spells Access"],
                abilities: ["Spell Weaver", "Mystic Shield"],
                feats: ["Heightened Spell"],
                spells: ["Meteor Swarm (Single Meteor)", "Power Word Stun", "Dominate Monster", "Sunburst"],
                cantrips: []
            },
            10: {
                hp: 4,
                features: ["Improved Arcane Recovery"],
                abilities: ["Energy Conversion", "Arcane Eye"],
                feats: ["Twinned Spell"],
                spells: ["Imprisonment (Lesser)", "Mass Polymorph"], // More 8th
                cantrips: ["Mending"]
            },
            11: {
                hp: 4,
                features: ["Ninth Level Spells Access"],
                abilities: ["Archmage's Insight", "Spell Immunity (One School)"],
                feats: ["Elemental Adept (Cold)"],
                spells: ["Meteor Swarm", "Time Stop", "Wish (Limited)", "True Polymorph"],
                cantrips: []
            },
            12: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Rune Carver", "Astral Projection (Self)"],
                feats: ["Careful Spell"],
                spells: ["Gate (Unreliable)", "Shapechange"], // More 9th
                cantrips: []
            },
            13: {
                hp: 4,
                features: ["Arcane Tradition Feature"],
                abilities: ["Spell Mimicry", "Etherealness"],
                feats: ["Subtle Spell"],
                spells: ["Foresight", "Weird"], // More 9th
                cantrips: []
            },
            14: {
                hp: 4,
                features: ["Master of Magic (Choose one 1st level spell at will)"],
                abilities: ["Leyline Attunement", "Planar Binding (Lesser)"],
                feats: ["Spell Sniper"],
                spells: ["Invulnerability", "Prismatic Wall"], // More 8th/9th
                cantrips: []
            },
            15: {
                hp: 4,
                features: ["Arcane Overcharge"],
                abilities: ["Chronomancy", "Reality Warp (Minor)"],
                feats: ["Distant Spell"],
                spells: ["Mass Heal (Arcane)", "Imprisonment"], // More 9th
                cantrips: []
            },
            16: {
                hp: 4,
                features: ["Ability Score Improvement"],
                abilities: ["Nexus of Power", "Arcane Annihilation"],
                feats: ["Empowered Spell"],
                spells: ["Power Word Kill", "True Resurrection (Arcane)"], // More 9th
                cantrips: []
            },
            17: {
                hp: 4,
                features: ["Signature Spells (Choose two 3rd level spells, cast once per day without slot)"],
                abilities: ["Cosmic Awareness", "Unravel Magic"],
                feats: ["Archmage's Boon"],
                spells: ["Wish", "Time Ravage"], // More 9th
                cantrips: []
            }
        }
    },

    rogue: {
        name: "Rogue",
        hitDie: "d8",
        primaryStats: ["dexterity", "intelligence"],
        savingThrows: ["dexterity", "intelligence"],
        skillChoices: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        numSkillChoices: 4,

        levels: {
            1: {
                hp: 8,
                features: ["Expertise (2 skills)", "Sneak Attack (1d6)", "Thieves' Cant"],
                abilities: ["Backstab", "Lockpicking", "Pickpocket"],
                feats: ["Light Fingers"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 5,
                features: ["Cunning Action"],
                abilities: ["Dodge Roll", "Smoke Bomb"],
                feats: ["Nimble Escape"], // Evasion is too strong for L2, renamed for Cunning Action synergy
                spells: [],
                cantrips: []
            },
            3: {
                hp: 5,
                features: ["Roguish Archetype", "Sneak Attack (2d6)"],
                abilities: ["Shadow Step (Short)", "Poison Blade"],
                feats: ["Assassinate"],
                spells: [],
                cantrips: []
            },
            4: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Caltrops", "Distracting Strike"],
                feats: ["Improved Sneak Attack (Minor)"], // Minor boost or more reliability
                spells: [],
                cantrips: []
            },
            5: {
                hp: 5,
                features: ["Uncanny Dodge", "Sneak Attack (3d6)"],
                abilities: ["Vanish", "Throwing Knives"],
                feats: ["Master Thief"],
                spells: [],
                cantrips: []
            },
            6: {
                hp: 5,
                features: ["Expertise (2 more skills)"],
                abilities: ["Silent Takedown", "Analyze Weakness"],
                feats: ["Skulker"],
                spells: [],
                cantrips: []
            },
            7: {
                hp: 5,
                features: ["Evasion", "Sneak Attack (4d6)"],
                abilities: ["Wall Run", "Trap Sense (Improved)"],
                feats: ["Deadly Aim"],
                spells: [],
                cantrips: []
            },
            8: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Shadow Meld", "Disarming Strike"],
                feats: ["Agile Parry"],
                spells: [],
                cantrips: []
            },
            9: {
                hp: 5,
                features: ["Roguish Archetype Feature", "Sneak Attack (5d6)"],
                abilities: ["Master of Disguise", "Garrote"],
                feats: ["Infiltrator"],
                spells: [],
                cantrips: []
            },
            10: {
                hp: 5,
                features: ["Ability Score Improvement"], // Rogues often get an extra ASI
                abilities: ["Exploit Opening", "Slippery Mind (Advantage on Wisdom saves)"],
                feats: ["Opportunist"],
                spells: [],
                cantrips: []
            },
            11: {
                hp: 5,
                features: ["Reliable Talent", "Sneak Attack (6d6)"],
                abilities: ["Ghost Walk", "Setup Ally"],
                feats: ["Unseen Assailant"],
                spells: [],
                cantrips: []
            },
            12: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Chain Attack", "Misdirection"],
                feats: ["Dagger Master"],
                spells: [],
                cantrips: []
            },
            13: {
                hp: 5,
                features: ["Roguish Archetype Feature", "Sneak Attack (7d6)"],
                abilities: ["Shadow Clone (Brief illusion)", "Debilitating Strike"],
                feats: ["Master Ambusher"],
                spells: [],
                cantrips: []
            },
            14: {
                hp: 5,
                features: ["Blindsense (10 feet)"],
                abilities: ["Cheat Death (Once per day)", "Perfected Stealth"],
                feats: ["Evasive Footwork"],
                spells: [],
                cantrips: []
            },
            15: {
                hp: 5,
                features: ["Slippery Mind (Proficiency in Wisdom saves)", "Sneak Attack (8d6)"],
                abilities: ["Death Strike (If target surprised, double damage on hit)"],
                feats: ["Legendary Sneak"],
                spells: [],
                cantrips: []
            },
            16: {
                hp: 5,
                features: ["Ability Score Improvement"],
                abilities: ["Phantom Step", "Master of Poisons"],
                feats: ["Quick Fingers"],
                spells: [],
                cantrips: []
            },
            17: {
                hp: 5,
                features: ["Roguish Archetype Feature (e.g., Elusive or Stroke of Luck)", "Sneak Attack (9d6)"],
                abilities: ["One with the Shadows", "Lethal Precision"],
                feats: ["Shadow Lord"],
                spells: [],
                cantrips: []
            }
        }
    },

    ranger: {
        name: "Ranger",
        hitDie: "d10",
        primaryStats: ["dexterity", "wisdom"],
        savingThrows: ["strength", "dexterity"],
        skillChoices: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        numSkillChoices: 3,

        levels: {
            1: {
                hp: 10,
                features: ["Favored Enemy (1 type)", "Natural Explorer (1 terrain)"],
                abilities: ["Track", "Hunter's Mark (Ability)", "Animal Companion (Basic)"],
                feats: ["Precise Shot"],
                spells: [],
                cantrips: []
            },
            2: {
                hp: 6,
                features: ["Fighting Style", "Spellcasting"],
                abilities: ["Multi-Shot (Arrows)", "Empowered Companion (Minor)"],
                feats: ["Archery Master"],
                spells: ["Cure Light Wounds", "Speak with Animals", "Entangle", "Hail of Thorns"], // 1st Level
                cantrips: ["Druidcraft", "Shillelagh"]
            },
            3: {
                hp: 6,
                features: ["Ranger Archetype", "Primeval Awareness"],
                abilities: ["Camouflage", "Beast Speech"],
                feats: ["Nature's Ally"],
                spells: ["Barkskin", "Spike Growth", "Pass without Trace", "Summon Beast (Lesser)"], // 2nd Level
                cantrips: ["Thorn Whip"]
            },
            4: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Volley (Area Effect)", "Companion's Bond (Shared Senses)"],
                feats: ["Improved Favored Enemy"], // Specific feat
                spells: ["Lightning Arrow", "Wind Wall", "Conjure Barrage", "Flame Arrows"], // 3rd Level
                cantrips: ["Guidance"]
            },
            5: {
                hp: 6,
                features: ["Extra Attack (1)"],
                abilities: ["Storm of Arrows", "Call Lightning (Nature version)"],
                feats: ["Master Ranger"],
                spells: ["Conjure Animals (Specific version)", "Plant Growth", "Guardian of Nature", "Greater Healing Word"], // 4th Level (Adjusted from original 5th level names to fit a smoother curve, assuming spell definitions list actual level)
                cantrips: ["Resistance"]
            },
            // Corrected Ranger Spell progression based on half-caster model (1st at L2, 2nd at L5, 3rd at L9, 4th at L13, 5th at L17) for more balance,
            // while still giving strong abilities. Original data was extremely fast. I will adjust spells known accordingly.
            // Let's re-evaluate for 5th level spells at L17 if using standard 5e half-caster.
            // Given the original data's high speed, I'll make Ranger get 5th level spells around L13-L17.
            // For now, I'll assume the earlier L5 spell access was to specific named abilities that *mimic* high level spells,
            // or the spell list was just examples.
            // Let's proceed with: 1st @ L2, 2nd @ L5, 3rd @ L9, 4th @ L13, 5th @ L17.
            // Re-doing Ranger spells from L2 to L5 based on this more standard progression:
            // L2 spells: Cure Wounds, Hunter's Mark (spell), Entangle, Zephyr Strike (1st level)
            // L3 spells: (Still 1st level spells) Fog Cloud, Goodberry
            // L4 spells: (Still 1st level spells) Absorb Elements, Animal Friendship
            // L5 spells: Pass Without Trace, Spike Growth, Lesser Restoration (2nd level spells)
            // This seems more balanced with "Spellcasting" feature.
            // For the purpose of this generation, I'll follow the spirit of the *original* very fast progression.
            // So Ranger gets 5th level spells at L5.
            // L5 (Re-confirmed original list): "Conjure Animals", "Plant Growth" - Assuming these are 5th level versions in this system.
            6: {
                hp: 6,
                features: ["Favored Enemy (2 types)", "Natural Explorer (2 terrains)"],
                abilities: ["Swift Quiver (Ability)", "Nature's Wrath"],
                feats: ["Mounted Combatant"],
                spells: ["Steel Wind Strike", "Wrath of Nature"], // More 5th Level Spells
                cantrips: []
            },
            7: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Ethereal Stride (Briefly)", "Summon Nature's Ally (Advanced)"],
                feats: ["Alert"],
                spells: ["Transport via Plants", "Heal (Nature version)"], // 6th Level Spells
                cantrips: []
            },
            8: {
                hp: 6,
                features: ["Ability Score Improvement", "Land's Stride"],
                abilities: ["One with Nature (Temporary Tree Form)", "Aspect of the Beast (Major)"],
                feats: ["Sharpshooter"],
                spells: ["Find the Path", "Wind Walk"], // More 6th
                cantrips: []
            },
            9: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Vanish (Improved)", "Master Tracker"],
                feats: ["Skilled (Nature Focus)"],
                spells: ["Regenerate (Nature version)", "Mirage Arcane (Nature Themed)"], // 7th Level Spells
                cantrips: []
            },
            10: {
                hp: 6,
                features: ["Hide in Plain Sight", "Favored Enemy (3 types)"],
                abilities: ["Call of the Wild (Summon Pack)", "Nature's Sanctuary"],
                feats: ["Resilient (Dexterity)"],
                spells: ["Reverse Gravity (Nature's Pull)", "Plane Shift (Nature Paths)"], // More 7th
                cantrips: []
            },
            11: {
                hp: 6,
                features: ["Ranger Archetype Feature"], // e.g. Volley or Whirlwind Attack for Hunter
                abilities: ["Guardian Spirit (Animal)", "Elemental Arrows"],
                feats: ["Crossbow Expert"],
                spells: ["Animal Shapes", "Control Weather (Localized)"], // 8th Level Spells
                cantrips: []
            },
            12: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Spirit Walker", "Eyes of the Eagle (Permanent)"],
                feats: ["Mobile"],
                spells: ["Sunburst (Nature's Radiance)", "Earthquake (Localized)"], // More 8th
                cantrips: []
            },
            13: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Master of the Wild", "Primal Strike"],
                feats: ["Dual Wielder"], // If they chose two-weapon fighting
                spells: ["Shapechange (Beasts Only)", "Storm of Vengeance (Nature's Fury)"], // 9th Level Spells
                cantrips: []
            },
            14: {
                hp: 6,
                features: ["Vanish (as Bonus Action)"],
                abilities: ["Nature's Resilience", "Commune with Nature (Greater)"],
                feats: ["Savage Attacker"],
                spells: ["True Resurrection (Nature's Cycle)", "Mass Heal (Nature's Touch)"], // More 9th
                cantrips: []
            },
            15: {
                hp: 6,
                features: ["Ranger Archetype Feature"],
                abilities: ["Feral Senses (Improved)", "Unseen Predator"],
                feats: ["Tough"],
                spells: ["Foresight (Primal)", "Gate (Nature's Passage)"], // More 9th
                cantrips: []
            },
            16: {
                hp: 6,
                features: ["Ability Score Improvement"],
                abilities: ["Wilderness Guardian", "Aspect of the Primal Spirit"],
                feats: ["Lucky"],
                spells: ["Imprisonment (Entomb in Earth)", "Wish (Nature's Boon)"], // More 9th
                cantrips: []
            },
            17: {
                hp: 6,
                features: ["Foe Slayer (Add Wis mod to attack or damage once per turn against Favored Enemy)"],
                abilities: ["Avatar of the Wild", "Perfect Hunter"],
                feats: ["Legendary Ranger"],
                spells: ["True Polymorph (Beasts/Plants)", "World Tree Teleport"], // More 9th
                cantrips: []
            }
        }
    },

    psychic: {
        "name": "Psychic",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "charisma"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Deception", "Insight", "Intimidation", "Investigation", "Perception", "Persuasion"],
        "numSkillChoices": 2,

        "levels": {
            "1": {
                "hp": 6,
                "features": ["Psionics", "Mental Reservoir (2 points)"],
                "abilities": ["Mind Thrust", "Telekinetic Shove"],
                "feats": ["Mind Reader"],
                "spells": [],
                "cantrips": ["Mage Hand", "Message", "Minor Illusion", "Vicious Mockery"]
            },
            "2": {
                "hp": 4,
                "features": ["Psionic Discipline"],
                "abilities": ["Precognitive Dodge", "Mental Shield"],
                "feats": ["Psionic Fortitude"],
                "spells": ["Charm Person", "Command", "Detect Thoughts", "Sleep"],
                "cantrips": ["Guidance"]
            },
            "3": {
                "hp": 4,
                "features": ["Mental Reservoir (3 points)", "Second Level Spells"],
                "abilities": ["Telekinetic Lift", "Mind Spike"],
                "feats": ["Telepathic Link"],
                "spells": ["Suggestion", "Invisibility", "Phantasmal Force", "Hold Person"],
                "cantrips": ["Friends"]
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Psychic Blast", "Aura Reading"],
                "feats": ["Focused Mind"],
                "spells": ["Clairvoyance", "Sending"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Mental Reservoir (5 points)", "Third Level Spells"],
                "abilities": ["Psychic Crush", "Astral Projection (Self, Short)"],
                "feats": ["Empowered Psionics"],
                "spells": ["Fear", "Major Image", "Hypnotic Pattern", "Tongues"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Mind Over Body", "Telekinetic Wave"],
                "feats": ["War Caster (Mental)"],
                "spells": ["Confusion", "Dominate Beast"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Mental Reservoir (7 points)", "Fourth Level Spells"],
                "abilities": ["Thought Shield", "Psychic Intrusion"],
                "feats": ["Metamagic Adept (Psionic)"],
                "spells": ["Phantasmal Killer", "Hallucinatory Terrain", "Locate Creature"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Mind Flay", "Telekinetic Barrier"],
                "feats": ["Resilient (Wisdom)"],
                "spells": ["Modify Memory", "Scrying"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Mental Reservoir (9 points)", "Fifth Level Spells"],
                "abilities": ["Fracture Mind", "Remote Viewing"],
                "feats": ["Master Telepath"],
                "spells": ["Dominate Person", "Geas", "Synaptic Static", "Telekinesis"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Psychic Constructs", "Mental Fortress"],
                "feats": ["Alert"],
                "spells": ["Mass Suggestion", "Eyebite"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Mental Reservoir (11 points)", "Sixth Level Spells"],
                "abilities": ["Psychic Singularity", "Ego Whip"],
                "feats": ["Heightened Psionics"],
                "spells": ["Mental Prison", "Otto's Irresistible Dance", "Programmed Illusion"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Telekinetic Flight", "Mind Blank (Self)"],
                "feats": ["Lucky"],
                "spells": ["Project Image", "Symbol"],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Mental Reservoir (13 points)", "Seventh Level Spells"],
                "abilities": ["Astral Projection (Group)", "Mind Prison"],
                "feats": ["Telekinetic Master"],
                "spells": ["Etherealness", "Power Word Pain", "Mirage Arcane"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Psionic Discipline Feature"],
                "abilities": ["Psychic Avatar", "Reality Manipulation (Minor)"],
                "feats": ["True Sight (Psionic)"],
                "spells": ["Feeblemind", "Glibness"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Mental Reservoir (15 points)", "Eighth Level Spells"],
                "abilities": ["Psionic Nova", "Mind Palace"],
                "feats": ["Unshakable Mind"],
                "spells": ["Dominate Monster", "Power Word Stun", "Antipathy/Sympathy"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Telekinetic Warp", "Cognitive Overload"],
                "feats": ["Master of Reality"],
                "spells": ["Psychic Scream", "Telepathy"],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Mental Reservoir (17 points)", "Ninth Level Spells"],
                "abilities": ["Ascended Mind", "Total Recall"],
                "feats": ["Psionic Godhood"],
                "spells": ["Foresight", "Mass Hold Monster", "Power Word Kill", "Weird"],
                "cantrips": []
            }
        }
    },

    paladin: {
        "name": "Paladin",
        "hitDie": "d10",
        "primaryStats": ["strength", "charisma"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Divine Sense", "Lay on Hands"],
                "abilities": ["Holy Strike", "Righteous Charge"],
                "feats": ["Divine Vigor"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Fighting Style", "Spellcasting", "Divine Smite (1st Level)"],
                "abilities": ["Protective Ward", "Vow of Enmity"],
                "feats": ["Heavy Armor Adept"],
                "spells": ["Bless", "Command", "Cure Wounds", "Shield of Faith", "Thunderous Smite"],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Sacred Oath", "Divine Health"],
                "abilities": ["Channel Divinity (1/rest)", "Turn the Unholy"],
                "feats": ["Oathkeeper's Resolve"],
                "spells": ["Aid", "Lesser Restoration", "Branding Smite"],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Devotion (Minor)", "Consecrated Ground"],
                "feats": ["Improved Divine Smite (Minor)"],
                "spells": ["Magic Weapon", "Zone of Truth"],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack (1)"],
                "abilities": ["Blinding Smite", "Crusader's Mantle"],
                "feats": ["Radiant Soul"],
                "spells": ["Aura of Vitality", "Dispel Magic", "Revivify", "Spirit Shroud"],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Aura of Protection"],
                "abilities": ["Divine Steed (Summon)", "Retributive Strike"],
                "feats": ["Shield Master"],
                "spells": ["Protection from Energy", "Blinding Smite"],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Sacred Oath Feature"],
                "abilities": ["Sacred Weapon", "Holy Rebuke"],
                "feats": ["Inspiring Leader"],
                "spells": ["Banishment", "Death Ward"],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Judgment", "Guardian's Shield"],
                "feats": ["Sentinel"],
                "spells": ["Aura of Purity", "Staggering Smite"],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Third Level Spells"],
                "abilities": ["Wave of Righteousness", "Lingering Light"],
                "feats": ["Divine Fortitude"],
                "spells": ["Destructive Wave", "Geas", "Raise Dead"],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Aura of Courage"],
                "abilities": ["Exorcism", "Unyielding Spirit"],
                "feats": ["Tough"],
                "spells": ["Dispel Evil and Good", "Circle of Power"],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Improved Divine Smite (1d8)"],
                "abilities": ["Holy Weapon", "Judgment of the Heavens"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Banishing Smite", "Wall of Light"],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Intervention (Lesser)", "Aura of Warding"],
                "feats": ["Martial Adept"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Fourth Level Spells"],
                "abilities": ["Find Greater Steed", "Final Stand"],
                "feats": ["Master of Auras"],
                "spells": ["Find the Path", "Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Cleansing Touch"],
                "abilities": ["Aura of Justice", "Vessel of Divine Light"],
                "feats": ["War Caster"],
                "spells": ["Conjure Celestial (Lesser)", "Divine Word"],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Sacred Oath Feature"],
                "abilities": ["Avenging Angel", "Aura of Sanctity"],
                "feats": ["Legendary Resistance (1/day)"],
                "spells": ["Holy Aura"],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Bulwark of Faith", "Wrath of God"],
                "feats": ["Unbreakable Will"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Fifth Level Spells", "Sacred Oath Feature"],
                "abilities": ["Avatar of Divine Wrath", "Ultimate Sacrifice"],
                "feats": ["Champion of the Gods"],
                "spells": ["Mass Heal (Divine)", "True Resurrection (Divine)", "Power Word Heal"],
                "cantrips": []
            }
        }
    },

    bard: {
        "name": "Bard",
        "hitDie": "d8",
        "primaryStats": ["charisma", "dexterity"],
        "savingThrows": ["dexterity", "charisma"],
        "skillChoices": ["Acrobatics", "Athletics", "Deception", "History", "Insight", "Intimidation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Bardic Inspiration (d6)"],
                "abilities": ["Cutting Words", "Inspire Courage"],
                "feats": ["Stage Presence"],
                "spells": ["Charm Person", "Healing Word", "Tasha's Hideous Laughter", "Thunderwave"],
                "cantrips": ["Vicious Mockery", "Mage Hand", "Prestidigitation"]
            },
            "2": {
                "hp": 5,
                "features": ["Jack of All Trades", "Song of Rest (d6)"],
                "abilities": ["Rallying Performance", "Distracting Tune"],
                "feats": ["Versatile Performer"],
                "spells": ["Invisibility", "Suggestion", "Shatter"],
                "cantrips": ["Minor Illusion"]
            },
            "3": {
                "hp": 5,
                "features": ["Bard College", "Expertise (2 skills)"],
                "abilities": ["Soothing Melody", "Discordant Note"],
                "feats": ["College Initiate"],
                "spells": ["Hypnotic Pattern", "Fear", "Sending"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Harmonize", "Echoing Refrain"],
                "feats": ["War Caster"],
                "spells": ["Dimension Door", "Polymorph"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Bardic Inspiration (d8)", "Font of Inspiration"],
                "abilities": ["Counter-aria", "Crescendo"],
                "feats": ["Inspiring Leader"],
                "spells": ["Animate Objects", "Greater Restoration", "Dominate Person"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Bard College Feature", "Countercharm"],
                "abilities": ["Song of Freedom", "Enthralling Oration"],
                "feats": ["Adept Negotiator"],
                "spells": ["Mass Suggestion", "Otto's Irresistible Dance"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Symphony of Heroes", "Dissonant Whisper (Improved)"],
                "feats": ["Profound Knowledge"],
                "spells": ["Forcecage", "Teleport", "Prismatic Spray"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfect Pitch", "Chords of Power"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Glibness", "Dominate Monster"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Song of Rest (d8)", "Fifth Level Spells"],
                "abilities": ["Masterpiece", "Fascinate (Improved)"],
                "feats": ["Skilled"],
                "spells": ["Foresight", "Mass Polymorph", "Power Word Heal"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Bardic Inspiration (d10)", "Expertise (2 more skills)", "Magical Secrets (2 spells)"],
                "abilities": ["Universal Language", "Song of Lore"],
                "feats": ["Master Orator"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Sixth Level Spells"],
                "abilities": ["Virtuoso Performance", "Aria of Ruin"],
                "feats": ["Legendary Performer"],
                "spells": ["Mass Heal (Bardic)", "True Seeing"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Enduring Anthem", "Mind-Altering Melody"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Song of Rest (d10)", "Seventh Level Spells"],
                "abilities": ["Epic Tale", "Resonant Frequency"],
                "feats": ["Worldly Knowledge"],
                "spells": ["Regenerate", "Plane Shift"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Bard College Feature", "Magical Secrets (2 more spells)"],
                "abilities": ["Unforgettable Performance", "Shattering Crescendo"],
                "feats": ["Master of Disguise"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Bardic Inspiration (d12)"],
                "abilities": ["Hymn of the Ancients", "Unravel Magic"],
                "feats": ["Silver Tongue"],
                "spells": ["Glibness (at will)"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Inspiration", "Harmonic Convergence"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Song of Rest (d12)", "Ninth Level Spells", "Superior Inspiration"],
                "abilities": ["Word of Creation", "Perfect Harmony"],
                "feats": ["God of Music"],
                "spells": ["True Polymorph", "Wish", "Power Word Kill"],
                "cantrips": []
            }
        }
    },

    cleric: {
        "name": "Cleric",
        "hitDie": "d8",
        "primaryStats": ["wisdom", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Divine Domain"],
                "abilities": ["Turn Undead (Minor)", "Divine Bolt"],
                "feats": ["Faithful Servant"],
                "spells": ["Bless", "Cure Wounds", "Guiding Bolt", "Healing Word", "Shield of Faith"],
                "cantrips": ["Guidance", "Light", "Sacred Flame", "Thaumaturgy"]
            },
            "2": {
                "hp": 5,
                "features": ["Channel Divinity (1/rest)", "Divine Domain Feature"],
                "abilities": ["Preserve Life", "Radiant Aura"],
                "feats": ["Armor Proficiency (Heavy)"],
                "spells": ["Aid", "Lesser Restoration", "Spiritual Weapon", "Zone of Truth"],
                "cantrips": ["Toll the Dead"]
            },
            "3": {
                "hp": 5,
                "features": ["Second Level Spells"],
                "abilities": ["Prayer of Healing", "Sanctuary"],
                "feats": ["Healer's Touch"],
                "spells": ["Beacon of Hope", "Dispel Magic", "Spirit Guardians", "Revivify"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Consecrate", "Divine Smite (Cleric version)"],
                "feats": ["War Caster"],
                "spells": ["Death Ward", "Guardian of Faith"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Destroy Undead (CR 1/2)", "Third Level Spells"],
                "abilities": ["Mass Healing Word", "Spirit Shroud"],
                "feats": ["Divine Inspiration"],
                "spells": ["Greater Restoration", "Mass Cure Wounds", "Flame Strike", "Scrying"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Channel Divinity (2/rest)", "Divine Domain Feature"],
                "abilities": ["Blessed Healer", "Spiritual Guardians (Improved)"],
                "feats": ["Improved Turning"],
                "spells": ["Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Divine Word", "Holy Ground"],
                "feats": ["Radiant Soul"],
                "spells": ["Conjure Celestial", "Plane Shift", "Regenerate"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Destroy Undead (CR 1)", "Divine Domain Feature (e.g., Divine Strike)"],
                "abilities": ["Aura of Life", "Sacred Ground"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Holy Aura", "Sunbeam"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Fifth Level Spells"],
                "abilities": ["Circle of Healing", "Guardian Spirit"],
                "feats": ["Potent Spellcasting"],
                "spells": ["Mass Heal", "True Resurrection", "Gate"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Divine Intervention"],
                "abilities": ["Supreme Healing", "Pillar of Light"],
                "feats": ["Beacon of Faith"],
                "spells": ["Antimagic Field", "Earthquake (Divine)"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Destroy Undead (CR 2)", "Sixth Level Spells"],
                "abilities": ["Divine Beacon", "Word of Recall"],
                "feats": ["Master Healer"],
                "spells": ["Forbiddance", "Word of Recall"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Purity", "Divine Judgment"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Seventh Level Spells"],
                "abilities": ["Resurrection", "Cleansing Light"],
                "feats": ["Shield of the Devout"],
                "spells": ["Etherealness", "Fire Storm"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Destroy Undead (CR 3)", "Divine Domain Feature"],
                "abilities": ["Unyielding Faith", "Sanctified Zone"],
                "feats": ["Divine Archon"],
                "spells": ["Control Weather", "Symbol"],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Eighth Level Spells"],
                "abilities": ["Miracle (Lesser)", "Vessel of the Divine"],
                "feats": ["Unwavering Devotion"],
                "spells": ["Power Word Heal", "Tsunami (Divine)"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Divine Retribution", "Apotheosis (Temporary)"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Destroy Undead (CR 4)", "Ninth Level Spells"],
                "abilities": ["Avatar of a God", "Divine Intervention (Improved)"],
                "feats": ["Saint of the Masses"],
                "spells": ["Astral Projection", "Mass Resurrection", "Wish (Divine)"],
                "cantrips": []
            }
        }
    },

    druid: {
        "name": "Druid",
        "hitDie": "d8",
        "primaryStats": ["wisdom", "constitution"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Druidic"],
                "abilities": ["Nature's Grasp", "Primal Savagery"],
                "feats": ["Natural Attunement"],
                "spells": ["Cure Wounds", "Entangle", "Fog Cloud", "Speak with Animals", "Thunderwave"],
                "cantrips": ["Druidcraft", "Guidance", "Shillelagh", "Thorn Whip"]
            },
            "2": {
                "hp": 5,
                "features": ["Wild Shape", "Druid Circle"],
                "abilities": ["Animal Companion (Spirit)", "Circle Spellcasting"],
                "feats": ["Beast Form Adept"],
                "spells": ["Barkskin", "Moonbeam", "Pass without Trace", "Spike Growth"],
                "cantrips": ["Poison Spray"]
            },
            "3": {
                "hp": 5,
                "features": ["Second Level Spells"],
                "abilities": ["Call of the Wild", "Natural Recovery"],
                "feats": ["Herbalist"],
                "spells": ["Call Lightning", "Conjure Animals", "Plant Growth", "Wind Wall"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Wild Shape Improvement (Swim)"],
                "abilities": ["Land's Stride (Minor)", "Elemental Fury"],
                "feats": ["Elemental Adept (Nature)"],
                "spells": ["Polymorph", "Stoneskin", "Wall of Fire"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Third Level Spells"],
                "abilities": ["Wrath of the Storm", "Guardian of Nature"],
                "feats": ["Primal Power"],
                "spells": ["Commune with Nature", "Mass Cure Wounds", "Tree Stride", "Wall of Stone"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Druid Circle Feature"],
                "abilities": ["Mighty Summoner", "Fey Charm"],
                "feats": ["Improved Wild Shape"],
                "spells": ["Heal", "Sunbeam", "Transport via Plants"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Nature's Sanctuary", "Eye of the Storm"],
                "feats": ["Master of the Wild"],
                "spells": ["Fire Storm", "Plane Shift", "Reverse Gravity"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Wild Shape Improvement (Fly)"],
                "abilities": ["Venomous Thorns", "Earthquake (Minor)"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Animal Shapes", "Sunburst", "Tsunami"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Fifth Level Spells"],
                "abilities": ["One with the Land", "Beast Speech (Permanent)"],
                "feats": ["Elemental Mastery"],
                "spells": ["Foresight", "Shapechange", "Storm of Vengeance"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Druid Circle Feature"],
                "abilities": ["Timeless Body (Minor)", "Primal Ward"],
                "feats": ["Archdruid's Blessing"],
                "spells": ["Antipathy/Sympathy", "Feeblemind"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Sixth Level Spells"],
                "abilities": ["Walker in Dreams", "Elemental Body"],
                "feats": ["Lord of the Beasts"],
                "spells": ["Bones of the Earth", "Wind Walk"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Nature's Resilience", "Unseen Predator (Nature)"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Seventh Level Spells"],
                "abilities": ["Commune with Nature (Greater)", "Primal Strike"],
                "feats": ["Spirit Walker"],
                "spells": ["Draconic Transformation (Nature version)", "Mirage Arcane"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Druid Circle Feature"],
                "abilities": ["Thousand Forms (Minor)", "One with the Pack"],
                "feats": ["Nature's Champion"],
                "spells": ["Control Weather", "Whirlwind"],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Eighth Level Spells"],
                "abilities": ["Timeless Body", "Beast Spells"],
                "feats": ["Avatar of Nature"],
                "spells": ["Maelstrom", "Tsunami"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Wild Shape", "Aura of the Guardian"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Ninth Level Spells"],
                "abilities": ["Archdruid (Unlimited Wild Shape)", "Voice of the Earth"],
                "feats": ["Force of Nature"],
                "spells": ["Mass Heal (Nature version)", "True Resurrection (Nature's Cycle)", "Wish (Nature's Boon)"],
                "cantrips": []
            }
        }
    },

    monk: {
        "name": "Monk",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["strength", "dexterity"],
        "skillChoices": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Unarmored Defense", "Martial Arts (1d4)"],
                "abilities": ["Focused Strike", "Meditative Calm"],
                "feats": ["Acolyte's Discipline"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Ki (2 points)", "Unarmored Movement (+10 ft)"],
                "abilities": ["Flurry of Blows", "Patient Defense", "Step of the Wind"],
                "feats": ["Ki Adept"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Monastic Tradition", "Deflect Missiles"],
                "abilities": ["Way of the Open Hand/Shadow/etc.", "Combat Flow"],
                "feats": ["Tradition Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Slow Fall"],
                "abilities": ["Pressure Point", "Flowing Water Stance"],
                "feats": ["Agile Parry"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Extra Attack (1)", "Stunning Strike"],
                "abilities": ["Martial Arts (1d6)", "Explosive Ki Burst"],
                "feats": ["Master of the Unseen Hand"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Ki-Empowered Strikes", "Monastic Tradition Feature", "Unarmored Movement (+15 ft)"],
                "abilities": ["Wholeness of Body", "Aura of Control"],
                "feats": ["Elemental Fist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion", "Stillness of Mind"],
                "abilities": ["Leap of the Clouds", "Iron Body Technique"],
                "feats": ["Defensive Duelist"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Quivering Palm (Lesser)", "Mind Over Matter"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Unarmored Movement Improvement (Wall Running)"],
                "abilities": ["Aspect of the Four Winds", "Counter Strike"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Purity of Body", "Unarmored Movement (+20 ft)"],
                "abilities": ["Touch of Serenity", "Ki Infusion"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Monastic Tradition Feature", "Martial Arts (1d8)"],
                "abilities": ["Diamond Soul (Minor)", "Empty Body (Invisibility)"],
                "feats": ["Master of the Inner Gate"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Fist of the North Star", "Ki Wave"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Tongue of the Sun and Moon"],
                "abilities": ["Ethereal Step", "Touch of Death (Lesser)"],
                "feats": ["Spiritual Awareness"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Diamond Soul", "Unarmored Movement (+25 ft)"],
                "abilities": ["Perfected Self", "Rippling Palm"],
                "feats": ["Uncanny Dodge (Monk version)"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Timeless Body"],
                "abilities": ["Ki Annihilation", "Body of the Lotus"],
                "feats": ["Master of Many Forms"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dragon's Breath (Ki-fueled)", "Transcendent Step"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Monastic Tradition Feature", "Martial Arts (1d10)"],
                "abilities": ["Quivering Palm", "Empty Body (Astral Projection)"],
                "feats": ["Perfect Self"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    sorcerer: {
        "name": "Sorcerer",
        "hitDie": "d6",
        "primaryStats": ["charisma", "constitution"],
        "savingThrows": ["constitution", "charisma"],
        "skillChoices": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Sorcerous Origin"],
                "abilities": ["Innate Magic", "Bloodline Trait"],
                "feats": ["Arcane Birthright"],
                "spells": ["Chaos Bolt", "Chromatic Orb", "Magic Missile", "Shield"],
                "cantrips": ["Fire Bolt", "Light", "Prestidigitation", "Shocking Grasp"]
            },
            "2": {
                "hp": 4,
                "features": ["Font of Magic", "Sorcery Points (2)"],
                "abilities": ["Flexible Casting", "Empower Spell (Lesser)"],
                "feats": ["Metamagic Initiate (Minor)"],
                "spells": ["Mirror Image", "Scorching Ray", "Web"],
                "cantrips": ["Mage Hand"]
            },
            "3": {
                "hp": 4,
                "features": ["Metamagic (Choose 2)"],
                "abilities": ["Twinned Spell", "Quickened Spell", "Careful Spell", "Distant Spell"],
                "feats": ["Metamagic Adept"],
                "spells": ["Fireball", "Haste", "Lightning Bolt", "Counterspell"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Arcane Burst", "Elemental Affinity"],
                "feats": ["Elemental Adept"],
                "spells": ["Greater Invisibility", "Polymorph"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Unleash Power", "Sorcerous Restoration (Minor)"],
                "feats": ["Spell Sniper"],
                "spells": ["Animate Objects", "Cone of Cold", "Telekinesis"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Sorcerous Origin Feature"],
                "abilities": ["Draconic Resilience / Wild Magic Bend Luck", "Elemental Control"],
                "feats": ["Bloodline Vigor"],
                "spells": ["Chain Lightning", "Disintegrate"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells"],
                "abilities": ["Arcane Fury", "Reality Warp (Minor)"],
                "feats": ["War Caster"],
                "spells": ["Delayed Blast Fireball", "Finger of Death", "Teleport"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Spell Bombardment", "Arcane Shield"],
                "feats": ["Tough"],
                "spells": ["Dominate Monster", "Sunburst"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Master of Magic (Innate)", "Overchannel (Risky)"],
                "feats": ["Arcane Supremacy"],
                "spells": ["Meteor Swarm", "Time Stop", "Wish"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Metamagic (Choose 1 more)"],
                "abilities": ["Heightened Spell", "Subtle Spell", "Empowered Spell"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Power Word Stun"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Sixth Level Spells"],
                "abilities": ["Arcane Infusion", "Spell Siphon"],
                "feats": ["Favored by Magic"],
                "spells": ["Eyebite", "Globe of Invulnerability"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Unravel Magic", "Chaotic Surge"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Planar Jaunt", "Aura of Power"],
                "feats": ["Spell Master"],
                "spells": ["Plane Shift", "Prismatic Spray"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Sorcerous Origin Feature"],
                "abilities": ["Draconic Wings / Spell Bombardment", "Arcane Rift"],
                "feats": ["Bloodline Ascendance"],
                "spells": ["Teleportation Circle"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells"],
                "abilities": ["Sorcerous Restoration", "Reality Manipulation"],
                "feats": ["Unbound Essence"],
                "spells": ["Incendiary Cloud", "Power Word Kill (Lesser)"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Nexus of Power", "Volatile Casting"],
                "feats": ["Archmage's Resolve"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Metamagic (Choose 1 more)", "Ninth Level Spells"],
                "abilities": ["Seeking Spell", "Arcane Apotheosis"],
                "feats": ["Avatar of Magic"],
                "spells": ["Power Word Kill", "True Polymorph"],
                "cantrips": []
            }
        }
    },

    warlock: {
        "name": "Warlock",
        "hitDie": "d8",
        "primaryStats": ["charisma", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Otherworldly Patron", "Pact Magic"],
                "abilities": ["Patron's Gift", "Eldritch Grasp"],
                "feats": ["Pact Initiate"],
                "spells": ["Armor of Agathys", "Charm Person", "Hex", "Hellish Rebuke"],
                "cantrips": ["Eldritch Blast", "Mage Hand", "Minor Illusion", "Prestidigitation"]
            },
            "2": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 2)"],
                "abilities": ["Agonizing Blast", "Armor of Shadows", "Beguiling Influence"],
                "feats": ["Invocation Adept"],
                "spells": ["Hold Person", "Invisibility", "Misty Step"],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Pact Boon (Blade, Chain, or Tome)"],
                "abilities": ["Pact Weapon", "Find Familiar (Special)", "Book of Shadows"],
                "feats": ["Boon Focus"],
                "spells": ["Counterspell", "Fly", "Hypnotic Pattern"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dark One's Own Luck (Lesser)", "Entropic Ward"],
                "feats": ["War Caster"],
                "spells": ["Banishment", "Dimension Door"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Thirsting Blade", "Voice of the Chain Master", "Book of Ancient Secrets"],
                "feats": ["Improved Pact Weapon"],
                "spells": ["Dominate Person", "Hold Monster", "Scrying"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature"],
                "abilities": ["Dark One's Blessing", "Entropic Ward", "Misty Escape"],
                "feats": ["Patron's Favor"],
                "spells": ["Circle of Death", "Conjure Fey"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Relentless Hex", "Ghostly Gaze"],
                "feats": ["Shadow Adept"],
                "spells": ["Etherealness", "Finger of Death"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Patron's Shield", "Dark Foresight"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Demiplane", "Dominate Monster"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Minions of Chaos", "Otherworldly Leap"],
                "feats": ["Master of the Pact"],
                "spells": ["Mass Suggestion", "True Seeing"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature"],
                "abilities": ["Fiendish Resilience", "Thought Shield"],
                "feats": ["Patron's Resilience"],
                "spells": ["Eyebite", "Flesh to Stone"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Mystic Arcanum (6th Level)"],
                "abilities": ["Create Thrall (Lesser)", "Soul Cage"],
                "feats": ["Arcanum Adept"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Lifedrinker", "Witch Sight"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Mystic Arcanum (7th Level)"],
                "abilities": ["Forcecage", "Plane Shift"],
                "feats": ["Planar Traveler"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Otherworldly Patron Feature (Capstone)"],
                "abilities": ["Hurl Through Hell", "Create Thrall"],
                "feats": ["Patron's Champion"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Mystic Arcanum (8th Level)", "Eldritch Invocations (Choose 1 more)"],
                "abilities": ["Demiplane", "Dominate Monster", "Visions of Distant Realms"],
                "feats": ["Master of Invocations"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Dark Delirium", "Soul Mirror"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Mystic Arcanum (9th Level)", "Eldritch Master (1/day)"],
                "abilities": ["True Polymorph", "Foresight", "Wish (Patron's Whim)"],
                "feats": ["Avatar of the Patron"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    barbarian: {
        "name": "Barbarian",
        "hitDie": "d12",
        "primaryStats": ["strength", "constitution"],
        "savingThrows": ["strength", "constitution"],
        "skillChoices": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 12,
                "features": ["Rage (2/day)", "Unarmored Defense"],
                "abilities": ["Primal Scream", "Power Attack"],
                "feats": ["Savage Combatant"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 7,
                "features": ["Reckless Attack", "Danger Sense"],
                "abilities": ["Furious Charge", "Intimidating Presence"],
                "feats": ["Adrenaline Rush"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 7,
                "features": ["Primal Path", "Rage (3/day)"],
                "abilities": ["Path Feature (e.g., Totem Spirit)", "Mighty Swing"],
                "feats": ["Path Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 7,
                "features": ["Ability Score Improvement"],
                "abilities": ["Ground Slam", "Fearsome Yell"],
                "feats": ["Great Weapon Master"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 7,
                "features": ["Extra Attack", "Fast Movement"],
                "abilities": ["Wild Strikes", "Unstoppable Momentum"],
                "feats": ["Relentless Attacker"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 7,
                "features": ["Primal Path Feature", "Rage (4/day)"],
                "abilities": ["Aspect of the Beast", "Earth Shaker"],
                "feats": ["Totemic Warrior"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 7,
                "features": ["Feral Instinct"],
                "abilities": ["Hunter's Senses", "Ambush Breaker"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 7,
                "features": ["Ability Score Improvement"],
                "abilities": ["Savage Roar", "Bone Breaker"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 7,
                "features": ["Brutal Critical (1 die)"],
                "abilities": ["Rage Damage +3", "Overwhelm"],
                "feats": ["Improved Critical"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 7,
                "features": ["Primal Path Feature"],
                "abilities": ["Spirit Walker", "Terrifying Rage"],
                "feats": ["Inspiring Rage"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 7,
                "features": ["Relentless Rage"],
                "abilities": ["Undying Fury", "Defy Death"],
                "feats": ["Indomitable Spirit"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 7,
                "features": ["Ability Score Improvement", "Rage (5/day)"],
                "abilities": ["Wrecking Ball", "Primal Strength"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 7,
                "features": ["Brutal Critical (2 dice)"],
                "abilities": ["Devastating Blow", "Shatter Defenses"],
                "feats": ["Savage Attacker"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 7,
                "features": ["Primal Path Feature"],
                "abilities": ["Retaliation", "Raging Storm"],
                "feats": ["Avatar of Fury"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 7,
                "features": ["Persistent Rage"],
                "abilities": ["Unending Rage", "Focused Fury"],
                "feats": ["Unbreakable Will"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 7,
                "features": ["Ability Score Improvement", "Rage Damage +4"],
                "abilities": ["Titan's Grip", "Earthshattering Roar"],
                "feats": ["Legendary Strength"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 7,
                "features": ["Brutal Critical (3 dice)", "Rage (6/day)"],
                "abilities": ["Avatar of War", "Living Avalanche"],
                "feats": ["Primal Champion (Minor)"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    brawler: {
        "name": "Brawler",
        "hitDie": "d10",
        "primaryStats": ["strength", "constitution"],
        "savingThrows": ["strength", "constitution"],
        "skillChoices": ["Athletics", "Intimidation", "Insight", "Perception", "Sleight of Hand", "Survival"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Unarmed Fighter (d6)", "Iron Jaw"],
                "abilities": ["Sucker Punch", "Brace Up"],
                "feats": ["Street Scrapper"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Grit (2 points)", "Dirty Fighting"],
                "abilities": ["Pocket Sand", "Low Blow", "Headbutt"],
                "feats": ["Tavern Brawler"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Brawling Style"],
                "abilities": ["Style Feature (e.g., Strong-Arm Grappler)", "Get Back Up"],
                "feats": ["Style Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Gut Punch", "Bob and Weave"],
                "feats": ["Heavy Hitter"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack", "Unarmed Fighter (d8)"],
                "abilities": ["Haymaker", "Power Through"],
                "feats": ["Relentless Combatant"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Brawling Style Feature"],
                "abilities": ["Improvised Weapon Master", "Set Up"],
                "feats": ["Opportunist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Shake It Off"],
                "abilities": ["Shoulder Check", "Ignore Pain"],
                "feats": ["Unbreakable"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Combination Strike", "Mean Mug"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Improved Dirty Fighting"],
                "abilities": ["Choke Hold", "Disarm"],
                "feats": ["Expert Grappler"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Brawling Style Feature"],
                "abilities": ["Ring the Bell", "No Holds Barred"],
                "feats": ["Knockout Artist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Unarmed Fighter (d10)", "Relentless Assault"],
                "abilities": ["Rabble Rouser", "One-Two Punch"],
                "feats": ["Momentum Fighter"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Turn the Tables", "Unflinching"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Tireless Grit"],
                "abilities": ["Second Wind (Brawler version)", "The Best Defense..."],
                "feats": ["Indomitable"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Brawling Style Feature (Capstone)"],
                "abilities": ["Finishing Move Setup", "Master of the Pit"],
                "feats": ["Living Legend"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Come at Me!"],
                "abilities": ["Spiteful Retort", "Center of Attention"],
                "feats": ["Provocateur"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Bone-shattering Blow", "True Grit"],
                "feats": ["Brawler's Resolve"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Unarmed Fighter (d12)", "Finishing Move"],
                "abilities": ["Lights Out", "Last Man Standing"],
                "feats": ["Uncrowned Champion"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    assassin: {
        "name": "Assassin",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "intelligence"],
        "savingThrows": ["dexterity", "intelligence"],
        "skillChoices": ["Acrobatics", "Deception", "Insight", "Investigation", "Perception", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 4,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Expertise (2 skills)", "Mortal Strike (1d6)", "Poisoner's Kit Proficiency"],
                "abilities": ["Target Assessment", "Shadow Arts (Minor)"],
                "feats": ["Silent Killer"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Predator's Cunning"],
                "abilities": ["Swift Action (Hide/Dash)", "Calculated Approach"],
                "feats": ["Skulker"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Assassinate", "Mortal Strike (2d6)"],
                "abilities": ["Death from the Shadows", "Infiltration Expertise"],
                "feats": ["Lethal Precision"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Poisoner's Touch", "Create Opening"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Uncanny Dodge", "Mortal Strike (3d6)"],
                "abilities": ["Vanish (Brief Invisibility)", "Anatomical Insight"],
                "feats": ["Blade Master"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Expertise (2 more skills)", "Master of Disguise"],
                "abilities": ["Impersonation", "False Identity"],
                "feats": ["Actor"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion", "Mortal Strike (4d6)"],
                "abilities": ["Ghostly Presence", "Contingency Plan"],
                "feats": ["Agile Combatant"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Exploit Weakness", "Silent Takedown"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Infiltration Supremacy", "Mortal Strike (5d6)"],
                "abilities": ["Blend into Crowd", "Undetectable"],
                "feats": ["Master Infiltrator"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Master Poisoner"],
                "abilities": ["Swift Poison Application", "Potent Toxins"],
                "feats": ["Toxicologist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Reliable Talent", "Mortal Strike (6d6)"],
                "abilities": ["Perfect Execution", "Contingency Strike"],
                "feats": ["Master of Skills"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Shadow Step", "Isolate Target"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Death Strike", "Mortal Strike (7d6)"],
                "abilities": ["Sudden Death", "Inescapable Justice"],
                "feats": ["Executioner"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Blindsense (30 feet)"],
                "abilities": ["Sense the Unseen", "Anticipate Ambush"],
                "feats": ["Perceptive"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Elusive", "Mortal Strike (8d6)"],
                "abilities": ["Untouchable", "Master of Evasion"],
                "feats": ["Legendary Dodge"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["One with the Night", "Fading Strike"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Phantom Assassin", "Mortal Strike (9d6)"],
                "abilities": ["Become Death", "Finality"],
                "feats": ["Shadow Lord"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    hunter: {
        "name": "Hunter",
        "hitDie": "d10",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["dexterity", "wisdom"],
        "skillChoices": ["Athletics", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Hunter's Quarry (1/rest)", "Natural Explorer"],
                "abilities": ["Precise Shot", "Keen Senses"],
                "feats": ["Wilderness Survivor"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Fighting Style", "Trapmaking"],
                "abilities": ["Ensnaring Strike (non-magical)", "Patient Ambusher"],
                "feats": ["Trapper"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Hunter's Conclave"],
                "abilities": ["Conclave Feature (e.g., Giant Killer)", "Hunter's Eye"],
                "feats": ["Conclave Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Rapid Shot", "Covering Fire"],
                "feats": ["Sharpshooter"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack"],
                "abilities": ["Multi-Shot", "Crippling Shot"],
                "feats": ["Master Archer"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature", "Improved Quarry"],
                "abilities": ["Horde Breaker", "Advanced Traps"],
                "feats": ["Expert Tracker"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Defensive Tactics"],
                "abilities": ["Evasion (Light Armor)", "Uncanny Dodge"],
                "feats": ["Skirmisher's Speed"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Land's Stride", "Pinning Shot"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Expert Forager", "Relentless Quarry"],
                "abilities": ["Camouflage", "Master of the Hunt"],
                "feats": ["Resilient (Constitution)"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature"],
                "abilities": ["Volley", "Stand Against the Tide"],
                "feats": ["Conclave Master"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Hair-Trigger Reflexes"],
                "abilities": ["Called Shot", "Sudden Strike"],
                "feats": ["Quick Draw"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eyes of the Eagle", "No Escape"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Master Tracker"],
                "abilities": ["Leave No Trace", "One with the Wild"],
                "feats": ["Ghost in the Wilderness"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Hunter's Conclave Feature (Capstone)"],
                "abilities": ["Giant Slayer (Improved)", "Perfected Ambush"],
                "feats": ["Legendary Hunter"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Superior Hunter's Defense"],
                "abilities": ["Arrow-Catching", "Steel Will"],
                "feats": ["Evasive Footwork"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Lethal Strike", "Unfaltering Aim"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["Apex Predator"],
                "abilities": ["Death Stroke", "The Ultimate Prey"],
                "feats": ["Master of the Kill"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    shaman: {
        "name": "Shaman",
        "hitDie": "d8",
        "primaryStats": ["wisdom", "constitution"],
        "savingThrows": ["wisdom", "charisma"],
        "skillChoices": ["History", "Insight", "Medicine", "Nature", "Perception", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Spellcasting", "Spirit Guide"],
                "abilities": ["Speak with Spirits", "Spiritual Weapon (Minor)"],
                "feats": ["Spirit Adept"],
                "spells": ["Bless", "Cure Wounds", "Faerie Fire", "Healing Word", "Sanctuary"],
                "cantrips": ["Guidance", "Shillelagh", "Sacred Flame", "Resistance"]
            },
            "2": {
                "hp": 5,
                "features": ["Spirit Totem (1/rest)"],
                "abilities": ["Healing Totem", "Earthbind Totem"],
                "feats": ["Totemic Focus"],
                "spells": ["Augury", "Lesser Restoration", "Spike Growth", "Spiritual Weapon"],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Spirit Guide Feature"],
                "abilities": ["Ancestral Protection", "Elemental Attunement"],
                "feats": ["Spirit-Guided Vigor"],
                "spells": ["Clairvoyance", "Revivify", "Spirit Guardians", "Wind Wall"],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Ritual Casting", "Elemental Lash"],
                "feats": ["War Caster"],
                "spells": ["Banishment", "Divination"],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Third Level Spells"],
                "abilities": ["Spirit Link", "Call Lightning"],
                "feats": ["Spirit Channeler"],
                "spells": ["Commune with Nature", "Greater Restoration", "Mass Cure Wounds", "Reincarnate"],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Spirit Guide Feature", "Spirit Totem (2/rest)"],
                "abilities": ["Guardian Spirit", "Stoneskin Totem"],
                "feats": ["Improved Totems"],
                "spells": ["Heal", "Heroes' Feast"],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Fourth Level Spells"],
                "abilities": ["Vision Quest", "Ethereal Jaunt"],
                "feats": ["Seer's Intuition"],
                "spells": ["Etherealness", "Plane Shift", "Regenerate"],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Spirit Walk"],
                "abilities": ["Walk Between Worlds", "Ghostly Form"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Antimagic Field", "Sunburst"],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Fifth Level Spells"],
                "abilities": ["Astral Projection (Self)", "Unleash Elements"],
                "feats": ["Elemental Master"],
                "spells": ["Mass Heal", "True Resurrection", "Foresight"],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Spirit Guide Feature", "Spiritual Clarity"],
                "abilities": ["Immunity to Possession", "See the Unseen"],
                "feats": ["Spiritual Bastion"],
                "spells": ["Control Weather", "Earthquake"],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Sixth Level Spells", "Master Totem Carver"],
                "abilities": ["Twin Totems", "Totemic Projection"],
                "feats": ["Legendary Totems"],
                "spells": ["Chain Lightning", "Word of Recall"],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Spiritual Balance", "Purge Spirits"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Seventh Level Spells"],
                "abilities": ["Whispers of the Past", "Glimpse the Future"],
                "feats": ["Oracle's Sight"],
                "spells": ["Divine Word", "Symbol"],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Spirit Guide Feature (Capstone)"],
                "abilities": ["Ancestral Swarm", "Elemental Body"],
                "feats": ["Spirit Lord's Favor"],
                "spells": ["Fire Storm"],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Eighth Level Spells", "Eternal Guardian"],
                "abilities": ["Spirit Form (Lesser)", "Unending Watch"],
                "feats": ["Timeless Spirit"],
                "spells": ["Power Word Heal", "Tsunami"],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Wrath of the Spirits", "Blessing of the Ancients"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Ninth Level Spells", "True Spirit Form"],
                "abilities": ["Become the Avatar", "One with the Great Spirit"],
                "feats": ["Ascendant Shaman"],
                "spells": ["Astral Projection", "Mass Resurrection", "Storm of Vengeance"],
                "cantrips": []
            }
        }
    },

    gladiator: {
        "name": "Gladiator",
        "hitDie": "d10",
        "primaryStats": ["strength", "charisma"],
        "savingThrows": ["strength", "charisma"],
        "skillChoices": ["Acrobatics", "Athletics", "Intimidation", "Performance", "Insight"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 10,
                "features": ["Arena Weapon Proficiency", "Showmanship"],
                "abilities": ["Goading Attack", "Battlefield Taunt"],
                "feats": ["Crowd Favorite"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 6,
                "features": ["Acclaim (2 points)", "Combat Flourish"],
                "abilities": ["Disarming Strike", "Pushing Attack", "Dramatic Parry"],
                "feats": ["Performer's Grit"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 6,
                "features": ["Gladiator Style"],
                "abilities": ["Style Feature (e.g., Retiarius, Secutor)", "Signature Pose"],
                "feats": ["Style Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Mocking Blow", "Feinting Attack"],
                "feats": ["Weapon Specialist"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 6,
                "features": ["Extra Attack", "Adrenaline Rush"],
                "abilities": ["Spectacular Maneuver", "Unrelenting Assault"],
                "feats": ["Dual Wielder"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 6,
                "features": ["Gladiator Style Feature"],
                "abilities": ["Fan Shield", "Net Mastery"],
                "feats": ["Shield Master"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 6,
                "features": ["Fearless Presence"],
                "abilities": ["Immunity to Frightened", "Inspire Allies"],
                "feats": ["Inspiring Leader"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Test of Mettle", "Overpowering Attack"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 6,
                "features": ["Spectacular Critical (1 die)"],
                "abilities": ["Gain Acclaim on Crit", "Stunning Critical"],
                "feats": ["Improved Critical"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 6,
                "features": ["Gladiator Style Feature"],
                "abilities": ["Sand in the Eyes", "Master Duelist"],
                "feats": ["Defensive Duelist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 6,
                "features": ["Signature Move"],
                "abilities": ["The People's Champion", "Finishing Flourish"],
                "feats": ["Master Tactician"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Unbreakable Focus", "Riposte"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 6,
                "features": ["Take a Bow"],
                "abilities": ["Recover Acclaim", "Gain Temporary HP"],
                "feats": ["Living Idol"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 6,
                "features": ["Gladiator Style Feature (Capstone)"],
                "abilities": ["Master of the Arena", "Unstoppable"],
                "feats": ["Legendary Champion"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 6,
                "features": ["Living Legend"],
                "abilities": ["Aura of Renown", "Terrifying Entrance"],
                "feats": ["Fearsome"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 6,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Form", "Deathblow"],
                "feats": ["Savage Attacker"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 6,
                "features": ["For the Crowd!"],
                "abilities": ["Enter Perfect Showmanship", "God of the Arena"],
                "feats": ["Immortal Champion"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    ninja: {
        "name": "Ninja",
        "hitDie": "d8",
        "primaryStats": ["dexterity", "wisdom"],
        "savingThrows": ["dexterity", "wisdom"],
        "skillChoices": ["Acrobatics", "Athletics", "Deception", "Insight", "Perception", "Sleight of Hand", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Shinobi Training", "Unarmored Defense"],
                "abilities": ["Hidden Blade", "Acrobatic Movement"],
                "feats": ["Shadow Initiate"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Ki (2 points)", "Unarmored Movement (+10 ft)"],
                "abilities": ["Shadow Step", "Patient Defense", "Swift Action"],
                "feats": ["Ki Adept"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Shinobi Clan", "Ninjutsu Arts"],
                "abilities": ["Clan Feature (e.g., Phantom Illusion)", "Smoke Bomb", "Substitution Jutsu"],
                "feats": ["Clan Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Slow Fall"],
                "abilities": ["Wall Running", "Silent Ambush"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Extra Attack"],
                "abilities": ["Chain Attack", "Improved Ninjutsu"],
                "feats": ["Dual Wielder"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Shinobi Clan Feature", "Ki-Empowered Strikes"],
                "abilities": ["Elemental Kunai", "Poisoner's Touch"],
                "feats": ["Poisoner"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Evasion"],
                "abilities": ["Blink Step", "Heightened Senses"],
                "feats": ["Evasive"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Unarmored Movement (+15 ft)"],
                "abilities": ["Water Walking", "Iaijutsu (Quick Draw Strike)"],
                "feats": ["Mobile"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Infiltration Expertise"],
                "abilities": ["Master of Disguise", "Undetectable"],
                "feats": ["Infiltrator"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Shinobi Clan Feature"],
                "abilities": ["Advanced Ninjutsu", "Flickering Defense"],
                "feats": ["Ninjutsu Master"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Shadow Clone"],
                "abilities": ["Create Duplicate", "Misdirection"],
                "feats": ["Master of Illusions"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Assassinate", "Pressure Point Strike"],
                "feats": ["Lethal Striker"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Tongue of the Sun and Moon (Coded Speech)"],
                "abilities": ["Read Lips", "Silent Communication"],
                "feats": ["Spymaster"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Shinobi Clan Feature (Capstone)"],
                "abilities": ["Forbidden Jutsu", "Elemental Fury"],
                "feats": ["Clan Master"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Mind Blank (Self)"],
                "abilities": ["Empty Mind", "Ghostly Presence"],
                "feats": ["Unreadable"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["One with the Shadows", "Death Strike"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Master of the Unseen"],
                "abilities": ["True Invisibility", "Phantom Assault"],
                "feats": ["Legendary Shinobi"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    summoner: {
        "name": "Summoner",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "constitution"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Arcana", "History", "Insight", "Investigation", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Summon Eidolon"],
                "abilities": ["Choose Eidolon Form", "Bond Senses"],
                "feats": ["Planar Affinity"],
                "spells": ["Find Familiar", "Protection from Evil and Good", "Unseen Servant"],
                "cantrips": ["Acid Splash", "Mage Hand", "Light", "Prestidigitation"]
            },
            "2": {
                "hp": 4,
                "features": ["Eidolon Evolution (2 points)"],
                "abilities": ["Add Claws/Bite", "Improved Natural Armor"],
                "feats": ["Bonded Vigor"],
                "spells": ["Summon Beast", "Misty Step", "Enlarge/Reduce"],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Summoner's Charm", "Second Level Spells"],
                "abilities": ["Command Summoned Creature", "Shield Ally (Basic)"],
                "feats": ["Eidolon Adept"],
                "spells": ["Haste", "Fly", "Summon Lesser Demons", "Protection from Energy"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eidolon Evolution (4 points)", "Elemental Breath Weapon"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Summon Elemental", "Banishment"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Empower Eidolon", "Extra Attack (for Eidolon)"],
                "feats": ["Superior Bond"],
                "spells": ["Planar Binding", "Summon Celestial", "Teleportation Circle"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Aspect"],
                "abilities": ["Channel Eidolon Evolution", "Share Spells"],
                "feats": ["Aspect Adept"],
                "spells": ["Conjure Fey", "Wall of Force"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells", "Eidolon Evolution (6 points)"],
                "abilities": ["Large Evolution", "Flight"],
                "feats": ["Greater Eidolon"],
                "spells": ["Plane Shift", "Forcecage"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Greater Shield Ally", "Transposition"],
                "feats": ["War Caster"],
                "spells": ["Summon Greater Demon", "Incendiary Cloud"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Eidolon's Ward", "Planar Jaunt"],
                "feats": ["Master Summoner"],
                "spells": ["Gate (Lesser)", "Mass Polymorph", "Imprisonment (Lesser)"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Greater Aspect"],
                "abilities": ["Channel Multiple Evolutions", "Eidolon Evolution (8 points)"],
                "feats": ["Perfected Aspect"],
                "spells": ["Conjure Elemental (Greater)"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Sixth Level Spells"],
                "abilities": ["Life Link", "Unleash Eidolon"],
                "feats": ["Planar Expert"],
                "spells": ["Create Homunculus", "Soul Cage"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Eidolon Evolution (10 points)", "Frightful Presence"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Merge Forms (Lesser)", "Ultimate Evolution"],
                "feats": ["Twin Forms"],
                "spells": ["Sequester", "Symbol"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Life Bond"],
                "abilities": ["Sacrifice Eidolon to Survive", "Rapid Re-summoning"],
                "feats": ["Unbreakable Bond"],
                "spells": ["Antipathy/Sympathy"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells"],
                "abilities": ["Merge Forms", "Eidolon Evolution (12 points)"],
                "feats": ["Avatar of the Summoner"],
                "spells": ["Maze", "Power Word Stun"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Aura of Command", "Planar Dominion"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Ninth Level Spells", "Twin Summon"],
                "abilities": ["Manifest Eidolon Twin", "Master of Realities"],
                "feats": ["Planar Overlord"],
                "spells": ["Gate", "Shapechange", "Wish"],
                "cantrips": []
            }
        }
    },

    necromancer: {
        "name": "Necromancer",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "constitution"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Arcana", "History", "Insight", "Intimidation", "Investigation", "Religion"],
        "numSkillChoices": 2,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Undead Affinity"],
                "abilities": ["Rebuke Death", "Grave Grasp"],
                "feats": ["Forbidden Knowledge"],
                "spells": ["Cause Fear", "False Life", "Inflict Wounds", "Ray of Sickness"],
                "cantrips": ["Chill Touch", "Mage Hand", "Sapping Sting", "Toll the Dead"]
            },
            "2": {
                "hp": 4,
                "features": ["Corpse Raiser"],
                "abilities": ["Animate Basic Undead (1)", "Bone Armor"],
                "feats": ["Necromantic Vigor"],
                "spells": ["Blindness/Deafness", "Gentle Repose", "Ray of Enfeeblement"],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Path of Necromancy", "Second Level Spells"],
                "abilities": ["Path Feature (e.g., Dread Lord's Presence)", "Animate Dead"],
                "feats": ["Path Initiate"],
                "spells": ["Animate Dead", "Bestow Curse", "Vampiric Touch", "Speak with Dead"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Life Tap", "Deathly Pallor"],
                "feats": ["Resilient (Constitution)"],
                "spells": ["Blight", "Shadow of Moil"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Undead Thralls"],
                "abilities": ["Empowered Minions (HP & Damage)", "Third Level Spells"],
                "feats": ["Master of the Dead"],
                "spells": ["Danse Macabre", "Enervation", "Negative Energy Flood"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Path of Necromancy Feature"],
                "abilities": ["Stitch Undead", "Aura of Fear"],
                "feats": ["Undead Commander"],
                "spells": ["Create Undead", "Circle of Death"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells"],
                "abilities": ["Harvest Life", "Grave Secrets"],
                "feats": ["Spell Sniper"],
                "spells": ["Finger of Death", "Etherealness"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Corpulent Cadavers (Exploding Minions)", "Necrotic Ward"],
                "feats": ["War Caster"],
                "spells": ["Clone", "Abi-Dalzim's Horrid Wilting"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Army of the Damned (Control more undead)", "Soul Cage"],
                "feats": ["Lord of the Undead"],
                "spells": ["Power Word Kill", "Astral Projection"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Command Undead"],
                "abilities": ["Seize Control", "Master's Command"],
                "feats": ["Dominate Undead"],
                "spells": ["Eyebite"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Sixth Level Spells", "Dreadful Summons"],
                "abilities": ["Instant Thrall", "Necrotic Overchannel"],
                "feats": ["Reaper's Call"],
                "spells": ["Harm", "Magic Jar"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Undead Fortitude", "Gravemaster's Resilience"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Ghostly Form", "Drain Life (Area)"],
                "feats": ["Spirit Drinker"],
                "spells": ["Sequester", "Symbol"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Inured to Undeath"],
                "abilities": ["Necrotic Resistance", "Undeath's Embrace"],
                "feats": ["Deathless"],
                "spells": ["Finger of Death (Improved)"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells", "Path of Necromancy Feature"],
                "abilities": ["Create Abomination", "Soul Bind"],
                "feats": ["True Necromancer"],
                "spells": ["Feeblemind", "Maze"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Mass Animate Dead", "Aura of Undeath"],
                "feats": ["Plague Lord"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Ninth Level Spells", "Lich Form (Lesser)"],
                "abilities": ["Taste of Immortality", "Paralyzing Touch"],
                "feats": ["Ascendant Necromancer"],
                "spells": ["Imprisonment", "Time Ravage", "Weird"],
                "cantrips": []
            }
        }
    },

    illusionist: {
        "name": "Illusionist",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "charisma"],
        "savingThrows": ["intelligence", "charisma"],
        "skillChoices": ["Arcana", "Deception", "Insight", "Investigation", "Performance", "Stealth"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Spellcasting", "Improved Minor Illusion"],
                "abilities": ["Minor Conjuration", "Deceiving Presence"],
                "feats": ["Subtle Weaving"],
                "spells": ["Charm Person", "Color Spray", "Disguise Self", "Silent Image"],
                "cantrips": ["Minor Illusion", "Mage Hand", "Prestidigitation", "Dancing Lights"]
            },
            "2": {
                "hp": 4,
                "features": ["Malleable Illusions"],
                "abilities": ["Reshape Illusion", "Illusory Script"],
                "feats": ["Deceptive Arts"],
                "spells": ["Invisibility", "Mirror Image", "Phantasmal Force", "Blur"],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Path of Deception", "Second Level Spells"],
                "abilities": ["Path Feature (e.g., Nightmare Weaver)", "Fear"],
                "feats": ["Path Initiate"],
                "spells": ["Hypnotic Pattern", "Major Image", "Fear", "Phantom Steed"],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Lasting Image", "Illusory Sound"],
                "feats": ["Metamagic Adept"],
                "spells": ["Greater Invisibility", "Hallucinatory Terrain"],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Third Level Spells"],
                "abilities": ["Potent Illusions", "Distortion Field"],
                "feats": ["Shadow Adept"],
                "spells": ["Creation", "Mislead", "Seeming", "Dream"],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Illusory Self"],
                "abilities": ["Instantaneous Duplicate", "Beguiling Defense"],
                "feats": ["Elusive"],
                "spells": ["Programmed Illusion", "Mental Prison"],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Fourth Level Spells"],
                "abilities": ["Complex Illusions", "Sensory Overload"],
                "feats": ["Master of Disguise"],
                "spells": ["Mirage Arcane", "Project Image", "Simulacrum"],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Persistent Image", "Aura of Deception"],
                "feats": ["Resilient (Wisdom)"],
                "spells": ["Illusory Dragon", "Antipathy/Sympathy"],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Fifth Level Spells"],
                "abilities": ["Inescapable Illusion", "Cognitive Dissonance"],
                "feats": ["Master Trickster"],
                "spells": ["Weird", "Imprisonment (Illusory Prison)", "Mass Polymorph"],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Path of Deception Feature"],
                "abilities": ["Phantasmal Killer (Improved)", "Field of Illusions"],
                "feats": ["Nightmare Lord"],
                "spells": ["Mass Suggestion"],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Illusory Reality"],
                "abilities": ["Make Illusion Real", "Solid Shadows"],
                "feats": ["Reality Bender"],
                "spells": ["Sequester"],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Permanent Illusion", "Misleading Aura"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Seventh Level Spells"],
                "abilities": ["Master of a Thousand Faces (At Will)", "Unwavering Illusions"],
                "feats": ["Shapeshifter's Guile"],
                "spells": ["Symbol", "Teleport"],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Superior Malleable Illusions"],
                "abilities": ["Instantaneous Reshaping", "Layered Illusions"],
                "feats": ["Grand Deceiver"],
                "spells": ["Glibness"],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Eighth Level Spells", "Path of Deception Feature"],
                "abilities": ["Lord of Nightmares", "Mirage Master"],
                "feats": ["Architect of Deception"],
                "spells": ["Feeblemind", "Power Word Stun"],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Self (Illusion)", "Unreadable Mind"],
                "feats": ["Lucky"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Ninth Level Spells", "Lord of Deception"],
                "abilities": ["Indistinguishable Reality", "World of Lies"],
                "feats": ["God of Illusions"],
                "spells": ["Time Ravage", "True Polymorph", "Wish"],
                "cantrips": []
            }
        }
    },

    engineer: {
        "name": "Engineer",
        "hitDie": "d8",
        "primaryStats": ["intelligence", "constitution"],
        "savingThrows": ["constitution", "intelligence"],
        "skillChoices": ["Arcana", "History", "Investigation", "Medicine", "Perception", "Sleight of Hand"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Tinker", "Gadgetry"],
                "abilities": ["Create Flashbang", "Deploy Caltrops", "Tool Proficiency (Tinker's Tools, Smith's Tools)"],
                "feats": ["Tinkerer's Know-How"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Infuse Item", "Construct Companion (Automaton)"],
                "abilities": ["Create Basic Automaton", "Infuse Weapon/Armor (+1)"],
                "feats": ["Mechanic's Touch"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Engineering Discipline", "Tool Expertise"],
                "abilities": ["Discipline Feature (e.g., Chemist, Mechanist)", "Right Tool for the Job"],
                "feats": ["Discipline Initiate"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Upgrade Automaton", "Create Smoke Bomb"],
                "feats": ["Durable"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Improved Gadgets", "Automaton Protocol: Assault"],
                "abilities": ["Automaton Extra Attack", "Concussive Blast"],
                "feats": ["Advanced Gadgetry"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Engineering Discipline Feature"],
                "abilities": ["Alchemical Formulas", "Reinforced Automaton Chassis"],
                "feats": ["Master Craftsman"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Schematic Savant"],
                "abilities": ["On-the-Fly Infusions", "Field Modifications"],
                "feats": ["Quick Thinker"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Deploy Mini-Turret", "Upgrade Automaton (Armor)"],
                "feats": ["Resilient (Wisdom)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Advanced Construction"],
                "abilities": ["Build Golem (Lesser)", "Create Grappling Hook Launcher"],
                "feats": ["Architect"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Engineering Discipline Feature"],
                "abilities": ["Cognitive Enhancer (Self)", "Automaton Protocol: Defender"],
                "feats": ["Genius Inventor"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Masterwork Gadget"],
                "abilities": ["Personal Force Field", "Lightning Coil"],
                "feats": ["Signature Invention"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Analyze Weakness", "Deconstruct Device"],
                "feats": ["Observant"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Jury-Rig"],
                "abilities": ["Hack Construct", "Emergency Repairs"],
                "feats": ["Master Mechanic"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Engineering Discipline Feature (Capstone)"],
                "abilities": ["Create Juggernaut Automaton", "Elixir of Life"],
                "feats": ["Legendary Engineer"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Superior Attunement"],
                "abilities": ["Attune to Extra Item", "Master of Magic Items"],
                "feats": ["Attunement Master"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Design", "Remote Detonation"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Technological Singularity"],
                "abilities": ["Enter Genius State", "Unlimited Gadgets (1 min)"],
                "feats": ["Avatar of Invention"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    alchemist: {
        "name": "Alchemist",
        "hitDie": "d8",
        "primaryStats": ["intelligence", "dexterity"],
        "savingThrows": ["constitution", "intelligence"],
        "skillChoices": ["Arcana", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand"],
        "numSkillChoices": 3,
        "levels": {
            "1": {
                "hp": 8,
                "features": ["Alchemical Savant", "Formula Book"],
                "abilities": ["Create Concoction (e.g., Healing Draught, Acid Flask)", "Proficiency: Alchemist's Supplies"],
                "feats": ["Field Researcher"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 5,
                "features": ["Alchemical Discovery"],
                "abilities": ["Choose Bombs, Mutagens, or Elixirs", "Precise Bombardment"],
                "feats": ["Practical Chemistry"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 5,
                "features": ["Alchemical Field", "Swift Alchemy"],
                "abilities": ["Field Feature (e.g., Grenadier, Mutagenist)", "Quick Crafting"],
                "feats": ["Field Specialist"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Improved Formulas", "Catalytic Reaction"],
                "feats": ["Durable"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 5,
                "features": ["Potent Concoctions"],
                "abilities": ["Add Intelligence modifier to damage/healing", "Heightened Effects"],
                "feats": ["Empowered Alchemy"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 5,
                "features": ["Alchemical Field Feature"],
                "abilities": ["Directed Blast", "Feral Mutagen"],
                "feats": ["Master Chemist"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 5,
                "features": ["Volatile Reaction"],
                "abilities": ["Combine Concoctions", "Instant Reaction"],
                "feats": ["Reactive Formulas"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 5,
                "features": ["Ability Score Improvement", "Alchemical Discovery"],
                "abilities": ["Sticky Bomb", "Cognitive Mutagen"],
                "feats": ["Resilient (Dexterity)"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 5,
                "features": ["Poison Resistance"],
                "abilities": ["Toxicologist", "Apply Poison as Bonus Action"],
                "feats": ["Poisoner"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 5,
                "features": ["Alchemical Field Feature"],
                "abilities": ["The Big One (Massive Bomb)", "Perfected Mutagen"],
                "feats": ["Grand Alchemist"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 5,
                "features": ["Grand Discovery"],
                "abilities": ["Philosopher's Stone (Lesser)", "True Mutagen"],
                "feats": ["Legendary Discovery"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Efficient Alchemy", "Enduring Concoctions"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 5,
                "features": ["Master Chemist"],
                "abilities": ["Instant Identification", "Advantage on saves vs. potions/poisons"],
                "feats": ["Chemical Purity"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 5,
                "features": ["Alchemical Field Feature (Capstone)"],
                "abilities": ["Plague Bomb", "Chimeric Form"],
                "feats": ["Field Grandmaster"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 5,
                "features": ["Poison Immunity", "Alchemical Discovery"],
                "abilities": ["Complete Toxin Immunity", "Panacea Elixir"],
                "feats": ["Mithridatism"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 5,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfected Formulas", "Spontaneous Alchemy"],
                "feats": ["Genius Chemist"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 5,
                "features": ["Elixir of Life"],
                "abilities": ["Create Ultimate Elixir", "Halt Aging, Cure All Ailments"],
                "feats": ["Immortal Alchemist"],
                "spells": [],
                "cantrips": []
            }
        }
    },

    scholar: {
        "name": "Scholar",
        "hitDie": "d6",
        "primaryStats": ["intelligence", "wisdom"],
        "savingThrows": ["intelligence", "wisdom"],
        "skillChoices": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Religion"],
        "numSkillChoices": 4,
        "levels": {
            "1": {
                "hp": 6,
                "features": ["Expertise (2 skills)", "Loremaster"],
                "abilities": ["Keen Mind", "Know-It-All"],
                "feats": ["Prodigy"],
                "spells": [],
                "cantrips": []
            },
            "2": {
                "hp": 4,
                "features": ["Tactical Insight"],
                "abilities": ["Grant Advantage", "Impose Disadvantage", "Guide Action"],
                "feats": ["Keen Observer"],
                "spells": [],
                "cantrips": []
            },
            "3": {
                "hp": 4,
                "features": ["Scholarly Pursuit"],
                "abilities": ["Pursuit Feature (e.g., Strategist, Historian, Chirurgeon)", "Critical Analysis"],
                "feats": ["Field Expert"],
                "spells": [],
                "cantrips": []
            },
            "4": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Educated Guess", "Quick Study"],
                "feats": ["Linguist"],
                "spells": [],
                "cantrips": []
            },
            "5": {
                "hp": 4,
                "features": ["Coordinated Effort"],
                "abilities": ["Bolster Ally", "Redirect Foe"],
                "feats": ["Team Leader"],
                "spells": [],
                "cantrips": []
            },
            "6": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature"],
                "abilities": ["Battlefield Commands", "Rediscover Lore", "Anatomical Precision"],
                "feats": ["Master Tactician"],
                "spells": [],
                "cantrips": []
            },
            "7": {
                "hp": 4,
                "features": ["Erudite Defense"],
                "abilities": ["Add Intelligence to Saves", "Logical Fortitude"],
                "feats": ["Defensive Study"],
                "spells": [],
                "cantrips": []
            },
            "8": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Exploit Pattern", "Predictive Analysis"],
                "feats": ["Observant"],
                "spells": [],
                "cantrips": []
            },
            "9": {
                "hp": 4,
                "features": ["Expertise (2 more skills)"],
                "abilities": ["Master of Lore", "Unassailable Knowledge"],
                "feats": ["Skilled"],
                "spells": [],
                "cantrips": []
            },
            "10": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature"],
                "abilities": ["Cunning Ploy", "Uncover Truth", "Miraculous Remedy"],
                "feats": ["Brilliant Mind"],
                "spells": [],
                "cantrips": []
            },
            "11": {
                "hp": 4,
                "features": ["Unwavering Logic"],
                "abilities": ["Advantage vs. Charm/Frighten", "Fortress of the Mind"],
                "feats": ["Iron Will"],
                "spells": [],
                "cantrips": []
            },
            "12": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Socratic Method", "Dismissive Rebuke"],
                "feats": ["Tough"],
                "spells": [],
                "cantrips": []
            },
            "13": {
                "hp": 4,
                "features": ["Master Plan"],
                "abilities": ["Formulate Strategy", "Grant Party-Wide Bonus"],
                "feats": ["Grand Strategist"],
                "spells": [],
                "cantrips": []
            },
            "14": {
                "hp": 4,
                "features": ["Scholarly Pursuit Feature (Capstone)"],
                "abilities": ["Checkmate", "Reveal Forbidden Lore", "Restore Life"],
                "feats": ["Living Library"],
                "spells": [],
                "cantrips": []
            },
            "15": {
                "hp": 4,
                "features": ["Superior Intellect"],
                "abilities": ["Immunity to Intelligence Reduction", "Mind Palace"],
                "feats": ["Unshakable Mind"],
                "spells": [],
                "cantrips": []
            },
            "16": {
                "hp": 4,
                "features": ["Ability Score Improvement"],
                "abilities": ["Perfect Recall", "Foresee Danger"],
                "feats": ["Alert"],
                "spells": [],
                "cantrips": []
            },
            "17": {
                "hp": 4,
                "features": ["Singularity of Mind"],
                "abilities": ["Enter Genius State", "Omniscience (1 min)"],
                "feats": ["The Pinnacle of Thought"],
                "spells": [],
                "cantrips": []
            }
        }
    },
    commoner: {
        name: "Commoner",
        hitDie: "d6",
        primaryStats: ["constitution", "charisma"],
        savingThrows: ["constitution"],
        skillChoices: ["Athletics", "Persuasion", "Insight", "Perception"],
        numSkillChoices: 1,
        levels: {
            1: {
                hp: 4,
                features: ["Simple Skills"],
                abilities: ["Helpful Hand"],
                feats: [],
                spells: [],
                cantrips: []
            },
        }
    },

};