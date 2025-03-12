// here we are going to put ideas, concepts, places, structures, people , practices, etc
// in a stuctured format

const data = {
  farming: {
    name: "Farming",
    summary: "get in the dirt and reach for the sky",
    blurb: "other stuff here",
    tags: ["localPolitics", "movement"],
  },
  localPolitics: {
    name: "Local Politics",
    summary: "Mayor Wu is a boss",
    tags: ["farming"],
  },
  movement: {
    name: "Movement",
    summary: "wiggle wiggle wiggle",
    tags: ["swimming", "farming"],
  },
  swimming: {
    name: "Swimming",
    summary: "down where its wetter everything is better",
    tags: ["farming"],
    otherInfo: { locations: ["Quarry (The)"] },
  },
};
