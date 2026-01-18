import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `AXA Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description: "Comprehensive AXA Affin car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is AXA right for you? Find out now.",
    openGraph: {
      title: `AXA Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description: "Comprehensive AXA car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function AXAReviewPage() {
  const insurer = getInsurerById("axa");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
