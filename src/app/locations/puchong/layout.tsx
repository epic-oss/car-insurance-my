import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Puchong ${currentYear} - Bandar Puteri to IOI Coverage`,
  description:
    "Puchong car insurance with local workshop access. Bandar Puteri, IOI Mall area, Taman Kinrara, Bandar Kinrara residents. Personal agent service.",
  keywords:
    "car insurance puchong, insurance agent puchong, puchong car insurance, insurance bandar puteri, car insurance taman kinrara, insurance IOI puchong",
  openGraph: {
    title: `Car Insurance Agent Puchong ${currentYear} | Local Coverage`,
    description:
      "Puchong car insurance with claims support. Bandar Puteri, IOI area, Taman Kinrara, Puchong Perdana covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function PuchongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
