'use client'
import Link from "next/link";
import { plusJakartaSans } from "./fonts";
import Image from "next/image";
import './navbar.css';
import { useEffect, useState } from "react";

export default function Navbar() {
    const TOP_OFFSET = 10;
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        if(window.scrollY >= TOP_OFFSET) setShowBackground(true)
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <>
            <nav className={`text-blue-900 py-1 mt-[75px] flex flex-col gap-2 text-xs sm:text-sm sticky top-0 z-10 transition-all duration-300 pb-4`} style={{ backgroundColor: showBackground ? "#e2e8f0" : undefined }}>
                <div className="flex flex-row justify-around items-center">
                    <Link href="/" className="hidden sm:inline-block ">
                        <Image src="/logo.png" alt="TPG Management" width={200} height={200} className=" md:w-[150px] lg:w-[200px]" />
                    </Link>
                    <div className={`flex flex-row gap-3 justify-center items-center px-2 font-normal`}>
                        <Link href="/">
                            <button className="m-2 lg:text-3xl md:text-2xl sm:text-xl text-xs">
                                <p className="navControl">Home</p>
                            </button>
                        </Link>
                        <Link href="/about">
                            <button className="m-2 lg:text-3xl md:text-2xl  sm:text-xl text-xs">
                                <p className="navControl">About</p>
                            </button>
                        </Link>
                        <a href="#">
                            <button className="m-2 lg:text-3xl md:text-2xl sm:text-xl text-xs">
                                <p className="navControl">Available Properties</p>
                            </button>
                        </a>
                        <Link href="/contact">
                            <button className="m-2 lg:text-3xl md:text-2xl sm:text-xl text-xs">
                                <p className="navControl">Contact Us</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}