import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleFunc = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">My Services</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i class="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Product <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleFunc(1)} className="services-button">
            View more<i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleFunc(0)} class="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Product <br /> Designer</h3>
              <p className="services-modal-description">
                Services more that a year of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created user interface
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development</p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created UX element interaction
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I'll position your company brand
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i class="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleFunc(2)} className="services-button">
            View more<i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleFunc(0)} class="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">UI/UX <br /> Designer</h3>
              <p className="services-modal-description">
                Services more that a year of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created user interface
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development</p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created UX element interaction
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I'll position your company brand
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i class="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleFunc(3)} className="services-button">
            View more<i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleFunc(0)} class="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Visual <br /> Designer</h3>
              <p className="services-modal-description">
                Services more that a year of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created user interface
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development</p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I have created UX element interaction
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I'll position your company brand
                  </p>
                </li>

                <li className="services-modal-service">
                  <i class="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
