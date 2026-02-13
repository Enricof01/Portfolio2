import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import mol from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ein paar Projekte, an denen ich kürzlich gearbeitet habe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Kaggle Melting Point"
              description="Vorhersage des Schmelzpunktes von organischen Molekülen mit Hilfe von Machine Learning"
              ghLink="https://github.com/Enricof01/Melting_point_project"
              demoLink="/meltingpoint"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Kalendersystem (in Bearbeitung)"
              description="Online Kalendersystem für die Eishalle Reutlingen"
              ghLink="https://github.com/Enricof01/Calendar"
              demoLink="/calendar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vokabeltrainer-App"
              description="Simple Vokabeltrainerapp mit React, TS, Prisma und SQLLite"
              ghLink="https://github.com/Enricof01/vocabtrainer"
              demoLink="/vocab"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
