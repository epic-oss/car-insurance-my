import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["flood-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Flood Car Insurance Malaysia ${currentYear} - Is Your Car Covered?`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Flood Car Insurance Malaysia ${currentYear} - Is Your Car Covered?`,
      description:
        "Is your car covered for flood damage in Malaysia? Complete guide to Special Perils coverage, how to claim flood damage, and which insurers offer the best protection.",
    },
  };
}

export default function FloodCarInsuranceGuidePage() {
  return <GuideTemplate guide={guide} />;
}
