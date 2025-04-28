import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import Button from "../../../ui/Button";
import subservicesData from "@/data/subservices.json";

type Subservice = {
    title: string;
    description: string;
    image: string;
    alt: string;
    link: string;
};

export default function Subservices() {
    return (
        <section 
          aria-labelledby="subservices-heading" 
          className="max-w-[1080px] m-0 mx-auto"
        >
            <h2 id="subservices-heading" className="sr-only">Property Management Services</h2>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              role="list"
            >
                {subservicesData.subservices.map((service: Subservice, index: number) => (
                    <article 
                      key={index} 
                      className="border-solid border-2 border-blue-900 rounded-lg grid grid-rows-3r place-items-center max-w-[300px] text-left pb-4 gap-2"
                      role="listitem"
                    >
                        <figure className="self-start w-full">
                            <OptimizedImage 
                                src={service.image} 
                                alt={service.alt} 
                                width={300} 
                                height={200} 
                                className="rounded-t-md h-[195px] w-full object-cover" 
                            />
                        </figure>
                        <div className="p-4 pb-2 flex flex-col text-left justify-around gap-4 items-start self-start">
                            <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                            <p className="text-sm leading-7 text-blue-950">{service.description}</p>
                        </div>
                        <Link 
                          href={service.link}
                          className="mt-auto"
                          aria-label={`Contact us about ${service.title}`}
                        >
                            <Button>Learn More</Button>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
