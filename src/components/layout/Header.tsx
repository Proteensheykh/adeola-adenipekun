'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/theme/mode-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`site-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link href="/" className="text-xl md:text-2xl font-adobe-caslon uppercase tracking-wider">
        ADEOLA ADENIPEKUN
      </Link>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        <div
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-background p-6 md:p-10 shadow-md animate-accordion-down z-50">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-open-sans hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-lg font-open-sans hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
