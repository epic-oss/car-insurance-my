import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Axia Insurance Price Malaysia ${currentYear} | From RM500/year | Cheapest Car`,
  description: `Perodua Axia insurance from RM500/year - the cheapest car to insure in Malaysia. Compare quotes for Axia 1.0 E, SE & AV. Get free quotes from 15+ insurers.`,
  keywords:
    "axia insurance price, perodua axia insurance, axia insurance price malaysia, cheapest car insurance malaysia, axia road tax and insurance",
  openGraph: {
    title: `Axia Insurance Price Malaysia ${currentYear} | Cheapest Car to Insure`,
    description:
      "Compare Perodua Axia insurance prices from 15+ insurers. The cheapest car to insure in Malaysia - from just RM500/year.",
    type: "article",
    locale: "en_MY",
  },
};

export default function AxiaInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
