import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Honda City Insurance Price Malaysia ${currentYear} | From RM750/year | Compare Quotes`,
  description: `How much is Honda City insurance? Compare prices for City 1.5 S, E, V & RS. Get quotes from 15+ insurers. Comprehensive from RM1,000/year, Third Party from RM200/year.`,
  keywords:
    "city insurance price, honda city insurance, city insurance price malaysia, city 1.5 insurance price, city road tax and insurance",
  openGraph: {
    title: `Honda City Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Honda City insurance prices from 15+ insurers. Find the best deal for City 1.5 S, E, V & RS models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function CityInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
