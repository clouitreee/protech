import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for References Page (/referenzen)
 * 
 * Modules: LogoStrip, CaseSnippets, TestimonialsGrid, CTA
 */
export default function ReferencesWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Referenzen / Kundenstimmen (/referenzen)</h1>
      
      {/* LogoStrip */}
      <section className="wireframe-section">
        <h2>LogoStrip</h2>
        <Placeholder type="grid">
          <Placeholder type="image" label="Logo: Kunde 1" width="100px" height="50px" />
          <Placeholder type="image" label="Logo: Kunde 2" width="100px" height="50px" />
          <Placeholder type="image" label="Logo: Kunde 3" width="100px" height="50px" />
          <Placeholder type="image" label="Logo: Kunde 4" width="100px" height="50px" />
        </Placeholder>
      </section>

      {/* CaseSnippets */}
      <section className="wireframe-section">
        <h2>CaseSnippets</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Case 1: Problem → Lösung → Ergebnis" />
          <Placeholder type="card" label="Case 2: Problem → Lösung → Ergebnis" />
          <Placeholder type="card" label="Case 3: Problem → Lösung → Ergebnis" />
        </Placeholder>
      </section>

      {/* TestimonialsGrid */}
      <section className="wireframe-section">
        <h2>TestimonialsGrid</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Testimonial 1: Quote + Author + Company + Rating" />
          <Placeholder type="card" label="Testimonial 2: Quote + Author + Company + Rating" />
          <Placeholder type="card" label="Testimonial 3: Quote + Author + Company + Rating" />
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

