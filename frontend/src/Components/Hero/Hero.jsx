import React from "react";
import "./Hero.css";
import banner1 from "../Assets/banner1.jpg";
/*import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";*/

const Hero = () => {
  return (
    <div className="hero">
     
      <img src={banner1} alt="hero" />
    </div>
  );
};

export default Hero;
