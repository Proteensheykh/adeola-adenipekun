import type { Project } from '@/types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="px-6 md:px-10 py-12">
      <h2 className="uppercase text-center mb-6 text-xl lg:text-3xl tracking-wider font-adobe-caslon">SELECTION</h2>
      <div className="project-grid grid lg:grid-cols-3 sm:gap-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
