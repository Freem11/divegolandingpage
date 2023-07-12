import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./bigVids.css";

function PromoPlayer() {

  const [vidDimensions, setVidDimensions] = useState({
    widthVal: window.innerWidth * 0.8,
    heightVal: (window.innerWidth * 0.8)/ 1.77
  })

  const detectSize = () => {
    setVidDimensions({
      widthVal: window.innerWidth * 0.8,
      heightVal: (window.innerWidth * 0.8)/ 1.77
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
  
    return() => {
      window.removeEventListener('resize', detectSize)
    }
  }, [vidDimensions])


  return (
    <div className="vidbox">
      <h3 className="bigvidlabels">What is DiveGo for?</h3>
      <ReactPlayer
      url = "https://youtu.be/xwr6t4mmncc"
      width={vidDimensions.widthVal}
      height={vidDimensions.heightVal}
      controls="true"
      style={{ overflow: 'hidden', borderRadius: "15px" }}
       />
    </div>
  );
}

export default PromoPlayer;
