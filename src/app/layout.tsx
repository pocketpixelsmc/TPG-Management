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
      <body className={`${inter.className} h-screen w-screen`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
