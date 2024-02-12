import React from "react";
import "./Section2.css";
import video from "../../assets/section2/tv.mp4";
import remote from "../../assets/section2/remote.jpg";

const Section2 = () => {
  return (
    <>
      <hr className="line" />
      <div className="section2">
        <div className="section2-content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox,
            <span /> Chromecast, Apple TV, Blu-ray players and
            <span /> more.
          </p>
        </div>
        <div className="section2-video">
          <video src={video} autoPlay loop muted id="sec2-video"></video>

          <img src={remote} id="remote1" alt=""/>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};

export default Section2;
