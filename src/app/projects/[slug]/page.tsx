import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';

// Tell Next.js this is a static page
export const dynamic = 'force-static';
export const revalidate = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This is now a server component that gets data at build time
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Find the project data at build time
  const project = projects.find(p => p.slug === params.slug);

  // If the project doesn't exist, show the 404 page
  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="project-detail">
        {/* Main image */}
        <div className="w-full relative aspect-video mb-8 dark:shadow-md dark:shadow-gray-900">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project info */}
        <div className="project-detail-header">
          <div className="project-detail-info">
            <h4 className="text-sm uppercase tracking-wider dark:text-gray-300">PRODUCTION:</h4>
            <h3 className="text-lg font-adobe-caslon">{project.production || 'N/A'}</h3>
          </div>

          <div className="project-detail-info">
            <h4 className="text-sm uppercase tracking-wider dark:text-gray-300">DIRECTOR:</h4>
            <h3 className="text-lg font-adobe-caslon">{project.director || 'N/A'}</h3>
          </div>

          <div className="project-detail-info">
            <h4 className="text-sm uppercase tracking-wider dark:text-gray-300">DOP:</h4>
            <h3 className="text-lg font-adobe-caslon">{project.dop || 'N/A'}</h3>
          </div>
        </div>

        {/* Project images */}
        <div className="project-detail-media grid lg:grid-cols-3">
          {project.images.slice(1).map((image, index) => (
            <div key={`${project.id}-image-${index}`} className="w-full relative aspect-video dark:shadow-md dark:shadow-gray-900">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-sm uppercase font-helvetica-bold hover:underline">
            GO BACK
            <span className="ml-1">&#10230;</span>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
