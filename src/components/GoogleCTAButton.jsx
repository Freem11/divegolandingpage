import React from "react";
import "./button.css";
import googlelogo from "../images/GoogleCTA.png";

export default function GoogleCTAButton() {
  return (
    <a href='https://play.google.com/store/apps/details?id=com.freem11.divegomobile' target="_blank">
      <img src={googlelogo} className="googleimg"></img>
    </a>
  );
}