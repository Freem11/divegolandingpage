import React from "react";
import Manta from "../images/Matt_Manta_White.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logocontainer">
      <img src={Manta} className="mantalogo"></img>
      <h2 className="logoname">
        Scuba SEAsons
      </h2>

      <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'}>
        Contact Us
      </div> 
    </div>
  );
}

export default Logo;
