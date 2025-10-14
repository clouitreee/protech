'''
import yaml

# This script reconstructs the module-intents.yaml file which was malformed due to an incorrect append operation.

# Original content of the file
original_content = """
intents:
- content_types:
  - heading:h1
  - paragraph:subline
  - buttons:primary,secondary
  - badges:optional
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /leistungen
      label: Leistungen ansehen
      type: link
  notes: Klarer Nutzen, 1–2 kurze CTAs, kein Bild nötig
  page: /
  section: HeroPrimary
- content_types:
  - grid:3-6
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: 3-6 prägnante Nutzenpunkte, Icons und kurze Beschreibungen
  page: /
  section: USPGrid
- content_types:
  - grid:3-4
  - card
  - heading:h3
  - paragraph
  - link
  core_function: Information
  ctas: {}
  notes: Kompakte Vorschau der Hauptleistungen, verlinkt zu Detailseiten
  page: /
  section: ServiceTeaserGrid
- content_types:
  - grid:3
  - card
  - heading:h3
  - list
  - button
  core_function: Information
  ctas: {}
  notes: Anreiz für Preismodelle, ohne konkrete Preise, weckt Interesse
  page: /
  section: PricingTeaser
- content_types:
  - carousel/grid
  - blockquote
  - cite
  core_function: Trust
  ctas: {}
  notes: Kundenstimmen zur Vertrauensbildung, mit Schema.org Markup
  page: /
  section: Testimonials
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: 3-5 häufige Fragen für schnelle Antworten, verlinkt zur FAQ-Seite
  page: /
  section: MiniFAQ
- content_types:
  - heading:h2
  - paragraph
  - buttons:primary,secondary
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Starker Call-to-Action am Seitenende, Fokus auf Kontaktaufnahme
  page: /
  section: FinalCTA
- content_types:
  - grid:2-4
  - card
  - heading:h3
  - paragraph
  - link
  core_function: Information
  ctas:
    primary:
      href: /leistungen
      label: Mehr erfahren
      type: link
  notes: Übersicht der Dienstleistungen in Kartenform, verlinkt zu Detailseiten
  page: /leistungen
  section: ServiceCards
- content_types:
  - callout/banner
  - paragraph
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt
      label: Jetzt beraten lassen
      type: link
  notes: Kontextbezogener CTA, weniger prominent, im Inhalt platziert
  page: /leistungen
  section: ContextCTA
- content_types:
  - list
  - list-item
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Detaillierte Liste der Vorteile, oft auf Leistungsseiten
  page: /leistungen/managed-services
  section: BenefitsList
- content_types:
  - grid:3
  - card
  - feature-list
  - button
  core_function: Information
  ctas:
    primary:
      href: /kontakt#angebot
      label: Angebot anfordern
      type: link
  notes: Vergleich von 3 Preispaketen mit Features und CTAs
  page: /leistungen/managed-services
  section: PricingTable3
- content_types:
  - stat-items:3
  - definition-list
  core_function: Information
  ctas:
    primary:
      href: /kontakt#termin
      label: Details anfragen
      type: link
  notes: Wichtige SLA-Kennzahlen (Reaktionszeit, Verfügbarkeit)
  page: /leistungen/managed-services
  section: SLAHighlights
- content_types:
  - callout/note
  - list
  core_function: Information
  ctas: {}
  notes: Hinweis auf Sicherheitsmaßnahmen und Compliance
  page: /leistungen/managed-services
  section: SecurityNote
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: Accordion-FAQ mit Schema.org Markup für AEO
  page: /leistungen/managed-services
  section: FAQ
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /leistungen/managed-services
  section: CTA
- content_types:
  - banner
  - heading:h2
  - buttons:primary,secondary
  core_function: Conversion
  ctas:
    primary:
      href: tel:+4915565029989
      label: Notfall melden
      type: tel
    secondary:
      href: https://wa.me/4915565029989
      label: WhatsApp
      type: wa
  notes: Prominenter Banner für Notfallkontakte
  page: /leistungen/it-support
  section: EmergencyBanner
- content_types:
  - list
  - list-item
  - heading:h3
  core_function: Information
  ctas: {}
  notes: Liste häufiger Probleme, die gelöst werden können
  page: /leistungen/it-support
  section: TroubleshootList
- content_types:
  - grid:2
  - card
  - heading:h3
  - list
  core_function: Information
  ctas: {}
  notes: Vergleich von Remote- und Vor-Ort-Service
  page: /leistungen/it-support
  section: RemoteVsOnsite
- content_types:
  - table/grid
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Transparente Darstellung der Kostenstruktur
  page: /leistungen/it-support
  section: CostTransparency
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: Accordion-FAQ mit Schema.org Markup für AEO
  page: /leistungen/it-support
  section: FAQ
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /leistungen/it-support
  section: CTA
- content_types:
  - grid:2-3
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Anwendungsbeispiele für den Service in einem Grid
  page: /leistungen/vor-ort-service
  section: UseCasesGrid
- content_types:
  - map-placeholder
  - list
  core_function: Information
  ctas: {}
  notes: Visualisierung des Servicegebiets, z.B. NRW
  page: /leistungen/vor-ort-service
  section: RegionMap
- content_types: []
  core_function: Information
  ctas: {}
  notes: Details zu Service Level Agreements und Anfahrtskosten
  page: /leistungen/vor-ort-service
  section: SLA/Anfahrt
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: Accordion-FAQ mit Schema.org Markup für AEO
  page: /leistungen/vor-ort-service
  section: FAQ
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /leistungen/vor-ort-service
  section: CTA
- content_types:
  - grid:3
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Prozessdarstellung in 3 einfachen Schritten
  page: /leistungen/remote-service
  section: HowItWorks3Steps
- content_types:
  - grid:2-3
  - card
  - heading:h3
  - list
  core_function: Information
  ctas: {}
  notes: Kategorisierte Liste von remote lösbaren Problemen
  page: /leistungen/remote-service
  section: ProblemTypesList
- content_types:
  - callout/note
  - list
  core_function: Information
  ctas: {}
  notes: Hinweis auf Sicherheit und Datenschutz bei Remote-Arbeit
  page: /leistungen/remote-service
  section: SecurityAssurance
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: Accordion-FAQ mit Schema.org Markup für AEO
  page: /leistungen/remote-service
  section: FAQ
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /leistungen/remote-service
  section: CTA
- content_types:
  - grid:2
  - card
  - heading:h2
  - paragraph
  core_function: Information
  ctas: {}
  notes: Darstellung der Unternehmensmission und Kernwerte
  page: /ueber-uns
  section: MissionValues
- content_types:
  - card
  - heading:h3
  - paragraph
  - image-placeholder
  core_function: Information
  ctas: {}
  notes: Vorstellung des Gründers mit Bild und Biografie
  page: /ueber-uns
  section: FounderCard
- content_types:
  - grid:2-4
  - card
  - heading:h3
  - paragraph
  - image-placeholder
  core_function: Information
  ctas: {}
  notes: Vorstellung der Teammitglieder in einem Grid
  page: /ueber-uns
  section: TeamGrid
- content_types:
  - logo-strip
  - image-placeholder
  core_function: Trust
  ctas: {}
  notes: Logos von Partnern oder Kunden als Vertrauenssignal
  page: /ueber-uns
  section: PartnerLogos
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /ueber-uns
  section: CTA
- content_types:
  - logo-strip
  - image-placeholder
  core_function: Trust
  ctas: {}
  notes: Logos von Kunden oder Partnern als Vertrauenssignal
  page: /referenzen
  section: LogoStrip
- content_types:
  - grid:2-3
  - card
  - heading:h3
  - paragraph
  - link
  core_function: Trust
  ctas: {}
  notes: Kurze Fallstudien-Teaser mit Problem, Lösung, Ergebnis
  page: /referenzen
  section: CaseSnippets
- content_types:
  - grid:2-3
  - blockquote
  - cite
  core_function: Trust
  ctas: {}
  notes: Grid mit mehreren Kundenstimmen
  page: /referenzen
  section: TestimonialsGrid
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /referenzen
  section: CTA
- content_types:
  - grid:1-3
  - card
  - heading:h3
  - paragraph
  - link
  core_function: Information
  ctas: {}
  notes: Liste von Blog-Beiträgen mit Teasern
  page: /blog
  section: PostList
- content_types:
  - button-group
  - button
  core_function: Information
  ctas: {}
  notes: Filteroptionen für Blog-Kategorien
  page: /blog
  section: CategoryFilter
- content_types:
  - card
  - heading:h3
  - button
  core_function: Conversion
  ctas:
    primary:
      href: '#newsletter'
      label: Jetzt abonnieren
      type: link
  notes: Call-to-Action in der Seitenleiste, z.B. Newsletter
  page: /blog
  section: SidebarCTA
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /blog
  section: CTA
- content_types:
  - accordion/list
  - heading:h3
  - paragraph
  core_function: Trust
  ctas:
    primary:
      href: /kontakt
      label: Weitere Fragen?
      type: link
  notes: Accordion-FAQ mit Schema.org Markup für AEO
  page: /faq
  section: FAQ
- content_types:
  - button-group
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt#termin
      label: Kostenloses Erstgespräch
      type: link
    secondary:
      href: /kontakt
      label: Kontakt aufnehmen
      type: link
  notes: Allgemeine Informationen oder spezifische Inhalte.
  page: /faq
  section: CTA
- content_types:
  - heading:h1
  - paragraph
  core_function: Information
  ctas: {}
  notes: Einleitungstext für die Kontaktseite
  page: /kontakt
  section: ContactIntro
- content_types:
  - grid:2-4
  - card
  - heading:h3
  - paragraph
  - link
  core_function: Information
  ctas: {}
  notes: Karten mit den verschiedenen Kontaktmöglichkeiten (Telefon, E-Mail, etc.)
  page: /kontakt
  section: ContactCards
- content_types:
  - form
  - input
  - textarea
  - checkbox
  - button
  core_function: Conversion
  ctas:
    primary:
      href: /kontakt
      label: Anfrage senden
      type: submit
  notes: Ein Kontaktformular mit den notwendigen Feldern und DSGVO-Checkbox.
  page: /kontakt
  section: ContactForm
- content_types:
  - map-placeholder
  core_function: Information
  ctas: {}
  notes: Ein Platzhalter für eine eingebettete Karte.
  page: /kontakt
  section: MapEmbed
- content_types:
  - paragraph
  - link
  core_function: Legal
  ctas: {}
  notes: Ein kurzer Hinweis zur DSGVO-Konformität des Formulars.
  page: /kontakt
  section: ComplianceNote
- content_types:
  - heading:h2
  - paragraph
  core_function: Legal
  ctas: {}
  notes: Platzhalter für den rechtlichen Fließtext.
  page: /recht/impressum
  section: LegalText
- content_types:
  - heading:h2
  - paragraph
  core_function: Legal
  ctas: {}
  notes: Platzhalter für den rechtlichen Fließtext.
  page: /recht/datenschutz
  section: LegalText
- content_types:
  - heading:h2
  - paragraph
  core_function: Legal
  ctas: {}
  notes: Platzhalter für den rechtlichen Fließtext.
  page: /recht/agb
  section: LegalText
- content_types:
  - heading:h2
  - paragraph
  core_function: Legal
  ctas: {}
  notes: Platzhalter für den rechtlichen Fließtext.
  page: /recht/widerruf
  section: LegalText
"""

# Content that was incorrectly appended
appended_content = """
- content_types:
  - logo-strip
  - image-placeholder
  core_function: Trust
  ctas: {}
  notes: Logos von Partnern oder Kunden als Vertrauenssignal
  page: /
  section: ProofBar
- content_types:
  - grid:3
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: 3 häufige Probleme und deren Lösungen in Kartenform
  page: /
  section: ProblemSolution
- content_types:
  - list
  - list-item
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: 3-5 Schritte des Onboarding-Prozesses
  page: /leistungen/managed-services
  section: OnboardingSteps
- content_types:
  - grid:2-4
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Übersicht der automatisierten Playbooks (Monitoring, Patching, etc.)
  page: /leistungen/managed-services
  section: PlaybooksGrid
- content_types:
  - grid:2-3
  - card
  - heading:h3
  - paragraph
  core_function: Information
  ctas: {}
  notes: Auswahlmöglichkeiten für Service Level Agreements (Reaktionszeiten)
  page: /leistungen/it-support
  section: SLAChooser
- content_types:
  - paragraph
  - list
  core_function: Information
  ctas: {}
  notes: Informationen zu Geschäftszeiten und Erreichbarkeit
  page: /kontakt
  section: OfficeHours
- content_types:
  - button
  core_function: Conversion
  ctas:
    primary:
      href: https://wa.me/4915565029989
      label: WhatsApp
      type: wa
  notes: Direkter WhatsApp-Kontakt-Button
  page: /kontakt
  section: WhatsAppQuickCTA
"""

data = yaml.safe_load(original_content)
new_intents = yaml.safe_load(appended_content)

if isinstance(new_intents, list):
    data['intents'].extend(new_intents)

with open('/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml', 'w', encoding='utf-8') as f:
    yaml.dump(data, f, allow_unicode=True, sort_keys=False)

print("Successfully reconstructed /home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml")
'''
