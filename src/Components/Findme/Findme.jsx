import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Findme.css';

const Findme = () => {
  return (
    <div className='findme'>
        <h2 className='findme-h2'>FIND ME ON</h2>
        <p className='findme-p'>Feel free to <span className='highlight'>connect</span> with me</p>
        <ul className="footer-icons">
          <li>
            <a href="https://github.com/Harsh636"><AiFillGithub color="blueviolet"/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshjat2350"><AiFillInstagram color="blueviolet"/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harsh-b2064b2ab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNbAe%2Fj9zRrq5uUqOxurxgw%3D%3D"><FaLinkedinIn color="blueviolet"/></a>
          </li>
        </ul>
    </div>
  )
}

export default Findme