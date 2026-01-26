import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Pacific Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description:
      "Comprehensive Pacific car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Pacific right for you? Find out now.",
    openGraph: {
      title: `Pacific Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description:
        "Comprehensive Pacific car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function PacificReviewPage() {
  const insurer = getInsurerById("pacific");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
