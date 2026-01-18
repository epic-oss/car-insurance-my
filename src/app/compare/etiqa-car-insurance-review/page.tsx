import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Etiqa Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description: "Comprehensive Etiqa car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Etiqa right for you? Find out now.",
    openGraph: {
      title: `Etiqa Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description: "Comprehensive Etiqa car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function EtiqaReviewPage() {
  const insurer = getInsurerById("etiqa");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
