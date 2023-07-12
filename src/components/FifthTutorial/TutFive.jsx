import React from 'react'
import TutFivePlayer from "./TutFivePlayer";
import "../divesite.css";

function TutFive() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Something Isn't Right?</h4>
                <p className="childtext">Dive site in the wrong spot? Giant Pacific Octo not a Two Spot in that pic? No problem long press the flag and let us know, we will fix it fast!</p>
            </div>

            <div className="rightside">
                    <TutFivePlayer />
            </div>
            
        </div>
    )
}

export default TutFive
