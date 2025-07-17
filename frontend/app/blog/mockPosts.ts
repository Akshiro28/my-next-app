export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  date: string;
};

export const mockPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    excerpt: 'This is a short summary of my first blog post.',
    image: '/images/blog/my-first-blog-post.jpg',
    content: `
      <p>This is the full content of my first blog post.</p>
      <img src="/images/vercel.svg" alt="First post image" width="400" />
    `,
    author: 'John Doe',
    date: '2025-07-17',
  },
  {
    slug: 'learning-nextjs',
    title: 'Learning Next.js Step by Step',
    excerpt: 'Follow along as I learn how to build a blog using Next.js.',
    image: '/images/blog/learning-nextjs-step-by-step.webp',
    content: `
      <p>This post explains how I'm learning Next.js, one step at a time.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Lacy Cobb',
    date: '2025-07-16',
  },
  {
    slug: 'nextjs-is-awesome',
    title: 'Next.js is awesome!',
    excerpt: 'Fullstack capabilities in a React framework.',
    image: '/images/blog/nextjs.png',
    content: `
      <p>This is the third post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Vince Boyer',
    date: '2025-07-16',
  },
  {
    slug: 'react-ui-made-modular',
    title: 'React: UI made modular',
    excerpt: 'A component-based architecture that makes your UI modular, reusable, and easier to manage.',
    image: '/images/blog/react.png',
    content: `
      <p>This is the fourth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Shirley Kane',
    date: '2025-07-15',
  },
  {
    slug: 'tailwind-rapid-ui-development',
    title: 'Tailwind: Rapid UI development with utility-first precision',
    excerpt: 'Utility-first styling that lets you build custom, responsive designs fast.',
    image: '/images/blog/tailwind.webp',
    content: `
      <p>This is the fifth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Jeanne Hoffman',
    date: '2025-07-13',
  },
  {
    slug: 'typescript-write-safer-javascript-code',
    title: 'TypeScript: Write safer JavaScript with confidence',
    excerpt: 'Catches bugs before you run the code by adding static typing to JavaScript.',
    image: '/images/blog/typescript.png',
    content: `
      <p>This is the sixth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Toney Buchanan',
    date: '2025-07-12',
  },
  {
    slug: 'vercel-ship-web-apps',
    title: 'Vercel: Ship web apps at the speed of push.',
    excerpt: 'One-command deployment with global CDN, built-in CI, and seamless support for Next.js and frontend frameworks.',
    image: '/images/blog/vercel.jpg',
    content: `
      <p>This is the seventh post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Maggie Strickland',
    date: '2025-07-10',
  },
  {
    slug: 'frontend-vs-backend-development',
    title: 'Frontend vs Backend Development?',
    excerpt: 'Frontend is what users see; backend is how it works.',
    image: '/images/blog/frontend-vs-backend.jpg',
    content: `
      <p>This is the eighth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Aida Goodman',
    date: '2025-07-09',
  },
  {
    slug: 'vscode-the-lightweight-editor',
    title: 'VS Code: The lightweight editor that does everything.',
    excerpt: 'A fast, lightweight, and highly customizable code editor with powerful extensions, built-in Git, and intelligent developer tools.',
    image: '/images/blog/vscode.png',
    content: `
      <p>This is the nineth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Chong Fuller',
    date: '2025-07-06',
  },
  {
    slug: 'terminal-control-your-entire-project',
    title: 'Terminal: Control your entire project with just your keyboard.',
    excerpt: 'A terminal is a text-based interface that lets you interact with your computer or project by typing commands instead of clicking buttons.',
    image: '/images/blog/terminal.png',
    content: `
      <p>This is the tenth post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Hector Stanley',
    date: '2025-07-06',
  },
  {
    slug: 'responsive-design-perfect-fit',
    title: 'Responsive design: One website, perfect fit for every screen.',
    excerpt: 'Responsive design ensures your website or app looks and works great on all screen sizes.',
    image: '/images/blog/responsive-design.jpg',
    content: `
      <p>This is the eleventh post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Sara Mclean',
    date: '2025-07-05',
  },
  {
    slug: 'api-the-bridge-that-connects',
    title: 'API: The bridge that connects your frontend to the data it needs.',
    excerpt: 'An API (Application Programming Interface) lets different parts of your project or entirely different apps to talk to each other by sending and receiving data.',
    image: '/images/blog/api.png',
    content: `
      <p>This is the eleventh post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Belinda Willis',
    date: '2025-07-03',
  },
  {
    slug: 'enc-flexible-configuration',
    title: '.env: Secure, flexible configuration for every environment.',
    excerpt: 'A .env file stores environment variables like API keys, database URLs, or secret tokens outside your source code to keep them secure and configurable.',
    image: '/images/blog/env.webp',
    content: `
      <p>This is the eleventh post.</p>
      <img src="/images/next.svg" alt="Learning Next.js" width="400" />
    `,
    author: 'Rufus Rice',
    date: '2025-07-03',
  },
];
