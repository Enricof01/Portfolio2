export default function Analysis() {
  return (
    <>
      <section class="anforderung-wrapper">
        <h1>Projektbeschreibung</h1>
        <p class="subtitle">
          Verwaltung und Planung von Banner-Standorten mit OpenStreetMap 
        </p>  <p>Hinweis:  
Die Routenberechnung erfolgt in dieser Demo vereinfacht clientseitig.  
In der ursprünglichen Version wurde hierfür ein Backend mit OSRM-Anbindung verwendet.</p>

        <div class="card">
          <h2>1. Zielsetzung</h2>
          <p>
            Ziel dieses Projekts ist die digitale Erfassung und Verwaltung von
            Banner-Standorten, um Planung, Wartung und Routen effizienter und
            übersichtlicher zu gestalten.
          </p>
        </div>

        <div class="card">
          <h2>2. Funktionsumfang</h2>
          <ul>
            <li>Erstellen und Speichern von Standorten direkt auf der Karte.</li>
            <li>Bearbeiten von Status und Notizen zu jedem Banner.</li>
            <li>Auswahl mehrerer Standorte zur Routenplanung.</li>
            <li>Visualisierung der Route sowie Export nach Google Maps.</li>
          </ul>
        </div>

        <div class="card">
          <h2>3. Technische Umsetzung</h2>
          <ul>
            <li>Interaktive Kartenansicht mit OpenStreetMap (Leaflet).</li>
            <li>Frontend mit React und TypeScript.</li>
            <li>Speicherung der Daten für die Demo im Browser (localStorage).</li>
            <li>Deployment über Vercel.</li>
          </ul>
        </div>

        <div class="card">
          <h2>4. Nutzen</h2>
          <p>
            Die Anwendung ermöglicht eine strukturierte Planung von Banner-Touren
            und verbessert die Übersicht über Standorte und deren aktuellen
            Zustand erheblich.
          </p>
        </div>

        <p class="stand">Stand: März 2026</p>
      </section>
    </>
  );
}