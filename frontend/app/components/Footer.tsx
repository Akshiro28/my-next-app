import Link from 'next/link';

export default function Footer() {
  return (
    <nav className="border-t-1 border-[var(--foreground-20)] bg-[var(--background-80)] backdrop-blur-md text-[var(--foreground)] px-6 py-4 mt-[16px] w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2025 <a href="https://joviantogodjali.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Akshiro</a>. All Rights Reserved.</p>
        <div className="space-x-5">
          <Link href="https://github.com/Akshiro28/my-next-app" target="_blank" rel="noopener noreferrer" className="hover:underline">
            View project on GitHub →
          </Link>
        </div>
      </div>
    </nav>
  )
}
