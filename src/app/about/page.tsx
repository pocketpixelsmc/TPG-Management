import Image from "next/image";
import Team from "../components/team";
import Missions from "../components/missions";

export default function Home() {
    return (
        <main className=" flex flex-col items-start justify-center gap-8 mt-4 sm:mt-16 p-4 pb-0">
            <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt="Logo"
                className="block sm:hidden self-center"
            />
            <h1 className="text-4xl text-blue-900 font-bold text-left">
                Managing Property is hard
            </h1>
            <h1 className="text-3xl text-blue-900 font-bold text-left">
                We make it easy
            </h1>
            <p className="text-lg max-w-[80%] text-left leading-8">
                Our venture into property management stemmed from a personal quest for
                excellence. Faced with the challenges of finding a reliable management
                company for our own assets, we recognized a glaring gap in the industry.
                Our commitment is built upon rectifying these deficiencies; we
                prioritize responsiveness, fairness, and a thorough understanding of the
                investment landscape. By leveraging our firsthand experience as property
                owners, we&apos;ve crafted a service that prioritizes your needs and ensures
                fiscal responsibility. Entrust us with your property, and experience the
                ease and peace of mind that comes with a dedicated partner invested in
                your success.
            </p>
            <div className="flex flex-col items-start justify-center gap-4 mt-4 p-16 bg-slate-300 max-w-[620px] lg:max-w-[1000px] rounded-xl">
                <h1 className="text-2xl font-bold text-blue-900">
                    How we started?
                </h1>
                <p className="text-xl text-blue-950 text-left leading-loose">
                    Our venture into property management stemmed from a personal quest for
                    excellence. Faced with the challenges of finding a reliable management
                    company for our own assets, we recognized a glaring gap in the industry.
                    Our commitment is built upon rectifying these deficiencies; we
                    prioritize responsiveness, fairness, and a thorough understanding of the
                    investment landscape. By leveraging our firsthand experience as property
                    owners, we&apos;ve crafted a service that prioritizes your needs and ensures
                    fiscal responsibility. Entrust us with your property, and experience the
                    ease and peace of mind that comes with a dedicated partner invested in
                    your success.
                </p>
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <h1 className="text-4xl text-blue-900 font-bold self-center">
                Our Team
            </h1>
            <Team/>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <h1 className="text-4xl text-blue-900 font-bold self-center">
                Mission and Core Values
            </h1>
            <Missions/>
        </main>
    );
}
