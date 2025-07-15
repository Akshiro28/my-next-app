import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
}

const mockPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    excerpt: 'This is a short summary of my first blog post.',
  },
  {
    slug: 'learning-nextjs',
    title: 'Learning Next.js Step by Step',
    excerpt: 'Follow along as I learn how to build a blog using Next.js.',
  },
];

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {mockPosts.map((post) => (
          <li key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
