import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Perodua Bezza Insurance Malaysia ${currentYear} - E-Hailing Friendly & Budget Smart`,
  description:
    "Perodua Bezza insurance from RM380/year (55% NCD). Popular with e-hailing drivers and budget-conscious families. Here's what matters beyond just the cheapest quote.",
  keywords:
    "perodua bezza insurance, bezza insurance price malaysia, bezza insurance cost, bezza e-hailing insurance, bezza 1.0 insurance, bezza 1.3 insurance, grab car insurance bezza",
  openGraph: {
    title: `Perodua Bezza Insurance Malaysia ${currentYear} | E-Hailing & Family`,
    description:
      "Compare Perodua Bezza insurance prices for 1.0 G and 1.3 X/AV variants. E-hailing add-on guidance included. Find the best coverage.",
    type: "article",
    locale: "en_MY",
  },
};

export default function PerodualBezzaInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
