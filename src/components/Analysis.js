


export default function Analysis(){


    return(
        <>
<section class="anforderung-wrapper">
  <h1>Anforderungsanalyse</h1>
  <p class="subtitle">Online-Kalendersystem für die Eishalle Reutlingen</p>

  <div class="card">
    <h2>1. Zielsetzung</h2>
    <p>
      Ziel dieses Projekts ist die Ablösung des bisher handschriftlich geführten Kalenders
      durch ein einheitliches Online-Kalendersystem, das ortsunabhängig gepflegt und
      zentral verwaltet werden kann.
    </p>
  </div>

  <div class="card">
    <h2>2. Ausgangssituation und Problemstellung</h2>
    <ul>
      <li>Terminverwaltung erfolgt aktuell analog und ist nicht ortsunabhängig verfügbar.</li>
      <li>Überschneidungen und Kapazitätsengpässe sind schwer erkennbar.</li>
      <li>Keine automatische Kapazitätsprüfung bei Schulklassenbuchungen.</li>
      <li>Keine effiziente Übersicht über freie Kapazitäten.</li>
    </ul>
  </div>

  <div class="card">
    <h2>3. Stakeholder und Zielgruppen</h2>
    <ul>
      <li><strong>Team der Eishalle:</strong> Verwaltung und Koordination aller Termine.</li>
      <li><strong>Schulklassen / Lehrkräfte:</strong> Planungssicherheit.</li>
      <li><strong>Vereine / Veranstalter:</strong> Einfache Terminabstimmung.</li>
    </ul>
  </div>

  <div class="card">
    <h2>4. Funktionale Anforderungen</h2>
    <ul>
      <li>Anlegen, Bearbeiten und Speichern von Terminen.</li>
      <li>Kapazitätsprüfung für Schulklassen.</li>
      <li>Filtersystem zur Anzeige freier Tage.</li>
      <li>Zentrale Speicherung in einer Datenbank.</li>
    </ul>
  </div>

  <div class="card">
    <h2>5. Datenschutz und Erweiterbarkeit</h2>
    <p>
      Optional können E-Mail-Adressen von Lehrkräften gespeichert werden,
      sofern dies datenschutzrechtlich zulässig ist, um zukünftige Kommunikation
      effizienter zu gestalten.
    </p>
  </div>

  <p class="stand">Stand: 23. Januar 2026</p>
</section>



        </>
    );
}