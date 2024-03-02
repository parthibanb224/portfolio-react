import React from "react";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i class="uil uil-award about-icon"></i>

        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">2 Months</span>
      </div>

      <div className="about-box">
        <i class="uil uil-briefcase-alt about-icon"></i>

        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">5+ projects</span>
      </div>

      <div className="about-box">
        <i class="uil uil-headphones about-icon"></i>

        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">24/7</span>
      </div>
    </div>
  );
};

export default Info;
