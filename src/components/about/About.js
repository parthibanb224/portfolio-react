import React from "react";
import "./about.css";
import Img from "../../assets/img-about.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={Img} alt="" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            MERN stack developer with extensive programming experience and a
            strong desire to learn new technologies. My expertise in React,
            Express, Node, MySQL, and MongoDb is extensive. I'm currently
            looking for a chance to expand my expertise and advance my career.
          </p>

          <a
            href="https://drive.google.com/file/d/1iAOuMFRcAPJdK86dsOWYoSUmWnjVh1QP/view?usp=sharing"
            className="button button-flex"
            target="_blank"
            rel="noreferrer"
          >
            Resume <i class="uil uil-message button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
