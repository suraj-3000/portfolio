import React from "react";
import "./NavbarMain.css";
function NavbarMain(props) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-header">
          <div>Suraj Tiwari</div>
        </div>
        <div className="navbar-links">
          <div>
            <a href="#home-main-container">Home</a>
          </div>
          <div>
            <a href="#skills-main-container">Skills</a>
          </div>
          <div>
            <a href="#projects-main-container">Project</a>
          </div>
          <div>
            <a href="#contact-section">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMain;
