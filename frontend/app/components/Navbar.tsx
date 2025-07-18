'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--foreground-20)] bg-[var(--background-90)] backdrop-blur-md text-[var(--foreground)] px-6 py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-semibold">
          <Link href="/">MyNextApp</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-5">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/json-placeholder" className="hover:underline">
            JSONPlaceholder API
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 pb-1">
          <Link href="/" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/json-placeholder" className="block hover:underline" onClick={() => setIsOpen(false)}>
            JSONPlaceholder API
          </Link>
          <Link href="/blog" className="block hover:underline" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
