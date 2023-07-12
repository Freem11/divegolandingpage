import React from 'react'
import TutThreePlayer from "./TutThreePlayer";
import "../divesite.css";

function TutThree() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Find My Dive Site</h4>
                <p className="childtext">If you know the name of the  dive site, the search tool will take you there and place a yellow indicator to show you exactly where</p>
            </div>

            <div className="rightside">
                    <TutThreePlayer />
            </div>
            
        </div>
    )
}

export default TutThree
