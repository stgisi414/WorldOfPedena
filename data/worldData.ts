// Data adapted from https://github.com/stgisi414/PedenaRPG/blob/main/public/assets/world-data.js
export const worldData = {
  locations: [
    {
      id: "pedena",
      name: "City of Pedena",
      description: "A large, walled city, a hub of trade and intrigue. The cobblestone streets are crowded with people from all walks of life.",
      region: "heartlands",
      type: "City",
      coords: { x: 55, y: 75 },
      services: ["Tavern", "Blacksmith", "Shop", "Alchemist"],
      npcs: ["isolde_ironmonger", "silas_vey", "elara_swiftwind"],
      quests: ["shadow_crypt_quest_start"]
    },
    {
      id: "whispering_forest",
      name: "Whispering Forest",
      description: "A dense, ancient forest where the trees seem to whisper secrets to one another. Sunlight struggles to pierce the thick canopy.",
      region: "heartlands",
      type: "Forest",
      coords: { x: 45, y: 60 },
      npcs: ["old_man_willow"],
      quests: []
    },
    {
      id: "mount_cinder",
      name: "Mount Cinder",
      description: "A dormant volcano that looms over the landscape. Smoke occasionally drifts from its peak, and the ground is warm to the touch.",
      region: "emberfall",
      type: "Mountains",
      coords: { x: 75, y: 40 },
      npcs: ["firenewt_scouts"],
      quests: []
    },
    {
        id: "sunken_city_aeridor",
        name: "Sunken City of Aeridor",
        description: "The ruins of a once-great city, now submerged in the Great Lake. Only the tallest spires break the surface.",
        region: "great_lake",
        type: "Ruins",
        coords: { x: 25, y: 50 },
        npcs: ["water_elemental"],
        quests: ["aeridor_artifact_quest"]
    },
    {
        id: "dragons_peak",
        name: "Dragon's Peak",
        description: "The highest mountain in the Dragon's Tooth range, said to be the lair of a powerful dragon.",
        region: "dragons_tooth_mountains",
        type: "Mountains",
        coords: { x: 60, y: 20 },
        npcs: ["ancient_red_dragon"],
        quests: []
    },
    {
      id: "shadowfen_bog",
      name: "Shadowfen Bog",
      description: "A murky, treacherous swamp filled with twisted trees and strange, glowing fungi. A thick fog perpetually hangs in the air.",
      region: "shadowlands",
      type: "Swamp",
      coords: { x: 35, y: 85 },
      npcs: ["bog_hag"],
      quests: ["missing_child_quest"]
    },
    {
      id: "crystal_caves",
      name: "Crystal Caves",
      description: "A network of underground caves where massive, luminous crystals grow, casting an ethereal glow on the rock formations.",
      region: "heartlands",
      type: "Cave",
      coords: { x: 40, y: 30 },
      npcs: ["crystal_golem"],
      quests: []
    },
  ],
  regions: [
    {
      id: "heartlands",
      name: "The Heartlands",
      description: "The central region of Pedena, characterized by rolling hills, fertile plains, and dense forests."
    },
    {
      id: "emberfall",
      name: "Emberfall",
      description: "A volcanic region to the east, dominated by Mount Cinder and ash-covered plains."
    },
    {
        id: "great_lake",
        name: "The Great Lake",
        description: "A massive freshwater lake that borders the Heartlands to the west."
    },
    {
        id: "dragons_tooth_mountains",
        name: "Dragon's Tooth Mountains",
        description: "A jagged mountain range to the north, known for its treacherous peaks and dangerous creatures."
    },
    {
        id: "shadowlands",
        name: "The Shadowlands",
        description: "A dark and mysterious region to the south, home to the Shadowfen Bog."
    }
  ],
  npcs: [
    {
      id: "isolde_ironmonger",
      name: "Isolde Ironmonger",
      description: "A stern-looking blacksmith with soot on her face and powerful arms.",
      dialogue: ["Need some steel? You've come to the right place.", "My wares are the finest in all of Pedena."]
    },
    {
      id: "silas_vey",
      name: "Silas Vey",
      description: "A shifty merchant who seems to be watching you from the corner of his eye. He deals in... rarer goods.",
      dialogue: ["Looking for something special? Something others might not have?", "I can get you anything... for the right price."]
    },
    {
      id: "elara_swiftwind",
      name: "Elara Swiftwind",
      description: "A graceful elf with a keen eye and a bow slung over her shoulder. She's a scout and guide.",
      dialogue: ["The wilds are dangerous. You'll need a guide if you plan to leave the city.", "I've seen things in the woods that would make your hair stand on end."]
    },
    {
      id: "old_man_willow",
      name: "Old Man Willow",
      description: "A sentient, ancient tree in the heart of the Whispering Forest. Its face is gnarled and its voice sounds like creaking branches.",
      dialogue: ["Who disturbs my slumber? Another fleeting mortal..."]
    },
    {
      id: "firenewt_scouts",
      name: "Firenewt Scouts",
      description: "A group of small, reptilian humanoids with reddish scales. They brandish crude weapons and hiss at you.",
      dialogue: ["*Hiss* You do not belong here, softskin!"]
    },
    {
      id: "water_elemental",
      name: "Water Elemental",
      description: "A swirling vortex of water given sentient form. It guards the entrance to the deeper parts of the Sunken City.",
      dialogue: ["*Gurgle*... Trespassers... will be washed away..."]
    },
    {
      id: "ancient_red_dragon",
      name: "Ancient Red Dragon",
      description: "A colossal dragon of immense power and greed, slumbering atop a hoard of treasure.",
      dialogue: ["You dare to wake me, little morsel? Your avarice will be your undoing."]
    },
    {
      id: "bog_hag",
      name: "Bog Hag",
      description: "A wretched crone who lives in a hut made of mud and bones. She cackles as she stirs her cauldron.",
      dialogue: ["Come closer, sweetie. Granny has something special for you... *cackle*"]
    },
    {
      id: "crystal_golem",
      name: "Crystal Golem",
      description: "A massive golem constructed of the caves' crystals. It moves with a slow, grinding sound, its crystalline eyes glowing with an inner light.",
      dialogue: ["..."]
    },
  ],
};