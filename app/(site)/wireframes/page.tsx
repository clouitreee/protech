import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Homepage (/)
 * 
 * Modules: HeroPrimary, USPGrid, ServiceTeaserGrid, PricingTeaser, Testimonials, MiniFAQ, FinalCTA
 */
export default function HomeWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Homepage (/)</h1>
      
      {/* HeroPrimary */}
      <section className="wireframe-section">
        <h2>HeroPrimary</h2>
        <Placeholder type="heading" label="H1: Haupt-Nutzenversprechen" />
        <Placeholder type="paragraph" label="Subline: Unterstützender Text, 1-2 Sätze" />
        <Placeholder type="button" label="CTA Primary: Kostenloses Erstgespräch" />
        <Placeholder type="button" label="CTA Secondary: Mehr erfahren" />
      </section>

      {/* USPGrid */}
      <section className="wireframe-section">
        <h2>USPGrid</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="USP 1: Icon + Label + Description" />
          <Placeholder type="card" label="USP 2: Icon + Label + Description" />
          <Placeholder type="card" label="USP 3: Icon + Label + Description" />
        </Placeholder>
      </section>

      {/* ServiceTeaserGrid */}
      <section className="wireframe-section">
        <h2>ServiceTeaserGrid</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Service 1: Managed Services" />
          <Placeholder type="card" label="Service 2: IT-Support" />
          <Placeholder type="card" label="Service 3: Vor-Ort-Service" />
          <Placeholder type="card" label="Service 4: Remote-Service" />
        </Placeholder>
      </section>

      {/* PricingTeaser */}
      <section className="wireframe-section">
        <h2>PricingTeaser</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Paket A: Basis" />
          <Placeholder type="card" label="Paket B: Professional" />
          <Placeholder type="card" label="Paket C: Premium" />
        </Placeholder>
      </section>

      {/* Testimonials */}
      <section className="wireframe-section">
        <h2>Testimonials</h2>
        <Placeholder type="card" label="Testimonial 1: Quote + Author + Company" />
        <Placeholder type="card" label="Testimonial 2: Quote + Author + Company" />
        <Placeholder type="card" label="Testimonial 3: Quote + Author + Company" />
      </section>

      {/* MiniFAQ */}
      <section className="wireframe-section">
        <h2>MiniFAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: Wie schnell können Sie bei einem IT-Notfall helfen?" />
          <Placeholder type="text" label="FAQ 2: Welche Unternehmen betreuen Sie hauptsächlich?" />
          <Placeholder type="text" label="FAQ 3: Was kostet ein Erstgespräch?" />
        </Placeholder>
      </section>

      {/* FinalCTA */}
      <section className="wireframe-section">
        <h2>FinalCTA</h2>
        <Placeholder type="heading" label="H2: Jetzt Erstgespräch vereinbaren" />
        <Placeholder type="paragraph" label="Beschreibung: Wir freuen uns auf Ihre Anfrage" />
        <Placeholder type="button" label="CTA: Kontakt aufnehmen" />
      </section>
    </div>
  );
}

