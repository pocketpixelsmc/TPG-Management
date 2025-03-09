import OptimizedImage from "@/components/ui/OptimizedImage"
import { AlertCircle } from "lucide-react"

export function MaintenanceProgram() {
  return (
    <section 
      aria-labelledby="maintenance-heading"
      className="container mx-auto p-6 mt-12 border-t border-gray-200"
    >
      <h2 id="maintenance-heading" className="sr-only">Maintenance Program Information</h2>
      
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <figure className="md:w-1/2 flex flex-col items-end">
          <OptimizedImage
            src="/maintenance.png"
            alt="Comprehensive view of our maintenance program features and benefits"
            width={500}
            height={400}
            className="h-auto border border-gray-300 rounded-lg shadow-md"
          />
          <figcaption className="sr-only">
            Visual representation of our maintenance program features
          </figcaption>
        </figure>
        
        <div className="md:w-1/2">
          <div 
            className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            role="status"
          >
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            <span>Coming Soon</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Enhanced Maintenance Services
            </h3>
            
            <div className="prose prose-blue">
              <p className="text-blue-950">
                Our comprehensive maintenance program is designed to protect your investment 
                and ensure tenant satisfaction through:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>Preventive maintenance scheduling</li>
                <li>24/7 emergency response</li>
                <li>Regular property inspections</li>
                <li>Vendor management and quality control</li>
                <li>Detailed maintenance reporting</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h4 className="text-lg font-medium text-blue-900 mb-2">
                Program Benefits
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-blue-950" role="list">
                <li>Reduced repair costs through preventive maintenance</li>
                <li>Extended property lifespan</li>
                <li>Improved tenant satisfaction and retention</li>
                <li>Streamlined maintenance process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// function MaintenanceFeature({ title, features }: { title: string; features: string[] }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
//       <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
//       <ul className="list-disc pl-5 space-y-1 text-gray-700">
//         {features.map((feature) => (
//           <li key={feature}>{feature}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

