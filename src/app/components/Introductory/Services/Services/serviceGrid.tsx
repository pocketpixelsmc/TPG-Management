import OptimizedImage from "@/components/ui/OptimizedImage";
import servicesData from "@/data/services.json";

type Service = {
    title: string;
    description: string;
    icon: string;
    alt: string;
};

export default function ServiceGrid() {
    return (
        <section 
          aria-labelledby="services-grid-heading" 
          className="max-w-[1080px] m-0 mx-auto"
        >
            <h2 id="services-grid-heading" className="sr-only">Our Services Grid</h2>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              role="list"
            >
                {servicesData.services.map((service: Service, index: number) => (
                    <article 
                      key={index} 
                      className="border-solid border-2 border-blue-900 rounded-lg p-8 flex flex-col gap-4 max-w-[320px] text-left justify-start"
                      role="listitem"
                    >
                        <header className="flex gap-2 flex-row items-center text-center">
                            <OptimizedImage 
                                src={service.icon} 
                                alt={service.alt} 
                                width={50} 
                                height={50} 
                                className="object-contain"
                            />
                            <h3 className="text-lg font-bold text-blue-900">{service.title}</h3>
                        </header>
                        <div className="text-left">
                            <p className="text-sm leading-7 text-blue-950">
                                {service.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
