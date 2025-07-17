'use client';

import { useParams } from 'next/navigation';
import { mockPosts } from '../mockPosts';
import type { BlogPost } from '../mockPosts';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post: BlogPost | undefined = mockPosts.find((p) => p.slug === slug);

  if (!post) return <h1 className="text-center py-16">404 - Post Not Found</h1>;

  return (
    <main className="bs-container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="mx-auto mb-8 max-w-full h-auto rounded"
      />
      <article
        className="prose prose-invert mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
