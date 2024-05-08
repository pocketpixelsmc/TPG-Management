import Image from "next/image";

export default function ServiceGrid() {
    return (
        <div className="max-w-[1080px] m-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/pom.png" alt="Peace Of Mind" width={50} height={50} />
                        <h2 className="text-lg font-bold">Peace of Mind</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Let us handle the day-to-day hassles of property management, so you can relax knowing your investment is in capable hands.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/ts.png" alt="Expert Tenant Screening" width={50} height={50} />
                        <h2 className="text-lg font-bold">Expert Tenant Screening</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Our rigorous screening process ensures you get reliable tenants, minimizing risks and maximizing rental income.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/rc.png" alt="Efficient Rent Collection" width={50} height={50} />
                        <h2 className="text-lg font-bold">Efficient Rent Collection</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Say goodbye to chasing down payments; we&apos;ll ensure your rent is collected promptly and hassle-free.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/mnt.png" alt="Timely Maintenance" width={50} height={50} />
                        <h2 className="text-lg font-bold">Timely Maintenance</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            From routine upkeep to emergency repairs, we&apos;ll keep your property in top condition, preserving its value and appeal.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/lc.png" alt="Legal Compliance Assurance" width={50} height={50} />
                        <h2 className="text-lg font-bold">Legal Compliance Assurance</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Stay on the right side of the law with our expert knowledge of landlord-tenant regulations, mitigating legal risks for you.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/fr.png" alt="Transparent Financial Reporting" width={50} height={50} />
                        <h2 className="text-lg font-bold">Transparent Financial Reporting</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Gain insight into your investment&apos;s performance with our detailed financial reports, providing clarity and peace of mind.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/trm.png" alt="Tenant Relations Management" width={50} height={50} />
                        <h2 className="text-lg font-bold">Tenant Relations Management</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Let us handle tenant inquiries, complaints, and conflicts, maintaining positive relationships and tenant satisfaction.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/lm.png" alt="Optimized Lease Management" width={50} height={50} />
                        <h2 className="text-lg font-bold">Optimized Lease Management</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            We&apos;ll handle lease agreements, renewals, and terminations, ensuring you get the best terms and minimize vacancy risks.
                        </p>
                    </div>
                </div>
                <div className=" border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-between">
                    <div className="flex gap-2 flex-row items-center text-center">
                        <Image src="/grid/mr.png" alt="Maximized Returns" width={50} height={50} />
                        <h2 className="text-lg font-bold">Maximized Returns</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-sm leading-7">
                            Trust us to maximize your ROI by minimizing vacancies, optimizing rents, and managing expenses efficiently, unlocking the full potential of your property investment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
