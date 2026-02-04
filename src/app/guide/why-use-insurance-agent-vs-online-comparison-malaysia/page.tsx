import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["why-use-insurance-agent-vs-online-comparison-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Insurance Agent vs Online Comparison Sites Malaysia: Which is Better? (${currentYear})`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Insurance Agent vs Online Comparison Sites Malaysia: Which is Better? (${currentYear})`,
      description:
        "Should you use an insurance agent or buy online through Bjak/PolicyStreet? Honest comparison of both options and when you actually need an agent.",
    },
  };
}

export default function AgentVsOnlineGuidePage() {
  return <GuideTemplate guide={guide} />;
}
