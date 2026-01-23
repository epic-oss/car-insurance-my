import { Metadata } from "next";
import Link from "next/link";
import { currentYear } from "@/lib/utils";

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

const guides = [
  {
    title: "NCD Explained",
    href: "/guide/ncd-explained",
    description: "Learn how No Claim Discount works and save up to 55%",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    title: "Third Party vs Comprehensive",
    href: "/guide/third-party-vs-comprehensive",
    description: "Which coverage type is right for your car?",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    title: "How to Claim Car Insurance",
    href: "/guide/how-to-claim-car-insurance",
    description: "Step-by-step guide to making a car insurance claim",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    title: "Cheapest Car Insurance Malaysia",
    href: "/guide/cheapest-car-insurance-malaysia",
    description: "Find the lowest rates and tips to save money",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Resource Center</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Insurance Guides Malaysia
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about car insurance in Malaysia.
              Written by experts, updated for {currentYear}.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center ${guide.color}`}
                  >
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
                      {guide.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                      Read guide
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Last updated: {currentYear}
          </p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Tips for Malaysian Drivers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "🛡️",
                tip: "Always compare quotes from multiple insurers",
              },
              { icon: "📅", tip: "Renew early to avoid policy lapse" },
              { icon: "💰", tip: "Higher NCD = Lower premium" },
              { icon: "📝", tip: "Read your policy document carefully" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Compare Car Insurance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get quotes from 15+ insurers in 60 seconds.
          </p>
          <Link
            href="/#quote-form"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
