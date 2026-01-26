import { Metadata } from "next";
import { getInsurerById } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import ReviewPage from "@/components/ReviewPage";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: `RHB Car Insurance Review ${currentYear} | Coverage, Pros & Cons`,
    description:
      "Comprehensive RHB car insurance review. Learn about coverage options, pricing, claims process, pros and cons. Is RHB right for you? Find out now.",
    openGraph: {
      title: `RHB Car Insurance Review ${currentYear} | CarInsuranceMY`,
      description:
        "Comprehensive RHB car insurance review. Coverage, pricing, claims process, and more.",
    },
  };
}

export default function RHBReviewPage() {
  const insurer = getInsurerById("rhb");

  if (!insurer) {
    notFound();
  }

  return <ReviewPage insurer={insurer} />;
}
