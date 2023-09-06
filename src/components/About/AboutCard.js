import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import bandgroup from '../../Assets/band-grp.jpg'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            VIBEZ<span className="purple"></span>
            is not just a college music band; it's a musical journey that started as a shared dream among a group of passionate students at MIT. What began as a casual jam session in a dorm room has evolved into a well-respected and beloved musical ensemble known for their unique blend of genres, electrifying performances, and a deep connection with their audience.
            </p>
            <img src={bandgroup} className="bandgroup"
            />
            {/* The symposium aims to foster collaboration, inspire creativity, and promote the understanding of music's profound impact on society through
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Musical workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Contests
            </li>
            <li className="about-activity">
              <ImPointRight /> Fun events
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Unite, Groove, Repeat!"{" "}
          </p>
          <footer className="blockquote-footer">Vibez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
