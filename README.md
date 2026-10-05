# JUST BECAUSE ❤️ — Digital Surprises Made with Love

> **Tagline:** *becoz you love him/her.* ❤️  
> **Instagram:** [@bczulove](https://www.instagram.com/bczulove/)  
> **Brand Email:** admin.justbecause@gmail.com  

Personalized digital surprise website storefront showcasing interactive websites for birthdays, love celebrations, anniversaries, friendships, and milestones.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js 24)
- npm 9+

### Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Production build
npm run build

# Start production server
npm run start

# Code linting
npm run lint
```

---

## 🎁 How to Add a New Template

Adding a new template requires only **two simple steps**:

1. **Add preview image:**
   Place the preview image under `public/templates/<template-id>.webp` (16:10 aspect ratio recommended).

2. **Add entry to data file:**
   Open `src/data/templates.ts` and append your template object to the `templates` array:

   ```typescript
   {
     id: "anniversary-special",
     title: "Our Milestone Story",
     description: "A romantic timeline celebrating your journey together.",
     category: "Anniversary", // New categories automatically appear in filter chips!
     grade: "S Premium",
     price: 149,
     image: "/templates/anniversary-special.webp",
     liveUrl: "https://your-deployed-demo.vercel.app/",
     searchKeywords: ["anniversary", "milestone", "couple", "love", "timeline"],
   }
   ```

That's it! The storefront dynamically updates the gallery, category filters, and search indexing without touching any component code.

---

## 📁 Project Architecture

```text
just-because/
├── public/
│   ├── templates/          # Template preview images (WebP format)
│   ├── images/             # Social sharing & OG images
│   └── logo.png            # Brand mark & favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Global Root layout with Navbar, Footer & SEO
│   │   ├── page.tsx        # Homepage (Hero, Explainer, 3 Featured Templates, Custom Teaser, Pricing Facts)
│   │   ├── templates/      # /templates (Full searchable & filterable gallery)
│   │   ├── pricing/        # /pricing (Grade pricing, Hosting extensions, Policy)
│   │   ├── faq/            # /faq (Complete 11-question accessible accordion)
│   │   ├── custom/         # /custom (Bespoke website design service & checklist)
│   │   └── globals.css     # Theme tokens, fonts, and romantic CSS animations
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky brand navbar with active routes & mobile drawer
│   │   ├── Hero.tsx        # Brand hero with floating cards & romantic background
│   │   ├── FloatingHearts.tsx # Subtle drifting hearts & sparkles
│   │   ├── InteractiveLoveLetter.tsx # Interactive unfolding love note
│   │   ├── Doodles.tsx     # Romantic hand-drawn SVG doodles (bow, star, sparkles)
│   │   ├── ProductExplainer.tsx # 3 concise product benefit cards
│   │   ├── FeaturedTemplates.tsx # 3 featured templates with "View All" CTA
│   │   ├── TemplateGallery.tsx # Data-driven searchable & filterable gallery
│   │   ├── TemplateCard.tsx    # Card with live demo & Instagram order CTAs + fallback
│   │   ├── TemplateSearch.tsx  # Instant case-insensitive search bar
│   │   ├── CategoryFilters.tsx # Dynamic category chip filters
│   │   ├── CustomTeaser.tsx    # Homepage custom website teaser
│   │   ├── QuickPricingHighlights.tsx # Transparent pricing overview
│   │   ├── HowItWorks.tsx      # 3-step process & delivery timeline policies
│   │   ├── FAQ.tsx             # Accessible accordion with all 11 business answers
│   │   ├── FinalCTA.tsx        # Emotional closing CTA block
│   │   ├── Footer.tsx          # Minimal required footer
│   │   └── icons/              # Custom brand SVG icons
│   ├── data/
│   │   └── templates.ts    # Centralized single source of truth for templates
│   └── lib/
│       └── constants.ts    # Brand constants, pricing tables & policies
├── scripts/
│   └── generate-previews.cjs # Utility to generate high-quality placeholder WebPs
├── project-refactor.md     # Multi-page refactoring specification
├── project.md              # Brand & project master specification
└── package.json
```

---

## 💰 Pricing Structure

### Template Grades (Base 24h Live Access Included)
- **Grade B:** ₹49
- **Grade A:** ₹69
- **Grade S:** ₹99
- **Grade S Premium:** ₹149

### Hosting Extension Plans (Total Duration)
- **Weekly:** ₹99 (7 days)
- **Monthly:** ₹199 (30 days)
- **Yearly:** ₹499 (365 days)

### Bespoke Custom Websites
- Starting at ₹199 (quoted manually on Instagram based on requirements).

---

*made with love by JUST BECAUSE ❤️*
