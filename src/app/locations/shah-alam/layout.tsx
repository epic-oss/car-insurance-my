import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Shah Alam ${currentYear} - Seksyen Coverage & Claims Support`,
  description:
    "Shah Alam car insurance from Section 1 to Section 25+. Industrial areas, new townships, and everything in between. Local agent service.",
  keywords:
    "car insurance shah alam, insurance agent shah alam, shah alam car insurance, insurance setia alam, car insurance kota kemuning, insurance bukit jelutong",
  openGraph: {
    title: `Car Insurance Agent Shah Alam ${currentYear} | All Sections Covered`,
    description:
      "Shah Alam car insurance with claims support. Section 1-25+, Setia Alam, Kota Kemuning covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function ShahAlamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
