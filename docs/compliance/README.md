# Compliance Documentation: §19 UStG Sweep

## Justification

This document outlines the compliance sweep performed to align the website content with §19 UStG (Kleinunternehmerregelung) for Tech Hilfe Pro NRW. As a small business, Tech Hilfe Pro NRW does not charge or display Umsatzsteuer (VAT). Therefore, all mentions of VAT-related terms (`MwSt`, `Mehrwertsteuer`, `USt`, `Umsatzsteuer`, `inkl.`, `zzgl.`, `VAT`, `IVA`, etc.) have been removed or replaced to ensure legal accuracy and clarity for customers.

Additionally, a unified legal pricing note has been introduced to explicitly state the company's status under §19 UStG on all relevant pages.

## Affected Files and Changes

The following files were identified as containing VAT-related terms and have been modified. For detailed changes, please refer to the `vat-removal-report.md` and the Pull Request diff.

**Files with direct VAT term removals:**

- `app/(legal)/recht/impressum/page.tsx` (Removed `Umsatzsteuer-ID` from comment)
- `app/(site)/leistungen/managed-services/wireframes/page.tsx` (Replaced `inkl. Support` with `mit Support`)
- `content/architecture/sitemap.yaml` (Replaced `inkl. Verschlüsselung` with `einschließlich Verschlüsselung` and `inkl. Support` with `mit Support`)

**Files updated with `LegalPricingNote`:**

- `content/placeholders/de/recht-impressum.md`
- `content/placeholders/de/recht-datenschutz.md`
- `content/placeholders/de/recht-agb.md`
- `content/placeholders/de/recht-widerruf.md`

## Diff Examples

Below are examples of changes made to illustrate the compliance adjustments.

### Example 1: `app/(legal)/recht/impressum/page.tsx`

```diff
--- a/app/(legal)/recht/impressum/page.tsx
+++ b/app/(legal)/recht/impressum/page.tsx
@@ -40,7 +40,7 @@
 
           {/* TODO: Add remaining legal sections:
             - Vertretungsberechtigte
             - Registereintrag
-            - -ID
+            
             - Verantwortlich für den Inhalt
             - Streitschlichtung
             - Haftungsausschluss
```

### Example 2: `app/(site)/leistungen/managed-services/wireframes/page.tsx`

```diff
--- a/app/(site)/leistungen/managed-services/wireframes/page.tsx
+++ b/app/(site)/leistungen/managed-services/wireframes/page.tsx
@@ -26,7 +26,7 @@
         <h2>PricingTable3</h2>
         <Placeholder type="grid">
           <Placeholder type="card" label="Paket A: Basis - Monitoring & Updates" />
-          <Placeholder type="card" label="Paket B: Professional - inkl. Support" />
+          <Placeholder type="card" label="Paket B: Professional - mit Support" />
           <Placeholder type="card" label="Paket C: Premium - Full Service mit SLA" />
         </Placeholder>
       </section>
```

### Example 3: `content/architecture/sitemap.yaml`

```diff
--- a/content/architecture/sitemap.yaml
+++ b/content/architecture/sitemap.yaml
@@ -56,7 +56,7 @@
           - question: "Was ist der Unterschied zwischen Managed Services und normalem IT-Support?"
             answer: "Managed Services bedeutet proaktive Betreuung im Abo-Modell, während normaler Support reaktiv bei Problemen hilft."
           - question: "Welche Managed Service Pakete bieten Sie an?"
-            answer: "Wir bieten drei Pakete: Basis (Monitoring & Updates), Professional (inkl. Support) und Premium (Full Service mit SLA)."
+            answer: "Wir bieten drei Pakete: Basis (Monitoring & Updates), Professional (mit Support) und Premium (Full Service mit SLA)."
           - question: "Ist ein langfristiger Vertrag erforderlich?"
             answer: "Unsere Managed Services haben flexible Laufzeiten ab 12 Monaten mit fairer Kündigungsfrist."
           - question: "Was ist in den monatlichen Kosten enthalten?"
@@ -194,7 +194,7 @@
           - question: "Arbeiten Sie auch mit bestehenden IT-Dienstleistern zusammen?"
             answer: "Ja, wir können als Ergänzung zu Ihrem bestehenden IT-Team oder als vollständiger Ersatz fungieren."
           - question: "Welche Sicherheitsstandards setzen Sie um?"
-            answer: "Wir arbeiten nach aktuellen IT-Sicherheitsstandards inkl. Verschlüsselung, Backup-Strategien und Compliance-Anforderungen."
+            answer: "Wir arbeiten nach aktuellen IT-Sicherheitsstandards einschließlich Verschlüsselung, Backup-Strategien und Compliance-Anforderungen."
 
   - key: contact
     path: "/kontakt"
```

### Example 4: `content/placeholders/de/recht-impressum.md` (Addition of Legal Pricing Note)

```diff
--- a/content/placeholders/de/recht-impressum.md
+++ b/content/placeholders/de/recht-impressum.md
@@ -18,3 +18,7 @@
 Primary: [Kostenloses Erstgespräch](/kontakt#termin)
 Secondary: [Leistungen ansehen](/leistungen)
 Emergency: [Notfall melden](tel:+4915565029989)
+
+## Legal Pricing Note
+Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.
```

