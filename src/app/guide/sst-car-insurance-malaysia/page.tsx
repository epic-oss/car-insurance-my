import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["sst-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `SST on Car Insurance Malaysia ${currentYear} - How to Minimize the Impact`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `SST on Car Insurance Malaysia ${currentYear} - How to Minimize the Impact`,
      description:
        "Complete guide to SST on car insurance in Malaysia. Learn how the 8% service tax is calculated, strategies to minimize impact, and which add-ons are worth keeping.",
    },
  };
}

export default function SSTCarInsuranceGuidePage() {
  return <GuideTemplate guide={guide} />;
}
