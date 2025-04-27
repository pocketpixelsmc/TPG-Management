import OptimizedImage from "@/components/ui/OptimizedImage";
import Header from "../ui/Header";
import whatWeDoData from "@/data/whatWeDo.json";
import H2 from "../ui/H2";

type Service = {
    title: string;
    description: string;
    image: string;
};

export default function WhatWeDo() {
    return (
        <section 
          aria-labelledby="what-we-do-heading" 
          className="flex flex-col items-center justify-center gap-4 text-center w-screen"
        >
            <H2 variant="blue" id="what-we-do-heading">We Handle It All — So You Don’t Have To</H2>

            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[70%]"
              role="list"
            >
                {whatWeDoData.services.map((service: Service) => (
                    <article 
                      key={service.title} 
                      className="flex flex-col items-center text-center"
                      role="listitem"
                    >
                        <div className="relative w-full h-64 mb-6">
                            <OptimizedImage 
                                src={service.image} 
                                alt={`${service.title} service illustration`}
                                fill 
                                className="object-cover rounded-lg" 
                                priority 
                            />
                        </div>
                        <h3 className="text-blue-900 text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-blue-950">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
