import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["modified-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Modified Car Insurance Malaysia ${currentYear} - How to Insure Your Modified Car`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
  };
}

export default function ModifiedCarInsuranceGuidePage() {
  return <GuideTemplate guide={guide} />;
}
