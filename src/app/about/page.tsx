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
        Adeola is a multidisciplinary creative director and visual strategist with a passion for crafting compelling, visually-rich stories that connect deeply with audiences. With a background in production design, stop-motion animation, content creation and marketing, she brings a unique blend of artistic vision and strategic thinking to every project.  
        </p>

        <p className="dark:text-gray-300">
        In 2024, she founded 17:17 creations, a creative production outfit where she leads a team that helps brands tell visually stimulating stories through bold creative direction, imaginative set design, and high-quality video production. She has collaborated with entertainment, commercial , and lifestyle brands, creating realistic worlds, crafting immersive experiences and scroll-stopping content that not only looks good but feels intentional, immersive, and results-driven.
        </p>

        <p className="dark:text-gray-300">
        Her work is rooted in a deep understanding of storytelling, attention to detail, and an ability to translate abstract ideas into tangible, scroll-stopping visuals. Wheth...
        </p>
      </div>
    </MainLayout>
  );
}
