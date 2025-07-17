'use client';

import { useParams } from 'next/navigation';
import { mockPosts } from '../mockPosts';
import type { BlogPost } from '../mockPosts';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post: BlogPost | undefined = mockPosts.find((p) => p.slug === slug);
  const articleRef = useRef<HTMLElement | null>(null);
  const [headings, setHeadings] = useState<{ text: string }[]>([]);

  useEffect(() => {
    if (!post || !articleRef.current) return;

    const timeout = setTimeout(() => {
      const headingElements = Array.from(articleRef.current!.querySelectorAll('h2'));
      const newHeadings = headingElements.map((el) => ({
        text: el.textContent || '',
      }));

      setHeadings(newHeadings);
    }, 0);

    return () => clearTimeout(timeout);
  }, [post]);

  if (!post) return <h1 className="text-center flex items-center justify-center min-h-[calc(100vh-154px)] text-4xl">404 - Post Not Found</h1>;

  return (
    <main className="bs-container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr_200px] gap-12">
      {/* Left nav */}
      <nav className="hidden lg:flex flex-col gap-2 sticky top-24 h-fit text-sm text-left">
        <p className="text mb-2 font-medium uppercase tracking-wider">On this page</p>
        {headings.map(({ text }) => (
          <button
            key={text}
            onClick={() => {
              if (!articleRef.current) return;

              const headings = Array.from(articleRef.current.querySelectorAll('h2'));
              const target = headings.find((el) => el.textContent?.trim() === text);

              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="text-left hover:underline underline-offset-4 text-[var(--foreground-50)] cursor-pointer"
          >
            {text}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <div className="text-left">
        <h1 className="text-5xl font-bold mb-2 text-center lg:text-left">{post.title}</h1>
        <p className="text-sm text-muted-foreground text-[var(--foreground-50)] mb-6">
          {post.author} · {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="mb-8">&quot;{post.excerpt}&quot;</p>
        <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <article
          ref={articleRef}
          className={`prose prose-invert mx-auto lg:mx-0 ${styles.article}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Right ad box */}
      <aside className="hidden lg:block sticky top-24 h-fit">
        <div className="bg-[var(--foreground-5)] p-4 rounded-lg text-sm text-center">
          <p className="font-semibold mb-2">Advertisement</p>
          <div className="h-40 bg-[var(--foreground-10)] rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Ad Placeholder</span>
          </div>
        </div>
      </aside>
    </main>
  );
}
