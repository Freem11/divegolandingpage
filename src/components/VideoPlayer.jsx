import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import phoneCase from "../images/iPhone14Skin.png";

let screenInital = window.innerWidth;
let heroWidth;
let heroHeigth;
if (screenInital < 501) {
  heroHeigth = 375;
  heroWidth = 200;
} else {
  heroHeigth = 715;
  heroWidth = 400;
}

let Heighty;
let Widthy;

function VideoPlayer() {
  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener("resize", trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 375;
      Widthy = 200;
    } else {
      Heighty = 715;
      Widthy = 400;
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }

  return (
    <div className="videobox">
      <img
        src={phoneCase}
        className="phoneskin"
      ></img>
        <ReactPlayer
          url="https://youtu.be/81aJrDCiY6o"
          width={vidWidth}
          height={vidHeigth}
          controls={false}
          muted={true}
          playing={true}
          loop={true}
          playsinline={false}
          className="mainvideo"
          style={{ zIndex: -1 }}
        />
    </div>
  );
}
export default VideoPlayer;
