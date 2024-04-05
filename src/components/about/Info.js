import React from "react";

const Info = () => {
  const calculateMonths = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    return diffMonths;
  };
  const startDate = new Date("Dec 2023");
  const endDate = new Date();
  const monthsOfExperience = calculateMonths(startDate, endDate);
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i class="uil uil-award about-icon"></i>

        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">{monthsOfExperience} Months</span>
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
