export const BRAND = {
  name: "JUST BECAUSE ❤️",
  shortName: "JUST BECAUSE",
  tagline: "you love him/her. ❤️",
  email: "admin.justbecause@gmail.com",
  instagramUrl: "https://www.instagram.com/bczulove/",
  instagramHandle: "@bczulove",
  signature: "made with love by JUST BECAUSE ❤️",
  baseHostingText: "24 hours of live access included",
  startingPrice: 49,
  customStartingPrice: 199,
} as const;

export const GRADE_PRICING = [
  { grade: "B", price: 49, description: "Sweet & simple digital surprise" },
  { grade: "A", price: 69, description: "Delightful interactive experience" },
  { grade: "S", price: 99, description: "Rich animations & playful design" },
  { grade: "S Premium", price: 149, description: "Top-tier bespoke interactive website" },
] as const;

export const HOSTING_EXTENSION_PLANS = [
  {
    id: "weekly",
    name: "Weekly",
    duration: "7 days",
    price: 99,
    description: "Perfect for birthday weeks and special anniversary trips.",
    popular: false,
  },
  {
    id: "monthly",
    name: "Monthly",
    duration: "30 days",
    price: 199,
    description: "Our most popular option. Keep the butterflies alive all month long.",
    popular: true,
  },
  {
    id: "yearly",
    name: "Yearly",
    duration: "365 days",
    price: 499,
    description: "An eternal digital keepsake they can revisit anytime, anywhere.",
    popular: false,
  },
] as const;

export const ORDER_TIMING_POLICY = {
  recommendedDays: 7,
  noticeText: "We recommend placing your order at least 7 days before your special date.",
  windows: [
    {
      window: "7 or more days before",
      badge: "Recommended",
      status: "Ideal",
      description: "Our recommended ordering window. Plenty of time to customize content, review previews, and launch flawlessly.",
    },
    {
      window: "3–6 days before",
      badge: "Standard",
      status: "Confirm First",
      description: "Ask us to confirm slot availability before booking to ensure your timeline can be accommodated.",
    },
    {
      window: "Within 48 hours",
      badge: "Urgent",
      status: "Subject to Availability",
      description: "Urgent slots are limited and accepted only based on current studio bandwidth.",
    },
    {
      window: "Same-day delivery",
      badge: "Emergency",
      status: "Manual Confirmation Only",
      description: "Must be confirmed manually via Instagram DM and is never automatically guaranteed.",
    },
  ],
  deliveryEstimates: [
    { type: "Premade template", time: "1–3 days", note: "After required details & payment are received" },
    { type: "Customized template", time: "3–5 days", note: "With custom photos, text, and minor color tweaks" },
    { type: "Fully custom website", time: "5–7 days or longer", note: "Depending on interactive complexity & features" },
  ],
} as const;
