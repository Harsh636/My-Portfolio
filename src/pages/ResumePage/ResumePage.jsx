import React from "react";
import {img} from '../../assets/assets';
import './ResumePage.css';
import { AiOutlineDownload } from "react-icons/ai";

const ResumePage = () => {
  const pdfUrl = './my-resume.pdf'
  return (
    <div className="resume">
       <img className="resume-img" src={img.myResume} alt="resume" />
       <button className="resume-button"> 
       <a href={pdfUrl} download style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
        <AiOutlineDownload style={{ marginRight: "8px" }} />Download CV
        </a>
        </button>
    </div>
  );
};

export default ResumePage;
