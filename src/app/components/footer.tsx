import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={`bg-slate-400 text-slate-800 text-sm text-center p-4 pt-16`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 flex-wrap text-lg">
        <Link href="/" >
          <Image src={"/logo.png"} width={100} height={100} alt="Logo" />
        </Link>
        <Image src="/narpm.png" width={100} height={100} alt="NARPM" />
        <Link href="/contact" className="flex flex-row justify-start items-center gap-2">
          <Image src="contact.svg" width={25} height={25} alt="Contact" />
          <button className="flex items-center">
            <p className="navControl">Contact Us</p>
          </button>
        </Link>
        <Link href="/about" className="flex flex-row justify-start items-center gap-2">
          <Image src="about.svg" width={25} height={25} alt="About" />
          <button className="flex items-center">
            <p className="navControl">About</p>
          </button>
        </Link>
        <Link href="/pricing" className="flex flex-row justify-start items-center gap-2">
          <Image src="about.svg" width={25} height={25} alt="Pricing" />
          <button className="flex items-center">
            <p className="navControl">Pricing</p>
          </button>
        </Link>
        <Link href="/referral" className="flex flex-row justify-start items-center gap-2">
          <Image src="about.svg" width={25} height={25} alt="Referral" />
          <button className="flex items-center">
            <p className="navControl">Referral</p>
          </button>
        </Link>
        <a
          href="https://tpgcompanies.managebuilding.com/Resident/public/rentals"
          rel="noopener"
          target="_blank"
          className="flex flex-row justify-start items-center gap-2"
        >
          <Image src="services.svg" width={25} height={25} alt="Services" />
          <button className="flex items-center">
            <p className="navControl">Available Properties</p>
          </button>
        </a>
        <a
          href="https://tpgcompanies.managebuilding.com/Resident/portal/login"
          rel="noopener"
          target="_blank"
          className="flex flex-row justify-start items-center gap-2"
        >
          <Image src="rLogin.svg" width={25} height={25} alt="Resident Login" />
          <button className="flex items-center">
            <p className="navControl">Resident Login</p>
          </button>
        </a>
      </div>
      <hr className="w-[90%] border-1 border-slate-800 mx-auto my-8" />
      <div className="m-0 mx-auto">
        <div className="flex flex-col text-lg sm:flex-row sm:items-center items-start text-left justify-center w-screen gap-4">
          <p>Monday-Friday 9am-5pm </p>
          <p>(732) 978-9390 </p>
          <a href="mailto:info@tpgmanagement.net" className="text-blue-950">
            <p>info@tpgmanagement.net</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-4 mb-8">
        <h3 className={`lg:text-3xl text-2xl text-black font-bold`}>Areas We Serve</h3>
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Monmouth</h4>
          </div>
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Middlesex</h4>
          </div>
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Union</h4>
          </div>
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Somerset</h4>
          </div>
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Essex</h4>
          </div>
          <div className="flex flex-col justify-center gap-1 text-xs">
            <h4 className=" font-bold text-xl ">Hudson</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
