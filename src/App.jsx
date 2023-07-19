import { useState } from "react";
import HeadLine from "./components/HeadLine";
import SubTitle from "./components/SubTitle";
import VideoPlayer from "./components/VideoPlayer";
import CallToActions from "./components/callToActions";
import Logo from "./components/Logo";
import TutOne from "./components/FirstTutorial/TutOne";
import TutTwo from "./components/SecondTutorial/TutTwo";
import TutThree from "./components/ThirdTutorial/TutThree";
import TutFour from "./components/FourthTutorial/TutFour";
import TutFive from "./components/FifthTutorial/TutFive";
import CallToActionsB from "./components/callToActionsB";
import PromoPlayer from "./components/PromoPlayer";
import WhyVidPlayer from "./components/WhyVidPlayer";
import WebVidPlayer from "./components/WebVidPlayer";
// import heroVid from "https://youtu.be/ytdBFpVxYrA";
import "./App.css";
import ReactPlayer from "react-player/youtube";

let screenInital = window.innerWidth;
let heroWidth;
let heroHeigth;
if (screenInital < 501) {
  heroHeigth = 600;
  heroWidth = 600 * (16 / 9);
} else if (screenInital < 881) {
  heroHeigth = 700;
  heroWidth = 700 * (16 / 9);
} else if (screenInital < 1399) {
  heroHeigth = 1000;
  heroWidth = 1000 * (16 / 9);
} else if (screenInital < 1749) {
  heroHeigth = 1000;
  heroWidth = 1000 * (16 / 9);
} else {
  heroHeigth = 1500;
  heroWidth = 1500 * (16 / 9);
}

let Heighty;
let Widthy;

function App() {
  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener("resize", trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 600;
      Widthy = 600 * (16 / 9);
    } else if (window.innerWidth < 881) {
      Heighty = 700;
      Widthy = 700 * (16 / 9);
    } else if (window.innerWidth < 1399) {
      Heighty = 1000;
      Widthy = 1000 * (16 / 9);
    } else if (window.innerWidth < 1749) {
      Heighty = 1000;
      Widthy = 1000 * (16 / 9);
    } else {
      Heighty = 1500;
      Widthy = 1500 * (16 / 9);
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }

  return (
    <div className="wrapperdivMain">
      <div style={{ minHeight: "1000px", maxHeight: "auto" }}>
        <Logo />

        <div className="topsection">
          <ReactPlayer
            url="https://youtu.be/ytdBFpVxYrA"
            width={vidWidth}
            height={vidHeigth}
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            playsinline={true}
            className="mainherovideo"
          />

          <div className="leftTop">
            <HeadLine />
            <SubTitle />
            <h2 className="joinusT" style={{ fontFamily: "Caveat, cursive" }}>
              Start Making Your Dives Unforgettable!
            </h2>
            <CallToActions />
          </div>

          <div className="rightTop">
            <VideoPlayer />
          </div>
        </div>

        <div className="webshowsection">
          <WebVidPlayer />
        </div>

        <div className="whyvideosection">
          <PromoPlayer />
          <WhyVidPlayer />
        </div>

        <div className="midsection">
          <TutOne />
          <TutTwo />
          <TutThree />
          <TutFour />
          <TutFive />
        </div>

        <div className="bottomsection">
          <h2 className="joinus" style={{ fontFamily: "Caveat, cursive" }}>
            Start Making Your Dives Unforgettable!
          </h2>
          <CallToActionsB />
        </div>
      </div>
    </div>
  );
}

export default App;
