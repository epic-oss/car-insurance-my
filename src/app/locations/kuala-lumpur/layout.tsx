import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Kuala Lumpur ${currentYear} - KL City & Surrounding Areas`,
  description:
    "KL car insurance with claims support. Bangsar, Cheras, Kepong, Wangsa Maju, Sentul - all areas covered. Agent service for city drivers.",
  keywords:
    "car insurance kuala lumpur, insurance agent KL, KL car insurance, insurance bangsar, car insurance cheras, insurance kepong, car insurance mont kiara",
  openGraph: {
    title: `Car Insurance Agent Kuala Lumpur ${currentYear} | All KL Areas`,
    description:
      "KL car insurance with personal agent support. Bangsar, Cheras, Kepong, Wangsa Maju, KLCC area covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function KualaLumpurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
