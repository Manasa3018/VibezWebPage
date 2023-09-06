import React from "react";
import { Col, Row } from "react-bootstrap";
import  mitafest from "../../Assets/Mitafest.jpeg"
import homefest from "../../Assets/homefest.jpeg"
import lounge from "../../Assets/lounge.jpeg"
import induction from "../../Assets/induction.jpeg"
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img className="induction" height={"200px"} width={"100px"} src={induction} />
        <figcaption>Induction for the 1st Years</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <img className="mitafest" height={"200px"} width={"300px"} src={mitafest} />
        <p>Mitafest'23</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <TbBrandGolang /> */}
        <img className="homefest" height={"200px"} width={"300px"} src={homefest} />
        <p>Homefest'23</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="lounge" height={"200px"} width={"300px"} src={lounge} />
        <p>Music Lounge</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiReact /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiSolidity /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiMongodb /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiNextdotjs /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiGit /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiFirebase /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiRedis /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiPostgresql /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiPython /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJava /> */}
      </Col>
    </Row>
  );
}

export default Techstack;
