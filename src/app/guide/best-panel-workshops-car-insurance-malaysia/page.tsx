import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["best-panel-workshops-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Best Panel Workshops for Car Insurance Claims Malaysia ${currentYear}`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
  };
}

export default function BestPanelWorkshopsGuidePage() {
  return <GuideTemplate guide={guide} />;
}
