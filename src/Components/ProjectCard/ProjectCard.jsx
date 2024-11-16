import React from 'react';
import { img } from '../../assets/assets';
import './ProjectCard.css';

const ProjectCard = () => {
  return (
    <div className='project-card'>
      <img src={img.traveluk} alt="Card images" className="card-image" />
      <div className="card-content">
        <h2>Stocks Consultancy Website</h2>
        <p><strong>Description:</strong> A comprehensive website developed for a stock consultancy service, offering insights, stock market analysis, and investment strategies...</p>
        <p><strong>Technologies Used:</strong> WordPress, PHP, HTML, CSS, JavaScript</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Real-time stock market updates and analysis tools</li>
          <li>Subscription service integration for premium content</li>
          <li>User dashboard for managing consultancy sessions</li>
          <li>Secure payment gateway for consultancy packages</li>
        </ul>
        <a href="/" className="view-project">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
