import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";
import { currentYear } from "@/lib/utils";

const guide = guides["cheapest-car-insurance-malaysia"];

export function generateMetadata(): Metadata {
  return {
    title: `Cheapest Car Insurance Malaysia ${currentYear} | From RM150/year | Save Money`,
    description: guide.metaDescription,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: `Cheapest Car Insurance Malaysia ${currentYear} | Complete Guide`,
      description:
        "How to find the lowest car insurance rates in Malaysia without sacrificing coverage.",
    },
  };
}

export default function CheapestCarInsurancePage() {
  return <GuideTemplate guide={guide} />;
}
