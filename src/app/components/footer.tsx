import Image from "next/image";
import Link from "next/link";
import { plusJakartaSans } from "./fonts";

export default function Footer() {
    return (
        <footer className="bg-slate-400 text-slate-800 text-sm text-center p-4 pt-16 ">
            <div className="grid grid-cols-auto-fit-150 place-items-start gap-4 items-center">
                <Link href="/" className="order-last lg:order-first">
                    <Image src={'/next.svg'} width={100} height={100} alt="Logo" />
                </Link>
                <Link href="/contact" className="flex flex-row justify-start items-center gap-4">
                    <Image src="contact.svg" width={25} height={25} alt="Contact" />
                    <button className="m-2">
                        <p className="navControl">Contact Us</p>
                    </button>
                </Link>
                <Link href="/about" className="flex flex-row justify-start items-center gap-4">
                    <Image src="about.svg" width={25} height={25} alt="About" />
                    <button className="m-2">
                        <p className="navControl">About</p>
                    </button>
                </Link>
                <a href="#" className="flex flex-row justify-start items-center gap-4">
                    <Image src='services.svg' width={25} height={25} alt="Services" />
                    <button className="m-2">
                        <p className="navControl">Available Properties</p>
                    </button>
                </a>
                <a href="#" className="flex flex-row justify-start items-center gap-4">
                    <Image src="rLogin.svg" width={25} height={25} alt="Resident Login" />
                    <button className="m-2">
                        <p className="navControl">Resident Login</p>
                    </button>
                </a>
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h3 className={`lg:text-3xl md:text-2xl sm:text-xl text-xs text-black ${plusJakartaSans.className}`} >Areas We Serve</h3>
                {/* TODO: Add a list of areas here */}
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h3 className={`lg:text-3xl md:text-2xl sm:text-xl text-xs text-black ${plusJakartaSans.className}`} >List of Towns</h3>
                {/* TODO: Add a list of towns here */}
            </div>
        </footer>
    )
}