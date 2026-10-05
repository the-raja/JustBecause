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
│   │   ├── layout.tsx      # Root layout with SEO & OpenGraph tags
│   │   ├── page.tsx        # Homepage assembling all 8 storefront sections
│   │   └── globals.css     # Theme tokens, fonts, and romantic CSS animations
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky brand navbar with mobile drawer
│   │   ├── Hero.tsx        # Brand hero with CTA buttons & highlights
│   │   ├── TemplateGallery.tsx # Data-driven searchable & filterable gallery
│   │   ├── TemplateCard.tsx    # Card with live demo & Instagram order CTAs + fallback
│   │   ├── TemplateSearch.tsx  # Instant case-insensitive search bar
│   │   ├── CategoryFilters.tsx # Dynamic category chip filters
│   │   ├── CustomWebsite.tsx   # Bespoke website section (Starting at ₹199)
│   │   ├── HostingPlans.tsx    # Hosting extension plans (Weekly, Monthly, Yearly)
│   │   ├── HowItWorks.tsx      # 3-step process & delivery timeline policies
│   │   ├── FAQ.tsx             # Accessible accordion with all business answers
│   │   ├── Footer.tsx          # Minimal required footer
│   │   └── icons/              # Custom brand SVG icons
│   ├── data/
│   │   └── templates.ts    # Centralized single source of truth for templates
│   └── lib/
│       └── constants.ts    # Brand constants, pricing tables & policies
├── scripts/
│   └── generate-previews.cjs # Utility to generate high-quality placeholder WebPs
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
