import React from "react";

const FrontEnd = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className="skills-name">Bootstrap</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
   
        <div className="skills-group">
          <div className="skills-data">
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
