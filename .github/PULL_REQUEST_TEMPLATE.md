```markdown
## Pull Request Template: Tech Hilfe Pro NRW Website

**Titel:** `feat(scope): kurze, prägnante Beschreibung` oder `fix(scope): kurze, prägnante Beschreibung`

**Beschreibung:**

Dieser Pull Request implementiert/korrigiert [kurze Beschreibung der Änderungen].

**Baut auf:**
- [Link zu vorherigem PR, falls zutreffend]

**Ziel dieses PRs:**

[Beschreibe das spezifische Ziel dieses Pull Requests im Kontext des Gesamtprojekts.]

## Checkliste (Definition of Done)

Bitte kreuze alle zutreffenden Punkte an, bevor der PR zur Überprüfung eingereicht wird.

### Code-Qualität & Standards
- [ ] **Lint/Typecheck:** `npm run lint` und `npm run typecheck` laufen fehlerfrei.
- [ ] **A11y-Linter:** `npm run a11y` läuft fehlerfrei (keine ARIA/Tabindex-Fehler).
- [ ] **Prettier:** `npm run format:check` zeigt keine Formatierungsfehler.
- [ ] **Keine Cloudflare-Artefakte/Secrets im Repo:** `wrangler.jsonc`, `migrations/` und Secrets sind **nicht** im Repository enthalten. Änderungen an Cloudflare-Konfigurationen sind in `docs/audit/cloudflare-config-removal.md` protokolliert.

### Funktionalität & Tests
- [ ] **Smoke Tests grün:** `npm run test:smoke` läuft erfolgreich für alle relevanten Endpunkte.
  - [ ] Health-Endpoint (`/functions/api/db/health`) liefert `200` mit JSON `{status:"ok",db:"connected",timestamp}` und Header `Cache-Control: no-store`.
  - [ ] Contact-Endpoint (`/api/contact`): Validierung, Honeypot, Time-trap, Rate-Limit, `reply_to` und konsistentes JSON-Errorformat sind implementiert und getestet.
  - [ ] Checkout-Endpoint (`/api/checkout`): `priceId`-Whitelist aktiv, `quantity` begrenzt, §19-Hinweis im `custom_text` vorhanden, **kein** `automatic_tax`.
- [ ] **Fehler- & Leerzustände:** Skeletons, Empty-States, Error-Banners für Kontakt und Checkout sind implementiert (falls relevant für diesen PR).

### Rechtliches & Compliance
- [ ] **§19-Hinweis:** Der §19 UStG-Hinweis ist unter **jedem Pricing-Modul** und im Stripe-Checkout als `custom_text` sichtbar.
- [ ] **LegalPricingNote:** `LegalPricingNote` ist unter allen Pricing-Sektionen korrekt platziert (falls relevant für diesen PR).
- [ ] **VAT-Terms:** Alle VAT-bezogenen Begriffe wurden aus dem Copy entfernt.

### Dokumentation
- [ ] **`progress.md` aktualisiert:** Der Fortschritt wurde in `progress.md` mit Datum/Uhrzeit (UTC), Branch, erledigten Aufgaben, Risiken und PR-Links dokumentiert.
- [ ] **Jede Änderung dokumentiert:** Jede relevante Code-Änderung ist durch eine klare Commit-Message mit **Grund** und ggf. in der PR-Beschreibung erläutert.
- [ ] **Keine Änderungen außerhalb des Scopes:** Es wurden keine Änderungen vorgenommen, die nicht explizit in der Aufgabenstellung dieses PRs genannt wurden.

### Reviewer-Bestätigung
- [ ] **Reviewer:** [Name des Reviewers] hat die Einhaltung der Standards bestätigt.

## Screenshots (falls zutreffend)

[Füge hier Screenshots oder GIFs hinzu, die die Änderungen visualisieren.]

## Deployment-Hinweise (falls zutreffend)

[Beschreibe hier spezifische Schritte, die für das Deployment dieses PRs erforderlich sind.]

```

