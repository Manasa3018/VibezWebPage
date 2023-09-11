import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/solosinging.jpg";
import emotion from "../../Assets/Projects/band.png";
import editor from "../../Assets/Projects/soloinstrumental.jpg";
import chatify from "../../Assets/Projects/karaoke.webp";
import suicide from "../../Assets/Projects/composer.jpg";
import bitsOfCode from "../../Assets/Projects/composer.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">ACCENTS'23</strong><br /></h1>
        <h2 className="purple">EVENTS & CONTESTS</h2>
        
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sing for the moment"
              description="Solo Singing Contest - This is a call for all the talented solo singers! Join us in 'Sing for the moment' to shine in the spotlight and let your voice captivate the world! Take the Stage and Unleash your Voice!"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Wrapped Around your fingers"
              description="Solo Instrumental- Platform for all talented instrumental maestros for displaying their extaordinary talents. Unleash the Magic of your instrument and create unforgettable music memories!"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FreeBird"
              description="Battle of Bands- CLash of the Chords! Calling all rockstars and music afficionados for an epic clash of Music Titans! Showcase your raw talent and originality through this opportunity and make your mark on the music sense"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="Karaoke Party"
              description="A Private Karaoke Party experience with your gang of friends!"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={true}
              title="Composer in an Hour?"
              description="Ever wondered how a composer's mind works when given a scene? Know it from this live demonstation by {Artist name}!"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
