import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Insurance Malaysia 2026 - Expert Service & 24-Hour Claims Support | CarInsuranceMY",
  description: "Get car insurance with dedicated claims support. 1,000+ claims handled. Specialized in Zurich & Allianz. 24-hour emergency assistance. Get your free quote today.",
  keywords: "car insurance Malaysia, car insurance claims support, Zurich car insurance, Allianz car insurance, motor insurance Malaysia, 24 hour claims support",
  icons: {
    icon: "/images/logo/Carinsurancemy logo.png",
    apple: "/images/logo/Carinsurancemy logo.png",
  },
  openGraph: {
    title: "Car Insurance Malaysia - Expert Service & 24-Hour Claims Support | CarInsuranceMY",
    description: "Get car insurance with dedicated claims support. 1,000+ claims handled. Specialized in Zurich & Allianz. 24-hour emergency assistance.",
    type: "website",
    locale: "en_MY",
    siteName: "CarInsuranceMY",
  },
  verification: {
    google: "4PTwYXHgvCxjYV6q7HD1rEAiR0o8dIWZqpmL5jDPdnw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
