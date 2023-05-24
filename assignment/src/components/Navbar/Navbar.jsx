import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar container"
        style={{ marginTop: "2.8rem", marginBottom: "2.8rem" }}
      >
        <div className="logo">DISCOVER PLOTS</div>
        <div className="icons">
          <ul className="links">
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Agents</a>
            </li>
            <li>
              <a href="/">Amenities</a>
            </li>
            <li>
              <a href="/">Amenities</a>
            </li>
          </ul>
          <button className="btn-primary">Schedule a Call</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
