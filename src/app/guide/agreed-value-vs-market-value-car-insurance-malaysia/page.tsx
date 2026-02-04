import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["agreed-value-vs-market-value-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Agreed Value vs Market Value Car Insurance Malaysia ${currentYear} - Which is Better?`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
  };
}

export default function AgreedValueVsMarketValueGuidePage() {
  return <GuideTemplate guide={guide} />;
}
