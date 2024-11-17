import React from "react";
import "./Hero.css";

import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import new_banner from "../Assets/new_banner.jpg"
const Hero = () => {
  return (
    <div className="hero">
     
        <img src={new_banner} alt="hero" />
      </div>
    
  );
};

export default Hero;
