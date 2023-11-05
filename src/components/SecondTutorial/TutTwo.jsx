import React from "react";
import TutTwoPlayer from "./TutTwoPlayer";
import "../photos.css";

function TutTwo() {
  return (
    <div className="wrapperdivAlt">
      <div className="leftsideAlt">
        <TutTwoPlayer />
      </div>

      <div className="rightsideAlt">
        <h4 className="headertextAlt">Introductory Guide</h4>
        <p className="childtextAlt">
          Meet Emilio the sea lion, your guide to DiveGo, in this guide he shows you the basics of getting around DiveGo's map and explores the dive sites
        </p>
      </div>
    </div>
  );
}

export default TutTwo;
