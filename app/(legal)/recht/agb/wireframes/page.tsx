import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for AGB Page (/recht/agb)
 * 
 * Modules: LegalText
 */
export default function AGBWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: AGB (/recht/agb)</h1>
      
      {/* LegalText */}
      <section className="wireframe-section">
        <h2>LegalText</h2>
        <Placeholder type="heading" label="H1: Allgemeine Geschäftsbedingungen" />
        <Placeholder type="paragraph" label="AGB für Geschäftskunden..." />
        <Placeholder type="paragraph" label="Vertragsabschluss, Leistungen, Zahlungsbedingungen, Haftung, etc." />
      </section>
    </div>
  );
}

