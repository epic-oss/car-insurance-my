import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Lonpac Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description:
      "Comprehensive Lonpac car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Lonpac right for you? Find out now.",
    openGraph: {
      title: `Lonpac Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description:
        "Comprehensive Lonpac car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function LonpacReviewPage() {
  const insurer = getInsurerById("lonpac");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
