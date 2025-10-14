
import yaml
import os
import random

def generate_heading(page_title, length_range=(40, 60)):
    # Generate a German heading based on page title, within length range
    base_heading = f"{page_title} – Ihre IT-Lösung in NRW"
    if len(base_heading) > length_range[1]:
        return base_heading[:length_range[1]]
    elif len(base_heading) < length_range[0]:
        return base_heading + " " + "für Unternehmen" * ((length_range[0] - len(base_heading)) // 15 + 1)
    return base_heading

def generate_subline(page_purpose, length_range=(90, 140)):
    # Generate a German subline based on page purpose, within length range
    base_subline = f"Kompetente IT-Betreuung und maßgeschneiderte Services für {page_purpose.lower()} in Nordrhein-Westfalen. Wir sind Ihr zuverlässiger Partner für digitale Herausforderungen."
    if len(base_subline) > length_range[1]:
        return base_subline[:length_range[1]]
    elif len(base_subline) < length_range[0]:
        return base_subline + " " + "Schnell, sicher und persönlich." * ((length_range[0] - len(base_subline)) // 25 + 1)
    return base_subline

def generate_paragraph(word_range=(40, 80)):
    words = [
        "Lorem", "ipsum", "dolor", "sit", "amet", "consetetur", "sadipscing", "elitr", "sed", "diam", "nonumy",
        "eirmod", "tempor", "invidunt", "ut", "labore", "et", "dolore", "magna", "aliquyam", "erat", "sed",
        "diam", "voluptua", "At", "vero", "eos", "et", "accusam", "et", "justo", "duo", "dolores", "et",
        "ea", "rebum", "Stet", "clita", "kasd", "gubergren", "no", "sea", "takimata", "sanctus", "est",
        "Lorem", "ipsum", "dolor", "sit", "amet", "Lorem", "ipsum", "dolor", "sit", "amet", "consetetur",
        "sadipscing", "elitr", "sed", "diam", "nonumy", "eirmod", "tempor", "invidunt", "ut", "labore", "et",
        "dolore", "magna", "aliquyam", "erat", "sed", "diam", "voluptua", "At", "vero", "eos", "et",
        "accusam", "et", "justo", "duo", "dolores", "et", "ea", "rebum", "Stet", "clita", "kasd", "gubergren",
        "no", "sea", "takimata", "sanctus", "est", "Lorem", "ipsum", "dolor", "sit", "amet",
        "Die", "IT-Infrastruktur", "ist", "das", "Rückgrat", "jedes", "modernen", "Unternehmens", "Wir", "sorgen",
        "für", "einen", "reibungslosen", "Betrieb", "und", "optimale", "Leistung", "Ihrer", "Systeme", "Unsere",
        "Experten", "stehen", "Ihnen", "jederzeit", "zur", "Verfügung", "um", "Ihre", "Fragen", "zu", "beantworten",
        "und", "Lösungen", "für", "Ihre", "Herausforderungen", "zu", "finden", "Vertrauen", "Sie", "auf", "unsere",
        "langjährige", "Erfahrung", "und", "unser", "Engagement", "für", "Ihren", "Erfolg", "Wir", "bieten",
        "maßgeschneiderte", "Services", "die", "genau", "auf", "Ihre", "Bedürfnisse", "zugeschnitten", "sind",
        "Kontaktieren", "Sie", "uns", "noch", "heute", "für", "ein", "unverbindliches", "Beratungsgespräch",
        "Wir", "freuen", "uns", "darauf", "Sie", "kennenzulernen", "und", "Ihnen", "zu", "helfen", "Ihre",
        "digitalen", "Ziele", "zu", "erreichen", "Sicherheit", "und", "Zuverlässigkeit", "sind", "unsere",
        "obersten", "Prioritäten", "Wir", "schützen", "Ihre", "Daten", "und", "Systeme", "vor", "Bedrohungen",
        "und", "stellen", "sicher", "dass", "Sie", "sich", "auf", "Ihr", "Kerngeschäft", "konzentrieren", "können"
    ]
    num_words = random.randint(word_range[0], word_range[1])
    return ' '.join(random.sample(words, num_words)).capitalize() + '.'

def generate_button_label(length_range=(2, 4)):
    labels = [
        "Jetzt starten", "Mehr erfahren", "Kontakt aufnehmen", "Angebot sichern", "Termin buchen",
        "Anrufen", "WhatsApp", "Senden", "Weiter", "Los geht's", "Details ansehen", "Hilfe anfordern"
    ]
    label = random.choice(labels)
    while not (length_range[0] <= len(label.split()) <= length_range[1]):
        label = random.choice(labels)
    return label

def generate_faq_answer(length_range=(18, 35)):
    words = [
        "Unsere Reaktionszeiten sind sehr schnell und wir sind stets bemüht, Ihnen umgehend zu helfen. Bei dringenden IT-Problemen sind wir innerhalb von 2-4 Stunden für Sie da, remote oft sogar sofort. Wir legen Wert auf schnelle und effiziente Lösungen, damit Ihre Geschäftsabläufe nicht unterbrochen werden. Unser Team ist bestens geschult und verfügt über langjährige Erfahrung in der Problembehebung. Zögern Sie nicht, uns im Notfall zu kontaktieren.",
        "Wir bieten flexible Service-Modelle an, die genau auf Ihre individuellen Bedürfnisse zugeschnitten sind. Ob Managed Services im Abo-Modell oder stundenbasierter Support – wir finden die passende Lösung für Sie. Unsere Verträge sind transparent und fair gestaltet, ohne versteckte Kosten. Sprechen Sie uns an, um Ihr maßgeschneidertes Angebot zu erhalten. Wir beraten Sie gerne ausführlich zu allen Optionen.",
        "Datenschutz hat bei uns höchste Priorität. Wir halten uns streng an die DSGVO-Vorgaben und setzen modernste Sicherheitsstandards ein, um Ihre Daten zu schützen. Alle unsere Prozesse sind darauf ausgelegt, die Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Informationen zu gewährleisten. Regelmäßige Audits und Schulungen stellen sicher, dass wir immer auf dem neuesten Stand der Technik sind. Ihre Daten sind bei uns in sicheren Händen.",
        "Wir sind spezialisiert auf kleine und mittelständische Unternehmen (KMU) in NRW mit 5-50 Mitarbeitenden. Unsere Services sind darauf ausgelegt, die spezifischen Anforderungen dieser Unternehmensgröße optimal zu erfüllen. Wir verstehen die Herausforderungen, denen KMU gegenüberstehen, und bieten praxisnahe, kosteneffiziente Lösungen. Unser Ziel ist es, Ihnen eine IT-Infrastruktur zu ermöglichen, die Sie im Wettbewerb stärkt.",
        "Das Erstgespräch ist für Sie völlig kostenlos und unverbindlich. Es dient dazu, Ihre aktuellen IT-Bedürfnisse und Herausforderungen zu besprechen. Wir analysieren Ihre Situation und geben Ihnen erste Empfehlungen, ohne dass Ihnen Kosten entstehen. Nutzen Sie diese Gelegenheit, um uns kennenzulernen und zu erfahren, wie wir Sie unterstützen können. Eine Terminvereinbarung ist jederzeit unkompliziert möglich.",
        "Wir arbeiten mit modernster Technologie und innovativen Lösungen, um Ihnen den bestmöglichen Service zu bieten. Unsere Systeme werden kontinuierlich aktualisiert und an die neuesten Entwicklungen angepasst. Dies gewährleistet nicht nur höchste Effizienz, sondern auch maximale Sicherheit für Ihre IT-Umgebung. Wir investieren in Forschung und Entwicklung, um Ihnen stets einen Vorsprung zu verschaffen.",
        "Unser Team ist hochqualifiziert und erfahren. Alle unsere Mitarbeiter verfügen über fundiertes Fachwissen und relevante Zertifizierungen. Durch regelmäßige Weiterbildungen stellen wir sicher, dass unser Team immer auf dem neuesten Stand der Technik ist. Sie können sich darauf verlassen, dass Sie von echten Experten betreut werden, die Ihre Sprache sprechen und Ihre Anforderungen verstehen.",
        "Wir sind regional stark verankert und legen Wert auf persönliche Nähe zu unseren Kunden in NRW. Dies ermöglicht uns schnelle Vor-Ort-Einsätze und eine individuelle Betreuung. Wir kennen die lokalen Gegebenheiten und können flexibel auf Ihre Bedürfnisse reagieren. Als Ihr IT-Partner vor Ort sind wir immer nur einen Anruf entfernt und schnell bei Ihnen, wenn es darauf ankommt.",
        "Individuelle Lösungen sind unsere Stärke. Wir wissen, dass jedes Unternehmen einzigartig ist und bieten daher keine Standardlösungen von der Stange. Nach einer detaillierten Analyse Ihrer Anforderungen entwickeln wir maßgeschneiderte Konzepte, die perfekt zu Ihrem Geschäftsmodell passen. Unser Ziel ist es, Ihre IT so zu gestalten, dass sie optimal zu Ihren Unternehmenszielen beiträgt.",
        "Transparente Kosten sind garantiert. Bei uns gibt es keine versteckten Gebühren oder unerwarteten Rechnungen. Wir legen Wert auf eine klare und nachvollziehbare Preisgestaltung. Vor Beginn jeder Leistung erhalten Sie ein detailliertes Angebot, das alle Kostenpunkte klar aufschlüsselt. So haben Sie jederzeit volle Kontrolle über Ihr Budget und können sicher planen.",
        "Wir schützen Ihre Daten und Systeme vor Bedrohungen durch umfassende Sicherheitskonzepte. Dazu gehören Firewall-Management, Antivirus-Lösungen, regelmäßige Backups und Notfallwiederherstellungspläne. Wir minimieren Risiken und sorgen für die Geschäftskontinuität. Ihre IT-Sicherheit ist unser oberstes Anliegen, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
        "Unser Engagement für Ihren Erfolg ist unser Antrieb. Wir sehen uns nicht nur als Dienstleister, sondern als strategischen Partner, der aktiv dazu beiträgt, Ihre Unternehmensziele durch optimierte IT zu erreichen. Ihre Zufriedenheit ist unser Maßstab. Wir arbeiten proaktiv, um Probleme zu vermeiden, und reaktiv, um sie schnell zu lösen. Gemeinsam gestalten wir Ihre digitale Zukunft."
    ]
    # Ensure num_words does not exceed the number of available sentences/phrases
    num_phrases = random.randint(1, 2) # Generate 1 or 2 phrases for the answer
    selected_phrases = random.sample(words, min(num_phrases, len(words)))
    answer = ' '.join(selected_phrases)

    # Truncate or extend to fit the word count range if necessary, but prioritize coherence
    answer_words = answer.split()
    if len(answer_words) > length_range[1]:
        answer = ' '.join(answer_words[:length_range[1]]) + '.'
    elif len(answer_words) < length_range[0]:
        # If too short, append more words from a general pool or repeat a phrase
        additional_words = generate_paragraph(word_range=(length_range[0] - len(answer_words), length_range[1] - len(answer_words))).split()
        answer = ' '.join(answer_words + additional_words) + '.'
    else:
        answer = answer + '.'

    return answer.capitalize()

def generate_form_example(form_type):
    if form_type == "Angebot anfordern":
        return """
### Angebot anfordern
Felder:
- Firma (text, required)
- Ansprechpartner (text, required)
- E-Mail (email, required)
- Telefon (tel, optional)
- Bedarf (textarea, required, 200–400 Zeichen)
- DSGVO-Einwilligung (checkbox, required, Text: „Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.“)
CTA: „Anfrage senden"
"""
    elif form_type == "Schnellkontakt":
        return """
### Schnellkontakt
Felder:
- Name (text, required)
- E-Mail (email, required)
- Nachricht (textarea, required, 150–300 Zeichen)
- DSGVO-Einwilligung (checkbox, required, Text: „Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.“)
CTA: „Nachricht senden"
"""
    return ""

def get_ctas_for_page(page_path):
    # This is a simplified mapping based on the module-intents.yaml logic
    # In a real scenario, this would be more dynamic based on the actual module intents
    ctas = {
        "primary": {"label": "Kostenloses Erstgespräch", "href": "/kontakt#termin"},
        "secondary": {"label": "Leistungen ansehen", "href": "/leistungen"},
        "emergency": {"label": "Notfall melden", "href": "tel:+4915565029989"},
    }
    if page_path.startswith("/leistungen"): # Specific CTAs for service pages
        ctas["primary"] = {"label": "Angebot anfordern", "href": "/kontakt#angebot"}
        ctas["secondary"] = {"label": "Details anfragen", "href": "/kontakt#termin"}
    if page_path == "/kontakt":
        ctas["primary"] = {"label": "Anfrage senden", "href": "/kontakt"}
        ctas["secondary"] = {"label": "Jetzt anrufen", "href": "tel:+4915565029989"}
    return ctas

def generate_placeholder_content(page_data):
    page_path = page_data["path"]
    page_title = page_data["title"]
    page_purpose = page_data["purpose"]
    page_faqs = page_data.get("faqs", [])

    content = f"# Platzhalter – {page_path}\n"

    # Headings
    content += "## Headings\n"
    content += f"H1: {generate_heading(page_title)}\n"
    content += f"Subline: {generate_subline(page_purpose)}\n\n"

    # Copy Blocks
    content += "## Copy Blocks\n"
    content += f"Intro (40–60 Wörter): {generate_paragraph(word_range=(40, 60))}\n"
    content += f"Benefits (Liste, 3–6 Punkte, je 6–12 Wörter):\n"
    for i in range(random.randint(3, 6)):
        content += f"- Benefit {i+1}: {generate_paragraph(word_range=(6, 12))}\n"
    content += f"Trust-Hinweis (1 Satz): {generate_paragraph(word_range=(15, 25))}\n\n"

    # CTAs
    content += "## CTAs\n"
    ctas = get_ctas_for_page(page_path)
    if "primary" in ctas:
        content += f"Primary: [{ctas['primary']['label']}]({ctas['primary']['href']})\n"
    if "secondary" in ctas:
        content += f"Secondary: [{ctas['secondary']['label']}]({ctas['secondary']['href']})\n"
    if "emergency" in ctas:
        content += f"Emergency: [{ctas['emergency']['label']}]({ctas['emergency']['href']})\n"
    content += "\n"

    # FAQ
    if page_faqs:
        content += "## FAQ (5 Einträge)\n"
        for i, faq in enumerate(page_faqs[:5]): # Limit to 5 FAQs
            content += f"- Frage: {faq['question']} | Antwort: {generate_faq_answer()}\n"
        content += "\n"

    # Forms (Examples)
    if page_path == "/kontakt":
        content += "## Forms (Beispiele)\n"
        content += generate_form_example("Angebot anfordern") + "\n\n"
        content += generate_form_example("Schnellkontakt") + "\n"
    content += "\n"

    return content

def process_sitemap(sitemap_path, output_dir):
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        sitemap = yaml.safe_load(f)

    os.makedirs(output_dir, exist_ok=True)

    def process_route_recursive(route):
        # Generate filename from path
        filename_key = route['path'].replace('/', '-').strip('-')
        if not filename_key: # Handle homepage
            filename_key = "home"
        filename = os.path.join(output_dir, f"{filename_key}.md")

        placeholder_content = generate_placeholder_content(route)
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(placeholder_content)
        print(f"Generated {filename}")

        if 'subpages' in route:
            for subpage in route['subpages']:
                process_route_recursive(subpage)

    for route in sitemap['routes']:
        process_route_recursive(route)

# Define paths
SITEMAP_PATH = "/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/sitemap.yaml"
OUTPUT_DIR = "/home/ubuntu/tech-hilfe-pro-nrw/content/placeholders/de"

# Process sitemap and generate placeholder files
process_sitemap(SITEMAP_PATH, OUTPUT_DIR)

