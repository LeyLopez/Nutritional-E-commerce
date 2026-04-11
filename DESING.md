```markdown
# Design System Document: High-End Editorial Health & Beauty
 
## 1. Overview & Creative North Star: "The Ethereal Atelier"
 
This design system moves away from the rigid, boxed-in layouts of traditional e-commerce. Our Creative North Star is **The Ethereal Atelier**—a digital space that feels like a high-end, sun-drenched boutique where products breathe and the UI serves only as a graceful frame. 
 
To achieve this, we break the "template" look through **intentional asymmetry**. We treat the screen as a canvas for editorial storytelling. Instead of perfectly aligned grids, we use overlapping elements (e.g., an image bleeding into a text block) and a high-contrast typography scale to create a sense of curated luxury. The goal is to make the user feel like they are flipping through a premium wellness magazine, not browsing a database.
 
---
 
## 2. Colors & Tonal Depth
 
Our palette is rooted in organic serenity, using a sophisticated "Sage and Sand" foundation. 
 
### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Visual boundaries must be defined exclusively through background color shifts or subtle tonal transitions. 
*   *Example:* A product description section using `surface-container-low` (#f2f4f4) sitting atop a global `surface` (#f9f9f9).
 
### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material surface tiers to create depth without clutter:
- **Surface (Base):** #f9f9f9 – Use for the primary background.
- **Surface-Container-Low:** #f2f4f4 – For secondary content areas.
- **Surface-Container-Lowest:** #ffffff – For high-priority interactive cards or "floating" elements.
 
### The "Glass & Gradient" Rule
To elevate the "Modern" feel, floating navigation bars and modal overlays must utilize **Glassmorphism**. 
*   **Token:** Use `surface` at 70% opacity with a `backdrop-blur: 20px`.
*   **Signature Textures:** Apply a subtle linear gradient from `primary` (#526447) to `primary-container` (#d4e9c4) on primary CTAs to give them a "lit-from-within" organic glow.
 
---
 
## 3. Typography: The Editorial Voice
 
We pair a timeless serif with a modern, technical sans-serif to balance "Beauty" with "Science."
 
*   **The Hero (Noto Serif):** Used for all `display` and `headline` tokens. This communicates heritage, trustworthiness, and elegance. Use tight letter-spacing (-0.02em) for large displays to create a "custom-set" look.
*   **The Utility (Manrope):** Used for `title`, `body`, and `label` tokens. It is highly legible and modern, providing the "Professional" feel required for e-commerce functionality.
 
**Scale Philosophy:** 
- **Display-LG (3.5rem):** Reserved for high-impact editorial moments.
- **Body-LG (1rem):** The standard for product descriptions, ensuring maximum readability for wellness instructions.
 
---
 
## 4. Elevation & Depth: The Layering Principle
 
Forget traditional drop shadows. We communicate hierarchy through **Tonal Layering**.
 
*   **Ambient Shadows:** If a component requires a "lift" (like a floating shopping cart), use a diffused shadow: `box-shadow: 0 12px 40px rgba(47, 51, 52, 0.06);`. The shadow color is a tinted version of `on-surface` to mimic natural light hitting a matte surface.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token (#afb3b3) at **15% opacity**. This creates a suggestion of a container rather than a hard cage.
*   **Layering Logic:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f2f4f4) background. This provides a soft, natural lift that feels premium and intentional.
 
---
 
## 5. Component Guidelines
 
### Buttons (The "Soft-Touch" Action)
- **Primary:** Background uses the `primary` (#526447) to `primary-dim` (#46583c) gradient. Text: `on-primary` (#ecffdd). Radius: `full`.
- **Secondary:** Surface: `secondary-container` (#ffdbd1). Text: `on-secondary-container` (#6b4a40). No border.
- **Tertiary:** Pure text using `primary` with an underlined `label-md` style on hover.
 
### Cards & Lists (The Editorial Grid)
- **Rule:** Forbid the use of divider lines. 
- **Spacing:** Use 48px or 64px of vertical white space to separate product categories.
- **Imagery:** Cards must feature high-quality, "lifestyle" photography. Images should use `md` (0.75rem) rounded corners.
 
### Input Fields
- **Style:** Underline-only or subtle `surface-container-highest` (#dfe3e4) backgrounds. 
- **Focus State:** Transition the background to `primary-container` (#d4e9c4) and the label to `primary` (#526447). Avoid heavy "focus rings."
 
### Specialized Component: The "Curated Set" Carousel
A horizontal scroll component where items are slightly offset vertically from one another (asymmetry). This breaks the "grid" and encourages exploration of beauty routines.
 
---
 
## 6. Do’s and Don’ts
 
### Do:
- **Do** use generous whitespace (80px+) between major sections to let the product photography "breathe."
- **Do** use `notoSerif` for price tags in product cards to make the cost feel like a "boutique" detail.
- **Do** use the `secondary` (#7a574d) rose-gold tone for subtle "Member Only" or "Organic" badges.
 
### Don’t:
- **Don't** use 100% black (#000000). Use `on-surface` (#2f3334) for all "black" text to maintain the soft, organic feel.
- **Don't** use sharp 90-degree corners. Everything must have at least a `sm` (0.25rem) radius to feel approachable and "human."
- **Don't** use "Standard" shadows. If the shadow looks like a default CSS effect, it is too heavy.
 
---
 
**Director’s Note:** Remember, we are not just selling products; we are selling a feeling of tranquility and self-care. Every pixel should contribute to a sense of calm. If a layout feels "busy," remove an element rather than adding a divider.```