import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import pinVideo from "/videos/flagger.mp4";

function FlaggerPlayer() {
  return (
    <div className="videoboxMini">
      <video
        src={pinVideo}
        autoPlay
        muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default FlaggerPlayer;
