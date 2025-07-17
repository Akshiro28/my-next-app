import Link from 'next/link';
import { mockPosts } from './mockPosts';

export default function BlogIndexPage() {
  return (
    <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
      <div className="bs-container mx-auto text-center ring p-12 rounded-xl ring-[var(--foreground-20)]">
        <h1 className="text-6xl font-bold mb-8">Blog Posts</h1>
        <p className="mb-8">Browse through a collection of practice blog posts created while learning Next.js!</p>

        <ul className="grid grid-cols-1 md:grid-cols-4 auto-rows-[1fr] gap-6 text-left">
          {mockPosts.map((post, index) => (
            <li
              key={post.slug}
              className={`ring ring-[var(--foreground-20)] p-6 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)] 
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div>
                  <div className="aspect-[16/9] w-full mb-4 overflow-hidden rounded">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={`font-semibold hover:underline hover:decoration-1 decoration-[var(--foreground-20)] underline-offset-6 mb-2 ${index === 0 ? 'text-3xl' : 'text-lg'}`}>
                    {post.title}
                  </p>
                </div>
              </Link>

              {index === 0 && (
                <p className="my-2">{post.excerpt}</p>
              )}

              <p className="text-sm text-muted-foreground text-[var(--foreground-50)]">
                {post.author} · {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
