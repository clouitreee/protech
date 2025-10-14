import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Impressum Page (/recht/impressum)
 * 
 * Modules: LegalText
 */
export default function ImpressumWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Impressum (/recht/impressum)</h1>
      
      {/* LegalText */}
      <section className="wireframe-section">
        <h2>LegalText</h2>
        <Placeholder type="heading" label="H1: Impressum" />
        <Placeholder type="paragraph" label="Angaben gemäß § 5 TMG..." />
        <Placeholder type="paragraph" label="Firmenname, Adresse, Kontaktdaten, Geschäftsführer, Registereintrag, etc." />
      </section>
    </div>
  );
}

