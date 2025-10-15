```md
# Component Mapping & Draft Design Tokens

**Aus dem aktuellen Stand folgend:** Wir finalisieren die Hi-Fi-Wireframes (mobil zuerst) für Start/Leistungen/Managed/Support/Kontakt.
**Baut auf:** Abgestimmte Modulstruktur, Platzhaltertexte, CTA-Registry, Hygiene-PR.
**Ziel dieses Schritts:** Abnahmefähige Wireframes + Komponenten-Spezifikation.

## Component Mapping

| Sektion (Modul) | Komponente(n) | Quelle (Library) | Props (Beispiel) | A11y Notes |
|---|---|---|---|---|
| `HeroPrimary` | `Heading`, `Text`, `Button` | Chakra UI | `as="h1"`, `size="4xl"` | H1 first, 44px touch target |
| `ProofBar` | `HStack`, `Image` | Chakra UI | `spacing="8"` | Logos mit `alt` Text |
| `USPGrid` | `SimpleGrid`, `Box`, `Icon`, `Heading`, `Text` | Chakra UI | `columns={{ base: 1, md: 3 }}` | Icons `aria-hidden` |
| `ProblemSolution` | `SimpleGrid`, `Card`, `CardHeader`, `CardBody`, `Heading`, `Text`, `Button` | Chakra UI | `columns={{ base: 1, md: 3 }}` | H2 für Sektion, H3 für Cards |
| `ServiceTeaserGrid` | `SimpleGrid`, `Card`, `CardBody`, `Icon`, `Heading`, `Text`, `Link` | Chakra UI | `columns={{ base: 1, md: 3 }}` | Links mit `aria-label` |
| `PricingTeaser` | `HStack`, `VStack`, `Heading`, `Text`, `Button` | Chakra UI | `spacing="8"` | Klare Preis-Ankündigung |
| `LegalPricingNote` | `Text` | Chakra UI | `fontSize="sm"`, `color="gray.500"` | Lesbarer Kontrast |
| `Testimonials` | `Carousel` (Embla), `Box`, `Avatar`, `Text`, `Cite` | Embla Carousel | `options={{ loop: true }}` | Pausable, Keyboard-nav |
| `MiniFAQ` | `Accordion`, `AccordionItem`, `AccordionButton`, `AccordionPanel`, `AccordionIcon` | Chakra UI | `allowToggle` | `aria-expanded`, `aria-controls` |
| `FinalCTA` | `Box`, `Heading`, `Text`, `Button` | Chakra UI | `bg="blue.500"`, `color="white"` | Hoher Kontrast |
| `ServiceCards` | `SimpleGrid`, `Card`, `CardBody`, `Icon`, `Heading`, `Text`, `Link` | Chakra UI | `columns={{ base: 1, md: 2 }}` | Links mit `aria-label` |
| `ContextCTA` | `Box`, `Heading`, `Text`, `Button` | Chakra UI | `bg="gray.100"` | Hoher Kontrast |
| `BenefitsList` | `List`, `ListItem`, `ListIcon` | Chakra UI | `spacing={3}` | Semantische Liste (`ul`) |
| `PricingTable3` | `SimpleGrid`, `Card`, `CardHeader`, `CardBody`, `List`, `ListItem`, `Button` | Chakra UI | `columns={{ base: 1, md: 3 }}` | `scope` für Header |
| `SLAHighlights` | `SimpleGrid`, `Stat`, `StatLabel`, `StatNumber` | Chakra UI | `columns={{ base: 1, md: 3 }}` | Klare Labels |
| `OnboardingSteps` | `VStack`, `HStack`, `Circle`, `Text` | Chakra UI | `divider` | Geordnete Liste (`ol`) |
| `PlaybooksGrid` | `SimpleGrid`, `Card`, `CardBody`, `Icon`, `Heading`, `Text` | Chakra UI | `columns={{ base: 1, md: 2 }}` | Icons `aria-hidden` |
| `SecurityNote` | `Box`, `Heading`, `Text` | Chakra UI | `bg="gray.50"` | Lesbarer Kontrast |
| `EmergencyBanner` | `Box`, `Heading`, `Text`, `Link` | Chakra UI | `bg="red.500"`, `color="white"` | Hoher Kontrast |
| `TroubleshootList` | `List`, `ListItem`, `ListIcon` | Chakra UI | `spacing={3}` | Semantische Liste (`ul`) |
| `RemoteVsOnsite` | `SimpleGrid`, `Box`, `Heading`, `Text` | Chakra UI | `columns={{ base: 1, md: 2 }}` | Klare Überschriften |
| `CostTransparency` | `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td` | Chakra UI | `variant="simple"` | `scope` para Header |
| `ContactIntro` | `Heading`, `Text` | Chakra UI | `as="h1"` | H1 first |
| `ContactCards` | `SimpleGrid`, `Card`, `CardBody`, `Icon`, `Heading`, `Link` | Chakra UI | `columns={{ base: 1, md: 3 }}` | Links con `aria-label` |
| `ContactForm` | `FormControl`, `FormLabel`, `Input`, `Textarea`, `Checkbox`, `Button` | Chakra UI, React Hook Form | `isInvalid` | `aria-describedby` para errores |
| `OfficeHours` | `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td` | Chakra UI | `variant="simple"` | `scope` para Header |
| `WhatsAppQuickCTA` | `Button` | Chakra UI | `leftIcon={<WhatsAppIcon />}` | `aria-label` para Icon-Button |
| `MapEmbed` | `AspectRatio`, `iframe` | Chakra UI | `ratio={16 / 9}` | `title` para iframe |
| `ComplianceNote` | `Text` | Chakra UI | `fontSize="sm"`, `color="gray.500"` | Lesbarer Kontrast |

## Draft Design Tokens

### Typography
- **Font Family:** `Inter, sans-serif` (Variable Font)
- **Scale (Mobile):**
  - `H1`: 32px (bold)
  - `H2`: 24px (bold)
  - `H3`: 20px (semibold)
  - `Body`: 16px (regular)
  - `Small`: 14px (regular)
- **Line Height:** `1.5`

### Spacing
- **Base Unit:** `4px`
- **Scale:** `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`

### Colors
- **Neutrals:**
  - `gray.50`: `#F9FAFB`
  - `gray.100`: `#F3F4F6`
  - `gray.500`: `#6B7280`
  - `gray.800`: `#1F2937`
  - `gray.900`: `#111827`
- **Accent:**
  - `blue.500`: `#3B82F6`
  - `blue.600`: `#2563EB`
- **Feedback:**
  - `red.500`: `#EF4444` (Error)
  - `green.500`: `#22C55E` (Success)

### Layout
- **Container Max Width:** `1280px`
- **Breakpoints:**
  - `sm`: `640px`
  - `md`: `768px`
  - `lg`: `1024px`
  - `xl`: `1280px`

```

