import React from "react";
import { img } from "../../assets/assets";
import { FiPhone, FiMail, FiPlus } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        {/* Left Side Content */}
        <div className="contact-content">
          <h2 className="contact-page-heading">Contact</h2>
          <p className="contact-page-text">
            Ready to start your next project? Get in touch to discuss how I can
            help bring your ideas to life. I'm available for web development,
            design, and custom solutions.
          </p>

          <div className="contact-section">
            {/* Call Me Section */}
            <div className="contact-card">
              <div className="icon-container">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="contact-title">Call Me</h4>
                <p className="contact-text">(+91) 7056519516</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="contact-card">
              <div className="icon-container">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="contact-title">Let's Talk About Your Project</h4>
                <p className="contact-text">harshjat12345671@gmail.com</p>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="contact-card">
              <div className="icon-container">
                <FiPlus size={20} />
              </div>
              <div>
                <h4 className="contact-title">Follow Me</h4>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/harsh-b2064b2ab"
                    className="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Harsh636" className="social-icon">
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/harshjat2350"
                    className="social-icon"
                  >
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me/917056519516" className="social-icon">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <img
          src={img.contactImg}
          alt="contact avatar"
          className="contact-page-image"
        />
      </div>
    </>
  );
};

export default ContactPage;
