import Image from "next/image";
import { plusJakartaSans } from "./fonts";
import Link from "next/link";

export default function Services() {
    return (
        <section className={`flex flex-col items-center justify-center gap-4 text-center ${plusJakartaSans.className}`}>
            <div className=" py-4 w-screen bg-blue-900 text-white">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">What we offer</h1>
            </div>
            <p className="text-sm lg:text-lg max-w-[60%]">
                Unlock the true potential of your investment property with our expert property management services, providing peace of mind, optimal returns, and hassle-free ownership.
            </p>
            <div className="grid lg:grid-cols-auto-fit-300 gap-2 mt-4 grid-cols-auto-fit-200  w-[90%] sm:w-[624px] lg:w-[924px] place-items-center">
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/pom.png' alt="peace of mind" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/pom.png' alt="peace of mind" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Peace of Mind</h4>
                        <p className="text-sm">Let us handle the day-to-day hassles of property management, so you can relax knowing your investment is in capable hands.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/ets.png' alt="Expert Tenant Screening" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/ets.png' alt="Expert Tenant Screening" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Expert Tenant Screening</h4>
                        <p className="text-sm">Our rigorous screening process ensures you get reliable tenants, minimizing risks and maximizing rental income.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/mnt.png' alt="timely maintenance" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/mnt.png' alt="timely maintenance" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Timely Maintenance</h4>
                        <p className="text-sm">From routine upkeep to emergency repairs, we&apos;ll keep your property in top condition, preserving its value and appeal.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/lc.png' alt="Legal Compliance" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/lc.png' alt="Legal Compliance" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Legal Compliance Assurance</h4>
                        <p className="text-sm">Gain insight into your investment&apos;s performance with our detailed financial reports, providing clarity and peace of mind.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/tfr.png' alt="Transparent Financial Reporting" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/tfr.png' alt="Transparent Financial Reporting" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Transparent Financial Reporting</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/trm.png' alt="tenant relations management" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/trm.png' alt="tenant relations management" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Tenant Relations Management</h4>
                        <p className="text-sm">Let us handle tenant inquiries, complaints, and conflicts, maintaining positive relationships and tenant satisfaction.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/erc.png' alt="Efficient Rent Collection" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/erc.png' alt="Efficient Rent Collection" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Efficient Rent Collection</h4>
                        <p className="text-sm">Say goodbye to chasing down payments; we&apos;ll ensure your rent is collected promptly and hassle-free.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/mr.png' alt="Maximized Returns" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/mr.png' alt="Maximized Returns" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Maximized Returns</h4>
                        <p className="text-sm">Trust us to maximize your ROI by minimizing vacancies, optimizing rents, and managing expenses efficiently, unlocking the full potential of your property investment.</p>
                    </div>
                </div>
                <div className="max-w-[300px] h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/grid/olm.png' alt="Optimized Lease Management" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/grid/olm.png' alt="Optimized Lease Management" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <h4 className="text-xl font-bold">Optimized Lease Management</h4>
                        <p className="text-sm">We&apos;ll handle lease agreements, renewals, and terminations, ensuring you get the best terms and minimize vacancy risks.</p>
                    </div>
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row max-w-[90%]">
                <div className="flex text-left flex-col justify-center items-start gap-4 max-sm:items-center max-sm:text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Single-Family Homes</h2>
                    <p className="text-sm lg:text-lg max-w-[60%]">Professional Property Managers that allow you to enjoy being a property owner, not a landlord.</p>
                    <Link href={'/contact'}>
                        <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Contact Us</button>
                    </Link>
                </div>
                <div className="max-w-[300px] max-h-[300px]  overflow-hidden drop-shadow-lg  rounded-sm">
                    <Image src='/subservice/sfh.png' alt="img1" width={300} height={300} className="h-[320px] w-[320px] transition-all duration-500 ease-linear hover:scale-125 " />
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row max-w-[90%]">
                <div className="max-w-[300px] max-h-[300px]  overflow-hidden drop-shadow-lg  rounded-sm">
                    <Image src='/subservice/mfh.png' alt="img1" width={300} height={300} className="h-[320px] w-[320px] transition-all duration-500 ease-linear hover:scale-125 " />
                </div>
                <div className="flex text-right flex-col justify-center items-end gap-4 max-sm:items-center max-sm:text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Multi-Family Houses</h2>
                    <p className="text-sm lg:text-lg max-w-[60%]">A complete team to handle the day to day operations of your multi family real estate investments.</p>
                    <Link href={'/contact'}>
                        <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Contact Us</button>
                    </Link>
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row max-w-[90%]">
                <div className="flex text-left flex-col justify-center items-start gap-4 max-sm:items-center max-sm:text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Apartment Buildings</h2>
                    <p className="text-sm lg:text-lg max-w-[60%]">A complete administrative team to handle the day to day operations of your apartment building.</p>
                    <Link href={'/contact'}>
                        <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Contact Us</button>
                    </Link>
                </div>
                <div className="max-w-[300px] max-h-[300px]  overflow-hidden drop-shadow-lg  rounded-sm">
                    <Image src='/subservice/apt.png' alt="img1" width={300} height={300} className="h-[320px] w-[320px] transition-all duration-500 ease-linear hover:scale-125 " />
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 w-screen p-4 bg-slate-300">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">&quot;Property Management Made Seemless&quot;</h1>
                <Link href={'/contact'}>
                    <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Get Started</button>
                </Link>
            </div>
        </section>
    )
}