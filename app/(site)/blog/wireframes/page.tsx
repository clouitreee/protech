import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Blog Page (/blog)
 * 
 * Modules: PostList, CategoryFilter, SidebarCTA, CTA
 */
export default function BlogWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Wissenscenter / Blog (/blog)</h1>
      
      {/* CategoryFilter */}
      <section className="wireframe-section">
        <h2>CategoryFilter</h2>
        <Placeholder type="grid">
          <Placeholder type="button" label="Alle" />
          <Placeholder type="button" label="Cyber-Security" />
          <Placeholder type="button" label="Cloud-Migration" />
          <Placeholder type="button" label="IT-Trends" />
        </Placeholder>
      </section>

      {/* PostList */}
      <section className="wireframe-section">
        <h2>PostList</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Post 1: Titel + Teaser + Datum + Kategorie" />
          <Placeholder type="card" label="Post 2: Titel + Teaser + Datum + Kategorie" />
          <Placeholder type="card" label="Post 3: Titel + Teaser + Datum + Kategorie" />
          <Placeholder type="card" label="Post 4: Titel + Teaser + Datum + Kategorie" />
        </Placeholder>
      </section>

      {/* SidebarCTA */}
      <section className="wireframe-section">
        <h2>SidebarCTA</h2>
        <Placeholder type="card" label="Newsletter: Bleiben Sie auf dem Laufenden" />
        <Placeholder type="button" label="Jetzt abonnieren" />
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

