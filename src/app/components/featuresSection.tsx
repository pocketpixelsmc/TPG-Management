import { Card, CardContent } from "@/components/ui/card";
import { User, Users, MessageSquareDotIcon as MessageSquareDollar } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <User className="w-8 h-8 text-[#003366]" />,
      title: "We are owners, too.",
      description:
        "As real estate owners ourselves, The TPG Team understands the ins and outs of successfully managing rental properties in throughout New Jersey. We will care for yours as meticulously as we care for ours!",
    },
    {
      icon: <Users className="w-8 h-8 text-[#003366]" />,
      title: "Our interests are aligned.",
      description:
        "Our management fees are structured to align with your success – we only make money when you make money. Your goals are our goals, and we work tirelessly to maximize your property's performance.",
    },
    {
      icon: <MessageSquareDollar className="w-8 h-8 text-[#003366]" />,
      title: "We deliver more than just your rent check.",
      description:
        "Strong communication is the foundation of our service. We keep property owners and residents informed every step of the way. Our proactive approach ensures issues are resolved quickly and expectations are always met.",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#003366] text-center mb-12">What Sets Us Apart</h2>
        <div className="grid gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="flex gap-6 p-0">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#003366]">{feature.title}</h3>
                  <p className="text-[#1a365d] leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
