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
                    <a href="mailto:mike@tpgmanagement.net" className="text-blue-950">
                        <p>mike@tpgmanagement.net</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h3 className={`lg:text-3xl text-2xl text-black font-bold`} >Areas We Serve</h3>
                <hr className="w-[20%] border-1 border-slate-800 mx-auto my-4" />
                <div className="grid grid-cols-auto-fit-150 gap-8 w-full items-start justify-items-center text-left">
                    <div className="flex flex-col justify-center gap-1 text-xs">
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
                    <div className="flex flex-col justify-center gap-1 text-xs">
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
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Union</h4>
                        <p>Berkeley Heights</p>
                        <p>Clark</p>
                        <p>Cranford</p>
                        <p>Elizabeth</p>
                        <p>Fanwood</p>
                        <p>Garwood</p>
                        <p>Hillside</p>
                        <p>Kenilworth</p>
                        <p>Linden</p>
                        <p>Mountainside</p>
                        <p>New Providence</p>
                        <p>Plainfield</p>
                        <p>Rahway</p>
                        <p>Roselle</p>
                        <p>Roselle Park</p>
                        <p>Scotch Plains</p>
                        <p>Springfield</p>
                        <p>Summit</p>
                        <p>Union</p>
                        <p>Westfield</p>
                        <p>Winfield</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Somerset</h4>
                        <p>Bedminster Township</p>
                        <p>Bernards Township</p>
                        <p>Bernardsville</p>
                        <p>Bound Brook</p>
                        <p>Branchburg Township</p>
                        <p>Bridgewater Township</p>
                        <p>Far Hills</p>
                        <p>Franklin Township</p>
                        <p>Green Brook Township</p>
                        <p>Hillsborough Township</p>
                        <p>Manville</p>
                        <p>Millstone</p>
                        <p>Montgomery Township</p>
                        <p>North Plainfield</p>
                        <p>Peapack-Gladstone</p>
                        <p>Raritan</p>
                        <p>Rocky Hill</p>
                        <p>Somerville</p>
                        <p>South Bound Brook</p>
                        <p>Warren Township</p>
                        <p>Watchung</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1 text-xs">
                        <h4 className=" font-bold text-lg ">Hudson</h4>
                        <p>Bayonne</p>
                        <p>East Newark</p>
                        <p>Guttenberg</p>
                        <p>Harrison</p>
                        <p>Hoboken</p>
                        <p>Jersey City</p>
                        <p>Kearny</p>
                        <p>North Bergen</p>
                        <p>Secaucus</p>
                        <p>Union City</p>
                        <p>Weehawken</p>
                        <p>West New York</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
