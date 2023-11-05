import React from 'react'
import TutThreePlayer from "./TutThreePlayer";
import "../divesite.css";

function TutThree() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Find My Dive Site, or add it!</h4>
                <p className="childtext">
                    Emilio makes his return in the dive sites guide, this time he will show you how to see if your dive site is already in DiveGo, and if not how to add it yourself!
                </p>
            </div>

            <div className="rightside">
                    <TutThreePlayer />
            </div>
            
        </div>
    )
}

export default TutThree
