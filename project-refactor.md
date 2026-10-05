## 17. Hero Background — Make It Visibly Magical

### Current Problem

The current hero background is predominantly plain white with a few floating hearts and sparkles. Although these decorations are visible, they do not create the immersive, romantic atmosphere intended for JUST BECAUSE.

The next iteration must improve the **background itself**, not simply add more decorative icons.

### Desired Visual Direction

Create a dreamy, romantic, pastel-pink atmosphere that feels like stepping into a beautifully designed digital love letter.

The background should be visibly different from a plain white page while remaining soft, premium, and readable.

#### 1. Full Hero Background

Replace the mostly white hero background with a layered blush-pink and warm-cream gradient.

Use several large, softly blurred radial gradients positioned around the hero:

- A noticeable blush-pink glow behind the main headline.
- A pale rose glow toward the left edge.
- A soft pink glow toward the right edge.
- A warm cream highlight near the center.
- Very subtle lavender-pink tones near the outer edges.

The color transitions should be smooth and organic, without obvious circles or harsh boundaries.

The overall background must visibly read as pink and romantic at first glance.

#### 2. Slowly Moving Gradient Orbs

Add three or four large, blurred gradient shapes behind the hero content.

Each orb should:

- Have a soft pink, rose, or pale lavender tint.
- Use low-to-medium opacity.
- Move slowly across a short distance.
- Have different animation durations and directions.
- Remain behind all text and buttons.
- Use CSS transforms and opacity where practical.

Use an animation duration of approximately 12–24 seconds, with alternate directions and gentle easing.

The effect should feel like a soft, living atmosphere rather than a flashy animated wallpaper.

#### 3. Decorative Romantic Pattern

Introduce a subtle background texture across the hero, such as a sparse scattering of tiny hearts, stars, and fine sparkles.

Make the decorations feel integrated into the background rather than randomly placed icons.

Vary their opacity and size. Keep some elements almost transparent.

Do not increase the particle count excessively.

#### 4. Add Depth to the Page

Use a combination of:

- Layered pastel gradients.
- Soft ambient glows.
- A very subtle texture or tiny decorative pattern.
- A gentle fade from the pink hero background into the next section.

The hero should feel visually rich while the rest of the page can remain cleaner and more minimal.

#### 5. Background Behind the Headline

The main headline should sit in front of a soft pink glow that makes it feel intentionally composed.

Keep the headline black and hot pink as it currently is.

Do not reduce text contrast, change the established typography unnecessarily, or place distracting decorations directly behind individual letters.

#### 6. Implementation Requirements

Inspect the current hero component and its CSS before making changes.

Find and modify the actual background styles instead of adding another layer of floating hearts over the existing white background.

Use CSS gradients, pseudo-elements, and a small number of absolutely positioned decorative elements where suitable.

Keep decorative layers behind the content with an intentional stacking order. They must not intercept pointer events or create horizontal overflow.

Avoid expensive filters on oversized animated elements if they cause performance problems.

Respect `prefers-reduced-motion` by disabling or simplifying the gradient movement.

Keep the existing navigation, headline, buttons, love-note interaction, and layout functional.

### Acceptance Test

After the changes, inspect the rendered page at desktop and mobile sizes.

Ask:

1. Is the background clearly blush pink and cream rather than predominantly plain white?
2. Is there visible depth behind the headline?
3. Do the gradients move subtly without distracting from the text?
4. Does the design feel romantic, cute, and premium?
5. Does the background fade naturally into the following section?
6. Is the text still easy to read?
7. Does the page remain responsive and performant?

**Do not consider this task complete merely because floating hearts are visible. The actual background must look meaningfully different.**