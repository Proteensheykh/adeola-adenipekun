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
              src="https://media-hosting.imagekit.io/59f0ca26bfa140e1/header-vid.mp4?Expires=1839499744&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MSaCWb4fPNkQB8W~1XGuo8pol2whL4YIfZHBH5z5dfDwoN1A6bgHnMSqD8fFGoVcRj9ik3ZZkYcrlqGdG2o0EtP8EY3biXpmwR8g6w0tBv~ApiddTfUmMvXp1IFTLY7N6nhjKHP2hrSG3BiCMBT-d14TB4YsQaxp8m21N-nZJGpforjpZX7HdBrLIIu1mJ~Stgs5LZZJwsJG6PJkdS-JErXz~Ny2F0xDWBFyecfbIflRNQM9vuAZYZlqNsZ-wB9tseXCazrykEDW9u2e~hDxsv4N7qug9r7HL8OV~5sg788xMFSO~prrSCm105vi89t8T45bfN~jKKnRL7kavR3mxg__"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="main-title text-white opacity-60">ADEOLA ADENIPEKUN</h1>
          </div>
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white opacity-40">CREATIVE DIRECTOR X ANIMATOR</h3>
          </div> */}
        </div>
      </div>
      <ProjectGrid projects={projects} />
    </MainLayout>
  );
}
