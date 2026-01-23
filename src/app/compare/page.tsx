import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { currentYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Compare Car Insurance Malaysia ${currentYear} | Reviews & Ratings`,
  description:
    "Compare car insurance companies in Malaysia. Read reviews of Etiqa, Allianz, Tokio Marine, AXA, Zurich. Find the best insurer for your needs.",
  keywords:
    "compare car insurance malaysia, car insurance review, best car insurance company malaysia",
  openGraph: {
    title: `Compare Car Insurance Malaysia ${currentYear}`,
    description:
      "Compare insurers and read expert reviews to find the best car insurance.",
  },
};

const insurerReviews = [
  {
    name: "Etiqa",
    href: "/compare/etiqa-car-insurance-review",
    logo: "/images/insurers/etiqa.png",
    rating: 4.5,
    tagline: "Competitive pricing, fast claims",
    highlights: ["Lowest prices", "Quick approval", "Wide coverage options"],
  },
  {
    name: "Allianz",
    href: "/compare/allianz-car-insurance-review",
    logo: "/images/insurers/allianz.png",
    rating: 4.6,
    tagline: "Premium service, Road Rangers",
    highlights: ["Road Rangers assistance", "Trusted brand", "24/7 support"],
  },
  {
    name: "Tokio Marine",
    href: "/compare/tokio-marine-car-insurance-review",
    logo: "/images/insurers/Tokio Marine.avif",
    rating: 4.4,
    tagline: "Established insurer, EZ Claim",
    highlights: ["EZ Claim process", "Japanese reliability", "NCD protection"],
  },
  {
    name: "AXA",
    href: "/compare/axa-car-insurance-review",
    logo: "/images/insurers/Axa.png",
    rating: 4.3,
    tagline: "Flexible coverage options",
    highlights: ["Flexible add-ons", "Global brand", "Online management"],
  },
  {
    name: "Zurich",
    href: "/compare/zurich-car-insurance-review",
    logo: "/images/insurers/zurich.png",
    rating: 4.4,
    tagline: "Swiss reliability, balanced coverage",
    highlights: ["Swiss quality", "Balanced pricing", "Good claim support"],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "text-yellow-400"
              : star - rating < 1
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Insurance Comparison</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Car Insurance Malaysia
            </h1>
            <p className="text-xl text-gray-300">
              Find the best car insurance for your needs. Compare prices,
              coverage, and read expert reviews of top insurers in Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Compare All CTA */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/compare/best-car-insurance-malaysia"
            className="group block bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200 p-6 hover:border-primary-400 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
                  Compare All Insurers
                </h2>
                <p className="text-gray-600">
                  Side-by-side comparison of 15+ insurance companies with
                  pricing, features, and ratings.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg group-hover:bg-primary-700 transition-colors">
                  View Comparison Table
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>
      </section>

      {/* Insurer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insurer Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-depth reviews of Malaysia&apos;s top car insurance companies.
              Learn about coverage, pricing, claims process, and customer
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurerReviews.map((insurer) => (
              <Link
                key={insurer.href}
                href={insurer.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 relative flex-shrink-0 bg-gray-50 rounded-lg p-2">
                    <Image
                      src={insurer.logo}
                      alt={`${insurer.name} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {insurer.name}
                    </h3>
                    <StarRating rating={insurer.rating} />
                  </div>
                </div>

                <p className="text-gray-600 font-medium mb-3">
                  {insurer.tagline}
                </p>

                <ul className="space-y-1 mb-4">
                  {insurer.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-500 flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                  Read full review
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
              </Link>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-gray-100 rounded-xl border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-500 mb-2">
                More Reviews Coming Soon
              </h3>
              <p className="text-sm text-gray-400">
                RHB, Kurnia, MSIG, Lonpac, and more...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Compare Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What to Look for in Car Insurance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "💰", label: "Premium Price", desc: "Monthly/yearly cost" },
              { icon: "🛡️", label: "Coverage", desc: "What's protected" },
              { icon: "⚡", label: "Claims Process", desc: "Speed & ease" },
              { icon: "📞", label: "Customer Service", desc: "Support quality" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your Quote?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Compare quotes from all these insurers in just 60 seconds.
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
