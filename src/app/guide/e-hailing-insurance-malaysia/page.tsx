import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["e-hailing-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `E-Hailing Insurance Malaysia ${currentYear} - Complete Driver Guide`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
  };
}

export default function EHailingInsuranceGuidePage() {
  return <GuideTemplate guide={guide} />;
}
