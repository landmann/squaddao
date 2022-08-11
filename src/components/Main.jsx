import React from "react";
import videoBg from "../assets/background.mp4";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default Main;
