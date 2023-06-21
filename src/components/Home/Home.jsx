import React from "react";
import "./Home.css";
import Button from "../Utils/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import homeImage from "../../assets/img/home.jpg";

function Home() {
  return (
    <div id="home-main-container">
      <div className="home-left-content">
        <h3 className="intro-main">
          Hi,
          <h1 className="intro-main intro-name"> I'm Suraj!</h1>
        </h3>
        <h3>A Full Stack Developer &</h3>
        <h3>CyberSecurity Enthusiast!</h3>

        <div className="download-button">
          <Button title="Download Resume" iconName={faCircleDown} />
        </div>

        <div className="social-media-links">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>

      <div className="home-right-content">
        <img src={homeImage} className="home-image" alt="home-display" />
      </div>
    </div>
  );
}

export default Home;
