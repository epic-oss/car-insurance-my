import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Car Insurance Agent Cheras ${currentYear} - Taman Connaught to Balakong`,
  description:
    "Cheras car insurance with claims support. Taman Connaught, Taman Midah, Balakong, Sungai Long residents. Not just online - real agent service.",
  keywords:
    "car insurance cheras, insurance agent cheras, cheras car insurance, insurance balakong, car insurance sungai long, insurance taman connaught",
  openGraph: {
    title: `Car Insurance Agent Cheras ${currentYear} | All Cheras Areas`,
    description:
      "Cheras car insurance with personal agent support. Taman Connaught, Balakong, Sungai Long, Mahkota Cheras covered. Get your free quote.",
    type: "article",
    locale: "en_MY",
  },
};

export default function CherasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
