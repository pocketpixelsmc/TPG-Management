import Image from "next/image";

export default function Home() {
    return (
        <main className=" flex flex-col items-center justify-center gap-8 mt-4 mb-8 sm:mt-16 p-4 pb-0">
            <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt="Logo"
                className="block sm:hidden self-center"
            />
            <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[320px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
                <p className="text-xl text-blue-950 text-left leading-loose">
                    At TPG Management, we leverage our seasoned expertise and innovative
                    solutions to anticipate the unique needs of every property under our
                    care, regardless of its type. Our commitment to prioritizing service
                    ensures that we persist until complexity transforms into simplicity.
                </p>
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <h1 className="text-4xl text-blue-900 font-bold self-center">
                Let us streamline your life.
            </h1>
            <h1 className="text-2xl text-black font-bold self-center max-w-[400px]">
                If you are interested in our property management services, please fill
                out the form below or call <u>732-222-2222</u>
            </h1>
            <form className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 min-w-[320px] sm:min-w-[600px] lg:min-w-[1000px] rounded-xl">
                <label htmlFor="Name" className="text-lg text-blue-900">
                    First and Last Name
                </label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <label htmlFor="phoneNumber" className="text-lg text-blue-900">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <label htmlFor="email" className="text-lg text-blue-900">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <label htmlFor="propertyAddress" className="text-lg text-blue-900">
                    Property Address
                </label>
                <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <label htmlFor="numberOfUnits" className="text-lg text-blue-900">
                    Number of Units
                </label>
                <input
                    type="number"
                    id="numberOfUnits"
                    name="numberOfUnits"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <label htmlFor="additionalPropertyInformation" className="text-lg text-blue-900">
                    Additional Property Information
                </label>
                <textarea
                    id="additionalPropertyInformation"
                    name="additionalPropertyInformation"
                    className="p-2 w-full rounded-lg"
                    required
                />
                <button className="bg-blue-900 text-white p-4 px-8 rounded-lg transition-all hover:bg-blue-700">
                    Submit
                </button>
            </form>
            <div className="m-0 mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center max-w-[1200px] gap-4">
                    <p>Monday-Friday 9am-5pm, </p>
                    <p>732-222-2222, </p>
                    <a href="mailto:info@tpgcompanies.net" className="text-blue-950">
                        <p>info@tpgcompanies.net</p>
                    </a>
                </div>
            </div>
        </main>
    );
}

