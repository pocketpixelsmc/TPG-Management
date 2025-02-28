import Image from "next/image"
import { AlertCircle } from "lucide-react"

export function MaintenanceProgram() {
  return (
    <div className="container mx-auto p-6 mt-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-start gap-8 justify-start">
        <div className="md:w-1/2 flex flex-col items-end">
          <Image
            src="/maintenance.png"
            alt="Maintenance Program Preview"
            width={500}
            height={400}
            className="h-auto border border-gray-300"
          />
        </div>
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertCircle className="w-4 h-4" />
            Coming Soon
          </div>
        </div>
      </div>
    </div>
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

