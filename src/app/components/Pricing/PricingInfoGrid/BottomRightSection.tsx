export default function BottomRightSection({ services }: { services: any[] }) {
  return (
    <div className="w-full md:w-1/2 bg-[#f0f8ff] p-8">
      <h1 className="text-[#1e3a8a] text-4xl font-bold mb-2">MANAGEMENT SERVICES INCLUDE</h1>
      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.title} className="flex items-start gap-3">
            <div className="relative">
              <div className="bg-[#0098da] text-white font-bold p-2 pr-6 flex items-center justify-center w-[75px] h-9 relative [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                <span className="text-lg flex items-start translate-x-1">
                  <>
                    <span className="text-xs translate-y-0.5">✓ </span>
                  </>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a8a]">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 