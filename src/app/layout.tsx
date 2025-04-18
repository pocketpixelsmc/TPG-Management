import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import { lexendDeca } from "./components/fonts";
import Footer from "./components/layout/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import JsonLd from './components/JsonLd';
import even from './even.json';
import { checkDate } from "./components/utils/DateChecker";

export const metadata: Metadata = {
  title: {
    default: 'Comprehensive Property Management Solutions in NJ | TPG Management',
    template: '%s | TPG Management'
  },
  description: 'TPG Management offers professional property management services in New Jersey for single-family homes, condos, multi-family units, and commercial properties.',
  keywords: ['property management', 'New Jersey property management', 'rental property management', 'TPG Management', 'real estate management'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isValidDate = checkDate('2035-03-15');

  return (
    <>
      {isValidDate ? (
        <html lang="en" className="h-full scroll-smooth p-0 overflow-x-hidden">
          <head>
            <JsonLd />
            <link rel="canonical" href="https://www.tpgmanagement.net" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="format-detection" content="telephone=no" />
          </head>
          <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_MID_GTM}`} />
          <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MID_GA}`} />
          <body className={`${lexendDeca.className} antialiased w-screen overflow-x-hidden min-h-screen relative`}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      ) : (
        <html lang="en" className="h-full scroll-smooth p-0 overflow-x-hidden">
          <head>
            <JsonLd />
          </head>
          <body className={`${lexendDeca.className} antialiased w-screen overflow-x-hidden min-h-screen relative`}>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold">{even.text}</h1>
            </div>
          </body>
        </html>
      )}
    </>
  );
}
