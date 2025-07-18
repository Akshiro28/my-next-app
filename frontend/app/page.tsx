import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
        <div className="bs-container mx-auto text-center ring lg:p-24 md:p-18 p-12 rounded-xl ring-[var(--foreground-20)] relative">
          <h1 className="md:text-6xl text-4xl font-bold mb-8">MyNextApp</h1>
          <p className="md:max-w-[50vw] md:w-84 break-keep mx-auto mb-8">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/json-placeholder" className="w-full md:w-auto">
              <span className="block w-full md:w-auto text-center px-5 py-2 bg-sky-700 rounded hover:bg-sky-800">
                JSONPlaceholder API
              </span>
            </Link>

            <ProductCard />
          </div>

          <div className="h-10 w-4 absolute bottom-0 left-[50%] ring ring-[var(--foreground-20)] rounded-full bg-[var(--background)] translate-y-[50%] translate-x-[-50%] py-1.25">
            <div className="w-2 h-2 bg-[var(--foreground-20))] rounded-full absolute left-[50%] translate-x-[-50%] infinite-scroll"></div>
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

      <div className="md:min-h-[calc(100vh-154px)] flex-1 flex items-center text-center md:text-start">
        <div className="bs-container mx-auto ring lg:p-24 md:p-18 p-12 rounded-xl ring-[var(--foreground-20)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">
            <div>
              <h1 className="md:text-6xl text-4xl font-bold mb-8">Blog</h1>
              <p className="break-keep mb-8">
                A playful blog built with Next.js that adapts to every dataset you explore!
              </p>

              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mb-8 md:mb-0">
                <Link href="/blog" className="w-full md:w-auto">
                  <span className="block w-full md:w-auto text-center px-5 py-2 bg-sky-700 rounded hover:bg-sky-800">
                    Blog
                  </span>
                </Link>

                <ProductCard />
              </div>
            </div>
            
            <div className="grid grid-cols-2 xl:gap-8 lg:gap-6 md:gap-4 gap-3">
              {/* Left wireframe */}
              <div className="ring ring-[var(--foreground-20)] rounded-md p-1">
                <div className="w-full max-w-full text-left">
                  <ul className="grid grid-cols-4 auto-rows-[1fr] gap-1">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <li
                        key={index}
                        className={`
                          border border-[var(--foreground-20)] p-2 rounded 
                          ${index === 0 ? 'col-span-2 row-span-2' : ''}
                          flex flex-col justify-between
                        `}
                      >
                        <div className="aspect-[16/9] w-full mb-2 border border-[var(--foreground-20)] rounded bg-[var(--foreground-3)]" />
                        
                        <div className={`${index === 0 ? 'h-6 w-2/3 mb-2' : 'h-2 w-3/4 mb-3'} border border-[var(--foreground-20)] rounded`} />

                        {index === 0 && (
                          <div className="h-6 w-full border border-[var(--foreground-20)] rounded" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right wireframe */}
              <div className="ring ring-[var(--foreground-20)] rounded-md p-1 h-full justify-between grid grid-cols-[1fr_2fr_1fr] gap-2">
                <div>
                  <div className="h-4 w-full mb-2 border border-[var(--foreground-20)] rounded" />
                  <div className="h-2 w-1/2 mb-1 border border-[var(--foreground-20)] rounded" />
                  <div className="h-2 w-1/2 mb-1 border border-[var(--foreground-20)] rounded" />
                </div>
                
                <div>
                  <div className="w-full aspect-[16/9] mb-2 rounded-md border border-[var(--foreground-20)] bg-[var(--foreground-3)]" />

                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-4 w-full border border-[var(--foreground-20)] rounded" />
                    ))}
                  </div>
                </div>

                <div className="rounded-md text-center">
                  <div className="h-12 rounded-md bg-[var(--foreground-10)] flex items-center justify-center border border-[var(--foreground-20)]"></div>
                </div>
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

      <div className="md:min-h-[calc(100vh-154px)] flex-1 flex items-center">
        <div className="bs-container mx-auto text-center ring lg:p-24 md:p-18 p-12 rounded-xl ring-[var(--foreground-20)]">
          <h1 className="md:text-6xl text-4xl font-bold mb-8">MyNextApp</h1>
          <p className="max-w-[50vw] w-84 break-keep mx-auto mb-8">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/json-placeholder" className="w-full md:w-auto">
              <span className="block w-full md:w-auto text-center px-5 py-2 bg-sky-700 rounded hover:bg-sky-800">
                JSONPlaceholder API
              </span>
            </Link>

            <ProductCard />
          </div>
        </div>
      </div>

      <div className="bs-container mx-auto my-[77px]">
        <div className="flex items-center gap-4 text-[var(--foreground-20)]">
          <svg width="12" height="12" viewBox="0 0 100 100" className="fill-[var(--foreground-20)]">
            <polygon points="50,0 100,100 0,100" />
          </svg>
          <p>FIN</p>
          <hr className="flex-1 border-t border-[var(--foreground-20)]" />
        </div>
      </div>
    </>
  );
}
