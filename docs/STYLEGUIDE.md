# Style Guide

This document outlines the design principles and guidelines for the project, covering visual elements, accessibility, and legal considerations.

## 1. Brand Palette

Our brand palette is designed for clarity, impact, and accessibility. The following colors are core to our visual identity:

| Color Name | Hex Code  | Usage                                    | Tailwind Class (Example) |
| :--------- | :-------- | :--------------------------------------- | :----------------------- |
| CTA        | `#FF5A3D` | Primary call-to-action elements, buttons | `bg-brand-cta`           |
| Text/Dark BG | `#151515` | Main text, dark backgrounds              | `text-brand-fg`, `bg-brand-dark` |
| Focus      | `#22D48A` | Interactive element focus indicators     | `ring-brand-focus`       |

## 2. Contrast Notes

**Accessibility is paramount.** All color combinations, especially for text and interactive elements, must meet [WCAG 2.1 AA contrast ratios](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). Use automated tools (like Axe-core) and manual checks to verify compliance.

## 3. Focus Visibility

Interactive elements (buttons, links, form fields) **MUST** have a clearly visible focus indicator when navigated via keyboard. This is crucial for users who rely on keyboard navigation.

*   **Global Focus Style:** Implemented via `:focus-visible` in `app/globals.css` using the `#22D48A` focus color.

## 4. Motion Policy

We respect user preferences for reduced motion. Animations and transitions should be subtle and purposeful. For users who prefer reduced motion, animations are significantly minimized or removed.

*   **Implementation:** Handled globally via `@media (prefers-reduced-motion: reduce)` in `app/globals.css`.

## 5. OG Images & Favicons

Open Graph (OG) images and favicons are essential for brand recognition and consistent presentation across social media and browser tabs. They should reflect the new brand palette and avoid legacy colors.

*   **Favicon:** `app/icon.png` (32x32) using the new palette.
*   **Open Graph Image:** `app/opengraph-image.tsx` using the new palette.

## 6. Kleinunternehmer Note (§19 UStG)

As a small business (Kleinunternehmer) in Germany, we are exempt from collecting and displaying VAT (Value Added Tax) according to §19 UStG. Therefore:

*   **NEVER** display `MwSt`, `USt`, `IVA`, `VAT`, `inkl. MwSt`, or `zzgl. MwSt` anywhere in the UI, marketing materials, or invoices.
*   All pricing should be presented as final prices without any mention of VAT.
*   A CI guard is in place to block commits containing these forbidden terms (with specific allowlists for legal documents and blog posts where legal context might require their mention).

