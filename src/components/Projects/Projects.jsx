import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div id="projects-main-container">
      <section className="projects" id="projects">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="projects-box">
            <FontAwesomeIcon icon={faCode} className="projects-icon" />
            <h3>Wiz Splunk</h3>
            <p>
              Developed a Splunk Addon Application to retrieve data from Wiz
              APIs and seamlessly transfer it to Splunk Indexes. Additionally,
              constructed tailor-made Splunk Dashboards to effectively present
              the information obtained from Wiz APIs.
            </p>
          </div>
          <div className="projects-box">
            <FontAwesomeIcon icon={faCode} className="projects-icon" />
            <h3>VMRay QRadar</h3>
            <p>
              Designed a QRadar Application that efficiently extracts data from
              VMRay APIs and seamlessly integrates it with QRadar Log Activity.
              Moreover, developed a QRadar DSM (Device Support Module) to
              accurately process the incoming data from VMRay APIs.
              Additionally, constructed customized QRadar dashboards to visually
              represent the information obtained from VMRay APIs.
            </p>
          </div>
          <div className="projects-box">
            <FontAwesomeIcon icon={faCode} className="projects-icon" />
            <h3>Cybereason Forwarder</h3>
            <p>
              Constructed a bespoke Forwarder that retrieves data from
              Cybereason APIs and efficiently transmits it to diverse data
              sources, including Arcsight, Chronicle, SandBoxes, and more.
              Furthermore, encapsulated the entire application within a Docker
              Stack container, ensuring its portability and streamlined
              deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
