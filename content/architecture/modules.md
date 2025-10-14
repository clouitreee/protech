# Modular Sections Catalog

This document defines all reusable, modular sections (components) used across the Tech Hilfe Pro NRW website. Each module is designed to be data-driven, accessible, and responsive.

## Design Principles

- **Data-Driven**: All modules accept props/configuration rather than hardcoded content
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels, keyboard navigation, and contrast ratios
- **Responsive**: Mobile-first design with proper stacking and touch targets
- **Performance**: Lazy loading for images, optimized animations, minimal layout shift
- **SEO**: Proper semantic HTML and Schema.org structured data where applicable

---

## Hero Modules

### HeroPrimary

**Purpose**: Main hero section for homepage and key landing pages. Captures attention and drives primary CTA.

**Inputs/Props**:
- `headline` (string, H1): Main value proposition
- `subline` (string): Supporting text, 1-2 sentences
- `ctaPrimary` (object): { label, href, variant }
- `ctaSecondary` (object, optional): Secondary CTA
- `trustBadges` (array, optional): Array of trust indicators (logos, certifications)
- `backgroundImage` (string, optional): Hero background image URL
- `backgroundVideo` (string, optional): Hero background video URL

**Accessibility**:
- H1 must be first heading on page
- CTAs must have min 44x44px touch target
- Background images must not reduce text contrast below 4.5:1
- Skip link to main content

**Metrics**:
- CTA click-through rate
- Time to first interaction
- Scroll depth past hero

---

## Value Proposition Modules

### USPGrid

**Purpose**: Display 3-6 key benefits/unique selling points in a scannable grid format.

**Inputs/Props**:
- `items` (array): Array of { icon, label, description }
- `columns` (number): 2, 3, 4, or 6 columns (responsive)
- `variant` (string): 'icon-top' | 'icon-left' | 'icon-background'

**Accessibility**:
- Icons must be decorative (aria-hidden) with text labels
- Proper heading hierarchy (H2 for section, H3 for items)
- Sufficient spacing for touch targets

**Metrics**:
- Section visibility rate
- Individual item attention (heatmap)

---

### BenefitsList

**Purpose**: Detailed list of benefits with descriptions, often used for service pages.

**Inputs/Props**:
- `benefits` (array): Array of { title, description, icon }
- `layout` (string): 'list' | 'grid' | 'alternating'

**Accessibility**:
- Semantic list markup (ul/ol)
- Clear visual hierarchy
- Readable line length (max 75ch)

---

## Service & Product Modules

### ServiceCards

**Purpose**: Grid of service offerings with image, title, excerpt, and link to detail page.

**Inputs/Props**:
- `services` (array): Array of { title, excerpt, image, href, icon }
- `columns` (number): 2, 3, or 4 columns
- `showCTA` (boolean): Display CTA button on each card

**Accessibility**:
- Card links must be keyboard accessible
- Images must have descriptive alt text
- Focus indicator visible on all interactive elements

**Metrics**:
- Card click-through rate by service
- Hover/focus time per card

---

### ServiceTeaserGrid

**Purpose**: Compact service preview for homepage, links to full service pages.

**Inputs/Props**:
- `teasers` (array): Array of { title, tagline, icon, href }
- `columns` (number): 3 or 4
- `ctaLabel` (string): Default "Mehr erfahren"

**Accessibility**:
- Clear link purpose without context
- Sufficient color contrast for icons
- Keyboard navigation support

---

## Pricing Modules

### PricingTable3

**Purpose**: Compare 3 pricing tiers/packages side-by-side with features and CTAs.

**Inputs/Props**:
- `tiers` (array): Array of { name, price, period, features, cta, highlighted }
- `currency` (string): Default "EUR"
- `showComparison` (boolean): Display feature comparison checkmarks

**Accessibility**:
- Table markup with proper headers (scope)
- Mobile: Stack cards vertically or horizontal scroll
- Keyboard navigation between tiers
- Screen reader announces pricing clearly

**Metrics**:
- Tier selection rate
- CTA conversion by tier
- Comparison interaction (expand/collapse)

---

### PricingTeaser

**Purpose**: Simplified pricing preview for homepage, links to full pricing page.

**Inputs/Props**:
- `startingPrice` (string): "ab 199€/Monat"
- `tagline` (string): Short value statement
- `cta` (object): Link to pricing page

**Accessibility**:
- Clear pricing information for screen readers
- Visible focus states

---

## Trust & Social Proof Modules

### Testimonials

**Purpose**: Display customer testimonials/reviews with Schema.org Review markup.

**Inputs/Props**:
- `testimonials` (array): Array of { quote, author, company, rating, date }
- `layout` (string): 'carousel' | 'grid' | 'masonry'
- `showRating` (boolean): Display star rating

**Accessibility**:
- Carousel must be keyboard controllable (prev/next, pause)
- Auto-play must be pausable
- Rating must be announced to screen readers
- Proper quote markup (blockquote, cite)

**Schema.org**:
- Implement Review or AggregateRating structured data

**Metrics**:
- Testimonial read rate
- Carousel interaction rate

---

### TestimonialsGrid

**Purpose**: Static grid of testimonials without carousel, better for SEO.

**Inputs/Props**:
- `testimonials` (array): Same as Testimonials module
- `columns` (number): 2 or 3

---

### LogoStrip

**Purpose**: Display client/partner logos as trust indicators.

**Inputs/Props**:
- `logos` (array): Array of { name, imageUrl, websiteUrl }
- `grayscale` (boolean): Display logos in grayscale
- `marquee` (boolean): Auto-scroll animation

**Accessibility**:
- Logos must have alt text with company name
- Marquee must be pausable on hover/focus
- Links must be keyboard accessible

---

### CaseSnippets

**Purpose**: Brief case study previews with problem/solution/result.

**Inputs/Props**:
- `cases` (array): Array of { title, client, problem, solution, result, image }
- `showReadMore` (boolean): Link to full case study

**Accessibility**:
- Clear heading structure
- Readable text contrast
- Descriptive link text

---

## Interactive Modules

### FAQ

**Purpose**: Accordion-style FAQ with Schema.org FAQPage markup for AEO.

**Inputs/Props**:
- `faqs` (array): Array of { question, answer }
- `defaultOpen` (number, optional): Index of default open item
- `allowMultiple` (boolean): Allow multiple items open simultaneously

**Accessibility**:
- Proper ARIA accordion pattern (aria-expanded, aria-controls)
- Keyboard navigation (arrow keys, home/end)
- Focus management when expanding/collapsing
- Sufficient touch target size (min 44x44px)

**Schema.org**:
- Implement FAQPage structured data

**Metrics**:
- FAQ expand rate by question
- Time spent in FAQ section

---

### MiniFAQ

**Purpose**: Compact FAQ section for homepage with 3-5 top questions.

**Inputs/Props**:
- Same as FAQ module but limited items
- `linkToFullFAQ` (string): Link to /faq page

---

### ContactForm

**Purpose**: DSGVO-compliant contact form with spam protection.

**Inputs/Props**:
- `fields` (array): Array of form field configurations
- `submitLabel` (string): Default "Nachricht senden"
- `privacyPolicyUrl` (string): Link to privacy policy
- `successMessage` (string): Confirmation message after submission

**Accessibility**:
- Proper label/input association
- Error messages linked to fields (aria-describedby)
- Required fields clearly marked
- Keyboard accessible
- Focus on first error field on validation

**DSGVO**:
- Required privacy policy checkbox
- Clear data processing information
- Optional newsletter opt-in (separate checkbox)

**Spam Protection**:
- Honeypot field
- Rate limiting
- Optional: reCAPTCHA v3 (invisible)

**Metrics**:
- Form start rate
- Form completion rate
- Field-level abandonment
- Error rate by field

---

## CTA Modules

### FinalCTA

**Purpose**: Strong call-to-action section at end of page, drives conversion.

**Inputs/Props**:
- `headline` (string): Compelling CTA headline
- `description` (string, optional): Supporting text
- `ctaPrimary` (object): Primary CTA button
- `ctaSecondary` (object, optional): Secondary option
- `backgroundStyle` (string): 'solid' | 'gradient' | 'image'

**Accessibility**:
- High contrast buttons
- Clear button labels
- Sufficient spacing

---

### ContextCTA

**Purpose**: Contextual CTA within page content, less prominent than FinalCTA.

**Inputs/Props**:
- `text` (string): CTA text
- `cta` (object): { label, href }
- `variant` (string): 'inline' | 'banner' | 'card'

---

### EmergencyBanner

**Purpose**: Prominent emergency contact banner for urgent support needs.

**Inputs/Props**:
- `headline` (string): "IT-Notfall? Sofort-Hilfe:"
- `phoneNumber` (string): Click-to-call phone number
- `whatsappNumber` (string): Click-to-WhatsApp number
- `availability` (string): "24/7" or business hours

**Accessibility**:
- High contrast (emergency red/orange)
- Large touch targets for phone/WhatsApp
- Clear visual hierarchy
- Sticky positioning (optional)

---

## Content Modules

### HowItWorks3Steps

**Purpose**: Explain process in 3 simple steps with icons/illustrations.

**Inputs/Props**:
- `steps` (array): Array of { number, title, description, icon }
- `orientation` (string): 'horizontal' | 'vertical'

**Accessibility**:
- Ordered list markup (ol)
- Clear step numbering
- Descriptive icons with text labels

---

### UseCasesGrid

**Purpose**: Display common use cases/scenarios for a service.

**Inputs/Props**:
- `useCases` (array): Array of { title, description, icon }
- `columns` (number): 2 or 3

---

### TroubleshootList

**Purpose**: List of common problems that can be solved.

**Inputs/Props**:
- `problems` (array): Array of { title, description }
- `showIcons` (boolean): Display checkmark icons

---

### ProblemTypesList

**Purpose**: Categorized list of problem types that can be handled remotely.

**Inputs/Props**:
- `categories` (array): Array of { category, problems[] }

---

## Information Modules

### SLAHighlights

**Purpose**: Display Service Level Agreement highlights (response time, availability).

**Inputs/Props**:
- `slaItems` (array): Array of { metric, value, description }
- `variant` (string): 'cards' | 'table' | 'badges'

**Accessibility**:
- Clear metric labels
- Readable number formatting
- Sufficient contrast

---

### SecurityNote

**Purpose**: Highlight security measures and compliance.

**Inputs/Props**:
- `title` (string): "Ihre Daten sind sicher"
- `features` (array): Array of security features
- `certifications` (array, optional): Security certifications

---

### RemoteVsOnsite

**Purpose**: Compare remote vs. on-site service options.

**Inputs/Props**:
- `remote` (object): { pros, cons, bestFor }
- `onsite` (object): { pros, cons, bestFor }

---

### CostTransparency

**Purpose**: Display transparent pricing information and what's included.

**Inputs/Props**:
- `hourlyRates` (array): Array of { service, rate, unit }
- `included` (array): What's included in the price
- `excluded` (array): What costs extra

---

### RegionMap

**Purpose**: Display service area map for on-site services.

**Inputs/Props**:
- `center` (object): { lat, lng } - Cologne coordinates
- `regions` (array): Array of covered regions
- `responseTime` (object): Response time by region

**Accessibility**:
- Text alternative for map
- List of covered regions
- Keyboard accessible markers

---

### MapEmbed

**Purpose**: Embedded Google Maps or OpenStreetMap for contact page.

**Inputs/Props**:
- `address` (string): Full address
- `coordinates` (object): { lat, lng }
- `provider` (string): 'google' | 'osm'

**Accessibility**:
- iframe title attribute
- Text address below map
- Keyboard skip link

---

## Company Modules

### MissionValues

**Purpose**: Display company mission statement and core values.

**Inputs/Props**:
- `mission` (string): Mission statement
- `values` (array): Array of { title, description, icon }

---

### FounderCard

**Purpose**: Introduce founder/owner with photo and story.

**Inputs/Props**:
- `name` (string): Founder name
- `title` (string): Job title
- `photo` (string): Photo URL
- `bio` (string): Short biography
- `quote` (string, optional): Personal quote

**Accessibility**:
- Descriptive photo alt text
- Proper heading hierarchy

---

### TeamGrid

**Purpose**: Display team members in grid format.

**Inputs/Props**:
- `members` (array): Array of { name, role, photo, bio }
- `columns` (number): 2, 3, or 4

---

### PartnerLogos

**Purpose**: Display technology partner/vendor logos.

**Inputs/Props**:
- Same as LogoStrip but with partner context

---

## Content Display Modules

### PostList

**Purpose**: Display blog post list with pagination/filtering.

**Inputs/Props**:
- `posts` (array): Array of { title, excerpt, date, author, image, href }
- `pagination` (object): Pagination configuration
- `showExcerpt` (boolean): Display post excerpt

**Accessibility**:
- Semantic article markup
- Clear link purpose
- Pagination keyboard accessible

**Schema.org**:
- BlogPosting structured data for each post

---

### CategoryFilter

**Purpose**: Filter blog posts by category.

**Inputs/Props**:
- `categories` (array): Array of category names
- `activeCategory` (string): Currently selected category

**Accessibility**:
- Radio button or tab pattern
- Clear selected state
- Keyboard navigation

---

### SidebarCTA

**Purpose**: Sticky sidebar CTA for blog/content pages.

**Inputs/Props**:
- `headline` (string): CTA headline
- `cta` (object): { label, href }
- `sticky` (boolean): Sticky positioning

---

## Legal & Compliance Modules

### ContactIntro

**Purpose**: Introduction text for contact page with availability info.

**Inputs/Props**:
- `headline` (string): "Kontaktieren Sie uns"
- `description` (string): How we can help
- `availability` (string): Business hours

---

### ContactCards

**Purpose**: Display contact methods as cards (phone, email, WhatsApp, address).

**Inputs/Props**:
- `methods` (array): Array of { type, icon, label, value, href }

**Accessibility**:
- Click-to-call/email/WhatsApp links
- Clear icons with labels
- High contrast

---

### ComplianceNote

**Purpose**: DSGVO compliance note for contact forms.

**Inputs/Props**:
- `privacyPolicyUrl` (string): Link to privacy policy
- `text` (string): Compliance text

---

### LegalText

**Purpose**: Display legal text content (Impressum, Datenschutz, AGB).

**Inputs/Props**:
- `content` (string): HTML content
- `lastUpdated` (string): Last update date

**Accessibility**:
- Proper heading hierarchy
- Readable line length
- Skip links for long documents

---

## Module Usage Guidelines

### Composition

Pages should compose modules in a logical flow:

1. **Hero** (HeroPrimary) - Capture attention
2. **Value** (USPGrid, BenefitsList) - Communicate benefits
3. **Content** (ServiceCards, PricingTable3) - Core information
4. **Trust** (Testimonials, LogoStrip) - Build credibility
5. **FAQ** (FAQ, MiniFAQ) - Address objections
6. **CTA** (FinalCTA) - Drive conversion

### Performance

- Lazy load images in modules below fold
- Use intersection observer for animation triggers
- Minimize layout shift with proper sizing
- Optimize images (WebP, responsive sizes)

### Testing

- Test all modules with keyboard only
- Test with screen reader (NVDA/JAWS)
- Test on mobile devices (touch targets)
- Validate HTML and ARIA
- Check color contrast ratios
- Test with slow network (3G)

---

## Next Steps

1. Implement module components in React/Next.js
2. Create Storybook stories for each module
3. Write unit tests for interactive modules
4. Document props with TypeScript interfaces
5. Create design system tokens (colors, spacing, typography)
6. Build module preview/documentation page

