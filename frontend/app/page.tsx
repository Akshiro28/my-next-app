import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
        <div className="bs-container mx-auto text-center ring py-24 rounded-xl ring-[var(--foreground-20)]">
          <h1 className="text-6xl font-bold mb-8">MyNextApp</h1>
          <p className="max-w-[50vw] w-84 break-keep mx-auto mb-8">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
          
          <div className="flex justify-center items-center gap-4">
            <Link href="/json-placeholder">
              <span className="inline-block px-5 py-2.25 bg-sky-700 rounded hover:bg-sky-800">
                JSONPlaceholer API
              </span>
            </Link>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>

      <div className="bs-container mx-auto my-[77px]">
        <div className="flex items-center gap-4 text-[var(--foreground-20)]">
          <svg width="12" height="12" viewBox="0 0 100 100" className="fill-[var(--foreground-20)]">
            <polygon points="50,0 100,100 0,100" />
          </svg>
          <p>01</p>
          <hr className="flex-1 border-t border-[var(--foreground-20)]" />
        </div>
      </div>

      <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
        <div className="bs-container mx-auto ring p-24 rounded-xl ring-[var(--foreground-20)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <h1 className="text-6xl font-bold mb-8">Blog</h1>
              <p className="break-keep mb-8">
                A playful blog built with Next.js that adapts to every dataset you explore!
              </p>

              <div className="flex items-center gap-4">
                <Link href="/blog">
                  <span className="inline-block px-5 py-2.25 bg-sky-700 rounded hover:bg-sky-800">
                    Blog
                  </span>
                </Link>
                <ProductCard />
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="ring ring-[var(--foreground-20)] rounded-md p-2">
                <div className="w-full max-w-full text-left">
                  <ul className="grid grid-cols-1 md:grid-cols-4 auto-rows-[1fr] gap-1">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <li
                        key={index}
                        className={`
                          border border-[var(--foreground-20)] p-4 rounded 
                          ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                          flex flex-col justify-between
                        `}
                      >
                        {/* Image Placeholder */}
                        <div className="aspect-[16/9] w-full mb-3 border border-[var(--foreground-20)] rounded" />

                        {/* Title */}
                        <div className={`mb-2 ${index === 0 ? 'h-6 w-2/3' : 'h-4 w-3/4'} border border-[var(--foreground-20)] rounded`} />

                        {/* Excerpt (only on featured) */}
                        {index === 0 && (
                          <div className="h-3 w-full border border-[var(--foreground-20)] rounded my-1.5" />
                        )}

                        {/* Meta */}
                        <div className="h-2.5 w-1/2 border border-[var(--foreground-20)] rounded mt-auto" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="b">
                b
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bs-container mx-auto my-[77px]">
        <div className="flex items-center gap-4 text-[var(--foreground-20)]">
          <hr className="flex-1 border-t border-[var(--foreground-20)]" />
          <svg width="12" height="12" viewBox="0 0 100 100" className="fill-[var(--foreground-20)]">
            <polygon points="50,0 100,100 0,100" />
          </svg>
          <p>02</p>
        </div>
      </div>

      <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
        <div className="bs-container mx-auto text-center ring py-24 rounded-xl ring-[var(--foreground-20)]">
          <h1 className="text-6xl font-bold mb-8">MyNextApp</h1>
          <p className="max-w-[50vw] w-84 break-keep mx-auto mb-8">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
          
          <div className="flex justify-center items-center gap-4">
            <Link href="/json-placeholder">
              <span className="inline-block px-5 py-2.25 bg-sky-700 rounded hover:bg-sky-800">
                JSONPlaceholer API
              </span>
            </Link>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </>
  );
}
