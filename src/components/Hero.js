import React from "react";
import hero from "../images/A1.mp4";

const Hero = () => {
  return (
    <div>
      <video autoPlay loop>
        <source src={hero} type="video/mp4" />
      </video>
      <div className="header">Upload something interesting and Vote</div>
    </div>
  );
};

export default Hero;
