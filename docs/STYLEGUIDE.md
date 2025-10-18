# Style Guide

This document outlines the core styling principles and design tokens for the project.

## Color Palette

Our primary color palette is designed for clarity, accessibility, and brand consistency. The key colors are:

*   **CTA (Call to Action):** `#FF5A3D` - Used for primary interactive elements to draw user attention.
*   **Text/Dark Background:** `#151515` - Utilized for primary text on light backgrounds and as a background for dark sections.
*   **Focus:** `#22D48A` - Employed to highlight interactive elements when they receive keyboard focus, enhancing accessibility.

## Contrast Notes

Ensuring adequate color contrast is crucial for accessibility. All text and interactive elements must meet WCAG 2.1 AA standards for contrast ratios. Tools such as [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) should be used to verify compliance.

## Motion Policy

To accommodate users with motion sensitivities, we adhere to a `prefers-reduced-motion` policy. Animations and transitions are kept minimal by default and are significantly reduced or removed for users who have this preference enabled in their system settings. This is implemented globally via `app/globals.css`.

## Kleinunternehmer Note (VAT Compliance)

As a Kleinunternehmer (small business owner), we are exempt from collecting and displaying Value Added Tax (VAT) or Mehrwertsteuer (MwSt) in Germany. Therefore, all pricing and financial communications **must not** include any references to VAT, MwSt, IVA, or similar terms. This policy is enforced through CI checks to ensure compliance.

