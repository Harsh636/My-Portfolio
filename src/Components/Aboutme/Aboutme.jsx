import React from "react";
import { img } from "../../assets/assets";
import './Aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="about-heading">
        <h2 className="about-headings"> Let me <span class="highlight">introduce</span> myself</h2>
        <p className="about-text">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️<br></br>I am fluent in classics like <span class="highlight">Python and
          Javascript.</span><br></br>
          My field of Interest's are building new <span class="highlight">Web Technologies and Products.</span><br></br>
          Whenever possible, I also apply my passion for developing products
          with <span class="highlight">Node.js</span> and <span class="highlight">Modern Javascript Library</span> and <span class="highlight">Frameworks like</span> 
           React.js.<br></br>
        </p>
      </div>
      <div className="avatar">
        <img src={img.avatar} alt="avatar svg" />
      </div>
    </div>
  );
};

export default Aboutme;
