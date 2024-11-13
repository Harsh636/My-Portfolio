import React from "react";
import SkillSet from "../../Components/SkillSet/SkillSet";
import Findme from "../../Components/Findme/Findme";
const SkillPage = () => {
  return (
    <div className="skill-page">
      <SkillSet />
      <div style={{ paddingTop: "3rem" }}>
        <Findme />
      </div>
    </div>
  );
};

export default SkillPage;
