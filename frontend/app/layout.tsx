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
      <body
        className={`flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="flex-1 flex items-center justify-center text-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
