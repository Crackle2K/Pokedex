const DATA = {
  factions: [
    {
      id: "the-capital",
      name: "The Capital",
      description: "A disciplined alliance focused on governance, commerce, and maintaining the heart of the SMP.",
      color: "#d4af37",
      pois: ["town-hall"],
      members: ["Crackle2K", "Oofus5678", "RiceCaster", "CosmicBlizzard"]
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
      coordinates: "X: 0, Y: 70, Z: 0",
      description: "The administrative center of The Capital where leadership meetings, public votes, and city planning are held.",
      type: "Government",
      builder: "Crackle2K",
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
    }
  ]
};
