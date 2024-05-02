import Link from "next/link";
import { plusJakartaSans } from "./fonts";
import Image from "next/image";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className={`text-blue-900 py-1 flex flex-col gap-2 ${plusJakartaSans} text-xs sm:text-sm`}>
            <a href="#" className="flex flex-auto self-end">
                <button className="p-2 bg-slate-400 rounded-l-xl text-center">
                    Resident and Owner
                </button>
            </a>
            <div className="flex flex-row justify-around items-center">
                <Link href="/" className="hidden sm:inline-block ">
                    <Image src="/next.svg" alt="TPG Management" width={100} height={100} className=" md:w-[150px] lg:w-[200px]" />
                </Link>
                <div className={`flex flex-row gap-3 justify-center center items-start px-2 ${plusJakartaSans.className}`}>
                    <Link href="/">
                        <button className="m-2 lg:text-4xl md:text-2xl sm:text-xl ">
                            <p className="navControl">Home</p>
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="m-2 lg:text-4xl md:text-2xl sm:text-xl">
                            <p className="navControl">About</p>
                        </button>
                    </Link>
                    <a href="#">
                        <button className="m-2 lg:text-4xl md:text-2xl sm:text-xl">
                            <p className="navControl">Available Properties</p>
                        </button>
                    </a>
                    <Link href="/contact">
                        <button className="m-2 lg:text-4xl md:text-2xl sm:text-xl">
                            <p className="navControl">Contact Us</p>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}