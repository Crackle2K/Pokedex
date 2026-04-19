const DATA = {
  factions: [
    {
      id: "the-capital",
      name: "The Capital",
      description: "A disciplined alliance focused on governance, commerce, and maintaining the heart of the SMP.",
      color: "#d4af37",
      pois: ["town-hall"],
      members: ["Crackle2K", "Oofus5678", "RiceCaster", "CosmicBlizzard", "Stealthy24"]
    },
    {
      id: "growtopia",
      name: "Growtopia",
      description: "A resilient, nature-minded faction rooted in expansion, cultivation, and sustainable builds.",
      color: "#7cb342",
      pois: [],
      members: ["Crackle2K", "Oofus5678"]
    }
  ],

  pois: [
    {
      id: "town-hall",
      name: "Town Hall",
      faction: "the-capital",
      coordinates: "X: -243, Y: 71, Z: -204",
      description: "The administrative center of The Capital where leadership meetings, public votes, and city planning are held.",
      type: "Government",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "community-sugar-cane-farm",
      name: "Community Sugar Cane Farm",
      faction: "the-capital",
      coordinates: "X: -219, Y: 72, Z: -249",
      description: "A collective farming facility for sugar cane production.",
      type: "Farm",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "community-cactus-farm",
      name: "Community Cactus Farm",
      faction: "the-capital",
      coordinates: "X: -243, Y: 71, Z: -203",
      description: "A collective farming facility for cactus production.",
      type: "Farm",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "community-honey-farm",
      name: "Community Honey Farm",
      faction: "the-capital",
      coordinates: "X: -293, Y: 70, Z: -220",
      description: "A collective facility for bee keeping and honey production.",
      type: "Farm",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "community-lava-farm",
      name: "Community Lava Farm",
      faction: "the-capital",
      coordinates: "X: -301, Y: 71, Z: -196",
      description: "A collective facility for lava generation and processing.",
      type: "Farm",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "statue-of-undying",
      name: "Statue of Undying",
      faction: "the-capital",
      coordinates: "X: -194, Y: 70, Z: -125",
      description: "A monumental statue built by Crackle2K.",
      type: "Monument",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "community-xp-farm",
      name: "Community XP Farm",
      faction: "the-capital",
      coordinates: "X: -208, Y: 68, Z: -156",
      description: "A collective facility for experience point farming.",
      type: "Farm",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "cosmic-jaren-villa",
      name: "Cosmic & Jaren's Villa",
      faction: "the-capital",
      coordinates: "X: -243, Y: 69, Z: -150",
      description: "A collaborative residential project.",
      type: "Residence",
      builder: "CosmicBlizzard & Crackle2K",
      status: "Active"
    },
    {
      id: "dilans-humble-abode",
      name: "Dilan's Humble Abode",
      faction: "the-capital",
      coordinates: "X: -218, Y: 68, Z: -176",
      description: "A residential building in The Capital.",
      type: "Residence",
      builder: "Stealthy24",
      status: "Active"
    },
    {
      id: "the-courthouse",
      name: "The Courthouse",
      faction: "the-capital",
      coordinates: "X: -270, Y: 79, Z: -219",
      description: "The judicial center of The Capital.",
      type: "Government",
      builder: "Stealthy24",
      status: "Active"
    },
    {
      id: "oofus-dwelling",
      name: "Oofus' Dwelling",
      faction: "growtopia",
      coordinates: "X: -363, Y: 80, Z: -147",
      description: "A residential structure built by Oofus5678.",
      type: "Residence",
      builder: "Oofus5678",
      status: "Active"
    },

  ],

  members: [
    {
      id: "Crackle2K",
      username: "Crackle2K",
      factions: ["growtopia", "the-capital"],
      role: "Member",
      factionRoles: {
        growtopia: "President",
        "the-capital": "Member"
      },
      description: "President of Growtopia and an active member of The Capital, known for strategic planning and large-scale builds.",
      joinDate: "December, 2025",
      skin: null
    },
    {
      id: "Oofus5678",
      username: "Oofus5678",
      factions: ["the-capital", "growtopia"],
      role: "Member",
      factionRoles: {
        "the-capital": "Member",
        growtopia: "Member"
      },
      description: "A dual-faction member who supports both civic projects in The Capital and expeditions with Growtopia.",
      joinDate: "December, 2025",
      skin: null
    },
    {
      id: "RiceCaster",
      username: "RiceCaster",
      factions: ["the-capital"],
      role: "Member",
      factionRoles: {
        "the-capital": "Member"
      },
      description: "A dedicated member of The Capital focused on strengthening the faction's community projects.",
      joinDate: "December, 2025",
      skin: null
    },
    {
      id: "CosmicBlizzard",
      username: "CosmicBlizzard",
      factions: ["the-capital"],
      role: "Member",
      factionRoles: {
        "the-capital": "Member"
      },
      description: "A Capital member known for consistent support in faction operations and collaboration.",
      joinDate: "December, 2025",
      skin: null
    },
    {
      id: "Stealthy24",
      username: "Stealthy24",
      factions: ["the-capital"],
      role: "Member",
      factionRoles: {
        "the-capital": "Member"
      },
      description: "A member of The Capital known for impressive architectural builds including the Courthouse and residential structures.",
      joinDate: "December, 2025",
      skin: null
    }
  ]
};
