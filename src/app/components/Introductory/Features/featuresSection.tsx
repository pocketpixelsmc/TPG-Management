import { Card, CardContent } from "@/components/ui/card";
import { User, Users, MessageSquareDotIcon as MessageSquareDollar, File, Shield } from "lucide-react";
import featuresData from "@/data/features.json";
import H2 from "../../ui/H2";

type Feature = {
    iconName: string;
    title: string;
};

export default function FeaturesSection() {
    // Map icon names to their components
    const iconComponents = {
        User: <User className="w-8 h-8 text-blue-900" />,
        Users: <Users className="w-8 h-8 text-blue-900" />,
        MessageSquare: <MessageSquareDollar className="w-8 h-8 text-blue-900" />,
        File: <File className="w-8 h-8 text-blue-900" />,
        MessageSquareDollar: <MessageSquareDollar className="w-8 h-8 text-blue-900" />,
        Shield: <Shield className="w-8 h-8 text-blue-900" />,
    };

    return (
        <div className="py-12 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
            <H2 className="w-screen">WHY OWNERS CHOOSE TPG MANAGEMENT</H2>

            <div className="max-w-6xl mx-auto p-4">
                <div className="grid gap-8 md:gap-12">
                    {featuresData.features.map((feature: Feature, index: number) => (
                        <Card key={index} className="border-none shadow-none bg-transparent">
                            <CardContent className="flex gap-6 p-0">
                                <div className="flex-shrink-0">
                                    {iconComponents[feature.iconName as keyof typeof iconComponents]}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
