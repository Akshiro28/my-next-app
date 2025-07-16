{/* import type { Metadata } from "next"; */}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="pt-[77px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
