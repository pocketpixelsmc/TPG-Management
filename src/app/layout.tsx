import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { inter, lexendDeca } from "./components/fonts";
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
      <body className={`${lexendDeca.className} h-full w-screen`}>
        <div className="flex flex-row items-start justify-between gap-4 w-full">
          <p className="p-4 px-6 bg-slate-200 text-blue-950 rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all text-wrap">
            We manage properties in Monmouth, Middlesex, Union, Somerset, and Hudson County
          </p>
          <a href="#">
            <button className="p-4 px-6 bg-blue-900 text-white rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all hover:bg-blue-700">
              Resident Login
            </button>
          </a>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
