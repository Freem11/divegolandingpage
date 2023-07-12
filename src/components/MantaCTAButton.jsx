import React from "react";
import "./button.css";
import mantalogo from "../images/MantaCTA.png";

export default function MantaCTAButton() {
  return (
    <a href='https://divego.netlify.app'>
      <img src={mantalogo} className="mantaimg"></img>
    </a>
  );
}

