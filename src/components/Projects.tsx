import { Project } from "@/lib/types";
import React from "react";
import { ProjectCard } from "./ProjectCard";

interface Props {
  projectData: Project[];
}

export const Projects = (projectData: Props) => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-10 px-5 md:px-20 py-10 mt-10 container w-full" // Adjusted padding
    >
      <h1 className="flex items-center justify-center text-3xl md:text-4xl font-semibold">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {" "}
        {/* Responsive Grid */}
        {projectData.projectData.reverse().map((item) => (
          <ProjectCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};
