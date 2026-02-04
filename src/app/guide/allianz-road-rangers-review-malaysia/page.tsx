import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["allianz-road-rangers-review-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Allianz Road Rangers Review Malaysia ${currentYear} - Honest Assessment`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Allianz Road Rangers Review Malaysia ${currentYear} - Honest Assessment`,
      description:
        "Honest review of Allianz Road Rangers in Malaysia. Learn what it covers, real response times, and whether it's worth choosing Allianz for.",
    },
  };
}

export default function AllianzRoadRangersGuidePage() {
  return <GuideTemplate guide={guide} />;
}
