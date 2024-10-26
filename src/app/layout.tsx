import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { lexendDeca } from "./components/fonts";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Trusted Property & Condo Management Companies in New Jersey",
  description:
    "Professional property management companies in New Jersey specializing in condo management. Offering comprehensive property services across New Jersey. Visit us today!",
  keywords: ["property management companies new jersey", "condo management companies nj", "property in new jersey"],
  openGraph: {
    images:
      "https://cdn.discordapp.com/attachments/1226052805970624553/1299628115273715732/image.png?ex=671de480&is=671c9300&hm=566fc2bfc965e6a4016f59eee9a950e27ebdff153a5533d310626b92acba595b&",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-screen">
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
      <body className={`${lexendDeca.className}`}>
        <div className="flex flex-row items-start justify-end gap-4 w-full">
          <a href="https://tpgcompanies.managebuilding.com/Resident/portal/login" rel="noopener" target="_blank">
            <button className="p-4 px-6 bg-blue-900 text-white rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all hover:bg-blue-700">
              Resident Login
            </button>
          </a>
          <a href="#" rel="noopener" target="_blank">
            <button className="p-4 px-6 bg-blue-900 text-white rounded-xl rounded-t-none text-center text-xs md:text-sm transition-all hover:bg-blue-700">
              Owner Login
            </button>
          </a>
          <p className="p-4 px-6 rounded-xl rounded-t-none text-center text-xs md:text-sm">Call at (732) 978-9390</p>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
