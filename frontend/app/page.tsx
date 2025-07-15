import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold mb-6">MyNextApp</h1>
      <p className="max-w-[50vw] w-84 break-keep mx-auto">Learning. Belajar. <span className="font-bold">学ぶ.</span> Lernen. Apprentissage. <span className="font-bold">обучение.</span> <span className="font-bold">学习.</span> Aprendiendo. <span className="font-bold">학습.</span></p>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
    </div>
  );
}
