import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

// Tell Next.js this is a static page
export const dynamic = 'force-static';
export const revalidate = false;

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
        <h2 className="text-xl uppercase mb-4 font-helvetica-bold tracking-wider">
          ERROR: PAGE NOT FOUND
        </h2>
        <h1 className="text-8xl md:text-9xl font-adobe-caslon mb-6">
          404
        </h1>
        <div className="mb-8 text-center">
          <div>This page isn't available.</div>
        </div>
        <Link href="/">
          <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Go to Homepage
          </button>
        </Link>
      </div>
    </MainLayout>
  );
}
