import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Petaling Jaya ${currentYear} - Claims Support & Best Rates`,
  description:
    "Looking for a car insurance agent in Petaling Jaya? Get personalized service, claims support, and competitive rates from Allianz & Zurich specialists.",
  keywords:
    "car insurance petaling jaya, insurance agent PJ, petaling jaya car insurance, allianz PJ, zurich petaling jaya, car insurance SS2, insurance damansara",
  openGraph: {
    title: `Car Insurance Agent Petaling Jaya ${currentYear} | Claims Support`,
    description:
      "PJ car insurance with personal agent support. SS2, Damansara Utama, Bandar Utama, Kelana Jaya covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function PetalingJayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
