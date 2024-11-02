import React from "react";
import "./Header.css";
import { icons } from "../../assets/assets";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Harsh</div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <img src={icons.home} alt="home icon" />
            <span>Home</span>
          </li>
          <li>
            <img src={icons.about} alt="about icon" />
            <span>About</span>
          </li>
          <li>
            <img src={icons.project} alt="project icon" />
            <span>Project</span>
          </li>
          <li>
            <img src={icons.resume} alt="resume icon" />
            <span>Resume</span>
          </li>
          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <img src={icons.other} alt="other icon" />
            <button className="dropdown-button">
              Others ▼
            </button>
            <div className="dropdown-content">
              <a href="#option1"><img src={icons.skill} alt="skill icon" />Skills</a>
              <a href="#option2"><img src={icons.certificate} alt="certificate icon" />Certificates</a>
            </div>
          </li>
          <li>
            <img src={icons.contact} alt="contact icon" />
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
