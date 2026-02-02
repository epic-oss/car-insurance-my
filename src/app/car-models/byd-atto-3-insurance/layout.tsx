import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `BYD Atto 3 Insurance Price Malaysia ${currentYear} | EV Insurance from RM1,800/year`,
  description: `How much is BYD Atto 3 insurance? Compare EV insurance prices for Standard Range & Extended Range variants. Get quotes from 15+ insurers. Comprehensive from RM1,800/year.`,
  keywords:
    "byd atto 3 insurance, byd atto 3 insurance price malaysia, ev car insurance malaysia, byd atto 3 road tax, electric car insurance",
  openGraph: {
    title: `BYD Atto 3 Insurance Price Malaysia ${currentYear} | EV Insurance Quotes`,
    description:
      "Compare BYD Atto 3 EV insurance prices from 15+ insurers. Find the best deal for Standard Range & Extended Range models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function BydAtto3InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
