import Button from "react-bootstrap/Button";
import VocabTrainerDesc from "./VocabTrainerDesc"; 
export default function VocabTrainerEmbed() {



return (
  <>
    <section className="project-section-intern">
      <div className="container">
        <h1 className="project-heading">
         Einfache Vokabeltrainerapp
        </h1>



        <Button
            variant="primary"
            href={"#Anforderungen"}
                    // target="_blank"
            style={{ marginLeft: "10px", marginBottom: "10px" }}
            >
                    
            {"Beschreibung"}
        </Button>

        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
<div style={{ width: "100%", height: "80vh" }}>
      <iframe
        src="https://vocabtrainer-rosy.vercel.app/"
        title="Kalender"
        style={{
          width: "100%",
          height: "80%",
          border: 0,
          borderRadius: 12,
        }}
      />
    </div>
        </div>
      </div>
      
    </section>
          <section id = "Anforderungen" className="project-section-intern">
            <VocabTrainerDesc/>
          </section>
        

    </>
  );
}