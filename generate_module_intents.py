
import yaml
import os

def get_module_content_types(module_name):
    # This is a simplified mapping. In a real scenario, this would be parsed from modules.md
    # or a more structured source.
    content_types_map = {
        "HeroPrimary": ["heading:h1", "paragraph:subline", "buttons:primary,secondary", "badges:optional"],
        "USPGrid": ["grid:3-6", "card", "heading:h3", "paragraph"],
        "ServiceTeaserGrid": ["grid:3-4", "card", "heading:h3", "paragraph", "link"],
        "PricingTeaser": ["grid:3", "card", "heading:h3", "list", "button"],
        "Testimonials": ["carousel/grid", "blockquote", "cite"],
        "MiniFAQ": ["accordion/list", "heading:h3", "paragraph"],
        "FinalCTA": ["heading:h2", "paragraph", "buttons:primary,secondary"],
        "ServiceCards": ["grid:2-4", "card", "heading:h3", "paragraph", "link"],
        "ContextCTA": ["callout/banner", "paragraph", "button"],
        "BenefitsList": ["list", "list-item", "heading:h3", "paragraph"],
        "PricingTable3": ["grid:3", "card", "feature-list", "button"],
        "SLAHighlights": ["stat-items:3", "definition-list"],
        "SecurityNote": ["callout/note", "list"],
        "FAQ": ["accordion/list", "heading:h3", "paragraph"],
        "EmergencyBanner": ["banner", "heading:h2", "buttons:primary,secondary"],
        "TroubleshootList": ["list", "list-item", "heading:h3"],
        "RemoteVsOnsite": ["grid:2", "card", "heading:h3", "list"],
        "CostTransparency": ["table/grid", "heading:h3", "paragraph"],
        "UseCasesGrid": ["grid:2-3", "card", "heading:h3", "paragraph"],
        "RegionMap": ["map-placeholder", "list"],
        "HowItWorks3Steps": ["grid:3", "card", "heading:h3", "paragraph"],
        "ProblemTypesList": ["grid:2-3", "card", "heading:h3", "list"],
        "SecurityAssurance": ["callout/note", "list"],
        "MissionValues": ["grid:2", "card", "heading:h2", "paragraph"],
        "FounderCard": ["card", "heading:h3", "paragraph", "image-placeholder"],
        "TeamGrid": ["grid:2-4", "card", "heading:h3", "paragraph", "image-placeholder"],
        "PartnerLogos": ["logo-strip", "image-placeholder"],
        "LogoStrip": ["logo-strip", "image-placeholder"],
        "CaseSnippets": ["grid:2-3", "card", "heading:h3", "paragraph", "link"],
        "TestimonialsGrid": ["grid:2-3", "blockquote", "cite"],
        "PostList": ["grid:1-3", "card", "heading:h3", "paragraph", "link"],
        "CategoryFilter": ["button-group", "button"],
        "SidebarCTA": ["card", "heading:h3", "button"],
        "ContactIntro": ["heading:h1", "paragraph"],
        "ContactCards": ["grid:2-4", "card", "heading:h3", "paragraph", "link"],
        "ContactForm": ["form", "input", "textarea", "checkbox", "button"],
        "MapEmbed": ["map-placeholder"],
        "ComplianceNote": ["paragraph", "link"],
        "LegalText": ["heading:h2", "paragraph"],
        "CTA": ["button-group", "button"],
    }
    return content_types_map.get(module_name, [])

def get_module_ctas(module_name, page_path):
    ctas = {}
    if module_name == "HeroPrimary":
        ctas["primary"] = {"label": "Kostenloses Erstgespräch", "type": "link", "href": "/kontakt#termin"}
        ctas["secondary"] = {"label": "Leistungen ansehen", "type": "link", "href": "/leistungen"}
    elif module_name == "FinalCTA":
        ctas["primary"] = {"label": "Kontakt aufnehmen", "type": "link", "href": "/kontakt"}
    elif module_name == "ServiceCards":
        ctas["primary"] = {"label": "Mehr erfahren", "type": "link", "href": "/leistungen"}
    elif module_name == "ContextCTA":
        ctas["primary"] = {"label": "Jetzt beraten lassen", "type": "link", "href": "/kontakt"}
    elif module_name == "PricingTable3":
        ctas["primary"] = {"label": "Angebot anfordern", "type": "link", "href": "/kontakt#angebot"}
    elif module_name == "SLAHighlights":
        ctas["primary"] = {"label": "Details anfragen", "type": "link", "href": "/kontakt#termin"}
    elif module_name == "FAQ" or module_name == "MiniFAQ":
        ctas["primary"] = {"label": "Weitere Fragen?", "type": "link", "href": "/kontakt"}
    elif module_name == "EmergencyBanner":
        ctas["primary"] = {"label": "Notfall melden", "type": "tel", "href": "tel:+4915565029989"}
        ctas["secondary"] = {"label": "WhatsApp", "type": "wa", "href": "https://wa.me/4915565029989"}
    elif module_name == "ContactForm":
        ctas["primary"] = {"label": "Anfrage senden", "type": "button"}
    elif module_name == "SidebarCTA":
        ctas["primary"] = {"label": "Jetzt abonnieren", "type": "link", "href": "#newsletter"}
    elif module_name == "CTA": # Generic CTA module
        if page_path == "/ueber-uns" or page_path == "/referenzen" or page_path == "/blog" or page_path == "/faq" or page_path.startswith("/leistungen"):
            ctas["primary"] = {"label": "Kostenloses Erstgespräch", "type": "link", "href": "/kontakt#termin"}
            ctas["secondary"] = {"label": "Kontakt aufnehmen", "type": "link", "href": "/kontakt"}
    return ctas

def get_module_core_function(module_name, page_path):
    if module_name in ["HeroPrimary", "FinalCTA", "ContactForm", "ContextCTA", "SidebarCTA", "EmergencyBanner", "CTA"]:
        return "Conversion"
    elif module_name in ["USPGrid", "BenefitsList", "ServiceTeaserGrid", "ServiceCards", "PricingTeaser", "PricingTable3", "SLAHighlights", "SecurityNote", "HowItWorks3Steps", "UseCasesGrid", "TroubleshootList", "ProblemTypesList", "RemoteVsOnsite", "CostTransparency", "RegionMap", "MapEmbed", "ComplianceNote", "LegalText", "MissionValues", "FounderCard", "TeamGrid", "PostList", "CategoryFilter"]:
        return "Information"
    elif module_name in ["Testimonials", "MiniFAQ", "FAQ", "LogoStrip", "CaseSnippets", "TestimonialsGrid", "PartnerLogos"]:
        return "Trust"
    return "Information"

def get_module_notes(module_name):
    notes_map = {
        "HeroPrimary": "Klarer Nutzen, 1–2 kurze CTAs, kein Bild nötig",
        "USPGrid": "3-6 prägnante Nutzenpunkte, Icons und kurze Beschreibungen",
        "ServiceTeaserGrid": "Kompakte Vorschau der Hauptleistungen, verlinkt zu Detailseiten",
        "PricingTeaser": "Anreiz für Preismodelle, ohne konkrete Preise, weckt Interesse",
        "Testimonials": "Kundenstimmen zur Vertrauensbildung, mit Schema.org Markup",
        "MiniFAQ": "3-5 häufige Fragen für schnelle Antworten, verlinkt zur FAQ-Seite",
        "FinalCTA": "Starker Call-to-Action am Seitenende, Fokus auf Kontaktaufnahme",
        "ServiceCards": "Übersicht der Dienstleistungen in Kartenform, verlinkt zu Detailseiten",
        "ContextCTA": "Kontextbezogener CTA, weniger prominent, im Inhalt platziert",
        "BenefitsList": "Detaillierte Liste der Vorteile, oft auf Leistungsseiten",
        "PricingTable3": "Vergleich von 3 Preispaketen mit Features und CTAs",
        "SLAHighlights": "Wichtige SLA-Kennzahlen (Reaktionszeit, Verfügbarkeit)",
        "SecurityNote": "Hinweis auf Sicherheitsmaßnahmen und Compliance",
        "FAQ": "Accordion-FAQ mit Schema.org Markup für AEO",
        "EmergencyBanner": "Prominenter Banner für Notfallkontakte",
        "TroubleshootList": "Liste häufiger Probleme, die gelöst werden können",
        "RemoteVsOnsite": "Vergleich von Remote- und Vor-Ort-Service",
        "CostTransparency": "Transparente Darstellung der Kostenstruktur",
        "UseCasesGrid": "Anwendungsbeispiele für den Service in einem Grid",
        "RegionMap": "Visualisierung des Servicegebiets, z.B. NRW",
        "HowItWorks3Steps": "Prozessdarstellung in 3 einfachen Schritten",
        "ProblemTypesList": "Kategorisierte Liste von remote lösbaren Problemen",
        "SecurityAssurance": "Hinweis auf Sicherheit und Datenschutz bei Remote-Arbeit",
        "MissionValues": "Darstellung der Unternehmensmission und Kernwerte",
        "FounderCard": "Vorstellung des Gründers mit Bild und Biografie",
        "TeamGrid": "Vorstellung der Teammitglieder in einem Grid",
        "PartnerLogos": "Logos von Partnern oder Kunden als Vertrauenssignal",
        "LogoStrip": "Logos von Kunden oder Partnern als Vertrauenssignal",
        "CaseSnippets": "Kurze Fallstudien-Teaser mit Problem, Lösung, Ergebnis",
        "TestimonialsGrid": "Grid mit mehreren Kundenstimmen",
        "PostList": "Liste von Blog-Beiträgen mit Teasern",
        "CategoryFilter": "Filteroptionen für Blog-Kategorien",
        "SidebarCTA": "Call-to-Action in der Seitenleiste, z.B. Newsletter",
        "ContactIntro": "Einleitungstext für die Kontaktseite",
        "ContactCards": "Verschiedene Kontaktmöglichkeiten in Kartenform",
        "ContactForm": "DSGVO-konformes Kontaktformular mit Spam-Schutz",
        "MapEmbed": "Eingebettete Karte mit Standort",
        "ComplianceNote": "Kurzer Hinweis zur DSGVO-Konformität",
        "LegalText": "Rechtlicher Fließtext, z.B. Impressum, Datenschutz",
        "SLA/Anfahrt": "Details zu Service Level Agreements und Anfahrtskosten",
    }
    return notes_map.get(module_name, "Allgemeine Informationen oder spezifische Inhalte.")


def generate_module_intents(sitemap_content):
    sitemap = yaml.safe_load(sitemap_content)
    intents = []

    def process_route(route_data):
        page_path = route_data["path"]
        modules = route_data.get("modules", [])

        for module_name in modules:
            intent_entry = {
                "page": page_path,
                "section": module_name,
                "core_function": get_module_core_function(module_name, page_path),
                "content_types": get_module_content_types(module_name),
                "ctas": get_module_ctas(module_name, page_path),
                "notes": get_module_notes(module_name)
            }
            intents.append(intent_entry)
        
        # Handle legal pages specifically as they might not have modules defined in sitemap.yaml
        if page_path.startswith("/recht") and not modules:
            legal_modules = {
                "/recht/impressum": "LegalText",
                "/recht/datenschutz": "LegalText",
                "/recht/agb": "LegalText",
                "/recht/widerruf": "LegalText",
            }
            module_name = legal_modules.get(page_path)
            if module_name:
                intent_entry = {
                    "page": page_path,
                    "section": module_name,
                    "core_function": "Rechtliches",
                    "content_types": get_module_content_types(module_name),
                    "ctas": {},
                    "notes": get_module_notes(module_name)
                }
                intents.append(intent_entry)

        if "subpages" in route_data:
            for subpage_data in route_data["subpages"]:
                process_route(subpage_data)

    for route in sitemap["routes"]:
        process_route(route)

    return {"version": 1, "intents": intents}

# Read sitemap.yaml content
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/sitemap.yaml", "r") as f:
    sitemap_content = f.read()

# Generate module-intents.yaml content
module_intents_data = generate_module_intents(sitemap_content)

# Create directory if it doesn\\'t exist
os.makedirs("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture", exist_ok=True)

# Write to file
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml", "w") as f:
    yaml.dump(module_intents_data, f, indent=2, allow_unicode=True)

print("Generated /home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml")

