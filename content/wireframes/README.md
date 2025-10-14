# Wireframes for Tech Hilfe Pro NRW Website

This directory contains low-fidelity wireframes and supporting documentation for the Tech Hilfe Pro NRW website, generated based on the sitemap and module definitions.

## Purpose

The wireframes serve as a visual blueprint for the website's structure and content layout. They are designed to:

- Provide a clear overview of each page's content sections and their order.
- Facilitate early feedback on information architecture and user flow without focusing on visual design.
- Document the intended use of each modular UI component on specific pages.
- Offer recommendations for efficient component sourcing using existing UI libraries.

## Contents

This directory includes the following files:

1.  **`wireframe-map.yaml`**: This YAML file defines the overall structure of the wireframes. For each page, it specifies:
    *   The page key and route.
    *   The intended layout (e.g., `marketing`, `default`, `narrow`).
    *   A list of modular sections (components) to be included on that page, along with their suggested layout within the page and brief notes on their purpose.

2.  **`components-by-page.md`**: This Markdown document provides a detailed inventory of UI components used on each page. For every module listed in `wireframe-map.yaml`, it outlines:
    *   The specific UI components (e.g., `Heading(h1)`, `Paragraph`, `ButtonGroup`) that constitute the module.
    *   Placeholder text examples to illustrate the content and purpose of each module.

3.  **`component-sourcing.md`**: This Markdown document offers recommendations for sourcing or implementing each modular UI component. It suggests popular React UI libraries and frameworks (e.g., Tailwind CSS, Headless UI, Chakra UI, React Hook Form) that can be used to build these components efficiently, along with specific notes where applicable.

4.  **`page.tsx` files (e.g., `app/(site)/wireframes/page.tsx`)**: These TypeScript React files are low-fidelity visual representations of each page's wireframe. They utilize a simple `Placeholder` component to render the structure and content blocks as defined in `wireframe-map.yaml` and `components-by-page.md`. These files are located within the `app` directory structure to mirror the actual Next.js routes.

## How to Use the Wireframes

To view the wireframes:

1.  Ensure you have a Next.js development environment set up with React and TypeScript.
2.  Integrate the `Placeholder.tsx` component (located in `src/components/wireframes/Placeholder.tsx`) into your project.
3.  Run your Next.js application in development mode.
4.  Navigate to the respective wireframe routes (e.g., `/wireframes`, `/leistungen/wireframes`, `/recht/impressum/wireframes`). The `page.tsx` files within the `wireframes` subdirectories will render the low-fidelity layouts.

These wireframes are intended to be a starting point for design and development, providing a clear understanding of the content and functional requirements before detailed UI design and implementation begin.

