import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b-1 border-[var(--foreground-20)] bg-[var(--background-90)] backdrop-blur-md text-[var(--foreground)] px-6 py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href="/">MyNextApp</Link>
        </div>
        <div className="space-x-5">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
