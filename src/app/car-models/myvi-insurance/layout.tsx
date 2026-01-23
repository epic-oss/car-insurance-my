import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Myvi Insurance Price Malaysia ${currentYear} | From RM600/year | Compare Quotes`,
  description: `How much is Perodua Myvi insurance? Compare prices for Myvi 1.3, 1.5 & Advance. Get quotes from 15+ insurers. Comprehensive from RM800/year, Third Party from RM150/year.`,
  keywords: "myvi insurance price, perodua myvi insurance price, myvi insurance price malaysia, myvi 1.3 insurance price, myvi 1.5 insurance price, myvi advance insurance price, new myvi insurance price 2026, myvi road tax and insurance",
  openGraph: {
    title: `Myvi Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description: "Compare Perodua Myvi insurance prices from 15+ insurers. Find the best deal for Myvi 1.3, 1.5 & Advance models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function MyviInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
