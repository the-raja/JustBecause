export type TemplateGrade = "B" | "A" | "S" | "S Premium";

export type Template = {
  id: string;
  title: string;
  description: string;
  category: string;
  grade: TemplateGrade;
  price: number;
  image: string;
  liveUrl: string;
  searchKeywords: string[];
  featured?: boolean;
};

export const templates: Template[] = [
  {
    id: "universe",
    title: "Our Little Universe",
    description: "A romantic interactive starry universe experience crafted especially for someone special.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/universe.webp",
    liveUrl: "https://s-premium-universe.vercel.app/",
    searchKeywords: [
      "love",
      "romantic",
      "couple",
      "universe",
      "premium",
      "stars",
      "constellation",
      "girlfriend",
      "boyfriend",
      "anniversary",
    ],
    featured: true,
  },
  {
    id: "puzzle",
    title: "Love Puzzle",
    description: "An interactive romantic puzzle game revealing your heartfelt love message upon completion.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/puzzle.webp",
    liveUrl: "https://s-premium-puzzle.vercel.app/",
    searchKeywords: [
      "love",
      "puzzle",
      "game",
      "couple",
      "interactive",
      "romantic",
      "cute",
      "girlfriend",
      "boyfriend",
    ],
    featured: true,
  },
  {
    id: "50-reasons",
    title: "50 Reasons I Love You",
    description: "A beautifully animated digital card flip book detailing 50 meaningful reasons why you love them.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/50-reasons.webp",
    liveUrl: "https://s-premium-loveyou-50reasons.vercel.app/",
    searchKeywords: [
      "love",
      "reasons",
      "letter",
      "romantic",
      "message",
      "card",
      "anniversary",
      "girlfriend",
      "boyfriend",
    ],
    featured: false,
  },
  {
    id: "love-memory-photo",
    title: "Our Love Memories",
    description: "An emotional visual timeline and photo gallery celebrating your sweetest shared moments.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/love-memory-photo.webp",
    liveUrl: "https://s-premium-love-memory-photo.vercel.app/",
    searchKeywords: [
      "love",
      "photos",
      "memories",
      "couple",
      "photo gallery",
      "timeline",
      "pictures",
      "girlfriend",
      "boyfriend",
    ],
    featured: false,
  },
  {
    id: "heartbeat",
    title: "Heartbeat ❤️",
    description: "A dynamic pulsing heartbeat animation that syncs memories, sweet quotes, and timeless affection.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/heartbeat.webp",
    liveUrl: "https://s-premium-heartbeat.vercel.app/",
    searchKeywords: [
      "heart",
      "love",
      "romantic",
      "couple",
      "heartbeat",
      "pulse",
      "girlfriend",
      "boyfriend",
      "valentine",
    ],
    featured: false,
  },
  {
    id: "birthday",
    title: "Birthday Surprise",
    description: "A joyful, interactive birthday celebration website complete with virtual cake, balloons, and personal wishes.",
    category: "Birthday",
    grade: "S Premium",
    price: 149,
    image: "/templates/birthday.webp",
    liveUrl: "https://s-premium-hbd-v6.vercel.app/",
    searchKeywords: [
      "birthday",
      "hbd",
      "cake",
      "celebration",
      "surprise",
      "party",
      "friend",
      "best friend",
      "bday",
    ],
    featured: true,
  },
  {
    id: "love-game",
    title: "The Love Game",
    description: "A playful couple's quiz and interactive mini-game designed to spark laughs and romantic bonding.",
    category: "Love",
    grade: "S Premium",
    price: 149,
    image: "/templates/love-game.webp",
    liveUrl: "https://s-premium-game-love.vercel.app/",
    searchKeywords: [
      "love",
      "game",
      "quiz",
      "couple",
      "interactive",
      "fun",
      "romantic",
      "girlfriend",
      "boyfriend",
    ],
    featured: false,
  },
];

/**
 * Dynamically extract unique categories from templates.
 * "All" is always prepended as the default view.
 */
export function getCategories(templateList: Template[] = templates): string[] {
  const uniqueCategories = Array.from(
    new Set(templateList.map((t) => t.category.trim()))
  ).filter(Boolean);
  return ["All", ...uniqueCategories];
}

/**
 * Extract only featured templates (initially 3 for the homepage).
 */
export function getFeaturedTemplates(templateList: Template[] = templates): Template[] {
  return templateList.filter((t) => t.featured);
}

/**
 * Filter templates by case-insensitive partial match across:
 * - title
 * - description
 * - category
 * - grade
 * - searchKeywords
 * In combination with the selected category.
 */
export function filterTemplates(
  templateList: Template[] = templates,
  query: string = "",
  category: string = "All"
): Template[] {
  const trimmedQuery = query.trim().toLowerCase();

  return templateList.filter((template) => {
    // 1. Category check
    if (category !== "All" && template.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // 2. Query check (if empty, matches all within category)
    if (!trimmedQuery) {
      return true;
    }

    const matchesTitle = template.title.toLowerCase().includes(trimmedQuery);
    const matchesDescription = template.description.toLowerCase().includes(trimmedQuery);
    const matchesCategory = template.category.toLowerCase().includes(trimmedQuery);
    const matchesGrade = template.grade.toLowerCase().includes(trimmedQuery);
    const matchesKeywords = template.searchKeywords.some((keyword) =>
      keyword.toLowerCase().includes(trimmedQuery)
    );

    return matchesTitle || matchesDescription || matchesCategory || matchesGrade || matchesKeywords;
  });
}
