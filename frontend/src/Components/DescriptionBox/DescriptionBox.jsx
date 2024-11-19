import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Welcome to Furry and Fuzzy Whiskers, your ultimate online destination 
        for all things pet-related! Our eCommerce pet website is designed to 
        provide a seamless shopping experience for pet parents and animal lovers, 
        offering a wide range of high-quality products for dogs, cats, fish, birds,
         and small animals.
        </p>
        <p>
        Furry and Fuzzy Whiskers is here to make caring for your pets a joyful
        and hassle-free experience.Whether you have a playful pup, a curious cat, 
        or a serene aquarium, our website provides a seamless shopping experience
         with categories tailored for every pet. 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
