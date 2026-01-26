import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `MSIG Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description:
      "Comprehensive MSIG car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is MSIG right for you? Find out now.",
    openGraph: {
      title: `MSIG Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description:
        "Comprehensive MSIG car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function MSIGReviewPage() {
  const insurer = getInsurerById("msig");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
