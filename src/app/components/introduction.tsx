import { plusJakartaSans } from "./fonts";

export default function Introduction() {
    return (
        <section className={`flex flex-col items-center justify-center gap-4 mt-4 sm:mt-8 ${plusJakartaSans.className} text-center`}>
            <div className=" py-4 w-screen bg-blue-900 text-white">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Your All-In-One Property Management Company</h1>
            </div>
            <p className="text-sm lg:text-lg max-w-[65%]">
                Choosing TPG Management means entrusting your investments to seasoned professionals committed to your success. From seamless tenant management to proactive maintenance and robust financial oversight, we ensure your properties are not just managed, but optimized for maximum returns. With us, you can enjoy passive income without the stress, knowing your assets are in capable hands. Coupled with our round-the-clock availability, our dedicated team tirelessly handles everything from maintenance emergencies to rent collection, ensuring your properties are managed efficiently and effectively, day or night.
            </p>
            <video src="/stockv1.mp4" width="340px" autoPlay muted loop className="block sm:w-[520px] md:w-[840px] lg:w-[1080px]" />
        </section>
    )
}