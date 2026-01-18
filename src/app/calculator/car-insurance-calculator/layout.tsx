import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Insurance Calculator Malaysia | Estimate Your Premium",
  description: "Calculate your car insurance premium in Malaysia. Free calculator for comprehensive and third party coverage. Estimate costs based on NCD, vehicle value, and more.",
  openGraph: {
    title: "Car Insurance Calculator Malaysia | CarInsuranceMY",
    description: "Calculate your car insurance premium in seconds. Free calculator for comprehensive and third party coverage.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
