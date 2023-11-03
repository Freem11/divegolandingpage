import React from 'react'
import "../emilio.css";
import TutOnePlayer from "./TutOnePlayer";


function TutOne() {

    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Meet Emilio!</h4>
                <p className="childtext">
                    Say hello to Emilio the Sea Lion! He serves as DiveGo's main guide to help users learn how to use DiveGo. He is looking forward to meeting you!
                </p>
            </div>

            <div className="rightside">
                    <TutOnePlayer />
            </div>
            
        </div>
    )
}

export default TutOne
