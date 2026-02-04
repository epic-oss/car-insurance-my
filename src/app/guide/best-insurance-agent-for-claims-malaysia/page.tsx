import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["best-insurance-agent-for-claims-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Best Insurance Agent for Claims Malaysia ${currentYear} - How to Choose`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Best Insurance Agent for Claims Malaysia ${currentYear} - How to Choose`,
      description:
        "Looking for an insurance agent who actually helps with claims? Learn what separates good agents from bad ones and how to find claims-focused agents.",
    },
  };
}

export default function BestClaimsAgentGuidePage() {
  return <GuideTemplate guide={guide} />;
}
