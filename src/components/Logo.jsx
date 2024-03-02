import React from "react";
import Manta from "../images/Matt_Manta_White.png";
import FacebookLogo from "../images/facebook.png";
import InstagramLogo from "../images/instagram.png";
import YoutubeLogo from "../images/youtube.png"
import "./logo.css";

function Logo() {
  return (
    <div className="logocontainer">
      <img src={Manta} className="mantalogo"></img>
      <h2 className="logoname">
        Scuba SEAsons
      </h2>

      <a href='https://www.facebook.com/profile.php?id=61554622375177' target="_blank">
      <img src={FacebookLogo} className="SMlogos"></img>
    </a>

    <a href='https://www.instagram.com/scuba_seasons/' target="_blank">
    <img src={InstagramLogo} className="SMlogos1"></img>
    </a>
      
    <a href='https://www.youtube.com/channel/UCAQzYoPicEgztcfT6r9xc6w' target="_blank">
    <img src={YoutubeLogo} className="SMlogos2"></img>
    </a>
      
      <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'}>
        Contact Us
      </div> 
    </div>
  );
}

export default Logo;

