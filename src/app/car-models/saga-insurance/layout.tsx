import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Proton Saga Insurance Price Malaysia ${currentYear} | From RM650/year | Compare`,
  description: `Proton Saga insurance from RM650/year. Compare quotes for Saga 1.3 Standard & Premium. Malaysia's national car with affordable insurance rates. Get free quotes now.`,
  keywords:
    "saga insurance price, proton saga insurance, saga insurance price malaysia, proton saga insurance cost, saga road tax and insurance",
  openGraph: {
    title: `Proton Saga Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Proton Saga insurance prices from 15+ insurers. Malaysia's iconic national car with affordable insurance rates.",
    type: "article",
    locale: "en_MY",
  },
};

export default function SagaInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
