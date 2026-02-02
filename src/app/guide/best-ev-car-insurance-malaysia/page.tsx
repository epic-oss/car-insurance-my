import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["best-ev-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Best EV Car Insurance Malaysia ${currentYear} - Compare Top 5 Plans`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Best EV Car Insurance Malaysia ${currentYear} | Compare Top 5 Plans`,
      description:
        "Compare Malaysia's top EV insurance plans from Allianz, MSIG, Liberty, Etiqa & Tokio Marine. Find coverage for battery, home charger & more.",
    },
  };
}

export default function BestEvCarInsurancePage() {
  return <GuideTemplate guide={guide} />;
}
