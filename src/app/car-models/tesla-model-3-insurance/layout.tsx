import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Tesla Model 3 Insurance Price Malaysia ${currentYear} | From RM4,500/year`,
  description:
    "Tesla Model 3 insurance costs RM4,500-7,500/year in Malaysia. Compare Liberty InsureMyTesla vs Allianz EV Shield. Find the best coverage for your Tesla.",
  keywords:
    "tesla model 3 insurance, tesla model 3 insurance price malaysia, tesla insurance malaysia, liberty insuremytesla, tesla ev insurance, model 3 road tax",
  openGraph: {
    title: `Tesla Model 3 Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Tesla Model 3 insurance prices from Liberty InsureMyTesla, Allianz EV Shield & more. Find the best deal for RWD, Long Range & Performance models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function TeslaModel3InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
