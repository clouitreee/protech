# Branding Changelog

This document tracks significant changes and updates to the project's branding and design system.

## [2025-10-19] - Initial Brand Refresh

### Added
- New color palette with semantic tokens: `--color-brand-primary`, `--color-brand-accent`, `--color-surface`, `--color-text`.
- Geist Sans typography.
- Global focus styles and prefers-reduced-motion policy.

### Removed
- All references to legacy color `#3BA9FF`.

### Updated
- Base components (Buttons, Cards, Badges, Inputs) to consume new design tokens.
- Tailwind CSS configuration to integrate new tokens.
- Favicons and Open Graph images regenerated without legacy colors.
- Pre-commit and CI checks to block legacy color reintroduction.

