# CI Gates Documentation

This document describes the Continuous Integration (CI) gates implemented for the Tech Hilfe Pro NRW project to ensure code quality, type safety, formatting consistency, and accessibility compliance.

## Overview

The CI pipeline runs automatically on every push to `main` or `develop` branches and on every pull request targeting these branches. It performs the following checks:

1.  **ESLint**: Lints JavaScript and TypeScript code for potential errors and style violations.
2.  **TypeScript Type Check**: Ensures type safety across the codebase.
3.  **Prettier**: Checks code formatting consistency.
4.  **A11y Linting**: Validates accessibility (ARIA, tabindex, etc.) using `eslint-plugin-jsx-a11y`.
5.  **Playwright Smoke Tests**: Runs minimal end-to-end tests for critical endpoints (Health, Checkout, Contact).

## Configuration Files

*   **`package.json`**: Defines scripts for linting, type checking, formatting, and testing.
*   **`tsconfig.json`**: TypeScript configuration with strict mode enabled.
*   **`.eslintrc.json`**: ESLint configuration with `jsx-a11y` plugin for accessibility checks.
*   **`.prettierrc`**: Prettier configuration for consistent code formatting.
*   **`.prettierignore`**: Files and directories excluded from Prettier formatting.
*   **`playwright.config.ts`**: Playwright configuration for smoke tests.
*   **`docs/ci/ci.yml.example`**: GitHub Actions workflow example for automated CI checks. This file should be manually copied to `.github/workflows/ci.yml` in the repository.

## Running CI Checks Locally

Before pushing code or creating a pull request, you can run the CI checks locally to catch issues early:

```bash
# Install dependencies
npm install

# Run all CI checks
npm run ci

# Run individual checks
npm run lint          # ESLint
npm run typecheck     # TypeScript type check
npm run format:check  # Prettier format check
npm run a11y          # A11y linting
npm run test:smoke    # Playwright smoke tests
```

## Smoke Tests

The smoke tests are located in the `tests/` directory and cover the following endpoints:

*   **`tests/health.spec.ts`**: Tests the `/api/db/health` endpoint to ensure the database connection is healthy and the response includes `Cache-Control: no-store`.
*   **`tests/checkout.spec.ts`**: Tests the `/api/checkout` endpoint to ensure Stripe Checkout sessions are created correctly and validation works as expected.
*   **`tests/contact.spec.ts`**: Tests the `/api/contact` endpoint to ensure the contact form sends emails correctly, and anti-spam measures (honeypot, time-trap, rate-limiting) are functioning.

## Accessibility (A11y) Checks

The ESLint configuration includes the `eslint-plugin-jsx-a11y` plugin, which enforces accessibility best practices. Key rules include:

*   `jsx-a11y/anchor-is-valid`: Ensures anchors have valid `href` attributes.
*   `jsx-a11y/alt-text`: Ensures images have `alt` text.
*   `jsx-a11y/aria-props`: Validates ARIA properties.
*   `jsx-a11y/click-events-have-key-events`: Ensures clickable elements are keyboard-accessible.
*   `jsx-a11y/label-has-associated-control`: Ensures form labels are associated with controls.
*   `jsx-a11y/tabindex-no-positive`: Prevents positive `tabindex` values.

## GitHub Actions Workflow

The CI workflow example (`docs/ci/ci.yml.example`) can be manually copied to `.github/workflows/ci.yml` to enable automated CI checks on every push and pull request. It performs the following steps:

1.  **Checkout code**: Clones the repository.
2.  **Setup Node.js**: Installs Node.js 20 with npm caching.
3.  **Install dependencies**: Runs `npm ci` to install dependencies.
4.  **Run linting, type checking, and formatting checks**: Executes `npm run lint`, `npm run typecheck`, `npm run format:check`, and `npm run a11y`.
5.  **Run smoke tests**: Installs Playwright browsers and runs `npm run test:smoke`.
6.  **Upload Playwright report**: Uploads the Playwright test report as an artifact for review.

## Troubleshooting

*   **Linting errors**: Run `npm run lint:fix` to automatically fix some linting issues.
*   **Formatting errors**: Run `npm run format` to automatically format code.
*   **Type errors**: Review the TypeScript errors and fix them manually.
*   **Smoke test failures**: Ensure the Next.js development server is running (`npm run dev`) before running smoke tests locally.

## Next Steps

*   Add more comprehensive tests as the application grows.
*   Integrate visual regression testing (e.g., Percy, Chromatic) for UI components.
*   Add performance testing (e.g., Lighthouse CI) to monitor Core Web Vitals.

