import React from "react";
import "./Hero.css";
import heroimg from "../../images/plot.jpg";
import plot1 from "../../images/plot1.jpg";
import plot2 from "../../images/plot2.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-top">
        <div className="hero-img">
          <img src={heroimg} alt="cover-img" />
        </div>
        <div className="hero-text">
          <h1>Discover Your Perfect Plot of Land.</h1>
          <h2>Starting at</h2>
          <h1 className="price">
            Rs 3999<span id="unit">per.sqft</span>
          </h1>
          <div className="hero-input">
            <input type="text" placeholder="Search area or location" />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="data">
          <div className="top">
            <div>
              <h1>340k+</h1>
              <h3>Landmark Near Chennai</h3>
            </div>
          </div>
          <div className="bottom">
            <div className="first">
              <h1>437k+</h1>
              <h3>Happy Customer</h3>
            </div>
            <div className="last">
              <h1>4.3m+</h1>
              <h3>Sq. Feet Developed</h3>
            </div>
          </div>
          <h2 className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            doloribus aperiam, delectus suscipit provident eaque!
          </h2>
        </div>
        <div className="images">
          <h2>
            <span>❤️</span>Trending Projects
          </h2>
          <div className="sideImages">
            <img src={plot1} alt="plot1" />
            <img src={plot2} alt="plot2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
