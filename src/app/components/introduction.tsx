import Link from "next/link";

export default function Introduction() {
  return (
    <section className={`max-w-[1300px]`}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl md:min-h-[60px] font-bold text-blue-900 text-center`}>
            Comprehensive Property Management Solutions
          </h1>
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl md:min-h-[60px] font-bold text-blue-900 text-center`}>Your Property, Our Priority</h1>
          <p className="text-xl leading-8">We cover every detail of managing your rental property, so you don&apos;t have to</p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">✓ Expert Tenant Placement</p>
              <p className="text-lg font-bold">✓ Lease & Rental Management</p>
              <p className="text-lg font-bold">✓ Rent Collection</p>
              <p className="text-lg font-bold">✓ 24/7 Maintenance & Repairs</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">✓ Tenant Communication</p>
              <p className="text-lg font-bold">✓ Property Compliance & Inspection</p>
              <p className="text-lg font-bold">✓ Maximize Your Rental Income</p>
              <p className="text-lg font-bold">✓ Eviction Management</p>
            </div>
          </div>
          <Link href={"/contact"}>
            <button className="bg-blue-900 text-white p-4 px-8 self-end rounded-lg transition-all hover:bg-blue-700">
              Discord Stress-Free Management Today!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
