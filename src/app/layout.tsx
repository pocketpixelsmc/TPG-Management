import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { inter, lexendDeca } from "./components/fonts";
import Footer from "./components/footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

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
      <GoogleAnalytics />
      <body className={`${lexendDeca.className} h-full w-screen`}>
        <div className="flex flex-row items-start justify-end gap-4 w-full">
          <a href="https://tpgcompanies.managebuilding.com/Resident/portal/login" rel="noopener" target="_blank" >
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
