// MySkill.js
import React from "react";
import "./MySkill.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCasasol from "../SkillCarasol/SkillCasasol";
import { dist_slider } from "../../assets/assets";

const MySkill = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="carousel">
      <div className="container">
        <h2>My <span class="highlight">Skills</span></h2>
        <p>
          I specialize in <span class="highlight">front-end development</span> with HTML, CSS, JavaScript, and
          React.js, and <span class="highlight">back-end</span> work with express.js and postgresql. I also focus on
          <span class="highlight">responsive design</span> and <span class="highlight">SEO</span>.
        </p>
      </div>
      <Slider {...settings}>
        {dist_slider.map((item, index) => (
          <SkillCasasol key={index} dist_img={item.dist_img} />
        ))}
      </Slider>
    </section>
  );
};

export default MySkill;
