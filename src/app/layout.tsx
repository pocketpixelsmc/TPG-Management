import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { lexendDeca } from "./components/fonts";
import Footer from "./components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trusted Property & Condo Management Companies in New Jersey",
  description:
    "Professional property management companies in New Jersey specializing in condo management. Offering comprehensive property services across New Jersey. Visit us today!",
  keywords: ["property management companies new jersey", "condo management companies nj", "property in new jersey"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-screen">
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_MID_GTM}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MID_GA}`} />
      <body className={`${lexendDeca.className}`}>
        <div className="flex-row items-start justify-end gap-4 w-full hidden lg:flex">
          <a href="https://tpgcompanies.managebuilding.com/Resident/portal/login" rel="noopener" target="_blank">
            <button className="p-4 px-6 bg-blue-900 text-white rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all hover:bg-blue-700">
              Resident Login
            </button>
          </a>
          <a href="https://tpgcompanies.managebuilding.com/manager" rel="noopener" target="_blank">
            <button className="p-4 px-6 bg-blue-900 text-white rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all hover:bg-blue-700">
              Owner Login
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
