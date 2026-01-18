import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `Allianz Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description: "Comprehensive Allianz car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is Allianz right for you? Find out now.",
    openGraph: {
      title: `Allianz Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description: "Comprehensive Allianz car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function AllianzReviewPage() {
  const insurer = getInsurerById("allianz");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
