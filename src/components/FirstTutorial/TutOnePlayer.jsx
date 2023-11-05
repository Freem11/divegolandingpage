import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../emilio.css";
import seaLionGuy from "../../images/EmilioNeutral.png";

let screenInital = window.innerWidth;
let heroWidth
let heroHeigth
if (screenInital < 501) {
  heroHeigth = 270;
  heroWidth = 150;
}else {
  heroHeigth = 400;
  heroWidth = 224;
}

let Heighty
let Widthy


function TutOnePlayer() {

  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener('resize', trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 270;
      Widthy = 150;
    } else {
      Heighty = 400;
      Widthy = 224;
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }

  return (
    <div className="videoboxMini">
       <img src={seaLionGuy} className="emilioBox"></img>
    </div>
  );
}

// Intro: https://youtu.be/4uwmVln3O6U
// Dive sites: https://youtu.be/OsD_6MVcXI4
// Photos: https://youtu.be/6wz4veGTkP8

export default TutOnePlayer;
