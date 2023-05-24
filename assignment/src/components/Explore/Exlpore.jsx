import React from "react";
import "./Explore.css";
import plot1 from "../../images/plot1.jpg";
import plot2 from "../../images/plot2.jpg";
import plot3 from "../../images/plot3.jpg";

const Exlpore = () => {
  return (
    <div className="container">
      <div className="explore ">
        <div className="explore-text">
          Explore Our
          <br />
          Collections
        </div>
        <div className="explore-image">
          <img src={plot1} alt="plot1" />
          <img src={plot2} alt="plot2" />
          <img src={plot3} alt="plot3" />
        </div>
      </div>
      <div className="explore-btn">
        <h3>➡️Explore More</h3>
      </div>
    </div>
  );
};

export default Exlpore;
