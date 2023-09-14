import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import logo from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "flex-start", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "flex-start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">VIBEZ</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "10px"}}
            className="about-img"
          >
            <img src={logo} alt="about" className="img-fluid" />
          </Col>

        </Row>
        <h1 className="project-heading">
          Our <strong className="purple">Gallery </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
