import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <Link href="/" className="text-2xl md:text-3xl font-adobe-caslon uppercase tracking-wider">
            ADEOLA ADENIPEKUN
          </Link>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg font-helvetica-bold">Creative Director and Animator</p>
        </div>

        <div className="text-center mb-8">
          <a href="mailto:contact@mai-lasan.com" className="text-base font-open-sans hover:underline">
            theadeoalaadenipekun@gmail.com
          </a>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xl mx-auto mb-8">
          <div className="text-center">
            <p className="text-lg font-helvetica-bold mb-2">Bookings U.S.</p>
            <a href="mailto:info@forager.tv" className="block text-base font-open-sans hover:underline">
              info@forager.tv
            </a>
            <a href="https://www.forager.tv" target="_blank" rel="noopener noreferrer" className="block text-base font-open-sans hover:underline">
              www.forager.tv
            </a>
          </div>

          <div className="text-center">
            <p className="text-lg font-helvetica-bold mb-2">Bookings EU</p>
            <a href="mailto:booking@sec.studio" className="block text-base font-open-sans hover:underline">
              booking@sec.studio
            </a>
            <p className="text-base font-open-sans">+49 173 3084534</p>
            <a href="https://www.sec.studio" target="_blank" rel="noopener noreferrer" className="block text-base font-open-sans hover:underline">
              www.sec.studio
            </a>
          </div> 
        </div>*/}

        <div className="flex justify-center">
          <a href="https://www.instagram.com/thisisadeola/" target="_blank" rel="noopener noreferrer" className="p-2">
            <Image
              src="https://ext.same-assets.com/2823222569/2098079298.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
