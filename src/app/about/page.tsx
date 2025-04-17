import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

// Tell Next.js this is a static page
export const dynamic = 'force-static';
export const revalidate = false;

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="relative w-full h-[50vh] bg-gray-100 dark:bg-gray-900">
        <Image
          src="https://ext.same-assets.com/2417499769/2527171713.jpeg"
          alt="ADEOLA ADENIPEKUN"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-adobe-caslon uppercase tracking-wide text-white">
            ABOUT
          </h1>
        </div>
      </div>

      <div className="about-content">
        <p className="dark:text-gray-300">
          ADEOLA ADENIPEKUN is a colourist from Berlin whose work is defined by a combination of her passion for visual aesthetic and determined perfectionism.
        </p>

        <p className="dark:text-gray-300">
          She's consistently emphasizing on the infinite beauty of skin tones and harmony of colours.
        </p>

        <p className="dark:text-gray-300">
          In the early days of her career, Mai's focus was all on gaining perspective: Living and working in Tokyo and Barcelona enabled her to not only speak four languages, but also to see things from a different perspective.
        </p>

        <p className="dark:text-gray-300">
          Since 2012, Mai has been constantly working for and with numerous top-notch film productions, directors and artists.
        </p>

        <p className="dark:text-gray-300">
          After she returned from living in Tokyo, she started out as a post production junior and worked at several productions in Berlin and Munich.
        </p>

        <p className="dark:text-gray-300">
          Later she carried on as a freelance editor and director to then specialise as a colourist working for various international productions, post houses, agencies and artists.
        </p>

        <p className="dark:text-gray-300">
          The focus on colours began in 2016 when she moved to Barcelona to attend private classes in colour grading with one of Barcelona's most renowned colourists.
        </p>

        <p className="dark:text-gray-300">
          In 2017, Mai worked together with a senior colourist in Berlin and then developed her abilities in color grading independently.
        </p>

        <p className="dark:text-gray-300">
          In 2020 she went back to Tokyo to join Digital Garden Inc.
        </p>

        <p className="dark:text-gray-300">
          Since 2022 she has expanded her base to Cape Town, Lagos and L.A and works on beautiful projects across the globe.
        </p>
      </div>
    </MainLayout>
  );
}
