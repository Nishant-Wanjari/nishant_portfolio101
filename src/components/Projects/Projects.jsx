import React from "react";
import ProjectCard from "../Projects/ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <ProjectCard
          title="ReferenceWriter.AI"
          main="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        
        <ProjectCard
          title="Banking Application"
          main="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <ProjectCard
          title="Kitaab-Ghar"
          main="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </div>
    </div>
  );
};

export default Projects;
