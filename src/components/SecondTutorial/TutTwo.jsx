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
        <h4 className="headertextAlt">Add Your Own Animal Sightings</h4>
        <p className="childtextAlt">
          Upload your animal sightings via photos and the system will catch the
          date and location it was taken
        </p>
      </div>
    </div>
  );
}

export default TutTwo;
