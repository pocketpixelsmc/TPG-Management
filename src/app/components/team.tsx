import Image from "next/image";

export default function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start p-4 gap-8">
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/mike.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Michael</h1>
          <p className="text-lg text-blue-950">Development Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/alex.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Alex</h1>
          <p className="text-lg text-blue-950">Property Management Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/julian.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Julian</h1>
          <p className="text-lg text-blue-950">Property Management Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/fred.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Fred</h1>
          <p className="text-lg text-blue-950">Accounting Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/laurie.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Laurie</h1>
          <p className="text-lg text-blue-950">Accounting Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/karen.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Karen</h1>
          <p className="text-lg text-blue-950">Property Management Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/zoey.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <h1 className="text-xl font-bold text-blue-900">Zoey</h1>
          <p className="text-lg text-blue-950">Property Management Division</p>
        </div>
      </div>
      <div className="flex flex-row justify-center content-center gap-4">
        <Image src="/team/harsh.png" width={75} height={75} alt="Michael" className="rounded-full w-[75px] h-[75px]" />
        <div className="flex flex-col justify-center content-center gap-4">
          <a href="https://www.harshsuthar.me" target="_blank" className="text-xl font-bold text-blue-900">Harsh</a>
          <p className="text-lg text-blue-950">Development Division</p>
        </div>
      </div>
    </div>
  );
}
