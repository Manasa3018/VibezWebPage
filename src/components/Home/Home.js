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
                {/* <h2>The Official Music Club and Band of MIT</h2> */}
                
                <h2>Vibez, is the official music band of MIT, AU. <br />
                <br />
                    Formed in 2010 with the aim of entertaining and producing quality music and bringing out the talents of the students of MIT.</h2>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                
              </div>
              <br></br>
            <br></br>
            <br></br>
            <br></br>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                // className="myAvtar"
                style={{ paddingTop:"100px" }}
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
