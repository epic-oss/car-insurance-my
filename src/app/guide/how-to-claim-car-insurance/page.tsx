import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["how-to-claim-car-insurance"];

export function generateMetadata(): Metadata {
  return {
    title: `How to Claim Car Insurance Malaysia | Step-by-Step Guide ${currentYear}`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: "How to Claim Car Insurance Malaysia | CarInsuranceMY",
      description:
        "Step-by-step guide to claiming car insurance in Malaysia. Documents, process, and tips.",
    },
  };
}

export default function HowToClaimPage() {
  return <GuideTemplate guide={guide} />;
}
