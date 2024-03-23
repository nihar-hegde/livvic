import { Project } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

interface ProjectProps {
  data: Project;
}

export const ProjectCard = (data: ProjectProps) => {
  return (
    <div className="group flex flex-col gap-4 h-auto w-full shadow-md rounded-sm hover:border hover:border-primary-color">
      {" "}
      {/* h-auto, less spacing */}
      <div className="">
        {" "}
        {/* Image container */}
        <Image
          src={data.data.image.url}
          alt="Project Image"
          width={700}
          height={400}
          className="object-cover" // Maintain aspect ratio
        />
      </div>
      <div className="flex flex-col items-start p-4">
        {" "}
        {/* Smaller padding */}
        <h1 className="text-2xl font-bold pb-2">{data.data.title}</h1>
        <div className="flex flex-wrap gap-2">
          {data.data.techStack.map((item) => (
            <Badge key={item} className="px-3 py-1 rounded-sm">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
