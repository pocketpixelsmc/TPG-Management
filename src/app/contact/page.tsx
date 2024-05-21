import Image from "next/image";
import EmailForm from "../components/form";

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
            <h1 className="text-4xl text-blue-900 font-bold self-center">
                Let us streamline your life.
            </h1>
            <h1 className="text-2xl text-black font-bold self-center max-w-[400px]">
                If you are interested in our property management services, please fill
                out the form below or call <u>(732) 978-9390</u>
            </h1>
            <EmailForm />
            <div className="m-0 mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center items-start text-left justify-center max-w-[1200px] gap-4">
                    <p>Monday-Friday 9am-5pm, </p>
                    <p>(732) 978-9390, </p>
                    <a href="mailto:mike@tpgmanagement.net" className="text-blue-950">
                        <p>mike@tpgmanagement.net</p>
                    </a>
                </div>
            </div>
            <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
            <div className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 max-w-[320px] sm:max-w-[620px] lg:max-w-[1000px] rounded-xl">
                <p className="text-xl text-blue-950 text-left leading-loose">
                    At TPG Management, we leverage our seasoned expertise and innovative
                    solutions to anticipate the unique needs of every property under our
                    care, regardless of its type. Our commitment to prioritizing service
                    ensures that we persist until complexity transforms into simplicity.
                </p>
            </div>
        </main>
    );
}

