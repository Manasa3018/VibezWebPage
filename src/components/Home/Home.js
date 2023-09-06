import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-img.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We' re
                <strong className="main-name"> VIBEZ</strong><br></br>
                <br></br>
                <h2>The Official Music Club and Band of MIT</h2>
                <h1></h1><i class='far fa-hand-point-down'></i>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                
              </div>
              <br></br>
            <br></br>
            <br></br>
            <br></br>
            </Col>
            <br></br>
            <br></br>
            <br></br>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
