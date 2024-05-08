import Link from "next/link";
import { plusJakartaSans } from "./fonts";

export default function Introduction() {
    return (
        <section className={`mt-4 sm:mt-8 text-center max-w-[1300px]`}>
            <div className="flex flex-col md:flex-row text-left items-center justify-center gap-8 p-4">
                <video src="/introVid.mp4" width="1920px" controls className="w-[400px] sm:w-[600px] md:w-[400px] lg:w-[680px] block" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">Your All-In-One Property Management Company</h1>
                    <p className="text-sm leading-8">
                        Choosing TPG Management means entrusting your investments to seasoned professionals committed to your success. From seamless tenant management to proactive maintenance and robust financial oversight, we ensure your properties are not just managed, but optimized for maximum returns. With us, you can enjoy passive income without the stress, knowing your assets are in capable hands. Coupled with our round-the-clock availability, our dedicated team tirelessly handles everything from maintenance emergencies to rent collection, ensuring your properties are managed efficiently and effectively, day or night.
                    </p>
                    <Link href={"/contact"}>
                        <button className="bg-blue-900 text-white p-4 px-8 self-end rounded-lg transition-all hover:bg-blue-700">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}