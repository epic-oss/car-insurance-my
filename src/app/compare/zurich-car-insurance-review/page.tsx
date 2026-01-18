import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Zurich Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description: "Comprehensive Zurich car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Zurich right for you? Find out now.",
    openGraph: {
      title: `Zurich Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description: "Comprehensive Zurich car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function ZurichReviewPage() {
  const insurer = getInsurerById("zurich");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
