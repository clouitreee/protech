```md
# Hi-Fi Wireframe: Contact Page (Mobile First)

**Aus dem aktuellen Stand folgend:** Wir finalisieren die Hi-Fi-Wireframes (mobil zuerst) für die Seite 'Kontakt'.
**Baut auf:** Abgestimmte Modulstruktur aus `wireframe-map.yaml`, Platzhaltertexte, CTA-Registry, Hygiene-PR.
**Ziel dieses Schritts:** Abnahmefähige Wireframes für die Seite 'Kontakt'.

## Page: Contact (`/kontakt`)

### Layout: `default`

### Modules:

#### 1. `ContactIntro`
- **Beschreibung:** Einleitungstext für die Kontaktseite. Mobile-first: Kurze Überschrift und ein bis zwei Absätze, die den Zweck der Seite erklären und zur Kontaktaufnahme ermutigen.
- **Inhalt:** Überschrift: "Kontaktieren Sie uns", Text: "Wir sind für Sie da, um Ihre Fragen zu beantworten und Ihnen bei Ihren IT-Anliegen zu helfen. Wählen Sie den für Sie passenden Kontaktweg."

#### 2. `ContactCards`
- **Beschreibung:** Präsentation der verschiedenen Kontaktmöglichkeiten (Telefon, E-Mail, WhatsApp) als interaktive Karten oder Blöcke. Mobile-first: Karten untereinander gestapelt, mit Icons, Titeln und den jeweiligen Kontaktdaten. Klickbare Elemente für direkte Anrufe/E-Mails/WhatsApp-Chats.
- **Inhalt:** Platzhalter für 3 Kontaktkarten (z.B. "Telefon: +49 123 456789", "E-Mail: info@example.de", "WhatsApp: Chat starten").

#### 3. `ContactForm`
- **Beschreibung:** Ein Kontaktformular mit Feldern für Name, E-Mail, Nachricht und einer obligatorischen DSGVO-Checkbox. Mobile-first: Formularfelder untereinander, gut lesbar und mit klaren Labels. Die Checkbox sollte prominent platziert sein.
- **Inhalt:** Felder: "Name", "E-Mail", "Telefon (optional)", "Firma (optional)", "Ihre Nachricht", Checkbox: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.", Button: "Nachricht senden".
- **Interaktionen:** Formularvalidierung, Fokus-States für Felder, deutlicher Submit-Button.

#### 4. `OfficeHours`
- **Beschreibung:** Anzeige der Öffnungszeiten und Erreichbarkeit. Mobile-first: Einfache Liste oder Tabelle der Öffnungszeiten.
- **Inhalt:** Platzhalter für Öffnungszeiten (z.B. "Mo-Fr: 9:00 - 17:00 Uhr").

#### 5. `WhatsAppQuickCTA`
- **Beschreibung:** Ein direkter Call-to-Action für WhatsApp-Kontakt, oft als schwebender Button oder prominenter Block. Mobile-first: Ein klarer Button mit WhatsApp-Logo und Text "WhatsApp Chat starten".
- **Inhalt:** CTA "Direkt per WhatsApp chatten".

#### 6. `MapEmbed`
- **Beschreibung:** Eine eingebettete Karte (z.B. Google Maps), die den Standort des Unternehmens anzeigt. Mobile-first: Karte sollte responsiv sein und den verfügbaren Platz optimal nutzen.
- **Inhalt:** Platzhalter für eine interaktive Karte mit dem Unternehmensstandort.

#### 7. `ComplianceNote`
- **Beschreibung:** Ein Hinweis zur DSGVO-Konformität oder anderen rechtlichen Aspekten im Zusammenhang mit der Kontaktaufnahme. Mobile-first: Kurzer Textblock mit Link zur Datenschutzerklärung.
- **Inhalt:** "Ihre Daten werden gemäß unserer Datenschutzerklärung verarbeitet. [Link zur Datenschutzerklärung]".

```

