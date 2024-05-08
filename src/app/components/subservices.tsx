import Image from "next/image";
import Link from "next/link";

export default function Subservices() {
    return (
        <div className="max-w-[1080px] m-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className=" border-solid border-2 border-blue-900 rounded-lg flex flex-col max-w-[300px] text-left justify-start">
                    <div>
                        <Image src="/subservice/sfh.png" alt="Single-Family Homes" width={300} height={300} className="rounded-t-md" />
                    </div>
                    <div className="p-8 flex flex-col text-left justify-evenly items-start h-full gap-4">
                        <h2 className="text-xl font-bold">Single-Family Homes</h2>
                        <p className="text-sm leading-7">
                            Professional Property Managers that allow you to enjoy being a property owner, not a landlord.
                        </p>
                        <Link href={"/contact"} className="bg-blue-900 text-white p-4 px-6 self-center rounded-lg transition-all hover:bg-blue-700">
                            <button>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg flex flex-col max-w-[300px] text-left justify-start">
                    <div>
                        <Image src="/subservice/mfh.png" alt="Multi-Family Houses" width={300} height={300} className="rounded-t-md" />
                    </div>
                    <div className="p-8 flex flex-col text-left items-start justify-evenly h-full gap-4">
                        <h2 className="text-xl font-bold">Multi-Family Houses</h2>
                        <p className="text-sm leading-7">
                            A complete team to handle the day to day operations of your multi family real estate investments.
                        </p>
                        <Link href={"/contact"} className="bg-blue-900 text-white p-4 px-6 self-center rounded-lg transition-all hover:bg-blue-700">
                            <button>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg flex flex-col max-w-[300px] text-left justify-start">
                    <div>
                        <Image src="/subservice/apt.png" alt="Apartment Buildings" width={300} height={300} className="rounded-t-md" />
                    </div>
                    <div className="p-8 flex flex-col text-left items-start justify-evenly h-full gap-4">
                        <h2 className="text-xl font-bold">Apartment Buildings</h2>
                        <p className="text-sm leading-7">
                            A complete administrative team to handle the day to day operations of your apartment building.
                        </p>
                        <Link href={"/contact"} className="bg-blue-900 text-white p-4 px-6 self-center rounded-lg transition-all hover:bg-blue-700">
                            <button>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
