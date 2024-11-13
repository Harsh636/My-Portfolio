import React from "react";
import homeMain from "../../assets/images/home-main.svg";
import "./AboutPage.css";
import SkillSet from "../../Components/SkillSet/SkillSet";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-text">
          <h2>
            Know about <span className="highlight">Me</span>
          </h2>
          <p className="about-main">
            Hi, I'm <span className="highlight">Harsh</span>, a dedicated and
            passionate <span className="highlight">web developer</span> with a{" "}
            <span className="highlight">focus on</span> crafting beautiful,
            functional, and responsive websites.
          </p>
          <p className="about-light">
            With a strong background in{" "}
            <span className="highlight">fullstack development </span>and
            expertise in Node.js or react.js, I{" "}
            <span className="highlight">aim to</span> build digital experiences
            that not only meet but exceed client expectations. I thrive on
            creating websites that are intuitive,{" "}
            <span className="highlight">user-friendly</span>, and aligned with
            modern web standards.
          </p>
        </div>
        <div className="about-img">
          <img src={homeMain} alt="svg" />
        </div>
      </div>
      <div className="about-skillset">
        <SkillSet />
      </div>
      <section className="about-work-together">
        <h2 className="about-work-together-heading">Let's Work Together</h2>
        <p className="about-work-together-text">
          If you're looking for a creative and reliable web developer, I'm here
          to help bring your vision to life. With experience in HTML, CSS and
          JavaScript and express.jd. <br></br>I specialize in building modern,
          responsive websites that engage users and elevate your brand. Whether
          it's a personal blog, an eCommerce site, or something completely
          unique.<br></br> I'm ready to collaborate and create something great
          together.
        </p>
        <buttom className="about-work-together-buttom" ><Link to={'/contact'} className="link-reset">Get In Touch</Link></buttom>
      </section>
    </>
  );
};

export default AboutPage;
