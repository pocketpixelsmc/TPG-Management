export default function ServicesSection() {
    return (
      <section className="bg-gradient-to-b from-[#f8faff] to-white w-[90%]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-[#14294F] text-white py-8">
              OUR SERVICES
            </h2>
            <p className="text-[#14294F] text-xl md:text-2xl max-w-4xl mx-auto">
              Our full-service management covers each aspect of renting your property
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6B9CD2] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#14294F] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
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
  
  