import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Managed Services Page (/leistungen/managed-services)
 * 
 * Modules: BenefitsList, PricingTable3, SLAHighlights, SecurityNote, FAQ, CTA
 */
export default function ManagedServicesWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Managed IT-Services (/leistungen/managed-services)</h1>
      
      {/* BenefitsList */}
      <section className="wireframe-section">
        <h2>BenefitsList</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="Vorteil 1: Proaktive Wartung statt reaktive Feuerlöschung" />
          <Placeholder type="text" label="Vorteil 2: Planbare Kosten durch monatliches Abo-Modell" />
          <Placeholder type="text" label="Vorteil 3: Höhere Verfügbarkeit und weniger Ausfallzeiten" />
        </Placeholder>
      </section>

      {/* PricingTable3 */}
      <section className="wireframe-section">
        <h2>PricingTable3</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Paket A: Basis - Monitoring & Updates" />
          <Placeholder type="card" label="Paket B: Professional - inkl. Support" />
          <Placeholder type="card" label="Paket C: Premium - Full Service mit SLA" />
        </Placeholder>
      </section>

      {/* SLAHighlights */}
      <section className="wireframe-section">
        <h2>SLAHighlights</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Reaktionszeit: < 4 Stunden" />
          <Placeholder type="card" label="Monitoring: 24/7" />
          <Placeholder type="card" label="Ticketportal: Online-Zugang" />
        </Placeholder>
      </section>

      {/* SecurityNote */}
      <section className="wireframe-section">
        <h2>SecurityNote</h2>
        <Placeholder type="card" label="Sicherheitshinweis: DSGVO-konform, Updates, Backups" />
      </section>

      {/* FAQ */}
      <section className="wireframe-section">
        <h2>FAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: Was ist der Unterschied zwischen Managed Services und normalem IT-Support?" />
          <Placeholder type="text" label="FAQ 2: Welche Managed Service Pakete bieten Sie an?" />
          <Placeholder type="text" label="FAQ 3: Ist ein langfristiger Vertrag erforderlich?" />
        </Placeholder>
      </section>

      {/* CTA */}
      <section className="wireframe-section">
        <h2>CTA</h2>
        <Placeholder type="button" label="Erstgespräch vereinbaren" />
        <Placeholder type="button" label="Kontakt aufnehmen" />
      </section>
    </div>
  );
}

