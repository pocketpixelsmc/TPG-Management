import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Management Areas we serve in New Jersey",
  description:
    "Explore the locations we serve across New Jersey and New York. From Middlesex to Hudson County, TPG Management provides full-service property management with local expertise and fast, reliable support.",
};

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}