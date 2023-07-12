import React from 'react'
import TutFourPlayer from "./TutFourPlayer";
import "../photos.css";

function TutFour() {
    return (
        <div className="wrapperdivAlt">
            <div className="leftsideAlt">
            <TutFourPlayer />
            </div>

            <div className="rightsideAlt">
            <h4 className="headertextAlt">Cruising The Sites</h4>
                <p className="childtextAlt">Tap the blue anchors to see whats been seen on any site, use the picture carrousel at the top to look for only the creatures you want and that's all you'll see</p>

            </div>
            
        </div>
    )
}

export default TutFour
