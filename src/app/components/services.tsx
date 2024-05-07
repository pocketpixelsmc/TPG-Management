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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ullam odit iusto deleniti quam, error, dignissimos corr aperiam reprehenderit praesentium corporis eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.
            </p>
            <div className="grid lg:grid-cols-auto-fit-300 gap-2 mt-4 grid-cols-auto-fit-200  w-[90%] sm:w-[624px] lg:w-[924px] place-items-center">
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki1.jpg' alt="img1" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki1.jpg' alt="img1" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki2.jpg' alt="img2" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki2.jpg' alt="img2" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki3.jpg' alt="img3" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki3.jpg' alt="img3" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki4.jpg' alt="img4" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki4.jpg' alt="img4" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki1.jpg' alt="img1" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki1.jpg' alt="img1" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki2.jpg' alt="img2" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki2.jpg' alt="img2" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki3.jpg' alt="img3" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki3.jpg' alt="img3" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki4.jpg' alt="img4" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki4.jpg' alt="img4" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[300px] flex flex-col content-start text-left justify-center gap-2 bg-slate-300 rounded-lg overflow-hidden ease-linear duration-[350ms] transition-all hover:scale-105 ">
                    <div className="max-w-[300px] h-[150px]  overflow-hidden">
                        <Image src='/stocki1.jpg' alt="img1" width={300} height={150} className="w-full h-[150px] hidden lg:block " />
                        <Image src='/stocki1.jpg' alt="img1" width={200} height={150} className="w-full h-[150px] block lg:hidden " />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h4 className="text-xl font-bold">Title</h4>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. s eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.</p>
                    </div>
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row max-w-[90%]">
                <div className="flex text-left flex-col justify-center items-start gap-4 max-sm:items-center max-sm:text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Property Management</h2>
                    <p className="text-sm lg:text-lg max-w-[60%]">kjhvkjxhcvkjhxcbjkvh bmkxhjkvbhxjkchv xcjkvhgjhvgdf jvckxghvjhxcbvjkhxc</p>
                    <Link href={'/contact'}>
                        <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Contact Us</button>
                    </Link>
                </div>
                <div className="max-w-[300px] max-h-[300px]  overflow-hidden drop-shadow-lg  rounded-sm">
                    <Image src='/stocki4.jpg' alt="img1" width={300} height={300} className="h-[320px] w-[320px] transition-all duration-500 ease-linear hover:scale-125 " />
                </div>
            </div>
            <hr className="w-[45%] border-1 border-blue-900 my-4" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row max-w-[90%]">
                <div className="max-w-[300px] max-h-[300px]  overflow-hidden drop-shadow-lg  rounded-sm">
                    <Image src='/stocki4.jpg' alt="img1" width={300} height={300} className="h-[320px] w-[320px] transition-all duration-500 ease-linear hover:scale-125 " />
                </div>
                <div className="flex text-right flex-col justify-center items-end gap-4 max-sm:items-center max-sm:text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Property Management</h2>
                    <p className="text-sm lg:text-lg max-w-[60%]">kjhvkjxhcvkjhxcbjkvh bmkxhjkvbhxjkchv xcjkvhgjhvgdf jvckxghvjhxcbvjkhxc</p>
                    <Link href={'/contact'}>
                        <button className="bg-blue-900 text-white p-2 self-end rounded-lg">Contact Us</button>
                    </Link>
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