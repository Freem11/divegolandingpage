import React from 'react'
import "../emilioplayer.css";
import TutOnePlayer from "./TutOnePlayer";


function TutOne() {

    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Meet Emilio!</h4>
                <p className="childtext">
                    Say hello to Emilio the Sea Lion! He serves as Scuba SEAsons' main guide to help users learn how to use Scuba SEAsons. He is looking forward to meeting you!
                </p>
            </div>

            <div className="rightside">
                    <TutOnePlayer />
            </div>
            
        </div>
    )
}

export default TutOne
