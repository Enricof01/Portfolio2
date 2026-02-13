// export default function MeltingPoint() {
//   return (
//     <section className="project-section">
//       <div className="container">
//         <h1 className="project-heading">
//           Melting<span className="purple">Point</span>
//         </h1>

//         <p style={{ color: "white" }}>
//           Demo zur Schmelzpunktvorhersage organischer Verbindungen.
//         </p>
//       </div>
//     </section>
//   );
// }


export default function MeltingPoint() {
  return (
    <>

    <section className="project-section-intern">
      <div className="container">
        <h1 className="project-heading">
          Melting<span className="purple">Point</span>
        </h1>

        <p style={{ color: "white", marginBottom: 20 }}>
          Präsentation zum Projekt Schmelzpunktvorhersage.
        </p>

        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <iframe
            src="/Meltingpoint.pdf"
            width="100%"
            height="600"
            title="Melting Point Präsentation"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>

   <section class="anforderung-wrapper" id="schmelzpunkt-projekt">
  <h1>Projektbeschreibung</h1>
  <p class="subtitle">Machine Learning – Schmelzpunktvorhersage</p>

  <div class="card">
    <h2>🔬 Vorhersage von Schmelzpunkten organischer Moleküle mit Machine Learning</h2>

    <p>
      In diesem Projekt habe ich maschinelle Lernmodelle zur Vorhersage des Schmelzpunkts
      (<strong>T<sub>m</sub></strong>) organischer Moleküle auf Basis ihrer molekularen Struktur entwickelt.
      Der Schmelzpunkt ist eine komplexe physikalische Eigenschaft, die sowohl von funktionellen Gruppen
      als auch von globaler Molekülgeometrie und intermolekularen Wechselwirkungen abhängt.
    </p>
  </div>

  <div class="card">
    <h2>Verwendete Daten und Merkmale</h2>
    <p>
      Zur Modellierung wurden kanonische SMILES, Morgan-Fingerprints, physikochemische Deskriptoren sowie
      ausgewählte 3D-Strukturmerkmale eingesetzt. Die Daten wurden sorgfältig bereinigt und auf organische,
      metallfreie Verbindungen beschränkt, um eine konsistente Trainingsbasis zu gewährleisten.
    </p>
  </div>

  <div class="card">
    <h2>Modellierung und Bewertung</h2>
    <p>
      Als Modell kam unter anderem <strong>XGBoost</strong> zum Einsatz. Ergänzend wurden Zielwert-Transformationen
      und Gewichtungen verwendet, um hochschmelzende Moleküle besser abzubilden. Die Modellleistung wurde
      mithilfe des Mean Absolute Error (MAE) auf einem separaten Testdatensatz bewertet.
    </p>
  </div>

  <div class="card">
    <h2>Ergebnis</h2>
    <p>
      Das finale Modell erreichte einen MAE von etwa <strong>25&nbsp;K</strong>. Die Arbeit verdeutlicht sowohl
      das Potenzial als auch die Grenzen struktur-basierter QSAR-Modelle bei der Vorhersage komplexer
      thermophysikalischer Eigenschaften und zeigt, wie wichtig eine kritische Analyse von Datenqualität
      und Modellannahmen ist.
    </p>
  </div>
</section>



</>
 
  );
}

