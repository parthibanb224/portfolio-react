import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleFunc = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleFunc(1)}
          >
            <i class="uil uil-graduation-cap qualification-icon"></i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleFunc(2)}
          >
            <i class="uil uil-briefcase-alt qualification-icon"></i>Experience
          </div>
        </div>

        <div className="qualification-sections">
          <div
            className={
              toggleState === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">SSLC</h3>
                <span className="qualification-subtitle">
                  Nadar Saraswathi hr.sec school
                </span>
                <div className="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i>2012-2013
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">HSC</h3>
                <span className="qualification-subtitle">
                  Nadar Saraswathi hr.sec school
                </span>
                <div className="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i>2014-2015
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">BE/MECH</h3>
                <span className="qualification-subtitle">KCE</span>
                <div className="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i>2015-2019
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Software Developer</h3>
                <span className="qualification-subtitle">Urbanrise</span>
                <div className="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i>2023-present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
              </div>

              <div>
                <h3 className="qualification-title">Web development</h3>
                <span className="qualification-subtitle">freelance</span>
                <div className="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i>2023-present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
