import Image from "next/image";
import Link from "next/link";
import { plusJakartaSans } from "./fonts";

export default function Footer() {
    return (
        <footer className={`bg-slate-400 text-slate-800 text-sm text-center p-4 pt-16 ${plusJakartaSans.className}`}>
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
                <h3 className={`lg:text-3xl md:text-2xl sm:text-xl text-xs text-black font-bold`} >Areas We Serve</h3>
                <hr className="w-[20%] border-1 border-slate-800 mx-auto my-4" />
                <div className="grid grid-cols-auto-fit-150 gap-8 w-full items-start justify-items-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h4 className=" font-bold text-lg " >Monmouth</h4>
                        <p>Aberdeen</p>
                        <p>Asbury Park</p>
                        <p>Eatontown</p>
                        <p>Freehold</p>
                        <p>Freehold</p>
                        <p>Hazlet</p>
                        <p>Holmdel</p>
                        <p>Howell</p>
                        <p>Keansburg</p>
                        <p>Keyport</p>
                        <p>Long Branch</p>
                        <p>Manalapan</p>
                        <p>Marlboro</p>
                        <p>Matawan</p>
                        <p>Middletown</p>
                        <p>Neptune</p>
                        <p>Ocean</p>
                        <p>Red Bank</p>
                        <p>Tinton Falls</p>
                        <p>Wall Township</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h4 className=" font-bold text-lg ">Middlesex</h4>
                        <p>Carteret</p>
                        <p>Dunellen</p>
                        <p>East Brunswick</p>
                        <p>Edison</p>
                        <p>Iselin</p>
                        <p>Metuchen</p>
                        <p>Monroe</p>
                        <p>New Brunswick</p>
                        <p>North Brunswick</p>
                        <p>Old Bridge</p>
                        <p>Perth Amboy</p>
                        <p>Piscataway</p>
                        <p>Plainsboro</p>
                        <p>Sayerville</p>
                        <p>South Amboy</p>
                        <p>South Brunswick</p>
                        <p>South Plainfield</p>
                        <p>Spotswood</p>
                        <p>Woodbridge</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h4 className=" font-bold text-lg ">Union</h4>
                        <p>Clark</p>
                        <p>Cranford</p>
                        <p>Fanwood</p>
                        <p>Garwood</p>
                        <p>Kenilworth</p>
                        <p>Mountainside</p>
                        <p>Plainfield</p>
                        <p>Scotch Plains</p>
                        <p>Union</p>
                        <p>Westfield</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}