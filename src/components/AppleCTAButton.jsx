import React from "react";
import "./button.css";
import applelogo from "../images/AppleCTA.png";

export default function AppleCTAButton() {
  return (
    <a href='https://apps.apple.com/us/app/divego/id6450968950' target="_blank">
      <img src={applelogo} className="appleimg"></img>
    </a>
  );
}