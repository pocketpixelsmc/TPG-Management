import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { inter } from "./components/fonts";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "TPG Management",
  description: "All you need for your Property Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-screen`}>
        <a href="#" className="top-0 right-0 block absolute">
          <button className="p-2 bg-blue-900 text-white rounded-l-xl text-center text-xs">
            Resident Login
          </button>
        </a>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
