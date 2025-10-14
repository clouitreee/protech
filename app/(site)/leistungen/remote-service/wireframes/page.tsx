import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Remote Service Page (/leistungen/remote-service)
 * 
 * Modules: HowItWorks3Steps, ProblemTypesList, SecurityAssurance, FAQ, CTA
 */
export default function RemoteServiceWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Remote-Service (/leistungen/remote-service)</h1>
      
      {/* HowItWorks3Steps */}
      <section className="wireframe-section">
        <h2>HowItWorks3Steps</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Schritt 1: Fernwartung starten" />
          <Placeholder type="card" label="Schritt 2: Problem schildern" />
          <Placeholder type="card" label="Schritt 3: Lösung erhalten" />
        </Placeholder>
      </section>

      {/* ProblemTypesList */}
      <section className="wireframe-section">
        <h2>ProblemTypesList</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Software-Probleme: Updates, Installationen, Konfigurationen" />
          <Placeholder type="card" label="E-Mail & Office: Outlook, Teams, OneDrive" />
          <Placeholder type="card" label="Benutzer-Verwaltung: Zugänge, Berechtigungen" />
        </Placeholder>
      </section>

      {/* SecurityAssurance */}
      <section className="wireframe-section">
        <h2>SecurityAssurance</h2>
        <Placeholder type="card" label="Sicherheit: Verschlüsselte Verbindung, Kontrolle behalten, DSGVO-konform" />
      </section>

      {/* FAQ */}
      <section className="wireframe-section">
        <h2>FAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: Wie funktioniert Remote-Support?" />
          <Placeholder type="text" label="FAQ 2: Ist Remote-Support sicher?" />
          <Placeholder type="text" label="FAQ 3: Welche Probleme können remote gelöst werden?" />
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

