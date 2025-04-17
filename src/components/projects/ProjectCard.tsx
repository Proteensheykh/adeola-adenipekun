import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group relative">
      <div className="overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute bottom-0 right-0 left-0 block max-w-full px-2 bg-white/30 backdrop-blur-sm">
            <p className="project-category">{project.category}</p>
            <h3 className="text-sm md:text-base font-helvetica-bold mt-1">{project.title}</h3>
          </div>
        </div>
      </div>
      
    </Link>
  );
}
