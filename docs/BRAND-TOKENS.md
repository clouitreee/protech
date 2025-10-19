# Brand Tokens

This document defines the brand-specific design tokens used across the project, ensuring consistency and maintainability of our visual identity.

## Color Tokens

Our color system is built upon semantic tokens that abstract raw hex values, allowing for easier updates and consistent application.

| Token Name          | Description                                     | Default Value (Tailwind) | Usage Example        |
| :------------------ | :---------------------------------------------- | :----------------------- | :------------------- |
| `--color-brand-primary` | Primary brand color, often used for CTAs.       | `var(--color-brand-primary)` | `bg-brand-primary`   |
| `--color-brand-accent`  | Accent color, used for highlights or secondary actions. | `var(--color-brand-accent)`  | `text-brand-accent`  |
| `--color-surface`       | Background color for main content areas.        | `var(--color-surface)`       | `bg-surface`         |
| `--color-text`          | Default text color for improved readability.    | `var(--color-text)`          | `text-text`          |

## Typography Tokens

We use Geist Sans for all textual elements to maintain a modern and consistent look.

*   **Font Family:** Geist Sans

## Usage

When applying styles, always prefer using these defined tokens over hardcoded hex values or arbitrary Tailwind classes. This ensures that design changes can be propagated globally from a single source of truth.

