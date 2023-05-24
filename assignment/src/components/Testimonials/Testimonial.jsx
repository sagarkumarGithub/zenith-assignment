import React from "react";
import "./Testimonial.css";
import family1 from "../../images/family1.jpg";
import family2 from "../../images/family2.jpg";
import family3 from "../../images/family3.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial container">
      <h1>Clients Testimonial</h1>
      <div className="testimonial-images">
        <div className="tstimonial-image">
          <img src={family1} alt="family1" />
        </div>
        <div className="tstimonial-image">
          <img src={family2} alt="family1" />
        </div>
        <div className="tstimonial-image">
          <img src={family3} alt="family1" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
