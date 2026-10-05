# JUST BECAUSE ❤️ — Complete Project Specification

> **Brand:** JUST BECAUSE  
> **Tagline:** becoz you love him/her. ❤️  
> **Brand Email:** admin.justbecause@gmail.com  
> **Instagram:** https://www.instagram.com/bczulove/  
> **Project Type:** Personalized digital surprise website storefront  
> **Primary Goal:** Help customers discover, preview, and order personalized surprise websites with a simple, emotional, mobile-first experience.

---

# 1. Project Overview

JUST BECAUSE is a small digital gifting brand that creates interactive websites for birthdays, romantic surprises, anniversaries, friendships, family celebrations, and other special occasions.

Instead of giving someone an ordinary greeting or message, customers can send a personalized website experience.

The storefront showcases existing website templates. Customers can preview a template through its live demo, see its price, and contact the brand through Instagram to order it.

The project must be simple to maintain. The owner will regularly create and deploy new websites, so adding a template must require editing only a centralized data file and adding its preview image.

The storefront must not require a database, customer accounts, a checkout system, or an admin dashboard for the initial release.

## Core business flow

1. A visitor opens JUST BECAUSE.
2. They browse the available templates.
3. They search by occasion, recipient, or keywords.
4. They filter templates by category.
5. They view a template's actual live demo.
6. They check the displayed price.
7. They click **GET THIS NOW ❤️**.
8. They contact JUST BECAUSE through Instagram.
9. They confirm personalization, hosting duration, payment, and delivery details manually.
10. They receive their personal website link and QR code, where applicable.

---

# 2. Brand Identity

## Brand name

**JUST BECAUSE ❤️**

## Tagline

**becoz you love him/her. ❤️**

## Brand personality

The website should feel:

- Emotional and personal
- Cute, modern, and Gen-Z friendly
- Premium but affordable
- Romantic without being overly cheesy
- Playful, warm, and memorable
- Trustworthy and easy to use
- Focused on gifting rather than technology

This is a digital gifting brand, not a software development agency, portfolio, or SaaS dashboard.

## Brand signature

Use the signature:

**made with love by JUST BECAUSE ❤️**

This signature belongs subtly within the storefront and, where appropriate, within the gift experiences themselves.

Individual live demo websites should remain focused on the recipient. Do not place sales messaging, pricing, purchase buttons, or promotional links inside the live gift experiences.

## Brand contact details

- Instagram: https://www.instagram.com/bczulove/
- Email: admin.justbecause@gmail.com

Use the Instagram account as the primary ordering channel.

Use the email for general inquiries, support, and relevant contact information.

Do not invent a phone number, physical address, or additional social accounts.

---

# 3. Technology Stack

Use the following stack unless the existing project already has a suitable equivalent:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- Framer Motion only where lightweight animations materially improve the experience

Use the existing package manager and preserve the existing project configuration when working inside an established repository.

## Initial architecture

- Static or server-rendered storefront
- Client-side search and filtering
- Centralized TypeScript template data
- Local preview images in the project's public directory
- External live demo links
- Instagram profile link for orders
- Email contact link

No database, authentication, checkout, payment gateway, automated customer management, or admin panel is required for the MVP.

Do not add unnecessary dependencies.

---

# 4. Website Structure

Build a polished, responsive, single-page storefront.

## Main sections

1. Navbar
2. Hero
3. Template gallery
4. Custom website section
5. Hosting extension plans
6. How it works
7. FAQ
8. Minimal footer

Use smooth scrolling for navigation links where appropriate.

---

# 5. Navbar

The navbar should contain:

- JUST BECAUSE ❤️ brand wordmark
- Templates
- Pricing
- How It Works
- FAQ
- DM TO ORDER

The brand wordmark should return visitors to the homepage.

Navigation items should scroll to their corresponding sections.

The **DM TO ORDER** button should open:

https://www.instagram.com/bczulove/

Use a compact mobile navigation menu on smaller screens.

Avoid excessive navigation links.

---

# 6. Hero Section

The hero should immediately explain the brand and its emotional value.

### Main copy

**JUST BECAUSE**

*becoz you love him/her. ❤️*

**Don't just send a "Happy Birthday." Send them a whole experience.**

Discover interactive surprise websites for the people who make your life special.

Primary CTA: **EXPLORE TEMPLATES ↓**

Secondary CTA: **MAKE IT CUSTOM ✨**

Small supporting text:

**Little surprises. Big feelings. Starting at ₹49. ❤️**

The Explore Templates button should scroll to the template gallery.

The Make It Custom button should open Instagram.

## Visual direction

- Emotional and expressive typography
- Warm, soft backgrounds
- Subtle heart details
- Premium card styling
- Attractive website-preview imagery
- Light motion and hover effects
- Responsive layouts
- Clear CTA hierarchy

Avoid excessive gradients, distracting animations, and generic corporate landing-page design.

---

# 7. Template Gallery

The template gallery is the primary feature of the website.

It must be completely data-driven.

Every template card should display only:

1. Preview image
2. Template title
3. Short description
4. Category label
5. Price
6. VIEW LIVE ↗ button
7. GET THIS NOW ❤️ button

Do not display a large collection of tags on each card.

The template's displayed price is its base price, including 24 hours of live access.

The optional hosting extension plans must be explained separately in the Pricing section.

## Card behavior

### VIEW LIVE ↗

- Opens the actual live demo URL in a new browser tab.
- Use `target="_blank"` and `rel="noopener noreferrer"` for external links.
- Never replace the real live demo with a mockup or internal placeholder page.

### GET THIS NOW ❤️

- Opens the brand's Instagram profile:

  https://www.instagram.com/bczulove/

- Use a clear accessible link or button.
- Do not create a fake checkout flow.
- Do not claim that an order has been placed automatically.

### Preview images

- Use screenshots of the actual deployed websites.
- Store image files in the project's public directory.
- Use optimized WebP or AVIF images where practical.
- Preserve aspect ratios.
- Use consistent card-image dimensions.
- Add meaningful alt text.
- Avoid broken images and layout shifts.

If an image is missing, display a designed fallback with the template title and brand styling.

---

# 8. Existing Templates

Start the gallery with the following seven deployed websites.

These are initial entries. The owner will add more templates later.

## Template 1 — Our Little Universe

- ID: `universe`
- Suggested title: Our Little Universe
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-universe.vercel.app/
- Preview image: `/templates/universe.webp`
- Search keywords: `love`, `romantic`, `couple`, `universe`, `premium`

## Template 2 — Love Puzzle

- ID: `puzzle`
- Suggested title: Love Puzzle
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-puzzle.vercel.app/
- Preview image: `/templates/puzzle.webp`
- Search keywords: `love`, `puzzle`, `game`, `couple`, `interactive`

## Template 3 — 50 Reasons I Love You

- ID: `50-reasons`
- Suggested title: 50 Reasons I Love You
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-loveyou-50reasons.vercel.app/
- Preview image: `/templates/50-reasons.webp`
- Search keywords: `love`, `reasons`, `letter`, `romantic`, `message`

## Template 4 — Our Love Memories

- ID: `love-memory-photo`
- Suggested title: Our Love Memories
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-love-memory-photo.vercel.app/
- Preview image: `/templates/love-memory-photo.webp`
- Search keywords: `love`, `photos`, `memories`, `couple`, `photo gallery`

## Template 5 — Heartbeat

- ID: `heartbeat`
- Suggested title: Heartbeat ❤️
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-heartbeat.vercel.app/
- Preview image: `/templates/heartbeat.webp`
- Search keywords: `heart`, `love`, `romantic`, `couple`, `heartbeat`

## Template 6 — Birthday Surprise

- ID: `birthday`
- Suggested title: Birthday Surprise
- Suggested category: Birthday
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-hbd-v6.vercel.app/
- Preview image: `/templates/birthday.webp`
- Search keywords: `birthday`, `hbd`, `cake`, `celebration`, `surprise`

## Template 7 — The Love Game

- ID: `love-game`
- Suggested title: The Love Game
- Suggested category: Love
- Grade: S Premium
- Price: ₹149
- Live URL: https://s-premium-game-love.vercel.app/
- Preview image: `/templates/love-game.webp`
- Search keywords: `love`, `game`, `quiz`, `couple`, `interactive`

The titles, categories, descriptions, and keywords above are suggestions based on the URL names. Verify each live demo and adjust its metadata if the actual experience differs.

All initial entries use the S Premium price of ₹149. The owner must be able to change the grade and price independently for any individual template.

Do not infer a template's grade or price from its URL when adding future templates. Use the explicitly configured data.

---

# 9. Template Grade Pricing

Each template has an individual grade and price.

| Grade | Price |
|---|---:|
| B | ₹49 |
| A | ₹69 |
| S | ₹99 |
| S Premium | ₹149 |

These prices are the base template prices.

Every template's displayed price includes 24 hours of live access.

## Requirements

- Show the actual configured price on each card.
- Do not show all four grades as a pricing table on every template card.
- Do not force users to select a grade during checkout.
- The grade is assigned to the individual template.
- Do not automatically change a template's price when another template is edited.
- Allow new grades to be introduced later with a deliberate code change.

Use consistent Indian Rupee formatting.

---

# 10. Template Search and Category Filters

Place a search input and category chips directly above the gallery.

## Search input

Placeholder:

**Search by occasion, person, or vibe...**

Include a search icon and a clear-search action.

Search should match:

- Template title
- Description
- Category
- Grade
- Search keywords

Search behavior:

- Case-insensitive
- Partial-match support
- Instant results while typing
- Search and category filters work together
- Show a friendly empty state when nothing matches
- Provide a clear-filters action

Example searches:

- Birthday
- Girlfriend
- Boyfriend
- Anniversary
- Best friend
- Mom
- Dad
- Romantic
- Portfolio
- Puzzle

## Category filters

The initial categories should be generated from the template data, with `All` as the default filter.

Initial categories include:

- All
- Love
- Birthday

More categories will be introduced as new templates are added, including:

- Anniversary
- Friendship
- Family
- Portfolio

Do not hardcode a permanent list of every category.

Generate unique categories dynamically from the configured templates.

The category filter must automatically include new categories when a template with a new category is added.

Keep `All` as a special filter that displays every template.

## Search example

If a user searches for `birthday`, all templates matching birthday-related metadata should appear.

If the user selects `Love`, only templates categorized as Love should appear.

If the user selects `Birthday` and searches for `girlfriend`, only birthday-category templates matching the girlfriend keyword should appear.

Do not use AI or an external search API for this. Client-side filtering is sufficient.

## Empty state

Suggested copy:

**No surprises found just yet. 💌**

Try a different keyword or explore all our templates.

CTA: **CLEAR FILTERS**

---

# 11. Centralized Template Data

All template metadata must live in one centralized file:

`src/data/templates.ts`

Use TypeScript types to ensure each template has the required fields.

Example:

```typescript
export type Template = {
  id: string;
  title: string;
  description: string;
  category: string;
  grade: "A" | "B" | "S" | "S Premium";
  price: number;
  image: string;
  liveUrl: string;
  searchKeywords: string[];
};

export const templates: Template[] = [
  {
    id: "universe",
    title: "Our Little Universe",
    description: "A romantic interactive experience for someone special.",
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
    ],
  },
];
```

The example above illustrates the structure. The final implementation must include all seven initial templates.

Do not duplicate template metadata across different components.

The gallery, category filters, search, and cards must all consume the same data source.

## Adding a new template

Adding a new template must require only two steps:

1. Add its preview image under `public/templates/`.
2. Add one object to `src/data/templates.ts`.

Example:

```typescript
{
  id: "portfolio-example",
  title: "My Personal Portfolio",
  description: "A modern portfolio website for showcasing your work.",
  category: "Portfolio",
  grade: "A",
  price: 69,
  image: "/templates/portfolio-example.webp",
  liveUrl: "https://your-portfolio-demo.vercel.app/",
  searchKeywords: ["portfolio", "personal", "developer", "projects"],
}
```

The portfolio example is illustrative, not an existing product.

Once added, the template must automatically appear in the gallery, become searchable, and introduce the Portfolio category if no other template uses it.

No other component should need modification.

---

# 12. Hosting Extension Plans

The price shown on a template card includes 24 hours of live access.

Customers may purchase a longer hosting duration separately.

The extension plans belong in a dedicated Pricing section. Do not confuse these plans with the template grades.

## Section heading

**Want to Keep the Surprise Longer? ❤️**

Supporting copy:

Every template comes with 24 hours of live access included in its displayed price.

Want your special surprise to stay online longer? Choose an extension plan.

## Extension plan table

| Extension Plan | Price | Live Duration |
|---|---:|---|
| Weekly | ₹99 | 7 days |
| Monthly | ₹199 | 30 days |
| Yearly | ₹499 | 365 days |

The duration listed here means the total intended hosting duration, not an additional period automatically added to the initial 24 hours.

Before implementation, make sure the order-confirmation copy makes clear whether an extension replaces the default duration or extends the remaining time. Do not silently promise both interpretations.

## Custom website

### Custom Website ✨

**Starting at ₹199**

Supporting copy:

Have an idea nobody else has? Tell us what you're imagining, and we'll create a website designed just for your special person.

The final price depends on design complexity, personalization, requested features, and hosting duration.

CTA: **MAKE IT CUSTOM →**

This CTA should open Instagram.

## Pricing implementation rules

- Template grade price and hosting extension price are separate.
- Do not add the extension price to the template price automatically unless the user explicitly chooses an extension and the interface clearly shows the combined total.
- Do not build a checkout system for the MVP.
- Orders, extensions, and payments are handled manually through Instagram.
- Do not claim that the selected plan has been purchased or activated automatically.

---

# 13. Custom Website Section

Heading:

**Want Something Nobody Else Has? ✨**

Description:

Every person is different. Your surprise can be, too.

Tell us your idea, and we'll create a personalized website with your preferred theme, names, photos, messages, and agreed features.

Supporting price:

**Custom websites starting at ₹199.**

CTA:

**MAKE IT CUSTOM →**

The button opens the brand's Instagram profile.

Do not promise a fixed price for every custom request.

Custom work must be quoted manually after understanding the customer's requirements.

---

# 14. How It Works

Use three clear steps.

## 01 — Pick Your Surprise

Browse the collection, find a template you love, and preview its live demo.

## 02 — DM Us ❤️

Message us on Instagram with the template name, special date, and personalization details.

## 03 — Get Your Link

After the details, payment, and delivery timeline are confirmed, receive your personal website link and QR code where applicable.

Closing line:

**You send it. They smile. ❤️**

---

# 15. Order and Delivery Policy

The website should explain that customers should order in advance.

## Recommended order timing

**We recommend placing your order at least 7 days before your special date.**

This gives the brand time to prepare content, confirm requirements, and deliver the website.

- **7 or more days before:** Recommended ordering window.
- **3–6 days before:** Ask us to confirm availability.
- **Within 48 hours:** Urgent orders are subject to availability.
- **Same-day delivery:** Must be confirmed manually and is not guaranteed.

## Estimated delivery times

Use these as initial planning estimates, not guarantees:

- Premade template: usually 1–3 days after required details and payment are received.
- Customized template: usually 3–5 days.
- Fully custom website: usually 5–7 days or longer depending on complexity.

Confirm the delivery date with the customer before starting work.

If the brand cannot meet a requested deadline, communicate that clearly before accepting the order.

Do not advertise guaranteed rush delivery or automatic refunds without a defined business policy.

---

# 16. FAQ Section

Use an accessible accordion component.

## How does ordering work?

Choose a template, preview it, and message us on Instagram. We'll confirm the details, price, payment, and delivery timeline.

## What is included in the template price?

The selected template website and 24 hours of live access are included in its displayed price.

Any additional personalization must be confirmed for that template.

## Can I keep my website live for longer?

Yes. Choose from the Weekly, Monthly, or Yearly extension options, and confirm the hosting duration with us before payment.

## Can I customize the template?

Basic personalization may be available depending on the template. Major design changes or additional features may cost extra.

## Can you create a completely custom website?

Yes. Custom websites start at ₹199, with the final price based on your requirements.

## How early should I order?

We recommend ordering at least 7 days before the special date. Contact us first for urgent requests.

## How will I receive the website?

After your order is completed, we'll send your personal website link and QR code where applicable.

## What happens when the hosting period ends?

The website may go offline when the agreed hosting period ends unless an extension has been arranged.

## How do I contact you?

DM us on Instagram at @bczulove or email admin.justbecause@gmail.com.

Do not promise features, customization, delivery times, or refund policies that have not been confirmed by the business.

---

# 17. Footer

The footer must remain intentionally minimal.

Display only:

**Why you make this**

**JUST BECAUSE ❤️**

Do not add a collection of social links, copyright clutter, large About sections, or unnecessary footer navigation.

The email can appear in the FAQ or relevant contact area rather than cluttering the footer.

---

# 18. Design System

## Overall direction

Create a cohesive, premium, romantic storefront that feels personal and delightful.

The site should look polished without feeling expensive, corporate, or overly complicated.

## Colors

Use a restrained palette built around:

- Warm off-white or cream backgrounds
- Soft blush and rose accents
- Deep charcoal for primary text
- Muted pink or red for hearts and primary actions
- Subtle neutral borders

Use CSS variables or centralized Tailwind theme tokens so the palette can be changed easily.

Avoid using a different color system for every section.

## Typography

Use a distinctive, readable heading font paired with a clean body font.

- Headlines should be expressive and memorable.
- Body copy should be simple and readable.
- Buttons should have clear labels.
- Prices should be easy to scan.

## Cards

- Consistent image proportions
- Soft rounded corners
- Clean spacing
- Subtle borders or shadows
- Gentle hover movement
- Clear price hierarchy
- Consistent button placement

## Motion

Use motion sparingly:

- Subtle card hover effects
- Smooth anchor scrolling
- Small entrance transitions
- Gentle decorative details

Respect reduced-motion preferences.

Do not use animations that delay access to content or make the website feel slow.

---

# 19. Responsive Design

Build mobile-first.

## Mobile requirements

- Fully responsive navbar
- Full-width or comfortably sized search input
- Category chips that wrap or scroll horizontally
- Template cards that fit narrow screens
- Large, accessible CTA touch targets
- No horizontal overflow
- Clear text hierarchy
- Images that load efficiently
- Properly spaced pricing tables
- FAQ accordions that work with touch

The storefront must remain attractive on phones because customers are likely to discover and order templates through social media.

Test at narrow mobile, standard mobile, tablet, and desktop widths.

---

# 20. Accessibility

- Use semantic HTML.
- Use descriptive image alt text.
- Ensure sufficient text contrast.
- Provide keyboard-accessible navigation.
- Use visible focus indicators.
- Give icon-only controls accessible labels.
- Ensure accordion controls communicate expanded state.
- Use real links for navigation and external destinations.
- Respect reduced-motion preferences.
- Do not communicate price or category using color alone.

---

# 21. SEO and Metadata

Set the following default metadata:

**Site title:** JUST BECAUSE ❤️ — Digital Surprises Made with Love

**Description:** Discover personalized surprise websites for birthdays, love, anniversaries, friends, and family. Find a little way to make someone's day special.

Include:

- A favicon or brand icon
- Open Graph metadata
- Social sharing image
- Canonical URL once the production domain is known
- Sensible page title hierarchy
- Descriptive URLs and link labels where relevant

Do not invent a production domain before one is provided.

Avoid duplicating large amounts of text across the page solely for SEO.

---

# 22. Performance

- Optimize local template preview images.
- Prefer WebP or AVIF where supported by the chosen image pipeline.
- Reserve image space to reduce layout shift.
- Lazy-load below-the-fold images.
- Avoid loading all external demo websites inside iframes.
- Open demos only when visitors click VIEW LIVE.
- Avoid unnecessary JavaScript and animation libraries.
- Use Next.js image optimization where appropriate.
- Keep search and filtering responsive with a growing template list.

Do not fetch or scrape every live website at runtime just to populate the gallery.

The template metadata must come from the local TypeScript data file.

---

# 23. Security and Reliability

- Use only the configured live URLs.
- Validate template records during development.
- Never render untrusted template descriptions as raw HTML.
- Use safe external-link attributes.
- Do not store payment information.
- Do not collect personal data through an unnecessary form.
- Avoid adding third-party trackers unless explicitly required.
- Provide clear fallbacks for missing preview images.
- Handle an empty search result gracefully.
- Ensure missing or invalid optional fields do not crash the gallery.

Use the brand's provided Instagram and email addresses exactly.

---

# 24. Suggested Project Structure

Adapt this structure to the existing repository rather than replacing working configuration without a reason.

```text
just-because/
├── public/
│   ├── templates/
│   │   ├── universe.webp
│   │   ├── puzzle.webp
│   │   ├── 50-reasons.webp
│   │   ├── love-memory-photo.webp
│   │   ├── heartbeat.webp
│   │   ├── birthday.webp
│   │   └── love-game.webp
│   ├── images/
│   │   └── og-image.webp
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TemplateGallery.tsx
│   │   ├── TemplateCard.tsx
│   │   ├── TemplateSearch.tsx
│   │   ├── CategoryFilters.tsx
│   │   ├── CustomWebsite.tsx
│   │   ├── HostingPlans.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── templates.ts
│   └── lib/
│       └── constants.ts
├── project.md
├── package.json
└── README.md
```

Components may be combined or reorganized where that produces a cleaner implementation.

Do not create empty files or unnecessary abstractions just to match this tree.

---

# 25. Implementation Requirements

Build the actual functioning storefront, not just a design mockup.

The implementation must include:

- Complete homepage
- Responsive navbar
- Hero with functional CTA buttons
- Template cards generated from the centralized data file
- All seven initial live demo URLs
- Correct initial grade and price values
- Local preview image support
- Search by title, description, category, grade, and keywords
- Dynamic category filters
- Search and category filtering working together
- Clear-filters action and empty state
- Working VIEW LIVE buttons
- Working GET THIS NOW buttons
- Custom website section
- Hosting extension pricing section
- How It Works section
- FAQ accordion
- Minimal footer
- Brand email and Instagram contact links
- Responsive layout and accessibility
- Appropriate SEO metadata
- Useful loading and image-fallback behavior

Do not implement:

- Authentication
- Database
- Shopping cart
- Payment gateway
- Automatic payment verification
- Admin dashboard
- Automated deployment for customer orders
- User accounts
- Customer analytics dashboards
- An AI chatbot
- A separate product detail page unless it becomes necessary later

These are not needed for the initial version.

---

# 26. Acceptance Checklist

Before considering the project complete, verify all of the following.

## Brand and layout

- [ ] Brand name and tagline are correct.
- [ ] Brand email and Instagram URL are correct.
- [ ] Homepage sections appear in the intended order.
- [ ] Footer contains only the specified minimal content.
- [ ] The design is consistent across mobile and desktop.

## Templates

- [ ] All seven provided demo URLs are included.
- [ ] Each template has its own title, description, category, grade, price, image, live URL, and keywords.
- [ ] Each template displays the correct price.
- [ ] VIEW LIVE opens the correct demo.
- [ ] GET THIS NOW opens the correct Instagram profile.
- [ ] Missing preview images have a graceful fallback.
- [ ] Adding a template requires only a new image and a data entry.

## Search and filters

- [ ] Search works without a page reload.
- [ ] Category filters work.
- [ ] Search and category filters can be combined.
- [ ] Categories update automatically when new categories are added to the data.
- [ ] Empty results are handled clearly.
- [ ] Clear filters resets the search and category selection.

## Pricing and ordering

- [ ] Grade B is ₹49.
- [ ] Grade A is ₹69.
- [ ] Grade S is ₹99.
- [ ] Grade S Premium is ₹149.
- [ ] Each template price includes the stated 24-hour base hosting duration.
- [ ] Weekly extension is displayed at ₹99 for 7 days.
- [ ] Monthly extension is displayed at ₹199 for 30 days.
- [ ] Yearly extension is displayed at ₹499 for 365 days.
- [ ] Custom website pricing starts at ₹199.
- [ ] Extension terms clearly distinguish total duration from additional duration.
- [ ] Delivery estimates are presented as estimates, not guarantees.

## Quality

- [ ] No broken internal links.
- [ ] No console errors.
- [ ] No horizontal overflow on mobile.
- [ ] Buttons and interactive elements are keyboard accessible.
- [ ] Preview images are optimized.
- [ ] SEO metadata is present.
- [ ] The project builds successfully.
- [ ] No unnecessary backend or third-party service is required.

---

# 27. Instructions to the Implementing Agent

Read this specification fully before starting.

First, inspect the existing repository, package manager, current routes, components, styles, and assets.

Preserve any working setup and reuse existing components where sensible.

Then:

1. Implement the data model and all seven initial template entries.
2. Build the template gallery and reusable card component.
3. Implement search and dynamic category filters.
4. Implement the homepage sections and responsive styling.
5. Connect every CTA to its intended destination.
6. Add the pricing, custom website, delivery information, FAQ, and footer.
7. Optimize local preview images and metadata.
8. Run the available lint, type-check, and production-build commands.
9. Fix any errors introduced by the implementation.
10. Provide a concise summary of what was built, what was tested, and which preview image assets the owner still needs to supply.

Do not stop after creating a plan or wireframe. Complete the implementation in the existing repository.

Do not invent additional templates, prices, URLs, guarantees, or business policies.

If an image asset is not available, implement the correct image path and fallback rather than inventing a screenshot of the actual website.

The finished website should be visually polished, maintainable, easy to extend, and ready for the owner to add more templates over time.

**The core principle: one new template should require one new data entry and one preview image—nothing more.**

**JUST BECAUSE ❤️**

*becoz you love him/her.*