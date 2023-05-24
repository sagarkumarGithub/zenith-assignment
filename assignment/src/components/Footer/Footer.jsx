import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: "4.2rem" }} className="footer">
        <div className="footer-links">
          <div className="footer-logo">
            <h2>Discover Plots</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="footer-link-item">
            <div className="company">
              <p>Company</p>
              <ul>
                <li>Contact</li>
              </ul>
            </div>
            <div className="who-we-are">
              <p>Who we help</p>
              <ul>
                <li>Customers</li>
                <li>Brokers</li>
                <li>Lenders</li>
              </ul>
            </div>
            <div className="follow-us">
              <p>Follow us</p>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>Copyrights @ 2023 City Plots</p>
          <p>Privacy Policy . Privacy Collection Notice . Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
