import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compare Car Insurance Malaysia | Get Free Quotes in 60 Seconds",
  description: "Compare car insurance quotes from 15+ top insurers in Malaysia. BNM licensed partners. Save up to RM500 on your car insurance renewal. Get free quotes now!",
  keywords: "car insurance Malaysia, car insurance comparison, cheap car insurance, motor insurance, Allianz, Etiqa, AXA, Tokio Marine",
  openGraph: {
    title: "Compare Car Insurance Malaysia | CarInsuranceMY",
    description: "Compare car insurance quotes from 15+ top insurers. Save up to RM500 on your renewal!",
    type: "website",
    locale: "en_MY",
    siteName: "CarInsuranceMY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
