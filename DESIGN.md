# Design System Specification: The Architectural Wealth Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Sovereign Analyst"**

To move beyond the generic "Blue SaaS" template, this design system adopts the persona of a high-end, bespoke digital concierge. We are moving away from traditional "boxed-in" dashboard layouts toward a **Digital Editorial** experience. 

The aesthetic is driven by **intentional asymmetry, high-density precision, and tonal layering.** By utilizing wide margins, dramatic shifts in typographic scale, and "floating" data structures, we create an environment that feels authoritative yet breathable. We don't just show data; we curate financial intelligence. The experience should feel less like a tool and more like a private wealth office—composed, quiet, and profoundly capable.

---

## 2. Colors: Depth & Tonal Soul
Our palette transitions from the "Deep Navy" foundations to "Professional Blue" interactive layers, accented by "Emerald" growth indicators.

### The "No-Line" Rule
**Borders are a failure of hierarchy.** Within this system, 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting atop a `surface` background.
2.  **Tonal Transitions:** Using subtle shifts in hue to imply containment.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-stock paper.
*   **Base Layer:** `surface` (#f7f9fb)
*   **Sectioning:** `surface-container-low` for large structural areas.
*   **Interaction/Focus:** `surface-container-lowest` (#ffffff) for primary cards and content areas to create a "pop" against the background.

### The "Glass & Gradient" Rule
To inject "soul" into the professional aesthetic, use Glassmorphism for floating elements (e.g., Modals, Popovers). Apply `surface-variant` with a 60% opacity and a `24px` backdrop-blur. 

**Signature Texture:** Use a subtle linear gradient (Deep Navy to Professional Blue) at a 135° angle for primary CTAs and high-level Hero headers. This prevents the "flat" look and adds a premium, light-catching quality.

---

## 3. Typography: The Editorial Edge
We use a dual-font strategy to balance character with utility.

*   **Display & Headlines (Manrope):** Use Manrope for all headers. Its geometric but slightly softened terminals provide a modern, "fintech-forward" personality.
    *   *Display-LG (3.5rem):* Use for total AUM or portfolio milestones.
    *   *Headline-MD (1.75rem):* Use for page titles to establish authority.
*   **Body & Labels (Inter):** Inter is our workhorse. Its high x-height ensures readability in high-density data tables and complex financial reports.
    *   *Body-MD (0.875rem):* The standard for advisor notes and table data.
    *   *Label-SM (0.6875rem):* All-caps with +0.05em tracking for table headers and metadata.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." We achieve lift through light and tone.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a natural, soft lift without the need for visual "noise."
*   **Ambient Shadows:** If a card must float (e.g., a KPI card), use an extra-diffused shadow:
    *   `y: 8px, blur: 24px, color: rgba(15, 23, 42, 0.06)` (A tinted version of our Deep Navy).
*   **The "Ghost Border" Fallback:** For high-density data grids where separation is vital for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use for "floating" navigation or interactive charts to let background data "bleed" through, softening the edges of the UI and making the layout feel integrated.

---

## 5. Components: Precision & Density

### KPI Cards
*   **Structure:** No borders. Use `surface-container-lowest` backgrounds. 
*   **Growth Indicators:** Use `on-tertiary-container` (#009668) text for positive growth, paired with a subtle `tertiary-container` background chip.
*   **Asymmetry:** Align the primary metric to the left and the sparkline chart to the right, bleeding off the edge of the card.

### High-Density Data Tables
*   **The Rule:** Forbid divider lines. 
*   **Styling:** Use alternating row fills (`surface` vs `surface-container-low`) or simply utilize generous vertical whitespace (16px+).
*   **Headers:** Use `label-md` in `on-surface-variant` with increased letter spacing.

### Buttons
*   **Primary:** Gradient fill (Deep Navy to Professional Blue). **Roundedness: Moderate (default).**
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary/Ghost:** `on-primary-container` text. Subtle background shift on hover.

### Multi-Step Progress Indicators
*   Instead of standard "circles and lines," use a thick horizontal bar. The "active" segment uses the Professional Blue, while "inactive" segments use a semi-transparent `outline-variant`.

### Input Fields
*   Use `surface-container-low` as the background. On focus, transition to `surface-container-lowest` with a `2px` signature Professional Blue "glow" (not a solid border).

---

## 6. Do’s and Don’ts

### Do
*   **Do** use whitespace as a separator. If you think you need a line, try adding **normal (default)** padding first.
*   **Do** use Manrope for large numbers. Wealth advisory is about the "big picture"—make the figures feel monumental.
*   **Do** nest containers. A `surface-container-highest` action bar inside a `surface-container-low` dashboard creates instant logic.

### Don't
*   **Don't** use pure black (#000) for text. Always use `on-surface` (#191c1e) or Deep Navy to maintain the premium feel.
*   **Don't** use standard 4px "card shadows." They look like 2015-era templates.
*   **Don't** use high-saturation reds. For errors, use the muted `error` token (#ba1a1a) to keep the advisor's environment calm.
*   **Don't** crowd the charts. Financial data needs "breathing room" to be interpreted correctly. Use `surface` as a buffer around all interactive visualizations.