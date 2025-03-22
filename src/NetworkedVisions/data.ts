interface BaseDataItem {
  name: string;
  summary: string;
  blurb?: string;
  pageUrl?: string;
  content?: string;
  otherInfo?: {
    locations?: string[];
    [key: string]: any;
  };
}

// This helper expects each item to have a `tags` array whose entries are keys of the whole object.
function defineData<
  T extends Record<
    string,
    Omit<BaseDataItem, "tags"> & { tags: Array<keyof T> }
  >
>(data: T): T {
  return data;
}

export const data = defineData({
  farming: {
    name: "Farming",
    summary: "get in the dirt and reach for the sky",
    blurb: "other stuff here",
    tags: ["localPolitics", "movement", "craft"],
    pageUrl: "/farming",
  },
  localPolitics: {
    name: "Local Politics",
    summary: "Mayor Wu is a boss",
    tags: ["farming", "culture", "friendsToForm"],
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
  woodworking: {
    name: "woodworking",
    summary: "chisels moving and chips flying",
    tags: ["craft"],
  },
  craft: {
    name: "craft",
    summary: "creative making practices",
    tags: [
      "metalworking",
      "farming",
      "movement",
      "lamps",
      "architecture",
      "culture",
    ],
  },
  metalworking: {
    name: "metalworking",
    summary: "sparks flying",
    tags: ["craft"],
  },
  nature: {
    name: "nature",
    summary: "the mother",
    tags: ["farming", "movement"],
  },
  lamps: {
    name: "lamps",
    summary: "lighting for work or mood",
    content: "something longer here",
    tags: ["craft"],
  },
  architecture: {
    name: "architecture",
    summary: "the field behind structures and systems",
    tags: ["architecture"],
  },
  culture: {
    name: "culture",
    summary: "the stuff human life exudes",
    tags: ["architecture"],
  },
  technology: {
    name: "technology",
    summary: "tooling",
    tags: ["architecture", "friendsToForm"],
  },
  farmtoform: {
    name: "farm to form",
    summary: "an intiative",
    tags: ["nature", "culture", "technology", "friendsToForm"],
  },
  friendsToForm: {
    name: "Friends to Form",
    summary: "Web application network project providing alternatives.",
    tags: ["technology", "localPolitics"],
  },
});
