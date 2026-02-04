import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Toyota Vios Insurance Malaysia ${currentYear} - Claims Guide & Best Coverage`,
  description:
    "Toyota Vios insurance costs RM1,000-2,100/year in Malaysia. Learn which insurers handle Vios claims best, common claim issues, and how to protect Malaysia's favourite sedan.",
  keywords:
    "toyota vios insurance, vios insurance price malaysia, toyota vios insurance cost, vios hybrid insurance, toyota safety sense insurance, vios claims malaysia",
  openGraph: {
    title: `Toyota Vios Insurance Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Toyota Vios insurance prices for E, G, Hybrid HEV & GR Sport variants. Find the best coverage with TSS calibration included.",
    type: "article",
    locale: "en_MY",
  },
};

export default function ToyotaViosInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
