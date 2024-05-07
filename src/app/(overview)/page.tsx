'use client'
import Image from "next/image";
// Import Swiper styles
import Introduction from "../components/introduction";
import Welcome from "../components/welcome";
import Services from "../components/services";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <Image src={'/logo.png'} width={100} height={100} alt="Logo"  className="block sm:hidden"/>
      <Welcome/>
      <Introduction/>
      <Services/>
    </main>
  )
}
