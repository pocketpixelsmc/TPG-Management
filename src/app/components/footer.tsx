import Image from "next/image";
import Link from "next/link";
import { plusJakartaSans } from "./fonts";

export default function Footer() {
    return (
        <footer className={`bg-slate-400 text-slate-800 text-sm text-center p-4 pt-16`}>
            <div className="grid grid-cols-auto-fit-150 place-items-start gap-4 items-center">
                <Link href="/" className="order-last lg:order-first">
                    <Image src={'/logo.png'} width={100} height={100} alt="Logo" />
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
                <a href="https://tpgcompanies.managebuilding.com/Resident/public/rentals" rel="noopener" target="_blank"  className="flex flex-row justify-start items-center gap-4">
                    <Image src='services.svg' width={25} height={25} alt="Services" />
                    <button className="m-2">
                        <p className="navControl">Available Properties</p>
                    </button>
                </a>
                <a href="https://tpgcompanies.managebuilding.com/Resident/portal/login" rel="noopener" target="_blank" className="flex flex-row justify-start items-center gap-4">
                    <Image src="rLogin.svg" width={25} height={25} alt="Resident Login" />
                    <button className="m-2">
                        <p className="navControl">Resident Login</p>
                    </button>
                </a>
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <div className="m-0 mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center w-screen gap-4">
                    <p>Monday-Friday 9am-5pm </p>
                    <p>(732) 978-9390 </p>
                    <a href="mailto:info@tpgmanagement.net" className="text-blue-950">
                        <p>info@tpgmanagement.net</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h3 className={`lg:text-3xl text-2xl text-black font-bold`} >Areas We Serve</h3>
                <hr className="w-[20%] border-1 border-slate-800 mx-auto my-4" />
                <div className="grid grid-cols-auto-fit-150 gap-8 w-full items-start justify-items-center text-left">
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg " >Monmouth</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Middlesex</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Union</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Somerset</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Essex</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Passaic</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Ocean</h4>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Hudson</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}
