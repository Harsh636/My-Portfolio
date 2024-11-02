import React from "react";
import TypingEffect from "react-typing-effect";
import "./Home.css";
import { img } from "../../assets/assets";

const Home = () => {
  return (
    <div className="home">
      
      
      <div className="overlay"></div>
      <div className="content">
        <div className="headings">
          <h1 className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            I'M
            <strong className="main-name"> HARSH</strong>
          </h1>
          <TypingEffect
            className="subtext"
            text={[
              "Open Source Contributor",
              "Web Developer",
              "Tech Enthusiast",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1500}
            typingDelay={500}
          />
        </div>
        <div className="image-container">
          <img src={img.homelogo} alt="Illustration of a person at a desk" />
        </div>
      </div>
    </div>
  );
};

export default Home;
