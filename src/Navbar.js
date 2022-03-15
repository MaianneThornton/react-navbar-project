import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,  setShowLinks] = useState (false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // callback function to check the height for the links, then manually update the linksContainer height
  useEffect(() => {
    // getBoundingClientRect function returns the dimensions of the container
    // console.log(linksRef.current.getBoundingClientRect());
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks){
      linksContainerRef. current.style.height = `${linksHeight}px`
    }else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

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
      <div className="links-container"ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
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
