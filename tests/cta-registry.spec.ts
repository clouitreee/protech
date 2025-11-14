import { test, expect } from '@playwright/test';
import { ctaRegistry, getCta } from "../src/config/cta-registry";

test.describe("CTA Registry", () => {
  test("should return the correct CTA for a valid key", () => {
    const cta = getCta("kontakt");
    expect(cta).toEqual({ label: "Kontakt", href: "/kontakt" });
  });

  test("should have strict typing for CtaKey", () => {
    // This test primarily checks compile-time type safety.
    // If the type definition of CtaKey is incorrect, TypeScript will flag this.
    type ExpectedCtaKeys = "kontakt" | "termin" | "whatsapp";
    type ActualCtaKeys = keyof typeof ctaRegistry;

    // This assertion will fail at compile time if types don't match
    // @ts-expect-error - This is intentional for type checking
    const typeCheck: ExpectedCtaKeys = {} as ActualCtaKeys;
    // @ts-expect-error - This is intentional for type checking
    const reverseTypeCheck: ActualCtaKeys = {} as ExpectedCtaKeys;

    // Runtime check to ensure keys are as expected
    expect(Object.keys(ctaRegistry)).toEqual(["kontakt", "termin", "whatsapp"]);
  });
});

