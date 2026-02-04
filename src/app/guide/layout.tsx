import { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Car Insurance Guides Malaysia ${currentYear} | Learn & Save`,
  description:
    "Free car insurance guides for Malaysian drivers. Learn about NCD, coverage types, claims process, and how to get the cheapest rates.",
  keywords:
    "car insurance guide malaysia, car insurance tips, ncd explained, how to claim car insurance",
  openGraph: {
    title: `Car Insurance Guides Malaysia ${currentYear}`,
    description:
      "Everything you need to know about car insurance in Malaysia - from NCD to claims.",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
