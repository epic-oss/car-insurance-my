import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Subang Jaya ${currentYear} - USJ, Sunway & SS Residents`,
  description:
    "Subang Jaya car insurance with local claims support. Serving USJ, SS12-SS19, Sunway, Putra Heights residents. Agent service, not just online forms.",
  keywords:
    "car insurance subang jaya, insurance agent USJ, subang jaya car insurance, insurance sunway, car insurance SS15, insurance putra heights",
  openGraph: {
    title: `Car Insurance Agent Subang Jaya ${currentYear} | USJ & Sunway`,
    description:
      "Subang Jaya car insurance with local claims support. USJ, SS sections, Sunway, Putra Heights covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function SubangJayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
