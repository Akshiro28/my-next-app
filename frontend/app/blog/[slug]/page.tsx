'use client';

import { useParams } from 'next/navigation';

type Post = {
  title: string;
  content: string;
};

const mockPosts: { [key: string]: Post } = {
  'first-post': {
    title: 'My First Blog Post',
    content: `
      <p>This is the full content of my first blog post.</p>
      <img src="/images/vercel.svg" alt="First post image" width="400" />
    `,
  },
  'learning-nextjs': {
    title: 'Learning Next.js Step by Step',
    content: `
      <p>This post explains how I'm learning Next.js, one step at a time.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = mockPosts[slug];

  if (!post) return <h1>404 - Post Not Found</h1>;

  return (
    <main>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}
