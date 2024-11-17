import React from "react";
import "./Hero.css";

import new_banner from "../Assets/new_banner.jpg"
const Hero = () => {
  return (
    <div className="hero">
     
        <img src={new_banner} alt="banner"  style={{ width: '100%', height: 'auto' }}/>
      </div>
    
  );
};

export default Hero;
