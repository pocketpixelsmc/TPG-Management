import Image from "next/image";
import Link from "next/link";

export default function PricingPlan() {
  return (
    <div className="m-0 mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" border-solid border-2 border-blue-900 rounded-lg flex flex-col w-[80vw] md:w-[45vw] lg:w-[35vw] justify-start">
          <div className="flex flex-col gap-6 p-4 bg-blue-900 w-full rounded-t-lg text-white justify-center items-center min-h-[275px]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-4xl font-bold ppControl text-center max-w-[200px]">Property Management</p>
            </div>
            <h2 className="text-4xl">8%</h2>
            <h2 className="text-xl">Monthly Fee</h2>
          </div>
          <div className="p-8 flex flex-col text-center justify-evenly items-center h-full gap-4">
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <Link href={"/contact"} className="bg-blue-900 text-white p-4 px-6 self-center rounded-lg transition-all hover:bg-blue-700">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className=" border-solid border-2 border-blue-900 rounded-lg flex flex-col w-[80vw] md:w-[45vw] lg:w-[35vw] justify-start">
          <div className="flex flex-col gap-6 p-4 bg-blue-900 w-full rounded-t-lg text-white justify-center items-center min-h-[275px]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-4xl font-bold ppControl text-center max-w-[200px]">Property Management</p>
            </div>
            <h2 className="text-4xl">1 Month's Rent</h2>
            <h2 className="text-xl">Fee</h2>
          </div>
          <div className="p-8 flex flex-col text-center justify-evenly items-center h-full gap-4">
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <p className="text-sm md:text-lg leading-7">Test text ksjjfhsdfdsjkfjdkfds</p>
            <Link href={"/contact"} className="bg-blue-900 text-white p-4 px-6 self-center rounded-lg transition-all hover:bg-blue-700">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
