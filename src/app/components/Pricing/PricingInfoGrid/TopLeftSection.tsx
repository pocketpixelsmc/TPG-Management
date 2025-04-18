export default function TopLeftSection({ fees }: { fees: any[] }) {
  return (
    <div className="w-full md:w-1/2 bg-[#f0f8ff] p-8">
      <h2 className="text-[#1e3a8a] text-4xl font-bold mb-2">FEES AT A GLANCE</h2>
      <p className="text-[#1e3a8a] italic mb-8">For a complete list, download the OVERVIEW BROCHURE</p>
      <div className="space-y-6">
        {fees.map((fee) => (
          <div key={fee.title} className="flex items-start gap-3">
            <div className="relative">
              <div className="bg-[#0098da] text-white font-bold p-2 pr-6 flex items-center justify-center w-[85px] h-9 relative [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                <span className="text-lg flex items-start translate-x-1">
                  {fee.amount ? (
                    <>
                      <span>$</span>
                      <span>{fee.amount}</span>
                    </>
                  ) : (
                    <>
                      <span>{fee.percentage}</span>
                      <span>%</span>
                    </>
                  )}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a8a]">{fee.title}</h3>
              {fee.description.length > 1 ? (
                <ul className="list-disc ml-6">
                  {fee.description.map((desc: string) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{fee.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 