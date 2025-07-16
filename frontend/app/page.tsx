import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
      <div className="bs-container mx-auto text-center ring py-24 rounded-xl ring-[var(--foreground-20)]">
        <h1 className="text-6xl font-bold mb-8">MyNextApp</h1>
        <p className="max-w-[50vw] w-84 break-keep mx-auto mb-8">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
        
        <div className="flex justify-center items-center gap-4">
          <Link href="/users">
            <span className="inline-block px-5 py-2.25 bg-sky-700 rounded hover:bg-sky-800">
              Users
            </span>
          </Link>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
}
