import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../miniplayer.css";

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

function TutFourPlayer() {

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
      <ReactPlayer
            url="https://youtu.be/jZiU9Y-Ku58"
            width={vidWidth}
            height={vidHeigth}
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            playsinline={true}
            className="tutvideo"
          />
    </div>
  );
}

export default TutFourPlayer;
