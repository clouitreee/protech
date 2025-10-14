import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for About Page (/ueber-uns)
 * 
 * Modules: MissionValues, FounderCard, TeamGrid, PartnerLogos, CTA
 */
export default function AboutWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Über uns (/ueber-uns)</h1>
      
      {/* MissionValues */}
      <section className="wireframe-section">
        <h2>MissionValues</h2>
        <Placeholder type="card" label="Mission: IT-Partner für KMU in NRW" />
        <Placeholder type="grid">
          <Placeholder type="card" label="Wert 1: Regionale Nähe" />
          <Placeholder type="card" label="Wert 2: Persönlicher Service" />
          <Placeholder type="card" label="Wert 3: Transparente Kommunikation" />
        </Placeholder>
      </section>

      {/* FounderCard */}
      <section className="wireframe-section">
        <h2>FounderCard</h2>
        <Placeholder type="card">
          <Placeholder type="image" label="Foto: Gründer" width="150px" height="150px" />
          <Placeholder type="heading" label="Name: Max Mustermann" />
          <Placeholder type="paragraph" label="Bio: Über 10 Jahre Erfahrung in der IT-Branche..." />
        </Placeholder>
      </section>

      {/* TeamGrid */}
      <section className="wireframe-section">
        <h2>TeamGrid</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Team Member 1: Name + Rolle + Foto" />
          <Placeholder type="card" label="Team Member 2: Name + Rolle + Foto" />
          <Placeholder type="card" label="Team Member 3: Name + Rolle + Foto" />
        </Placeholder>
      </section>

      {/* PartnerLogos */}
      <section className="wireframe-section">
        <h2>PartnerLogos</h2>
        <Placeholder type="grid">
          <Placeholder type="image" label="Logo: Microsoft" width="100px" height="50px" />
          <Placeholder type="image" label="Logo: Cisco" width="100px" height="50px" />
          <Placeholder type="image" label="Logo: Dell" width="100px" height="50px" />
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

