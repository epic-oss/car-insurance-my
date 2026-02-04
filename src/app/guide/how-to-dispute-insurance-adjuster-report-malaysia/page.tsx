import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["how-to-dispute-insurance-adjuster-report-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `How to Dispute Insurance Adjuster Report Malaysia ${currentYear}`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
  };
}

export default function DisputeAdjusterReportGuidePage() {
  return <GuideTemplate guide={guide} />;
}
