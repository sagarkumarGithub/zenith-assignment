import React from "react";
import "./ProjectHilight.css";
import hospitalImg from "../../images/hospital.jpg";

const ProjectHilight = () => {
  return (
    <div className="container projectHighlight ">
      <div className="project-img">
        <img src={hospitalImg} alt="hospital" />
      </div>
      <div className="project-desc">
        <h1 className="project-heading">Project Highlights</h1>
        <h1>Near to School</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi itaque
          eaque, voluptas voluptate ratione totam!
        </p>
      </div>
    </div>
  );
};

export default ProjectHilight;
