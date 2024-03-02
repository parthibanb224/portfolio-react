import React from "react";
import "./project.css";

const ProjectItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt={item.title} className="work-img" />
      <div>

      <h3 className="work-title">{item.title}</h3>
      <h4>{item.category}</h4>
      </div>
      <span>{item.desc}</span>
      <div className="link-buttons">
        <a href={item.FECode} className="code-button" target="_blank" rel="noreferrer">Frontend code</a>
        <a href={item.link} className="work-button" target="_blank" rel="noreferrer">
          Demo<i className="uil uil-arrow-right work-button-icon"></i>{" "}
        </a>
        {item.BECode ? <a href={item.BECode} className="code-button" target="_blank" rel="noreferrer">Backend code</a> : <></>}
      </div>
    </div>
  );
};

export default ProjectItems;
