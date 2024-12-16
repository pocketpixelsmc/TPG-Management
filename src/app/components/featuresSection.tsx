import { Card, CardContent } from "@/components/ui/card"
import { User, Users, MessageSquareDotIcon as MessageSquareDollar } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <User className="w-8 h-8 text-[#003366]" />,
      title: "We are owners, too.",
      description:
        "As real estate owners ourselves, Augusta Rental Homes understands the ins and outs of successfully managing rental properties in the greater Augusta area. We will care for yours as meticulously as we care for ours!",
    },
    {
      icon: <Users className="w-8 h-8 text-[#003366]" />,
      title: "We have a dedicated full-time staff.",
      description:
        "When someone calls us for help, we don't have to call someone else. At Augusta Rental Homes, our staff personally handles everything from acquisitions to leasing to inspections to maintenance.",
    },
    {
      icon: <MessageSquareDollar className="w-8 h-8 text-[#003366]" />,
      title: "We deliver more than just your rent check.",
      description:
        "As your property management partner, we ensure outstanding customer service, quick communication, and of course, your monthly mailbox money - our solid reputation relies on it.",
    },
  ]

  return (
    <div className="py-12 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#003366] text-center mb-12">
          What Sets Us Apart
        </h2>
        <div className="grid gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="flex gap-6 p-0">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#003366]">
                    {feature.title}
                  </h3>
                  <p className="text-[#1a365d] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

