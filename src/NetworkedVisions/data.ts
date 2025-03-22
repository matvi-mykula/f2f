export interface BaseDataItem {
  name: string;
  summary: string;
  blurb?: string;
  pageUrl?: string;
  content?: string;
  otherInfo?: {
    locations?: string[];
    [key: string]: any;
  };
  tags: string[];
  links?: string[];
}
export interface DataMap {
  [key: string]: BaseDataItem & { tags: string[] };
}

// we are going to use some tricky typescript stuff so that tags autocomplete with data item keys
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
  toil: {
    name: "Manual Labor",
    summary:
      "Physical labor connects the mind to the matter of that around us.",
    tags: ["farming", "movement"],
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
    tags: ["architecture", "friendsToForm", "metalworking", "craft"],
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
    blurb:
      "Friends to Form is a React-powered mindmap and networking app designed to be an alternative to traditional power structures. By mapping ideas and connections in an intuitive, decentralized interface, it empowers communities to build collaborative alternatives to hegemonic systems.",
    pageUrl: "/aboutThisSite",
    // not sure if we want this to be in otherInfo or as its own property...
    links: ["https://github.com/matvi-mykula/f2f"],
  },
});
