import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../miniplayer.css";

let screenInital = window.innerWidth;
let heroWidth
let heroHeigth
if (screenInital < 501) {
  heroHeigth = 550;
  heroWidth = 350;
}else {
  heroHeigth = 400;
  heroWidth = 224;
}

let Heighty
let Widthy

function TutThreePlayer() {

  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener('resize', trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 550;
      Widthy = 350;
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
            url="https://youtu.be/tBx_f1MSUtk"
            width={vidWidth}
            height={vidHeigth}
            controls={true}
            muted={true}
            playing={true}
            loop={true}
            playsinline={true}
            className="tutvideo"
          />
    </div>
  );
}

export default TutThreePlayer;
