import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import phoneCase from "../images/iPhone14Skin.png";
import headlinerVid from "../images/headlinerVideo.mp4";

let screenInital = window.innerWidth;
let heroWidth;
let heroHeigth;
if (screenInital < 501) {
  heroHeigth = 500;
  heroWidth = 245;
} else {
  heroHeigth = 730;
  heroWidth = 380;
}

let Heighty;
let Widthy;

function VideoPlayer() {
  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener("resize", trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 500;
      Widthy = 245;
    } else {
      Heighty = 730;
      Widthy = 380;
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }

  return (
    <div className="videobox">
      <img src={phoneCase} className="phoneskin"></img>
      <video src={headlinerVid} className="headervideo" autoPlay loop muted playsInline/>
     
      {/* <ReactPlayer
        url="https://youtu.be/rUGFT49d5wU"
        width={vidWidth}
        height={vidHeigth}
        controls={false}
        muted={true}
        playing={true}
        loop={true}
        playsinline={false}
        className="mainvideo"
        style={{ objectFit: "cover", borderRadius: 60 }}
      /> */}
    </div>
  );
}
export default VideoPlayer;
