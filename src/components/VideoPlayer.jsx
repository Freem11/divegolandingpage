import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import phoneCase from "../images/iPhone14Skin.png";

let screenInital = window.innerWidth;
let heroWidth;
let heroHeigth;
if (screenInital < 501) {
  heroHeigth = 500;
  heroWidth = 245;
} else {
  heroHeigth = 730;
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
      Heighty = 500;
      Widthy = 245;
    } else {
      Heighty = 730;
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

      {/* <video scr={`https://youtu.be/cmM3XcJ78VM`} autoPlay loop muted className="mainvideo"/> */}
        <ReactPlayer
          url="https://youtu.be/SgmJ1qOSpjk"
          width={vidWidth}
          height={vidHeigth}
          controls={false}
          muted={true}
          playing={true}
          loop={true}
          playsinline={false}
          className="mainvideo"
          style={{ objectFit: "cover", borderRadius: 50 }}
        />
    </div>
  );
}
export default VideoPlayer;
