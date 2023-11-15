import React from "react";
import "./button.css";
import mantalogo from "../images/MantaCTA.png";

export default function MantaCTAButton() {
  return (
    <a href='https://scubaseasons.netlify.app' target="_blank">
      <img src={mantalogo} className="mantaimg"></img>
    </a>
  );
}

