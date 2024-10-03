import Image from "next/image";
import Team from "../components/team";
import Missions from "../components/missions";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
      <Image src={"/logo.png"} width={100} height={100} alt="Logo" className="block sm:hidden self-center" />
      <h1 className="text-3xl text-blue-900 font-bold">Managing Property is hard - We make it easy</h1>
      <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[500px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
        <h1 className="text-2xl font-bold text-blue-900">How we started?</h1>
        <p className="text-xl text-blue-950 text-left leading-loose">
          We launched TPG Property Management as experienced investors in both multi-family and retail properties. Using the knowledge and
          infrastructure we developed while managing our own portfolio, we recognized an opportunity to assist other investors and property owners. By
          leveraging our hands-on property ownership experience, we offer comprehensive management solutions tailored to maximize property performance
          and streamline operations for our clients.
        </p>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <h1 className="text-4xl text-blue-900 font-bold self-center">Our Team</h1>
      <Team />
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <h1 className="text-4xl text-blue-900 font-bold self-center">Mission and Core Values</h1>
      <Missions />
    </main>
  );
}
