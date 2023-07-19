import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./webVid.css";
import compSkin from "../images/iMac1.png";
import MantaCTAButton from "./MantaCTAButton";
import AppleCTAButton from "./AppleCTAButton";
import GoogleCTAButton from "./GoogleCTAButton";

let screenInital = window.innerWidth;
let heroWidth;
let heroHeigth;
if (screenInital < 501) {
  heroHeigth = 140;
  heroWidth = 235;
} else if (window.innerWidth < 1400){
  heroHeigth = 240;
  heroWidth = 420;
} else if (1400 < window.innerWidth && window.innerWidth < 1700){
  heroHeigth = 340;
  heroWidth = 620;
} else if (1700 < window.innerWidth) {
  heroHeigth = 455;
  heroWidth = 865;
}

let Heighty;
let Widthy;

function WebVidPlayer() {
  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener("resize", trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 140;
      Widthy = 235;
    } else if (window.innerWidth < 1400){
      Heighty = 240;
      Widthy = 420;
    } else if (1400 < window.innerWidth && window.innerWidth < 1700){
      Heighty = 340;
      Widthy = 620;
    } else if (1700 < window.innerWidth){
      Heighty = 455;
      Widthy = 865;
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }

  return (
    <div className="compbox">
      <div className= "separator">
      <img src={compSkin} className="compskin"></img>
      <ReactPlayer
        url="https://youtu.be/wOvgyxoJADc"
        width={vidWidth}
        height={vidHeigth}
        controls={false}
        muted={true}
        playing={true}
        loop={true}
        playsinline={false}
        className="vidsizes"
      />
      </div>
      <div className="comptext">
        <h3 className="textBox">
          Created for the love of diving with sea creatures, we believe there is
          no better dive than when you and a sea creature have an amazing
          encounter.
        </h3>
        <h3 className="textBox">
          DiveGo strives to achieve that dream on every dive by enabling divers
          to discover what time of year is the best to dive with any sea
          creature anywhere in the world.
        </h3>
        <MantaCTAButton />
        <div className="ctaDiv">
          <AppleCTAButton />
          <GoogleCTAButton />
        </div>
      </div>
    </div>
  );
}

export default WebVidPlayer;
