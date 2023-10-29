import React from "react";
import video from "../assets/video.mp4";
import plane from "../assets/plane.png";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create ever-lasting memory with us!</h1>
      </div>
      <div className="homeImage flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={plane} className="plane"></img>
      </div>
    </div>
  );
};

export default Home;
