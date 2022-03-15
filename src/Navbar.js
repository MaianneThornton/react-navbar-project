import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,  setShowLinks] = useState (false);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        {/* toggles link visibility, initially set to false (hidden) */}
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {/* If showLinks is true, return links-container and showContainer class else show links-container */} 
      <div className={`${
        showLinks ? 'links-container show-container' : 'links-container' } `}
      >
        <ul className="links">
          {/* Iterates through the link array in the data.js file */}
          {links.map((link) => {
            // destructuring the link array
            const { id, url, text } = link;
            // determining where the data properties should be shown
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      
      <ul className="social-icons">
          {/* Iterates through the social array in the data.js file */}
        {social.map((social) => {
            // destructuring the social array
          const { id, url, icon } = social;
            // determining where the data properties should be shown
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
