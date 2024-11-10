// SkillCasasol.js
import React from "react";

const SkillCasasol = ({ dist_img }) => {
    console.log("Image URL:", dist_img); // Add this line
    return (
      <div className="skill-item">
        <img src={dist_img} alt="Skill" className="carousel-image" />
      </div>
    );
  };
  

export default SkillCasasol;
