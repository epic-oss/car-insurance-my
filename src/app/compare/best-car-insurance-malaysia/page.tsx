import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTopInsurers } from "@/lib/insurers";
import { currentYear } from "@/lib/utils";
import FAQ from "@/components/FAQ";

export function generateMetadata(): Metadata {
  return {
    title: `Best Car Insurance Malaysia ${currentYear} | Compare Top 10 Insurers`,
    description: "Compare the best car insurance companies in Malaysia. Detailed comparison of Allianz, Etiqa, AXA, Tokio Marine, Zurich & more. Find the best coverage and price.",
    openGraph: {
      title: `Best Car Insurance Malaysia ${currentYear} | Top 10 Insurers Compared`,
      description: "Compare the best car insurance companies in Malaysia. Find the perfect coverage at the best price.",
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "text-yellow-400"
              : star - 0.5 <= rating
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
}

const compareFaqs = [
  {
    question: "Which is the best car insurance company in Malaysia?",
    answer:
      "The best car insurance company depends on your specific needs. Allianz and Tokio Marine are known for excellent claims service, Etiqa offers competitive pricing, while Zurich provides premium features. We recommend comparing quotes from multiple insurers to find the best fit for you.",
  },
  {
    question: "How do I choose between car insurance companies?",
    answer:
      "Consider these factors: claim settlement ratio and speed, premium cost, workshop network in your area, available add-ons, customer service quality, and financial stability of the insurer. Reading reviews and getting quotes from multiple companies helps in making an informed decision.",
  },
  {
    question: "Are all car insurance companies regulated in Malaysia?",
    answer:
      "Yes, all car insurance companies operating in Malaysia are regulated by Bank Negara Malaysia (BNM). This ensures they meet minimum financial and operational standards to protect policyholders.",
  },
  {
    question: "Can I switch car insurance companies at renewal?",
    answer:
      "Yes, you can switch insurers when your policy expires. Your NCD (No Claim Discount) is transferable between companies. Simply get quotes from other insurers before your renewal date and provide your NCD confirmation letter.",
  },
];

const rankingCriteria = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Claims Experience",
    description: "We evaluate claim approval times, workshop network, and customer satisfaction.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Coverage Options",
    description: "We assess coverage range from basic third-party to comprehensive plans with add-ons.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pricing & Value",
    description: "We compare premium rates for similar coverage. Value for money matters most.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Customer Service",
    description: "We consider feedback, complaint resolution, and digital platform quality.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Financial Stability",
    description: "We evaluate financial strength and claims-paying ability of each insurer.",
  },
];

const choosingTips = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Compare Multiple Quotes",
    description: "Premiums vary significantly between insurers for the same coverage.",
    link: "/calculator/car-insurance-calculator",
    linkText: "Use Our Calculator",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Check Workshop Network",
    description: "Ensure the insurer has panel workshops convenient to your location.",
    link: "/compare/best-car-insurance-malaysia",
    linkText: "Compare Networks",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Read Reviews",
    description: "Look for feedback from actual policyholders about claims experience.",
    link: "/compare/etiqa-car-insurance-review",
    linkText: "Read Reviews",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Consider Add-ons",
    description: "Some add-ons like windscreen are essential, others may be unnecessary.",
    link: "/guide/third-party-vs-comprehensive",
    linkText: "Learn More",
  },
];

export default function ComparePage() {
  const topInsurers = getTopInsurers(10);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Car Insurance in Malaysia {currentYear}
            </h1>
            <p className="text-xl text-gray-300">
              Compare Malaysia&apos;s top car insurance companies. Find the best coverage,
              claims experience, and price for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top 10 Car Insurance Companies Compared
          </h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Insurer
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Claims
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Pricing
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Key Features
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topInsurers.map((insurer, index) => (
                  <tr key={insurer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-10 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={insurer.logo}
                            alt={`${insurer.name} logo`}
                            width={64}
                            height={40}
                            className="object-contain h-10 w-auto"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {insurer.shortName}
                          </div>
                          <div className="text-sm text-gray-500">
                            Est. {insurer.established}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StarRating rating={insurer.rating} />
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          insurer.claimsRating === "Excellent"
                            ? "bg-green-100 text-green-800"
                            : insurer.claimsRating === "Very Good"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {insurer.claimsRating}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          insurer.priceRating === "Budget-Friendly"
                            ? "bg-green-100 text-green-800"
                            : insurer.priceRating === "Competitive"
                            ? "bg-blue-100 text-blue-800"
                            : insurer.priceRating === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {insurer.priceRating}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm text-gray-600 space-y-1">
                        {insurer.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/compare/${insurer.id}-car-insurance-review`}
                        className="btn-primary text-sm py-2 px-4"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {topInsurers.map((insurer, index) => (
              <div key={insurer.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold text-sm">
                      {index + 1}
                    </span>
                    <div className="w-14 h-10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={insurer.logo}
                        alt={`${insurer.name} logo`}
                        width={56}
                        height={40}
                        className="object-contain h-10 w-auto"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {insurer.shortName}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={insurer.rating} />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      insurer.claimsRating === "Excellent"
                        ? "bg-green-100 text-green-800"
                        : insurer.claimsRating === "Very Good"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {insurer.claimsRating} Claims
                  </span>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      insurer.priceRating === "Budget-Friendly"
                        ? "bg-green-100 text-green-800"
                        : insurer.priceRating === "Competitive"
                        ? "bg-blue-100 text-blue-800"
                        : insurer.priceRating === "Moderate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {insurer.priceRating}
                  </span>
                </div>

                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {insurer.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/compare/${insurer.id}-car-insurance-review`}
                  className="btn-primary w-full text-center text-sm py-2"
                >
                  View Full Review
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Not sure which insurer is right for you?</h3>
            <p className="text-blue-100 mb-6">Use our calculator to estimate your premium and compare quotes</p>
            <Link
              href="/calculator/car-insurance-calculator"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Calculate Your Premium
            </Link>
          </div>
        </div>
      </section>

      {/* How We Rank Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Rank Car Insurance Companies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our rankings are based on comprehensive analysis of multiple factors that matter most to Malaysian drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankingCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  {criteria.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{criteria.title}</h3>
                <p className="text-gray-600 text-sm">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Choosing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Choosing the Right Insurer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these tips to find the best car insurance for your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {choosingTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
                    <Link
                      href={tip.link}
                      className="inline-flex items-center text-primary-800 font-medium text-sm hover:text-primary-600 transition-colors"
                    >
                      {tip.linkText}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={compareFaqs} title="Frequently Asked Questions" />

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Compare Quotes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get personalized quotes from all these insurers in one place.
          </p>
          <Link href="/#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Free Quotes Now
          </Link>
        </div>
      </section>
    </>
  );
}
