import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-500 text-slate-800 text-sm text-center p-4 pt-16 grid grid-cols-auto-fit-150 place-items-start gap-4 items-center">
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
        </footer>
    )
}