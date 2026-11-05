import type { Project } from "../types/project";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-4">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-950 mt-4 inline-block"
      >
        View Project{" "}
        <ArrowRight size={20} className="text-blue-950 inline-block" />
      </a>
    </article>
  );
};
