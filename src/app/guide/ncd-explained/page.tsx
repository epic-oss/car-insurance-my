import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["ncd-explained"];

export function generateMetadata(): Metadata {
  return {
    title: `NCD Explained: No Claim Discount Guide Malaysia ${currentYear}`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: "NCD Explained: No Claim Discount Guide | CarInsuranceMY",
      description:
        "Everything you need to know about NCD in Malaysia - rates, transfer, protection tips.",
    },
  };
}

export default function NCDExplainedPage() {
  return <GuideTemplate guide={guide} />;
}
