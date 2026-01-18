import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Tokio Marine Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description: "Comprehensive Tokio Marine car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Tokio Marine right for you?",
    openGraph: {
      title: `Tokio Marine Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description: "Comprehensive Tokio Marine car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function TokioMarineReviewPage() {
  const insurer = getInsurerById("tokio-marine");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
