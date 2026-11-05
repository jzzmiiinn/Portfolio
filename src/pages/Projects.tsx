import { ProjectCard } from "../components/ProjectCard";
import { Projects as Project } from "../data/projects";

export const Projects: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-950">
        MY PROJECTS
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {Project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
