import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Parthiban
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i class="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i class="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i class="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#services" className="nav-link">
              <i class="uil uil-scenery nav-icon"></i>Services
              </a>
            </li> */}
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i class="uil uil-briefcase-alt nav-icon"></i>Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i class="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav-close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav-toggle">
          <i
            class="uil uil-apps nav-toggle"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
