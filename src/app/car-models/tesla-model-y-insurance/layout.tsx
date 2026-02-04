import { Metadata } from "next";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Tesla Model Y Insurance Price Malaysia ${currentYear} | From RM5,400/year`,
  description:
    "Tesla Model Y insurance costs RM5,400-7,700/year in Malaysia. Compare Liberty InsureMyTesla vs Allianz EV Shield. Find the best coverage for your Model Y SUV.",
  keywords:
    "tesla model y insurance, tesla model y insurance price malaysia, tesla suv insurance, liberty insuremytesla, model y road tax, tesla ev insurance malaysia",
  openGraph: {
    title: `Tesla Model Y Insurance Price Malaysia ${currentYear} | Compare Quotes`,
    description:
      "Compare Tesla Model Y insurance prices from Liberty InsureMyTesla, Allianz EV Shield & more. Find the best deal for RWD, Long Range & Performance models.",
    type: "article",
    locale: "en_MY",
  },
};

export default function TeslaModelYInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
