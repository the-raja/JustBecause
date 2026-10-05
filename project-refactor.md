# JUST BECAUSE ❤️ — Website Refactoring Specification

## 1. Project Objective

Refactor the existing JUST BECAUSE website from a long, single-page storefront into a polished, multi-page digital gifting website.

The current website has an appealing visual design and established branding. **Preserve its existing visual identity, styling, animations, reusable components, and working functionality wherever possible.**

The goal is to improve navigation, content organization, product discovery, and the overall customer journey without losing the emotional, cute, modern, premium-but-affordable aesthetic.

This is a refactoring task, not a complete redesign.

## 2. Brand Identity

**Brand:** JUST BECAUSE ❤️

**Tagline:** becoz you love him/her. ❤️

**Brand email:** admin.justbecause@gmail.com

**Instagram:** https://www.instagram.com/bczulove/

**Brand personality:**
- Cute, emotional, romantic, and thoughtful.
- Modern and Gen-Z friendly.
- Visually polished without feeling corporate.
- Affordable and approachable.
- Focused on creating memorable digital surprises.

**Core value proposition:**

JUST BECAUSE creates interactive surprise websites for birthdays, romantic occasions, anniversaries, friendships, family celebrations, and other special moments.

Customers can explore premade templates, test actual live demos, order a template through Instagram, or request a personalized website.

The product is a digital experience, not a physical gift or an ordinary greeting card.

---

## 3. New Website Architecture

Refactor the website into the following routes.

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Introduce the brand, showcase featured templates, and guide visitors to the next action. |
| `/templates` | Templates | Display the complete searchable and filterable template collection. |
| `/pricing` | Pricing | Explain template grades, hosting durations, inclusions, and custom website pricing. |
| `/faq` | FAQ | Answer common questions about orders, customization, hosting, delivery, and support. |
| `/custom` | Custom Websites | Optional dedicated page explaining the personalized website service. |

Implement the `/custom` page if it fits naturally into the existing application architecture. Otherwise, keep a dedicated custom website section on the homepage that links directly to Instagram.

Use the framework's existing routing conventions. If the project uses Next.js App Router, use the appropriate route structure under `src/app/` or `app/`, consistent with the current codebase.

Do not introduce a new framework or replace the existing project setup unnecessarily.

## 4. Global Navigation

Create or refactor one reusable navbar shared across all pages.

### Desktop navigation

- JUST BECAUSE ❤️ logo
- Home
- Templates
- Pricing
- How It Works
- FAQ
- DM TO ORDER

Suggested destinations:

- Home → `/`
- Templates → `/templates`
- Pricing → `/pricing`
- How It Works → homepage how-it-works section, using a working anchor or equivalent navigation
- FAQ → `/faq`
- DM TO ORDER → https://www.instagram.com/bczulove/

The logo should navigate to the homepage.

### Mobile navigation

- Use a compact responsive header.
- Include an accessible menu toggle.
- Make all navigation links easy to tap.
- Keep the Instagram order action visible or easy to access.
- Close the menu after a navigation selection.
- Prevent the menu from overflowing the viewport.
- Support keyboard interaction and accessible labels.

Highlight the active route where appropriate.

Do not duplicate the navbar implementation on every page.

---

## 5. Homepage Refactoring

The homepage should be concise, emotionally engaging, and focused on conversion.

**Do not place the complete template gallery, detailed hosting plans, the full pricing-grade reference, long delivery policies, and all FAQ content on the homepage.** Those belong on their respective pages.

### Section 1: Hero

Preserve the existing brand aesthetic and use the following copy:

**Eyebrow or brand label:**

JUST BECAUSE

**Main headline:**

becoz you love him/her. ❤️

**Supporting headline:**

Don't just send a “Happy Birthday.”

Send them a whole experience.

**Description:**

Discover interactive surprise websites for the people who make your life special.

**Primary CTA:** EXPLORE TEMPLATES

Destination: `/templates`

**Secondary CTA:** MAKE IT CUSTOM

Destination: `/custom` if implemented; otherwise, Instagram.

**Supporting line:**

Little surprises. Big feelings. Starting at ₹49.

Include a suitable visual that communicates the actual product, such as a responsive preview of an interactive surprise website displayed inside a phone or browser mockup.

Use an actual project asset or a suitable existing visual if available. Do not invent screenshots of the live templates.

### Section 2: Explain the Product

Add a compact section immediately below the hero to help first-time visitors understand what JUST BECAUSE sells.

Suggested heading:

**A little website. A whole lot of feelings. ❤️**

Suggested description:

A digital surprise made just for someone special. Add personal memories, messages, and interactive moments, then share the link and make their day unforgettable.

Present three concise benefits:

1. **Interactive experiences** — More than a regular greeting card.
2. **Personal touches** — Names, photos, memories, and messages where supported.
3. **A link worth sharing** — Send the surprise digitally, with a QR code where applicable.

Use small icons or restrained illustrations consistent with the current design.

Avoid repeating the entire hero message.

### Section 3: Featured Templates

Heading:

**Interactive Template Gallery**

Subheading:

**Pick a Surprise Experience**

Supporting copy:

Explore a few of our favorite interactive surprises. Open a live demo to experience the magic before choosing your own.

Show only **three featured templates** on the homepage.

Initial featured selection:

- Our Little Universe
- Love Puzzle
- Birthday Surprise

The featured selection should be easy to change through centralized template data.

Each featured card should include:

1. Actual preview image.
2. Template title.
3. Short description.
4. Category.
5. Price.
6. VIEW LIVE ↗
7. GET THIS NOW ❤️

Price display example:

₹149 — includes 24-hour live access.

Button behavior:

- VIEW LIVE → opens that template's actual demo URL in a new tab.
- GET THIS NOW → opens the brand's Instagram profile.

Use safe external-link behavior, including appropriate `rel` attributes when opening new tabs.

Add a clear **VIEW ALL TEMPLATES →** CTA beneath the three cards.

Destination: `/templates`

Do not display all seven or future templates on the homepage.

### Section 4: How It Works

Keep this section short, using three steps.

**01 — Pick Your Surprise**

Browse the collection, find a template you love, and preview its actual live demo.

**02 — DM Us ❤️**

Send us the template name, special date, hosting preference, and personalization details through Instagram.

**03 — Get Your Link**

Once the details, payment, and delivery timeline are confirmed, receive your personal website link and QR code where applicable.

Closing line:

**You send it. They smile.**

Keep the visual treatment compact so this section does not make the homepage unnecessarily long.

### Section 5: Custom Website Teaser

Heading:

**Want Something Nobody Else Has? ✨**

Supporting copy:

Every person is different. Your surprise can be, too. Tell us your idea, and we'll create a personalized website with your preferred theme, names, photos, messages, and agreed features.

Price label:

**Custom websites starting at ₹199**

Clarification:

Final pricing depends on design complexity, personalization, requested features, and hosting duration.

CTA:

**MAKE IT CUSTOM →**

Destination: `/custom` if implemented; otherwise, Instagram.

Show a small set of visual examples or feature highlights, but do not reproduce the entire custom service description from the previous long page.

### Section 6: Quick Pricing and Trust Highlights

Show only a compact set of useful facts:

- Templates starting at ₹49.
- 24 hours of live access included in the displayed template price.
- Optional longer hosting plans.
- Personal link and QR code where applicable.

Use concise text and simple icons.

Only display claims the business can reliably fulfill. Do not invent testimonials, customer counts, ratings, guarantees, or delivery promises.

Add a small CTA linking to `/pricing`.

### Section 7: Final CTA

Heading:

**Someone you love deserves a little surprise. ❤️**

Description:

Make their ordinary day feel a little less ordinary.

CTA:

**FIND YOUR SURPRISE →**

Destination: `/templates`

Keep the footer minimal.

---

## 6. Templates Page — `/templates`

Move the complete template gallery to its own dedicated page.

### Page heading

**Find Your Perfect Surprise ❤️**

Description:

Browse interactive digital gifts, try the live demos, and choose a little experience for someone special.

### Search

Placeholder:

`Search by occasion, person, or vibe...`

Requirements:

- Case-insensitive partial matching.
- Search title, description, category, grade, and keywords.
- Update results immediately as the user types.
- Provide a clear-search control.
- Combine search results with the selected category filter.
- Display a friendly empty state if nothing matches.
- Include a way to clear filters and return to all templates.

No backend or AI-powered search is required.

### Dynamic category filters

Generate categories from the centralized template data rather than hardcoding individual categories in the component.

Initially, the available categories include:

- All
- Love
- Birthday

Future categories may include:

- Anniversary
- Friendship
- Family
- Portfolio

`All` is a special default filter and should not be treated as a regular category.

When a new category is added to the data, it should appear automatically.

### Template count

Display a live result count, for example:

`Showing 7 surprise templates`

Update the count when search or category filters change.

Use grammatically appropriate singular and plural labels.

### Template cards

Reuse the existing template-card component if it is suitable.

Each card should contain:

- Actual template preview image.
- Category label.
- Grade label.
- Title.
- Short description.
- Price including the default 24-hour live-access window.
- VIEW LIVE.
- GET THIS NOW.

Do not add unnecessary information that makes the cards visually crowded.

### Preview assets

Expected preview assets:

- `/templates/universe.webp`
- `/templates/puzzle.webp`
- `/templates/50-reasons.webp`
- `/templates/love-memory-photo.webp`
- `/templates/heartbeat.webp`
- `/templates/birthday.webp`
- `/templates/love-game.webp`

Check whether these assets already exist before creating or replacing anything.

If any preview image is missing:

- Do not show a broken image.
- Use a polished placeholder consistent with the existing design.
- Make the missing asset easy to identify during development.
- Document which real screenshots still need to be added.

Do not represent generic illustrative imagery as an actual screenshot of a live demo.

---

## 7. Centralized Template Data

Keep all template information in one central data source, preferably the existing `src/data/templates.ts` file if that matches the project structure.

Each template should support fields equivalent to:

- `id`
- `title`
- `description`
- `category`
- `grade`
- `price`
- `demoUrl`
- `image`
- `keywords`
- `featured`

Use appropriate TypeScript types or the equivalent type system already used by the project.

Initial template data:

| ID | Title | Category | Grade | Price | Preview |
|---|---|---|---|---:|---|
| `universe` | Our Little Universe | Love | S Premium | ₹149 | `/templates/universe.webp` |
| `puzzle` | Love Puzzle | Love | S Premium | ₹149 | `/templates/puzzle.webp` |
| `50-reasons` | 50 Reasons I Love You | Love | S Premium | ₹149 | `/templates/50-reasons.webp` |
| `love-memory-photo` | Our Love Memories | Love | S Premium | ₹149 | `/templates/love-memory-photo.webp` |
| `heartbeat` | Heartbeat ❤️ | Love | S Premium | ₹149 | `/templates/heartbeat.webp` |
| `birthday` | Birthday Surprise | Birthday | S Premium | ₹149 | `/templates/birthday.webp` |
| `love-game` | The Love Game | Love | S Premium | ₹149 | `/templates/love-game.webp` |

Use these exact demo URLs:

- Our Little Universe: `https://s-premium-universe.vercel.app/`
- Love Puzzle: `https://s-premium-puzzle.vercel.app/`
- 50 Reasons I Love You: `https://s-premium-loveyou-50reasons.vercel.app/`
- Our Love Memories: `https://s-premium-love-memory-photo.vercel.app/`
- Heartbeat ❤️: `https://s-premium-heartbeat.vercel.app/`
- Birthday Surprise: `https://s-premium-hbd-v6.vercel.app/`
- The Love Game: `https://s-premium-game-love.vercel.app/`

Descriptions and keywords should remain editable in the data file.

The titles, descriptions, and categories above are provisional metadata. If the actual live demos can be inspected, verify that the copy accurately describes the experience before changing it.

### Adding future templates

The architecture must make adding a template simple.

To add one template, the developer should only need to:

1. Add its preview image to the expected asset directory.
2. Add one properly typed entry to the central template data file.

The gallery, featured-template selection, category filters, search, and result count should update automatically.

Do not require a developer to edit several unrelated components to add a template.

---

## 8. Pricing Page — `/pricing`

Move all detailed pricing information off the homepage.

### Section A: Template Grades

Heading:

**Choose Your Surprise**

Description:

Every template has a designated grade. Its displayed base price includes 24 hours of live hosting.

| Grade | Price | Description |
|---|---:|---|
| Grade B | ₹49 | Sweet and simple digital surprise |
| Grade A | ₹69 | Delightful interactive experience |
| Grade S | ₹99 | Rich animations and playful design |
| Grade S Premium | ₹149 | Premium interactive website experience |

Each template's price and grade must come from its own data entry. Never infer a template's grade or price from its URL.

The seven existing templates listed above are initially configured as S Premium at ₹149. Preserve this configuration unless the owner changes the data.

Do not imply that every custom website costs ₹149.

### Section B: Hosting Extensions

Heading:

**Want to Keep the Surprise Longer? ❤️**

Description:

Every template includes 24 hours of live access in its displayed price. Choose a longer hosting plan when placing your order.

Hosting plans:

**Weekly Surprise**
- ₹99
- 7 days of total live hosting
- Suitable for birthday weeks and short celebrations.

**Monthly Surprise**
- ₹199
- 30 days of total live hosting
- Suitable for keeping the surprise available for longer.

**Yearly Surprise**
- ₹499
- 365 days of total live hosting
- Suitable for long-term digital keepsakes.

Show the duration as total hosting time, replacing the default 24-hour window when that plan is selected.

Do not imply that 7, 30, or 365 days are added on top of the included 24 hours.

Explain that hosting extensions are confirmed manually through Instagram during order confirmation.

Use a subtle "Most Popular" label on the monthly plan if desired.

All plan selection CTAs should open Instagram. They must not simulate a checkout or claim a booking has been completed.

### Section C: Custom Websites

Heading:

**Made Just for Them ✨**

Starting price: ₹199.

Explain that the final quote depends on:

- Design complexity.
- Requested interactive features.
- Personalization.
- Content preparation requirements.
- Hosting duration.

CTA:

**REQUEST A CUSTOM QUOTE →**

Destination: Instagram.

### Section D: Pricing Clarifications

Explain clearly:

- A template purchase includes 24 hours of hosting by default.
- Longer hosting plans have separate prices.
- Template customization and fully custom development may affect the quote.
- Delivery dates and final prices are confirmed manually before work begins.
- No payment or order is completed merely by clicking an Instagram CTA.

Avoid contradictory price or duration statements across the website.

---

## 9. FAQ Page — `/faq`

Move the existing FAQ content to `/faq`.

Use accessible accordion components, preferably reusing the existing FAQ implementation.

Include answers for:

1. How does ordering work?
2. What is included in the template price?
3. Can I keep my website live for longer?
4. Can I customize an existing template?
5. Can you create a completely custom website?
6. How early should I order?
7. How will I receive my website?
8. Will I receive a QR code?
9. What happens when the hosting period ends?
10. How do payments work?
11. How do I contact you?

Answer carefully and consistently with the rest of the website.

Do not invent payment methods, refund policies, hosting renewal behavior, or guarantees that the owner has not confirmed. Where the exact policy is unknown, explain that it is confirmed with the customer through Instagram before the order is accepted.

Add a small final support section:

**Still have a question?**

We're happy to help with your custom surprise idea anytime.

Buttons:

- Email Us → `mailto:admin.justbecause@gmail.com`
- DM on Instagram → https://www.instagram.com/bczulove/

---

## 10. Optional Custom Website Page — `/custom`

If implemented, this page should explain the custom website service without duplicating the entire homepage.

Include:

- An emotional hero introducing personalized digital surprises.
- A starting price of ₹199.
- Examples of personalization options.
- What information customers should prepare.
- An explanation of manual quoting and delivery confirmation.
- A clear Instagram CTA.

Possible customization options:

- Custom theme and colors.
- Names, personal messages, and photos.
- Photo galleries and interactive memory timelines.
- Love quizzes, trivia, and mini-games.
- Countdown clocks and animations.
- Music features where technically and legally appropriate.
- Other agreed interactive features.

Make it clear that all features are subject to feasibility, agreement, and final quotation.

Do not imply that every feature is automatically included in the starting price.

---

## 11. Delivery and Ordering Policy

Keep detailed ordering and delivery information primarily on the FAQ page and, where appropriate, the pricing page.

Recommended ordering guidance:

**7 or more days before the occasion:** Recommended.

**3–6 days before:** Ask us to confirm availability.

**Within 48 hours:** Urgent requests depend on availability.

**Same-day delivery:** Never guaranteed; must be confirmed manually.

Estimated planning timelines:

| Order Type | Estimated Time |
|---|---|
| Premade template | 1–3 days after required details and payment are received |
| Customized template | 3–5 days |
| Fully custom website | 5–7 days or longer |

These are estimates, not guarantees.

The actual delivery date must be confirmed with the customer before work begins.

If the requested deadline cannot be met, communicate that before accepting the order.

Do not put this full table on the homepage.

---

## 12. Footer

Keep the footer extremely minimal, consistent with the existing brand.

Required text:

Why you make this

JUST BECAUSE ❤️

made with love by JUST BECAUSE ❤️

Do not add a large sitemap, excessive social links, copyright clutter, or an unnecessary company information section to the footer.

Contact details and support actions belong in the FAQ page or other appropriate content.

---

## 13. Design and Implementation Requirements

### Preserve the existing design

Before changing the application:

1. Inspect the current project structure.
2. Identify the existing styling system, fonts, color tokens, animations, components, and responsive behavior.
3. Reuse the current design system wherever possible.
4. Extract existing reusable components rather than rewriting them unnecessarily.
5. Preserve the current visual identity and improve page composition through refactoring.

Do not replace the existing visual design with a generic template.

### Responsive design

Test at mobile, tablet, laptop, and desktop widths.

Prioritize:

- Mobile-first spacing and typography.
- Readable template descriptions.
- Responsive template cards.
- Easy-to-use search and filters.
- Accessible buttons and navigation.
- No horizontal overflow.
- Fast-loading images.

### Accessibility

- Use semantic page landmarks and headings.
- Provide descriptive alt text for images.
- Use keyboard-accessible navigation and accordions.
- Include visible focus states.
- Ensure sufficient color contrast.
- Respect reduced-motion preferences where applicable.
- Give icon-only controls accessible names.

### SEO

Provide appropriate page titles and descriptions for each route.

Use the existing framework's metadata conventions and avoid duplicate or generic metadata on every page.

### Performance

- Reuse existing dependencies.
- Optimize preview images.
- Avoid unnecessary client-side state and JavaScript.
- Preserve working interactions.
- Do not add a backend, database, authentication, or checkout unless the existing project or an explicit requirement already calls for it.

### External links

Use the specified Instagram profile for ordering and the exact demo URLs for live previews.

Do not invent new URLs or claim that external orders, payments, or hosting extensions have been completed automatically.

---

## 14. Acceptance Criteria

The refactor is complete when:

- [ ] The homepage is concise and no longer contains the complete seven-template gallery.
- [ ] The homepage shows exactly three featured templates.
- [ ] VIEW ALL TEMPLATES opens `/templates`.
- [ ] `/templates` displays all seven initial templates.
- [ ] Search works across title, description, category, grade, and keywords.
- [ ] Category filtering and search work together.
- [ ] Category options are generated dynamically from template data.
- [ ] Result counts update correctly.
- [ ] Empty search results have a useful message and reset action.
- [ ] Every template's live demo opens the correct URL.
- [ ] Every ordering CTA opens the correct Instagram profile.
- [ ] `/pricing` contains the template grades, hosting plans, and custom pricing.
- [ ] The 24-hour default hosting window and longer hosting durations are explained consistently.
- [ ] `/faq` contains the main ordering, delivery, customization, and hosting answers.
- [ ] The optional `/custom` page works if implemented.
- [ ] Navigation works on desktop and mobile.
- [ ] The original brand aesthetic is preserved.
- [ ] Missing images do not produce broken-image icons.
- [ ] No placeholder buttons or dead links remain.
- [ ] No unsupported testimonials, guarantees, payment claims, or delivery promises are introduced.
- [ ] Existing functionality has not been accidentally removed.
- [ ] Available linting, type-checking, and production build checks pass.
- [ ] The project runs locally using the documented command.

---

## 15. Instructions to the AI Developer


## 16. Romantic Animated Visual Experience

### Objective

Enhance the existing JUST BECAUSE ❤️ website with a beautiful, cute, romantic visual atmosphere that makes visitors immediately feel that the brand is special.

The current website already has a clean layout, white space, bold typography, and pink CTAs. Preserve these strengths.

**Do not redesign the entire website. Enhance the existing design with subtle animated backgrounds, decorative illustrations, and delightful micro-interactions.**

The result should feel like a premium romantic digital-gifting boutique with a hint of a dreamy scrapbook aesthetic.

### A. Animated Hero Background

Enhance the homepage hero with a layered background consisting of:

- A warm cream or near-white base.
- Soft blush-pink radial gradients.
- A few large, low-opacity blurred pink gradient shapes.
- Tiny floating hearts and sparkles.
- Occasional small star-shaped decorative elements.

Animations should be slow, gentle, and organic.

Use CSS animations, lightweight SVG decorations, or the project's existing animation library. Prefer CSS for simple background effects.

Do not introduce a heavy animation library solely for floating decorations.

The background must remain subtle enough that the headline, description, and CTA buttons are always easy to read.

### B. Floating Heart Particles

Implement a reusable decorative component for small floating hearts and sparkles.

Requirements:

- Use varied heart sizes, opacity levels, and animation durations.
- Give particles slightly different horizontal and vertical movement.
- Use soft pink and rose colors with restrained opacity.
- Keep particles behind the text and interactive content.
- Prevent particles from intercepting pointer events.
- Keep the number of animated elements limited.
- Avoid large amounts of DOM elements or expensive continuous calculations.
- Do not create distracting particle storms.
- Use decorative elements with appropriate accessibility handling so screen readers ignore them.

The effect should feel like a few hearts drifting through a romantic atmosphere rather than a continuous rain of hearts.

### C. Cute Doodle Decorations

Where visually appropriate, introduce a small collection of decorative elements:

- Hand-drawn hearts.
- Tiny stars and sparkles.
- Bows.
- Small flowers.
- Love-letter envelopes.

Use lightweight SVGs, CSS shapes, or genuine project assets.

Place decorations near the outer edges of the hero or around selected section headings. Do not obstruct the headline, CTA buttons, template cards, or navigation.

Avoid excessive decoration. Each section should have enough breathing room.

### D. Soft Animated Gradients

Use one or two softly blurred gradient shapes that move slowly or subtly change position.

Requirements:

- Low opacity.
- Slow movement.
- No rapid color changes.
- No flashing.
- No excessive GPU-heavy blur effects on large elements.
- No layout shifts.
- No horizontal page overflow.

Keep the existing white or cream background visible.

### E. Optional Interactive Love Letter

Add a small optional interactive envelope or love-letter illustration near the homepage hero if it integrates naturally with the existing layout.

When activated, it should gently open and reveal a short playful message, such as:

"Someone is going to feel very loved today. ❤️"

Requirements:

- This interaction must be optional.
- It must never block navigation or template browsing.
- It must not require a modal that interrupts the shopping journey.
- It must work on touchscreens and with keyboard navigation.
- It must not display sales messaging inside the experience.
- Keep the interaction lightweight and easy to dismiss or close.

If this feature would make the hero crowded, prioritize the animated background and decorative elements instead.

### F. Floating Template Preview Cards

If the existing hero layout has sufficient room, consider adding two or three small, tilted visual cards around the main content on desktop.

Use genuine screenshots or preview assets from the existing templates.

Possible cards:

- Our Little Universe.
- Love Puzzle.
- Birthday Surprise.

Apply subtle floating motion and soft shadows.

Requirements:

- The headline and primary CTA remain the visual focus.
- The cards must not overlap text or navigation.
- Do not fabricate live demo screenshots.
- Hide or simplify the decorative cards on mobile.
- Avoid loading all full-size gallery images just to decorate the hero.

If the current hero does not have enough space, skip these cards rather than forcing them into the layout.

### G. Micro-Interactions

Add subtle, consistent interactions to appropriate elements:

- Template cards lift slightly and gain a soft shadow on hover.
- Buttons transition smoothly between default and hover states.
- Primary pink CTAs may show a restrained glow or small decorative sparkle.
- Category filter changes should feel smooth.
- Content sections may fade in or move upward slightly when entering the viewport.
- Small decorative hearts may appear during selected hover interactions.

Requirements:

- Avoid exaggerated bouncing, spinning, or repeated attention-grabbing animations.
- Do not delay navigation or button actions.
- Avoid triggering expensive animations for every element on every scroll.
- Do not animate essential text in ways that make it difficult to read.
- Avoid custom cursor effects on touchscreens.
- Do not use sounds or autoplay audio.

### H. Page-Specific Styling

**Homepage:**
Use the richest decorative treatment here. Prioritize the animated hero background, floating hearts, subtle gradients, and selected micro-interactions.

**Templates page:**
Keep search and filtering clean. Add restrained pink accents and smooth card interactions, but do not place distracting particles behind every template card.

**Pricing page:**
Keep plan comparisons readable. Use gentle decorative details around headings and selected highlights only.

**FAQ page:**
Prioritize legibility and ease of use. Use minimal decoration and subtle accordion transitions.

**Custom website page:**
Use a slightly more expressive romantic visual style that complements the homepage and communicates personalization.

All pages must share the same design tokens, typography, button styles, and animation language.

### I. Performance and Accessibility

The visual experience must remain smooth on ordinary laptops and mobile devices.

Implement the following safeguards:

- Respect `prefers-reduced-motion`.
- Disable or greatly simplify nonessential motion when reduced motion is enabled.
- Keep animations transform- and opacity-based wherever practical.
- Avoid unnecessary JavaScript animation loops.
- Avoid continuously updating React state for decorative motion.
- Use `pointer-events: none` for purely decorative background layers.
- Keep decorative layers behind interactive content using an intentional stacking order.
- Prevent horizontal overflow.
- Ensure text contrast remains accessible.
- Do not cause cumulative layout shifts.
- Do not load remote decorative images unnecessarily.
- Reuse existing dependencies whenever possible.

### J. Visual Acceptance Criteria

The enhancement is complete when:

- The homepage immediately feels more romantic, warm, cute, and visually memorable.
- Floating hearts and sparkles are visible but not distracting.
- The background has depth without sacrificing readability.
- The existing branding and layout remain recognizable.
- Buttons and template cards feel responsive and polished.
- The effect works on desktop and mobile.
- Reduced-motion preferences are respected.
- The site remains responsive and performant.
- No new console errors or broken interactions are introduced.

**Design principle:** Visitors should think, "This is so cute and beautiful," not "There are animations everywhere."

Prioritize quality, subtlety, and emotional impact over the number of effects.





Read this entire file before modifying the project.

Then inspect the current implementation and refactor it in place.

**Do not rebuild the website from scratch.** Preserve the existing visual quality and reusable components while separating the content into the routes described above.

Implement the changes directly in the project files. Do not stop at a plan, mockup, or code examples.

Make sensible implementation decisions without repeatedly asking for approval. Preserve working code and existing project conventions.

Run the available validation commands and fix any issues caused by your changes.

At the end, provide a concise report explaining:

1. Which pages and components were changed or created.
2. Which existing design elements were preserved.
3. Which checks were run and their actual results.
4. How to run the project locally.
5. Any remaining assets, policies, or business decisions that require owner confirmation.

Do not claim that an untested feature works. Clearly identify any remaining limitations.