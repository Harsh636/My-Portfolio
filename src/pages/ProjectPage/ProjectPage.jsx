import React from "react";
import "./ProjectPage.css";
import { img } from "../../assets/assets";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h3 className="project-page-heading">
        My <span className="highlight">Projects</span>
      </h3>
      <div className="project-page-project">
        <div className="project-card">
          <img src={img.traveluk} alt="Card images" className="card-image" />
          <div className="card-content">
            <h2>Travel Uttarakhand Website</h2>
            <p>
              <strong>Description:</strong> A travel platform for booking
              packages in Uttarakhand, including treks, homestays, camping, and
              adventure activities.
            </p>
            <p>
              <strong>Technologies Used:</strong> React.js, Node.js, express.js,
              postgreql, CSS
            </p>
            <p>
              <strong>Key Features:</strong>
            </p>
            <ul>
              <li>Booking options for treks, homestays, and camping</li>
              <li>User-friendly interface and secure payments</li>
              <li>Personalized accounts for managing bookings</li>
            </ul>
            <div className="view-project-container">
              <a
                href="https://traveluttarakhand.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="view-project"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
