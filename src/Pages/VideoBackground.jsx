import React from "react";
import body_bg from "../assets/body_bg.mp4";

const VideoBackground = () => {
  return (
    <>
      <div className="video-layout" />
      <video
        className="video-bg"
        width={300}
        height={200}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={body_bg} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
