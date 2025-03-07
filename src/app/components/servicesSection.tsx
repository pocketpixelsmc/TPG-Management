import Header from "./ui/Header"

export default function ServicesSection() {
  return (
    <section 
      aria-labelledby="services-title" 
      className="bg-gradient-to-b from-[#f8faff] to-white w-full overflow-hidden"
    >
      <Header variant="blue" id="services-title">OUR SERVICES</Header>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-blue-950 text-xl md:text-2xl max-w-4xl mx-auto">
            Our full-service management covers each aspect of renting your property
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          role="list"
        >
          {services.map((service) => (
            <article 
              key={service.title} 
              className="flex flex-col items-center text-center"
              role="listitem"
            >
              <div 
                className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-950">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: 'LEASING',
    description: 'Screening & Placement',
  },
  {
    title: 'MAINTENANCE',
    description: 'Repairs & Renovations',
  },
  {
    title: 'RENT',
    description: 'Collection & Reporting',
  },
  {
    title: 'TURNOVER',
    description: 'Project Management',
  },
]

