import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["rejected-car-insurance-claim-help-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Car Insurance Claim Rejected Malaysia? Here's What to Do (${currentYear} Guide)`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Car Insurance Claim Rejected Malaysia? Here's What to Do (${currentYear} Guide)`,
      description:
        "Car insurance claim rejected in Malaysia? Learn why claims get denied, how to appeal, and get expert help. We've successfully appealed 150+ rejected claims.",
    },
  };
}

export default function RejectedClaimGuidePage() {
  return <GuideTemplate guide={guide} />;
}
