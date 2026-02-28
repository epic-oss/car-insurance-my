import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Proton X50 & S70 Insurance Malaysia ${currentYear} - Claims Guide & Best Coverage`,
  description:
    "Proton X50 insurance from RM1,000/year, S70 from RM850/year. Learn which insurers handle Proton claims best, DCT gearbox considerations, and ADAS calibration requirements.",
  keywords:
    "proton x50 insurance, proton s70 insurance, x50 insurance price malaysia, s70 insurance cost, proton x50 dct insurance, proton adas calibration, x50 s70 claims malaysia",
  openGraph: {
    title: `Proton X50 & S70 Insurance Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Proton X50 & S70 insurance prices for all variants. Find the best coverage with DCT and ADAS calibration included.",
    type: "article",
    locale: "en_MY",
  },
};

export default function ProtonX50S70InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
