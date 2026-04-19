const DATA = {
  factions: [
    {
      id: "iron-covenant",
      name: "Iron Covenant",
      description: "A disciplined alliance of builders and traders who control the central market district. Known for their elaborate iron architecture and strict trade agreements.",
      color: "#a8a8a8",
      banner: "⚔️",
      pois: ["central-market", "iron-fortress", "trade-post-north"],
      members: ["Crackle2K", "SteelForge99"]
    },
    {
      id: "ember-clan",
      name: "Ember Clan",
      description: "Masters of the Nether who have built their base deep in the volcanic biomes. They specialize in redstone contraptions and blaze farming.",
      color: "#e85d04",
      banner: "🔥",
      pois: ["nether-hub", "blaze-fortress", "lava-lake-outpost"],
      members: ["PyroKnight", "AshWalker"]
    },
    {
      id: "verdant-order",
      name: "Verdant Order",
      description: "Peaceful terraformers and farmers occupying the eastern forests. They maintain the largest farms on the server and trade food with all factions.",
      color: "#40916c",
      banner: "🌿",
      pois: ["great-farm", "forest-sanctuary", "oak-village"],
      members: ["LeafRunner", "MossBeard", "FernValley"]
    }
  ],

  pois: [
    {
      id: "central-market",
      name: "Central Market",
      faction: "iron-covenant",
      coordinates: "X: 0, Y: 64, Z: 0",
      description: "The beating heart of the SMP economy. Built from iron blocks and stone bricks, this massive bazaar hosts dozens of player shops. Features automatic item sorters, a public crafting hall, and a central auction stage.",
      type: "Economy",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "iron-fortress",
      name: "Iron Fortress",
      faction: "iron-covenant",
      coordinates: "X: 320, Y: 70, Z: -150",
      description: "The headquarters of the Iron Covenant. A towering stronghold with walls three blocks thick, watchtowers at each corner, and a great hall used for faction meetings. Features an extensive underground vault.",
      type: "Base",
      builder: "SteelForge99",
      status: "Active"
    },
    {
      id: "trade-post-north",
      name: "Northern Trade Post",
      faction: "iron-covenant",
      coordinates: "X: 800, Y: 68, Z: -600",
      description: "A remote outpost established to control the northern trade routes. Smaller than the central market, but strategically positioned near diamond ore veins and an ice road.",
      type: "Outpost",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "nether-hub",
      name: "Nether Hub",
      faction: "ember-clan",
      coordinates: "X: 0, Y: 110, Z: 0 (Nether)",
      description: "A grand intersection in the Nether ceiling where all major ice roads and nether highways meet. The Ember Clan built and maintains this hub, extracting a small toll in blaze rods from travelers who wish to use the fast-travel network.",
      type: "Infrastructure",
      builder: "PyroKnight",
      status: "Active"
    },
    {
      id: "blaze-fortress",
      name: "Blaze Fortress",
      faction: "ember-clan",
      coordinates: "X: -400, Y: 45, Z: 200 (Nether)",
      description: "Built around a natural Nether fortress, the Ember Clan reinforced and expanded it into their main base. Houses three blaze spawners, a wither skeleton farm, and a soul sand valley garden.",
      type: "Base",
      builder: "AshWalker",
      status: "Active"
    },
    {
      id: "lava-lake-outpost",
      name: "Lava Lake Outpost",
      faction: "ember-clan",
      coordinates: "X: -900, Y: 30, Z: 500 (Nether)",
      description: "A small observation tower built on a platform above the largest lava lake in the Nether dimension. Used as a waypoint and storage cache for long Nether expeditions.",
      type: "Outpost",
      builder: "PyroKnight",
      status: "Inactive"
    },
    {
      id: "great-farm",
      name: "The Great Farm",
      faction: "verdant-order",
      coordinates: "X: 1200, Y: 64, Z: 800",
      description: "Spanning over 10,000 blocks of flat land, the Great Farm is the most productive agricultural complex on the server. Produces wheat, carrots, potatoes, sugarcane, melons, pumpkins, and more, all fed by an elaborate canal irrigation system.",
      type: "Farm",
      builder: "LeafRunner",
      status: "Active"
    },
    {
      id: "forest-sanctuary",
      name: "Forest Sanctuary",
      faction: "verdant-order",
      coordinates: "X: 1500, Y: 80, Z: 600",
      description: "A breathtaking treehouse village built among ancient oak and jungle trees. The Verdant Order's spiritual home — all structures are built using only natural materials to blend seamlessly with the environment.",
      type: "Base",
      builder: "MossBeard",
      status: "Active"
    },
    {
      id: "oak-village",
      name: "Oak Village",
      faction: "verdant-order",
      coordinates: "X: 950, Y: 65, Z: 1100",
      description: "A renovated and expanded natural village that the Verdant Order adopted early in the server's history. Features a cured librarian hall, a trading hall with every enchantment book available, and a villager breeder.",
      type: "Village",
      builder: "FernValley",
      status: "Active"
    }
  ],

  members: [
    {
      id: "Crackle2K",
      username: "Crackle2K",
      faction: "iron-covenant",
      role: "Faction Leader",
      description: "Founder of the Iron Covenant and the SMP's head administrator. Renowned for their detailed iron-and-stone architecture and ability to negotiate trade deals between rival factions.",
      joinDate: "Season 1, Day 1",
      specialty: "Architecture & Diplomacy",
      skin: null
    },
    {
      id: "SteelForge99",
      username: "SteelForge99",
      faction: "iron-covenant",
      role: "Officer",
      description: "The Iron Covenant's chief engineer. Responsible for most of the faction's redstone infrastructure and the imposing design of the Iron Fortress.",
      joinDate: "Season 1, Day 4",
      specialty: "Redstone & Defense",
      skin: null
    },
    {
      id: "PyroKnight",
      username: "PyroKnight",
      faction: "ember-clan",
      role: "Faction Leader",
      description: "The fearless leader of the Ember Clan who dove into the Nether on day one and never looked back. Built the Nether Hub from scratch and manages the toll system that funds the clan.",
      joinDate: "Season 1, Day 1",
      specialty: "Nether Exploration & Infrastructure",
      skin: null
    },
    {
      id: "AshWalker",
      username: "AshWalker",
      faction: "ember-clan",
      role: "Member",
      description: "A survivalist who specializes in mob farming and dangerous expeditions. Built and operates the Blaze Fortress mob farm, which supplies the entire server with blaze rods.",
      joinDate: "Season 1, Day 7",
      specialty: "Mob Farming & Combat",
      skin: null
    },
    {
      id: "LeafRunner",
      username: "LeafRunner",
      faction: "verdant-order",
      role: "Faction Leader",
      description: "The visionary behind the Verdant Order. A master farmer who believes the land should be respected and improved rather than exploited. Designed the canal irrigation system used in the Great Farm.",
      joinDate: "Season 1, Day 2",
      specialty: "Farming & Terraforming",
      skin: null
    },
    {
      id: "MossBeard",
      username: "MossBeard",
      faction: "verdant-order",
      role: "Officer",
      description: "The Verdant Order's head architect, responsible for the organic and naturalistic building style that defines the Forest Sanctuary. Every structure they build looks like it grew there.",
      joinDate: "Season 1, Day 3",
      specialty: "Natural Architecture",
      skin: null
    },
    {
      id: "FernValley",
      username: "FernValley",
      faction: "verdant-order",
      role: "Member",
      description: "A trading specialist who transformed Oak Village into the server's premier enchantment book source. Maintains relationships with all the cured librarians and keeps the trading hall stocked.",
      joinDate: "Season 1, Day 10",
      specialty: "Villager Trading & Enchanting",
      skin: null
    }
  ]
};
