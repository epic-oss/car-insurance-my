import { Metadata } from "next";
import GuideTemplate from "@/components/guides/GuideTemplate";
import { guides } from "@/lib/data/guides";

const guide = guides["third-party-vs-comprehensive"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  keywords: guide.keywords.join(", "),
  openGraph: {
    title: "Third Party vs Comprehensive Car Insurance | CarInsuranceMY",
    description:
      "Complete guide to choosing between third party and comprehensive car insurance in Malaysia.",
  },
};

export default function ThirdPartyVsComprehensivePage() {
  return <GuideTemplate guide={guide} />;
}
