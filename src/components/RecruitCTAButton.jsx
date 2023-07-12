import React from "react";
import "./button.css";
import recruit from "../images/RecruitingCTA2.png";

export default function RecruitCTAButton() {
  return (
    <a href='mailto:DiveGo2022@gmail.com?subject=I%20want%20to%20volunteer%20to%20join%20the%20field%20testing%20team!&body=Thank%20you%20so%20much%20for%20your%20interest%20in%20volunteering%20to%20become%20one%20of%20our%20field%20testers!%0D%0A%0D%0ATo%20join%20the%20field%20testing%20team,%20there%20are%20two%20criteria:%0D%0A%0D%0A1)%20Please%20note%20the%20type%20of%20device%20you%20use%20(Android%20or%20IOS)%0D%0A%0D%0A2)%20Please%20give%20a%20small%20writeup%20to%20let%20us%20know%20why%20you%20are%20interested%20in%20being%20a%20field%20tester%20%0D%0A%0D%0AThis%20is%20so%20that%20we%20can%20send%20the%20right%20invite%20to%20you%20and%20to%20make%20sure%20your%20interest%20is%20genuine%0D%0A%0D%0AThanks!%0ATeam%20DiveGo'>
      <img src={recruit} height="90px" className="recruitimg"></img>
    </a>
  );
}

