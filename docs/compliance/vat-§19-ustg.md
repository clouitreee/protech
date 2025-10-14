# Compliance: §19 UStG (Small Business Regulation)

This document details the implementation and placement of the §19 UStG notice for the Tech Hilfe Pro NRW website, ensuring compliance with the German small business regulation.

## 1. Unified Pricing Note

The following unified pricing note is used across the website:

> Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.

This text explicitly informs customers that no VAT is charged or displayed, as the business operates under the small business regulation according to §19 UStG.

## 2. Implementation Locations

The §19 UStG notice is integrated into the following areas of the website:

### 2.1. Stripe Checkout Session

When a customer proceeds to checkout via Stripe, the notice is displayed directly within the Stripe Checkout interface using the `custom_text.submit.message` parameter. This ensures that the customer is informed before completing the purchase.

**File:** `app/api/checkout/route.ts`

```typescript
// Example from app/api/checkout/route.ts
const session = await stripe.checkout.sessions.create({
  // ... other session parameters
  custom_text: {
    submit: {
      message: 'Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.',
    },
  },
  // Do NOT enable automatic_tax as per §19 UStG
  // automatic_tax: { enabled: false },
});
```

### 2.2. LegalPricingNote Module

A dedicated `LegalPricingNote` module is used to display the notice prominently below pricing sections on relevant pages. This module ensures consistent presentation and easy management of the notice.

**Files:**
- `content/architecture/module-intents.yaml` (Module definition)
- `content/wireframes/wireframe-map.yaml` (Integration into page wireframes)

### 2.3. Content Placeholders

The unified pricing note is also included in the auto-generated German placeholder texts for pages where pricing information is likely to appear. This ensures that content creators are aware of the requirement and can integrate it into the final content.

**Files:** All `content/placeholders/de/*.md` files, especially those related to services and pricing.

## 3. Absence of Tax Terms in CTAs and Copy

As part of the compliance sweep, all Call-to-Action (CTA) texts and general copy have been reviewed and adjusted to ensure they do not contain any explicit tax-related terms (e.g., "inkl. MwSt.", "zzgl. MwSt."). This prevents potential confusion and maintains consistency with the §19 UStG regulation.
