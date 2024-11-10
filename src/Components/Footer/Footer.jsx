import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="section">
    <div className="footer-navbar">
      
      <p className="footer-text">Designed and Developed by Soumyajit Behera</p>
      <p className="footer-text">Copyright © 2024 SB</p>
      <ul className="footer-icon">
        <li>
          <a href="https://github.com/Harsh636">
            <AiFillGithub color="white" size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/harshjat2350">
            <AiFillInstagram color="white" size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/harsh-b2064b2ab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNbAe%2Fj9zRrq5uUqOxurxgw%3D%3D">
            <FaLinkedinIn color="white" size={30} />
          </a>
        </li>
      </ul>
      
    </div>
    </div>
  );
};

export default Footer;
