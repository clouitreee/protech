# Tech Hilfe Pro NRW Website Project Handover Handbook

## Introduction

This handbook provides a comprehensive overview of the work completed for the "Tech Hilfe Pro NRW" website project. It details the architectural foundation, wireframes, module intents, compliance measures, and content placeholders generated to date. This document serves as a guide for future development, ensuring a smooth transition and continued adherence to project specifications.

## 1. Architectural Foundation (Initial Setup)

**Objective:** Establish the core structure and configuration for the Next.js website.

**Deliverables:**

*   **`content/architecture/sitemap.yaml`**: A comprehensive sitemap detailing all pages, their purpose, target audience, key interactions, suggested modules, keywords, and FAQs. It includes support for German (de) and Spanish (es) locales.
*   **`src/config/navigation.ts`**: A data-driven navigation configuration file, including main navigation, CTA buttons, footer navigation, and internationalization (i18n) route mappings for German and Spanish.
*   **`content/architecture/modules.md`**: A detailed catalog of over 30 reusable UI modules, specifying their purpose, required inputs (props), accessibility considerations, and relevant metrics. This document also outlines design principles, performance guidelines, and testing recommendations.
*   **`src/config/seo.ts`**: A configuration file for SEO defaults and JSON-LD structured data helpers. This includes templates for metadata, OpenGraph, Twitter cards, and generators for various Schema.org types (LocalBusiness, Organization, BreadcrumbList, FAQPage, Service, BlogPosting, Review/AggregateRating, WebSite).
*   **Next.js Route Stubs**: Empty but functional Next.js pages (`page.tsx`) have been created for all defined routes, including the homepage, service pages, about us, references, blog, FAQ, contact, and legal pages (Impressum, Datenschutz, AGB, Widerruf). Each page includes `generateMetadata` for SEO and placeholder content with `TODO` comments for future implementation.

**GitHub Pull Request:** [clouitreee/protech/pull/1](https://github.com/clouitreee/protech/pull/1)

## 2. Low-Fidelity Wireframes and Component Mapping

**Objective:** Create low-fidelity wireframes and detailed component mapping to visualize the website structure and component usage.

**Deliverables:**

*   **`content/wireframes/wireframe-map.yaml`**: Outlines the overall structure of the wireframes, detailing page keys, routes, intended layouts, and the modular sections to be included on each page with brief notes on their purpose.
*   **`content/wireframes/components-by-page.md`**: Provides a comprehensive inventory of UI components for each page. For every module, it specifies the constituent UI elements (e.g., `Heading(h1)`, `Paragraph`, `ButtonGroup`) and includes placeholder text examples to illustrate content and purpose.
*   **`content/wireframes/component-sourcing.md`**: Offers recommendations for sourcing or implementing each modular UI component, suggesting popular React UI libraries and frameworks (e.g., Tailwind CSS, Headless UI, Chakra UI, React Hook Form) for efficient development, along with specific implementation notes.
*   **`src/components/wireframes/Placeholder.tsx`**: A reusable React component designed to render low-fidelity wireframe elements, providing a visual representation of content blocks without detailed styling.
*   **Page-specific `wireframe.tsx` files**: Located within the `app` directory, these TypeScript React files serve as low-fidelity visual representations for each defined route. They utilize the `Placeholder` component to render the structural and content blocks.
*   **`content/wireframes/README.md`**: Documentation explaining the purpose, contents, and usage instructions for the generated wireframes.

**GitHub Pull Request:** [clouitreee/protech/pull/2](https://github.com/clouitreee/protech/pull/2)

## 3. Module Intent Matrix, Normalized CTAs, and Placeholders

**Objective:** Define the core functions and content types for each module, standardize Calls-to-Action, and generate initial German placeholder content.

**Deliverables:**

*   **`content/architecture/module-intents.yaml`**: Defines the core function, content types, and specific Calls-to-Action (CTAs) for each module across different pages. This provides a clear blueprint for content and interaction design.
*   **`src/config/ctas.ts`**: A normalized TypeScript file containing a catalog of all CTAs used on the website. Each CTA is defined with a unique key, label, href (if applicable), and type (e.g., `link`, `tel`, `mailto`, `wa`, `anchor`, `button`).
*   **`content/placeholders/de/*.md`**: Auto-generated Markdown files for each page, located under `content/placeholders/de/`. These files contain German placeholder texts for headings, sublines, copy blocks, CTA examples, FAQ entries, and form examples. The content adheres to specified length constraints and avoids design details.
*   **Updated `content/wireframes/components-by-page.md`**: The existing component inventory was updated to include detailed content types and CTA examples for each module.

**GitHub Pull Request:** [clouitreee/protech/pull/3](https://github.itreee/protech/pull/3)

## 4. Compliance and Structural Fixes (Review Round 1)

**Objective:** Address review feedback, perform a compliance sweep (VAT-related terms), integrate a legal pricing note, and refine existing documentation.

**Deliverables:**

*   **VAT-related term removal**: Global cleanup performed to remove explicit VAT-related terms (`inkl. MwSt.`, `zzgl. MwSt.`, `Umsatzsteuer-ID`) from all relevant files, ensuring compliance with §19 UStG.
*   **`docs/compliance/vat-removal-report.md`**: A report detailing the VAT-related terms found and removed, along with any manual adjustments made.
*   **`LegalPricingNote` module integration**: The `LegalPricingNote` module was added to `module-intents.yaml` and integrated into `wireframe-map.yaml` for relevant pages (e.g., home, managed services) and placeholder content.
*   **CTA text review**: Ensured all CTA texts are free of tax-related terms.
*   **Legal placeholder updates**: Legal and data protection placeholders (`recht-impressum.md`, `recht-datenschutz.md`, `recht-agb.md`, `recht-widerruf.md`) were updated to include the unified pricing note.
*   **`docs/compliance/README.md`**: A README file providing a short justification for the compliance changes, a list of affected files, and diff examples.
*   **`wireframe-map.yaml` adjustments**: Applied wireframe adjustments and consolidated module names (e.g., `SLA/Anfahrt` to `SLAHighlights`).
*   **`module-intents.yaml` update**: Updated with new modules, core functions, content types, and CTA constraints.
*   **`content/placeholders/de/*.md` update**: Regenerated with new modules, consistent content, and the `LegalPricingNote`.
*   **`content/wireframes/component-sourcing.md` update**: Regenerated with preferred UI library recommendations and justifications.
*   **Comment blocks**: Added comment blocks to all modified Markdown files (`wireframe-map.yaml`, `module-intents.yaml`, `components-by-page.md`, `component-sourcing.md`, and all `content/placeholders/de/*.md` files) to indicate generation/modification by Manus AI.

**GitHub Pull Request:** [clouitreee/protech/pull/4](https://github.com/clouitreee/protech/pull/4)

## Next Steps for User

To proceed with a fully functional and deployable website, the following steps are recommended:

1.  **Merge Pull Requests**: Review and merge all outstanding Pull Requests into your `main` branch.
2.  **Project Setup**: If not already done, initialize a Next.js project, install dependencies, and integrate the generated files into the project structure.
3.  **Module Implementation**: Develop the actual React components for the modules defined in `modules.md` and integrate them into the route stubs and wireframe pages.
4.  **Content Population**: Replace placeholder texts in `content/placeholders/de/*.md` with actual German content. Populate content for pricing, blog posts, testimonials, and legal texts.
5.  **Localization**: Complete the Spanish localization mapping and content based on the `sitemap.yaml` and `navigation.ts`.
6.  **Design and Styling**: Apply the visual design and styling using Tailwind CSS and other chosen UI libraries, leveraging the `component-sourcing.md` for guidance.
7.  **Testing**: Conduct thorough testing (unit, integration, end-to-end) to ensure functionality, responsiveness, and accessibility.
8.  **Deployment**: Once the project is a complete and functional Next.js application, build and deploy it to your chosen hosting service.

This handbook, along with the generated files in the repository, provides a robust foundation for the continued development of the Tech Hilfe Pro NRW website. Please refer to the respective files for detailed information on each aspect of the project.
