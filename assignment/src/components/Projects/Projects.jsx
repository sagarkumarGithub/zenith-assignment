import React from "react";
import "./Projects.css";
import plot1 from "../../images/plot1.jpg";
import plot2 from "../../images/plot2.jpg";
import plot3 from "../../images/plot3.jpg";
import plot4 from "../../images/plot4.jpg";

const Projects = () => {
  return (
    <div className="projects container">
      <h1>Feature Projects</h1>
      <div className="buttons">
        <div className="oval-btns">
          <button className="ovals active">Egmore</button>
          <button className="ovals">Koyambedu</button>
          <button className="ovals">Sholinganallur</button>
          <button className="ovals">Choolaimedu</button>
          <button className="ovals">Greams Road</button>
          <button className="ovals">Royapettah</button>
        </div>
        <div className="square-btn">
          <button className="square">left</button>
          <button className="square">right</button>
        </div>
      </div>
      <div className="project-cards">
        <div className="card">
          <img src={plot1} className="card-image" alt="card" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                $16,471
              </span>{" "}
              <span> |</span> <span> 2088 sqft</span>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={plot2} className="card-image" alt="card" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                $16,471
              </span>{" "}
              <span> |</span> <span> 2088 sqft</span>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={plot3} className="card-image" alt="card" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                $16,471
              </span>{" "}
              <span> |</span> <span> 2088 sqft</span>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={plot4} className="card-image" alt="card" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <p>
              <span style={{ color: "black", fontWeight: "bold" }}>
                $16,471
              </span>{" "}
              <span> |</span> <span> 2088 sqft</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
