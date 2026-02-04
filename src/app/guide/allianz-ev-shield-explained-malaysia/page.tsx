import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["allianz-ev-shield-explained-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Allianz EV Shield Explained Malaysia ${currentYear} - Complete Guide`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Allianz EV Shield Explained Malaysia ${currentYear} - Complete Guide`,
      description:
        "Complete guide to Allianz EV Shield in Malaysia. Learn what's covered, costs, and whether it's worth adding to your EV insurance.",
    },
  };
}

export default function AllianzEVShieldGuidePage() {
  return <GuideTemplate guide={guide} />;
}
