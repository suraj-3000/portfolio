import React from "react";
import homeImage from "../../assets/img/home.jpg";
import "./Skills.css";
import SplunkLogo from "../../assets/img/splunk-logo.svg";
import QRadarLogo from "../../assets/img/ibm-qradar-logo.png";
import ReactLogo from "../../assets/img/react-logo.png";
import RestAPILogo from "../../assets/img/rest-api-logo.png";
import PythonLogo from "../../assets/img/python-logo.svg";
import DockerLogo from "../../assets/img/docker-logo.webp";

function Skills() {
  return (
    <div id="skills-main-container">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>
          Here are the diverse skills that helps me handle tough challenges and
          achieve exceptional results.
        </p>
      </div>
      <div className="skills-container">
        <a href="https://www.splunk.com/" target="_blank">
          <div className="skills-container-item">
            <img src={SplunkLogo} className="skills-image" />
          </div>
        </a>

        <a href="https://www.ibm.com/products/qradar-siem" target="_blank">
          <div className="skills-container-item">
            <img src={QRadarLogo} className="skills-image" />
          </div>
        </a>

        <a href="https://react.dev/" target="_blank">
          <div className="skills-container-item">
            <img src={ReactLogo} className="skills-image" />
          </div>
        </a>

        <a href="https://restfulapi.net/" target="_blank">
          <div className="skills-container-item">
            <img src={RestAPILogo} className="skills-image" />
          </div>
        </a>

        <a href="https://www.python.org/" target="_blank">
          <div className="skills-container-item">
            <img src={PythonLogo} className="skills-image" />
          </div>
        </a>

        <a href="https://www.docker.com/" target="_blank">
          <div className="skills-container-item">
            <img src={DockerLogo} className="skills-image" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Skills;
