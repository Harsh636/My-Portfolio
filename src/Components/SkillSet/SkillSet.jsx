import React from "react";
import "./SkillSet.css"; // Import the CSS file for styling
import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const SkillSet = () => {
  const skills = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaReact />, name: "React" },
    { icon: <AiFillGithub />, name: "Git" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    {icon: <FaHtml5/>, name: "Html5"},
    {icon: <FaCss3Alt/>, name: "Css"},
  ];

  return (
    <div className="skillset-container">
      <h2 className="skillset-title">
        Professional <span className="highlight">Skillset</span>
      </h2>
      <div className="skillset-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
