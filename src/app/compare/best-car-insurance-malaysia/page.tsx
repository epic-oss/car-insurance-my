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
                        <div className="w-12 h-10 flex items-center justify-center">
                          <Image
                            src={insurer.logo}
                            alt={`${insurer.name} logo`}
                            width={48}
                            height={40}
                            className="object-contain max-h-[40px] w-auto"
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
                    <div className="w-12 h-10 flex items-center justify-center">
                      <Image
                        src={insurer.logo}
                        alt={`${insurer.name} logo`}
                        width={48}
                        height={40}
                        className="object-contain max-h-[40px] w-auto"
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

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>How We Rank Car Insurance Companies</h2>
            <p>
              Our rankings are based on comprehensive analysis of multiple factors that matter most to Malaysian drivers:
            </p>

            <h3>1. Claims Experience</h3>
            <p>
              We evaluate how quickly and efficiently each insurer processes claims. This includes claim approval times, workshop network quality, and customer satisfaction during the claims process.
            </p>

            <h3>2. Coverage Options</h3>
            <p>
              We assess the range of coverage options and add-ons available, from basic third-party to comprehensive plans with additional benefits like roadside assistance and windscreen coverage.
            </p>

            <h3>3. Pricing & Value</h3>
            <p>
              We compare premium rates across insurers for similar coverage levels. Value for money is key - the cheapest isn&apos;t always the best, and neither is the most expensive.
            </p>

            <h3>4. Customer Service</h3>
            <p>
              We consider customer feedback, complaint resolution, and the quality of support channels including phone, email, and digital platforms.
            </p>

            <h3>5. Financial Stability</h3>
            <p>
              We look at the financial strength and stability of each insurer, including their claims-paying ability and market reputation.
            </p>

            <h2>Tips for Choosing the Right Insurer</h2>
            <ul>
              <li><strong>Compare multiple quotes:</strong> Premiums can vary significantly between insurers for the same coverage.</li>
              <li><strong>Check workshop networks:</strong> Ensure the insurer has panel workshops convenient to your location.</li>
              <li><strong>Read reviews:</strong> Look for feedback from actual policyholders, especially about claims experience.</li>
              <li><strong>Consider add-ons carefully:</strong> Some add-ons are essential (like windscreen), while others may be unnecessary for your situation.</li>
              <li><strong>Don&apos;t just focus on price:</strong> The cheapest policy may not serve you well when you need to make a claim.</li>
            </ul>
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
