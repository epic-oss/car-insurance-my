import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Vios Insurance Price Malaysia ${currentYear} | From RM700/year | Compare Quotes`,
  description: `How much is Toyota Vios insurance? Compare prices for Vios 1.5 J, E, G & GR-S. Get quotes from 15+ insurers. Comprehensive from RM1,000/year, Third Party from RM200/year.`,
  keywords: "vios insurance price, toyota vios insurance, vios insurance price malaysia, vios 1.5 insurance price, vios road tax and insurance",
  openGraph: {
    title: `Vios Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description: "Compare Toyota Vios insurance prices from 15+ insurers. Find the best deal for Vios 1.5 J, E, G & GR-S models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function ViosInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
