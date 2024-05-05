import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { inter } from "./components/fonts";

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
        <a href="#" className="top-0 right-0 block relative w-screen">
          <button className="p-2 bg-slate-400 rounded-r-xl text-center text-xs">
            Resident and Owner
          </button>
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
