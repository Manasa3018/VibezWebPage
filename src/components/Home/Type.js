import React from "react";
import Typewriter from "typewriter-effect";
import { ImPointDown } from "react-icons/im";
function Type() {
  const iconStyle = {
    fontSize: "36px",   // Adjust the font size
    color: "violet",       // Adjust the icon color
  };
  return (
    <div>
    <Typewriter
      options={{
        strings: [
          "ACCENTS'23"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
    <div className="icon-container">
      <ImPointDown className="custom-icon"/><ImPointDown className="custom-icon"/><ImPointDown className="custom-icon"/>
      </div>    
    </div>
  );
}

export default Type;

