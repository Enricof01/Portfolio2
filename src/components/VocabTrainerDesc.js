export default function VocabTrainerDesc(){

    return(
        <>
<section class="anforderung-wrapper">
  <h1>Beschreibung</h1>
  <p class="subtitle">Interaktiver Vokabeltrainer mit Lernphasen-System</p>

  <div class="card">
    <h2>1. Zielsetzung</h2>
    <p>
      Ziel dieses Projekts ist die Entwicklung einer lokalen Vokabeltraineranwendung,
      die Nutzern ein strukturiertes, nachhaltiges Lernen von Vokabeln ermöglicht.
      Der Fokus liegt auf Wiederholungslogik, Benutzerfreundlichkeit und einer
      vollständig im Browser lauffähigen Lösung ohne Serverabhängigkeit.
    </p>
  </div>

  <div class="card">
    <h2>2. Ausgangssituation und Problemstellung</h2>
    <ul>
      <li>Vokabeln werden oft unstrukturiert gelernt und schnell wieder vergessen.</li>
      <li>Viele Lernsysteme erfordern Accounts oder Serververbindungen.</li>
      <li>Keine visuelle Rückmeldung über Lernfortschritt.</li>
      <li>Keine flexible Organisation der Vokabeln nach Themen oder Kategorien.</li>
    </ul>
  </div>

  <div class="card">
    <h2>3. Zielgruppe</h2>
    <ul>
      <li><strong>Schüler & Studierende:</strong> Systematisches Lernen von Fremdsprachen.</li>
      <li><strong>Selbstlerner:</strong> Individuelle Wortlisten ohne Registrierung.</li>
      <li><strong>Sprachinteressierte:</strong> Wiederholung und Festigung vorhandener Kenntnisse.</li>
    </ul>
  </div>

  <div class="card">
    <h2>4. Funktionale Anforderungen</h2>
    <ul>
      <li>Anlegen, Bearbeiten und Löschen eigener Vokabeln.</li>
      <li>Kategorisierung von Vokabeln nach Themenbereichen.</li>
      <li>Interaktive Abfrage mit direkter Rückmeldung (richtig / falsch).</li>
      <li>Phasenbasiertes Lernsystem (Spaced Repetition Logik).</li>
      <li>Visuelle Fortschrittsanzeige des aktuellen Lernstatus.</li>
      <li>Filterfunktionen nach Kategorie und Lernphase.</li>
      <li>Pagination für große Vokabellisten.</li>
    </ul>
  </div>

  <div class="card">
    <h2>5. Technische Umsetzung</h2>
    <ul>
      <li>Frontend mit React und TypeScript.</li>
      <li>Material UI für modernes Interface.</li>
      <li>Datenhaltung in einer SQLLite Datenbank.</li>

    </ul>
  </div>



  <p class="stand">Stand: 9. Februar 2026</p>
</section>
        </>
    );
}
