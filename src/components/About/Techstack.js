import React from "react";
import { Col, Row } from "react-bootstrap";
import mitafest from "../../Assets/Mitafest.jpeg";
import homefest from "../../Assets/homefest.jpeg";
import lounge from "../../Assets/lounge.jpeg";
import induction from "../../Assets/induction.jpeg";
import "./Techstack.css"; // Import the CSS file for styling

function Techstack() {
  return (
    // <Row className="techstack-container">
    //   <Col xs={4} md={2} className="tech-icons">
    //     <div className="image-container">
    //       <img className="tech-image" src={induction} alt="Induction" />
    //       <div className="overlay">
    //         <figcaption>Induction for the 1st Years</figcaption>
    //       </div>
    //     </div>
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <div className="image-container">
    //       <img className="tech-image" src={mitafest} alt="Mitafest" />
    //       <div className="overlay">
    //         <p>Mitafest'23</p>
    //       </div>
    //     </div>
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <div className="image-container">
    //       <img className="tech-image" src={homefest} alt="Homefest" />
    //       <div className="overlay">
    //         <p>Homefest'23</p>
    //       </div>
    //     </div>
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <div className="image-container">
    //       <img className="tech-image" src={lounge} alt="Music Lounge" />
    //       <div className="overlay">
    //         <p>Music Lounge</p>
    //       </div>
    //     </div>
    //   </Col>
    //   {/* Other Col components for icons */}
    // </Row>
    <div className="container">
        <div class="container">

<div class="gallery-container h-4">
  <div class="gallery-item">
    <div class="image">
      <img src={induction} alt="nature"/>
    </div>
    <div class="text">Induction for first years</div>
  </div>
</div>

<div class="gallery-container w-2">
  <div class="gallery-item">
    <div class="image">
      <img src={mitafest} alt="people"/>
    </div>
    <div class="text">Mitafest'23</div>
  </div>
</div>

<div class="gallery-container h-3">
  <div class="gallery-item">
    <div class="image">
      <img src={homefest} alt="sport"/>
    </div>
    <div class="text">Homefest'23</div>
  </div>
</div>

<div class="gallery-container w-3">
  <div class="gallery-item">
    <div class="image">
      <img src={lounge} alt="fitness"/>
    </div>
    <div class="text">Music Lounge</div>
  </div>
</div>

{/* <div class="gallery-container w-4 h-1">
  <div class="gallery-item">
    <div class="image">
      <img src="add image here" alt=""/>
    </div>
    <div class="text"></div>
  </div>
</div>

<div class="gallery-container">
  <div class="gallery-item">
    <div class="image">
      <img src="add image here" alt=""/>
    </div>
    <div class="text">Travel</div>
  </div>
</div>

<div class="gallery-container h-2">
  <div class="gallery-item">
    <div class="image">
      <img src=add image here alt=""/>
    </div>
    <div class="text"></div>
  </div>
</div>

<div class="gallery-container">
  <div class="gallery-item">
    <div class="image">
      <img src=add image here alt=""/>
    </div>
    <div class="text"></div>
  </div>
</div> */}

</div>
    </div>
  );
}

export default Techstack;
