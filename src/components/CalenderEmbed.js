import Button from "react-bootstrap/Button";
import Analysis from "./Analysis";
export default function CalenderEmbed() {



return (
  <>
    <section className="project-section-intern">
      <div className="container">
        <h1 className="project-heading">
         Banner Management & Routing System
        </h1>



                  <Button
                    variant="primary"
                    href={"https://openbannerdemo1-fmx83pgl5-enricof01s-projects.vercel.app/"}
                    // target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    
                    {"Demo"}
                  </Button>

        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
{/* <div style={{ width: "100%", height: "80vh" }}>
      <iframe
        src="https://openbannerdemo1-fmx83pgl5-enricof01s-projects.vercel.app/"
        title="Kalender"
        style={{
          width: "100%",
          height: "80%",
          border: 0,
          borderRadius: 12,
        }}
        allow="geolocation"
      />
    </div> */}
        </div>
      </div>
      
    </section>
          <section id = "Anforderungen" className="project-section-intern">
            <Analysis/>
          </section>
        

    </>
  );
}