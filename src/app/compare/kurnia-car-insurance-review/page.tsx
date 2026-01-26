import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Kurnia Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description:
      "Comprehensive Kurnia car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Kurnia right for you? Find out now.",
    openGraph: {
      title: `Kurnia Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description:
        "Comprehensive Kurnia car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function KurniaReviewPage() {
  const insurer = getInsurerById("kurnia");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
