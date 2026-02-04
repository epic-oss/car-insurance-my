import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["zurich-24-hour-roadside-assist-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Zurich 24-Hour Roadside Assist Malaysia ${currentYear} - Complete Guide`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Zurich 24-Hour Roadside Assist Malaysia ${currentYear} - Complete Guide`,
      description:
        "Complete guide to Zurich's 24-hour roadside assistance in Malaysia. Learn what's covered, how to use it, response times, and real user experiences.",
    },
  };
}

export default function ZurichRoadsideAssistGuidePage() {
  return <GuideTemplate guide={guide} />;
}
