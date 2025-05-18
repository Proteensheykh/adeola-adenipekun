import MainLayout from "@/components/layout/MainLayout";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

// Tell Next.js this is a static page
export const dynamic = 'force-static';
export const revalidate = false;

export default function Home() {
  return (
    <MainLayout>
      <div className="relative w-full h-[80vh] bg-gray-100 flex items-center justify-center">
        <div className="relative overflow-hidden w-full h-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src="https://res.cloudinary.com/cloud42/video/upload/v1747565312/copy_326ACB09-F799-4E1B-8D3B-944A7E7EC5BB_uhn4yv.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="main-title text-white opacity-60">ADEOLA ADENIPEKUN</h1>
            <h3 className="professional-title text-white opacity-40">CREATIVE DIRECTOR X ANIMATOR</h3>
          </div>
          {/* <div className="absolute inset-0 flex items-center justify-center">
            
          </div> */}
        </div>
      </div>
      <ProjectGrid projects={projects} />
    </MainLayout>
  );
}
