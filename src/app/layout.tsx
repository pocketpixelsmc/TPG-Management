import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import { lexendDeca } from "./components/fonts";
import Footer from "./components/layout/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import JsonLd from './components/JsonLd';

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
    <html lang="en" className="h-full scroll-smooth p-0">
      <head>
        <JsonLd />
        <link rel="canonical" href="https://www.tpgmanagement.net" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_MID_GTM}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MID_GA}`} />
      <body className={`${lexendDeca.className} antialiased w-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
