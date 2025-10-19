```md
# Cloudflare Configuration Removal from Repository

**Aus dem aktuellen Stand folgend:** Wir haben die Cloudflare-spezifischen Konfigurationsdateien aus dem Repository entfernt, um die "Cloudflare-Policy" einzuhalten, die besagt, dass Bindings, Migrationen und Secrets ausschließlich im Cloudflare Dashboard verwaltet werden.

**Baut auf:** Vorherige Implementierung von Cloudflare Pages + D1, Stripe und Resend.

**Ziel dieses Schritts:** Sicherstellen, dass keine Cloudflare-spezifischen Konfigurationen im Git-Repository gespeichert sind, um die Sicherheit zu erhöhen und die Verwaltung zu zentralisieren.

## Entfernte Dateien und Verzeichnisse

Die folgenden Dateien und Verzeichnisse wurden aus dem Repository entfernt:

-   `wrangler.jsonc`: Diese Datei enthielt die Konfiguration für Cloudflare Wrangler, einschließlich D1-Bindings und Pages-Build-Einstellungen. Diese Einstellungen werden nun direkt im Cloudflare Dashboard konfiguriert.
-   `migrations/`: Das gesamte Verzeichnis `migrations/` wurde entfernt. D1-Migrationen werden nun über das Cloudflare Dashboard oder über `wrangler` CLI-Befehle, die nicht Teil des Repositorys sind, verwaltet. Das Schema wird als Referenz in `docs/d1/schema.sql` beibehalten.

## Begründung der Cloudflare-Policy

Die Entscheidung, Cloudflare-Konfigurationen aus dem Repository zu entfernen, basiert auf den folgenden Prinzipien:

1.  **Sicherheit:** Vermeidung der Speicherung sensibler Informationen (z.B. API-Keys, Secret-Bindings) im Git-Verlauf, selbst wenn sie in `.env.example` referenziert werden.
2.  **Zentralisierte Verwaltung:** Alle Cloudflare-spezifischen Einstellungen (D1-Bindings, Umgebungsvariablen, Secrets, Pages-Build-Konfigurationen) werden zentral im Cloudflare Dashboard verwaltet. Dies reduziert die Komplexität und Fehleranfälligkeit.
3.  **Trennung von Konfiguration und Code:** Das Repository konzentriert sich auf den Anwendungscode, während die Infrastrukturkonfiguration in der Cloudflare-Plattform liegt.

## Nachweis im Cloudflare Dashboard

Die Konfigurationen für Cloudflare Pages (einschließlich Build-Einstellungen und Environment Variables) und D1-Bindings müssen im Cloudflare Dashboard für das Projekt `protech` eingerichtet werden. Dies umfasst:

-   **Pages Project Settings:**
    -   Build command: `npm run build`
    -   Build output directory: `.next`
    -   Environment variables (z.B. `STRIPE_SECRET_KEY`, `RESEND_API_KEY`, `APP_URL`, `MAIL_FROM`, `LOG_LEVEL`, `ENABLE_CONTACT_RATE_LIMIT`, `ALLOWED_ORIGINS`).
    -   D1 Database Binding: Ein Binding namens `DB` muss auf die D1-Datenbank `protech-db` zeigen.

-   **D1 Database:**
    -   Die D1-Datenbank `protech-db` muss existieren und kann über das Dashboard verwaltet werden. Migrationen können manuell oder über die `wrangler` CLI außerhalb des Repository-Workflows angewendet werden.

Dieses Dokument dient als Nachweis und Leitfaden für die korrekte Konfiguration der Cloudflare-Ressourcen außerhalb des Git-Repositorys.
```




## Summary of Removed Configurations (Continued)

### 2. Deprecated `export const config` in Next.js API Routes

**Description:** The `export const config = { api: { bodyParser: false } }` was a Pages API Route specific configuration used to disable body parsing, particularly for Stripe webhooks. This has been deprecated in the App Router.

**Action Taken:**
- Removed `export const config` from `app/api/stripe/webhook/route.ts`.
- Migrated to explicit Node.js runtime (`export const runtime = "nodejs"`) and raw body reading (`await req.text()`) for Stripe webhooks.

**Rationale:** The App Router in Next.js handles body parsing differently, and `req.json()` should not be used for webhook routes where raw body access is critical for signature verification. Explicitly defining the runtime and reading the raw body ensures compatibility and security.

## Verification (Continued)

- All instances of `export const config` in API routes have been removed.
- Stripe webhooks are confirmed to be processing raw bodies correctly, as verified by dedicated tests.

