import React, { useEffect, useState } from "react";
import { projects, projectsNav } from "./Data.js";
import ProjectItems from "./ProjectItems.js";
import "./project.css"

const Projects = () => {
    const [item,setItem] = useState({name : "all"});
    const [projectData,setProjectData] = useState([]);

    useEffect(() => {
        if(item.name === "all") {
            setProjectData(projects)
        }else{
            const newProject = projects.filter((project) =>{
                return project.category === item.name;
            })
            setProjectData(newProject);
        }
    },[item]);

    const handleClick = (e,index) => {
        setItem({name : e.target.textContent});
    }

  return (
    <div>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {
                handleClick(e,index);
            }} className="work-item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work-container container grid">
        {
            projectData.map((item) => {
                return <ProjectItems item={item} key={item.id} />
            })
        }
      </div>
    </div>
  );
};

export default Projects;
