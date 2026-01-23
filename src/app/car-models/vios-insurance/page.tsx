"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";

const viosVariants = [
  {
    variant: "Vios 1.5 J",
    engine: "1.5L",
    marketValue: "RM75,000",
    comprehensive: "RM1,000-1,500/year",
    thirdParty: "RM200-300/year",
  },
  {
    variant: "Vios 1.5 E",
    engine: "1.5L",
    marketValue: "RM85,000",
    comprehensive: "RM1,100-1,600/year",
    thirdParty: "RM200-300/year",
  },
  {
    variant: "Vios 1.5 G",
    engine: "1.5L",
    marketValue: "RM95,000",
    comprehensive: "RM1,200-1,800/year",
    thirdParty: "RM220-320/year",
  },
  {
    variant: "Vios 1.5 GR-S",
    engine: "1.5L",
    marketValue: "RM105,000",
    comprehensive: "RM1,300-1,900/year",
    thirdParty: "RM220-320/year",
  },
];

const pricingFactors = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "NCD (No Claim Discount)",
    description: "Up to 55% discount if you haven't made claims. This is the biggest factor in reducing your Vios insurance cost.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Driver's Age & Experience",
    description: "Younger drivers (under 25) typically pay higher premiums. Named drivers also affect pricing.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    description: "Urban areas like KL have higher premiums than East Malaysia due to traffic and accident statistics.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Coverage Type",
    description: "Comprehensive costs more but covers your Vios against damage, theft, and accidents.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sum Insured (Market Value)",
    description: "Higher market value means higher premium. Vios's moderate pricing keeps insurance costs reasonable.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Add-ons Selected",
    description: "Windscreen coverage, flood protection, and other add-ons increase your premium.",
  },
];

const savingTips = [
  {
    title: "Maintain Your NCD",
    description: "Drive safely and avoid claims to keep your 55% No Claim Discount.",
    link: "/guide/ncd-explained",
    linkText: "Learn About NCD",
  },
  {
    title: "Compare Multiple Quotes",
    description: "Prices vary by RM300-600 between insurers for the same Vios coverage.",
    link: "/calculator/car-insurance-calculator",
    linkText: "Use Calculator",
  },
  {
    title: "Choose Right Coverage",
    description: "Consider Third Party for older Vios (8+ years) to save significantly.",
    link: "/guide/third-party-vs-comprehensive",
    linkText: "Compare Coverage",
  },
  {
    title: "Bundle Road Tax",
    description: "Some insurers offer discounts when you renew road tax together with insurance.",
    link: "/calculator/car-insurance-calculator",
    linkText: "Get Quote",
  },
];

const bestInsurers = [
  {
    rank: 1,
    name: "Etiqa",
    badge: "Best for Pricing",
    description: "Competitive rates for Vios owners with fast digital claims",
    link: "/compare/etiqa-car-insurance-review",
  },
  {
    rank: 2,
    name: "Allianz",
    badge: "Best for Service",
    description: "Premium service with Road Rangers roadside assistance",
    link: "/compare/allianz-car-insurance-review",
  },
  {
    rank: 3,
    name: "Tokio Marine",
    badge: "Best for Claims",
    description: "Excellent claims experience with EZ Claim service",
    link: "/compare/tokio-marine-car-insurance-review",
  },
  {
    rank: 4,
    name: "AXA",
    badge: "Flexibility",
    description: "Wide range of add-ons and customization options",
    link: "/compare/axa-car-insurance-review",
  },
  {
    rank: 5,
    name: "Zurich",
    badge: "Premium Option",
    description: "Comprehensive coverage with excellent customer service",
    link: "/compare/zurich-car-insurance-review",
  },
];

const viosFaqs = [
  {
    question: "How much is Vios insurance per year?",
    answer: "Vios insurance costs between RM1,000-1,900 per year for comprehensive coverage, depending on the variant, your NCD, and location. Third Party insurance is much cheaper at RM200-320 per year. Entry variants (J, E) are generally cheaper to insure than premium variants (G, GR-S).",
  },
  {
    question: "How much is Vios 1.5 insurance?",
    answer: "Toyota Vios 1.5 comprehensive insurance typically costs RM1,000-1,900 per year, depending on the variant. With maximum NCD of 55%, you could pay as low as RM450-850. Third Party coverage for Vios 1.5 costs around RM200-320 per year.",
  },
  {
    question: "Is Vios expensive to insure?",
    answer: "Vios insurance is moderate - higher than national cars like Myvi due to higher market value, but Toyota's reliability and wide parts availability in Malaysia help keep rates reasonable compared to other Japanese sedans.",
  },
  {
    question: "What is the cheapest insurance for Vios?",
    answer: "The cheapest insurance for Vios is Third Party coverage, starting from around RM200 per year. For comprehensive coverage, Etiqa and Kurnia typically offer the most competitive rates for Vios. Always compare quotes from multiple insurers to find the best price.",
  },
  {
    question: "How much is Vios road tax and insurance together?",
    answer: "For a Toyota Vios 1.5, road tax is RM90 per year plus insurance from RM1,000-1,900, totaling approximately RM1,090-1,990. With maximum NCD, your total could be as low as RM540-940 annually.",
  },
  {
    question: "Which is cheaper to insure, Vios or City?",
    answer: "Both Toyota Vios and Honda City have similar insurance costs. Vios may be slightly cheaper due to wider parts availability in Malaysia as it's locally assembled at UMW Toyota. Expect a difference of RM50-150 annually.",
  },
  {
    question: "Can I buy Vios insurance online?",
    answer: "Yes, you can get Vios insurance quotes and purchase policies entirely online through insurance comparison platforms and direct insurer websites. Online renewal is quick and you can compare prices from 15+ insurers in minutes.",
  },
  {
    question: "Should I get comprehensive or third party for my Vios?",
    answer: "Get comprehensive insurance if your Vios is less than 8 years old, financed, or worth more than RM40,000. Choose Third Party if your Vios is older than 8 years and fully paid - the lower premium makes more financial sense for older vehicles.",
  },
];

export default function ViosInsurancePage() {
  const [expandedVariant, setExpandedVariant] = useState<string | null>("vios-entry");

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-800">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Car Models</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Vios Insurance</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vios Insurance Price Malaysia 2026
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Find out how much insurance costs for Toyota Vios 1.5 J, E, G &amp; GR-S variants. Compare quotes from 15+ insurers and save up to RM500.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">From RM700</div>
                  <div className="text-sm text-gray-300">per year</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">15+</div>
                  <div className="text-sm text-gray-300">Insurers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">60s</div>
                  <div className="text-sm text-gray-300">Quote Time</div>
                </div>
              </div>

              <Link
                href="/calculator/car-insurance-calculator"
                className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
              >
                Get Free Vios Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 5h8m-4 5v-5m-8 9h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Toyota Vios</h3>
                <p className="text-center text-gray-300 text-sm">Malaysia&apos;s Favourite Sedan</p>
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engine:</span>
                    <span className="font-medium">1.5L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price Range:</span>
                    <span className="font-medium">RM75K - RM105K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance From:</span>
                    <span className="font-medium text-secondary-400">RM700/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Price Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Vios Insurance Price Comparison 2026
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Compare estimated insurance prices for all Toyota Vios variants. Prices based on 55% NCD.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Vios Variant</th>
                  <th className="px-6 py-4 text-left font-semibold">Engine</th>
                  <th className="px-6 py-4 text-left font-semibold">Market Value</th>
                  <th className="px-6 py-4 text-left font-semibold">Comprehensive</th>
                  <th className="px-6 py-4 text-left font-semibold">Third Party</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {viosVariants.map((variant, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{variant.variant}</td>
                    <td className="px-6 py-4 text-gray-600">{variant.engine}</td>
                    <td className="px-6 py-4 text-gray-600">{variant.marketValue}</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">{variant.comprehensive}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-600 font-semibold">{variant.thirdParty}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {viosVariants.map((variant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                <div className="font-bold text-gray-900 mb-3">{variant.variant}</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Engine:</div>
                  <div>{variant.engine}</div>
                  <div className="text-gray-500">Market Value:</div>
                  <div>{variant.marketValue}</div>
                  <div className="text-gray-500">Comprehensive:</div>
                  <div className="text-green-600 font-semibold">{variant.comprehensive}</div>
                  <div className="text-gray-500">Third Party:</div>
                  <div className="text-blue-600 font-semibold">{variant.thirdParty}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            * Prices are estimates based on 55% NCD. Actual premium depends on driver age, location, and insurer.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/calculator/car-insurance-calculator"
              className="btn-primary inline-block px-8 py-3"
            >
              Calculate Your Exact Price
            </Link>
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Factors Affecting Your Vios Insurance Price
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding these factors helps you find the best vios insurance price Malaysia offers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  {factor.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vios Variants Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Vios Insurance by Variant
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Detailed breakdown of toyota vios insurance price for each variant.
          </p>

          <div className="space-y-4">
            {/* Vios Entry Variants */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setExpandedVariant(expandedVariant === "vios-entry" ? null : "vios-entry")}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Vios 1.5 J &amp; E (Entry Variants)</h3>
                  <p className="text-sm text-gray-500">Best for budget-conscious drivers</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 font-bold hidden sm:block">From RM1,000/year</span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${expandedVariant === "vios-entry" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedVariant === "vios-entry" && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Engine:</span>
                          <span className="font-medium">1,496cc</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Market Value:</span>
                          <span className="font-medium">RM70,000 - RM90,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Road Tax:</span>
                          <span className="font-medium">RM90/year</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Vios J/E Insurance Price:</span>
                          <span className="font-medium text-green-600">RM1,000 - RM1,600/year</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Budget-conscious drivers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Reliable daily driver</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>City and highway commuting</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-500">
                        <strong>Recommended:</strong> <Link href="/compare/etiqa-car-insurance-review" className="text-primary-800 hover:underline">Etiqa</Link> (competitive) or Kurnia (budget)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Vios Premium Variants */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setExpandedVariant(expandedVariant === "vios-premium" ? null : "vios-premium")}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Vios 1.5 G &amp; GR-S (Premium Variants)</h3>
                  <p className="text-sm text-gray-500">Best for those wanting premium features</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 font-bold hidden sm:block">From RM1,200/year</span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${expandedVariant === "vios-premium" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedVariant === "vios-premium" && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Engine:</span>
                          <span className="font-medium">1,496cc</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Market Value:</span>
                          <span className="font-medium">RM90,000 - RM110,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Road Tax:</span>
                          <span className="font-medium">RM90/year</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Vios G/GR-S Insurance Price:</span>
                          <span className="font-medium text-green-600">RM1,200 - RM1,900/year</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Premium feature seekers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Sportier driving experience (GR-S)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Families wanting safety features</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-500">
                        <strong>Recommended:</strong> <Link href="/compare/allianz-car-insurance-review" className="text-primary-800 hover:underline">Allianz</Link> (premium) or <Link href="/compare/tokio-marine-car-insurance-review" className="text-primary-800 hover:underline">Tokio Marine</Link> (balanced)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive vs Third Party */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive vs Third Party for Vios
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choosing the right coverage type can save you money while protecting your Toyota Vios.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Comprehensive</th>
                  <th className="px-6 py-4 text-center font-semibold">Third Party</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Price for Vios</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">RM1,000-1,900/year</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-semibold">RM200-320/year</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Own Damage Cover</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Theft Protection</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Third Party Liability</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-center text-sm">New/financed Vios<br />(under 8 years old)</td>
                  <td className="px-6 py-4 text-center text-sm">Old Vios<br />(8+ years old)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/guide/third-party-vs-comprehensive"
              className="inline-flex items-center text-primary-800 font-medium hover:text-primary-600 transition-colors"
            >
              Learn more about coverage types
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Save */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How to Save on Vios Insurance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Smart tips to get the lowest vios insurance price malaysia has to offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savingTips.map((tip, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
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

      {/* Best Insurers for Vios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Best Insurers for Vios
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Top 5 recommended insurance companies for Toyota Vios owners.
          </p>

          <div className="grid gap-4">
            {bestInsurers.map((insurer) => (
              <Link
                key={insurer.rank}
                href={insurer.link}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex items-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-xl mr-4 flex-shrink-0">
                  {insurer.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{insurer.name}</h3>
                    <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded-full">
                      {insurer.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{insurer.description}</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/compare/best-car-insurance-malaysia"
              className="btn-primary inline-block px-8 py-3"
            >
              Compare All Insurers
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={viosFaqs} title="Vios Insurance FAQ" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Vios Insurance Quote?</h2>
            <p className="text-xl text-gray-300">
              Compare prices from 15+ insurers and save up to RM500 on your Toyota Vios insurance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
            <LeadForm variant="modal" source="vios-insurance" />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/car-models/myvi-insurance"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="font-semibold text-gray-900">Myvi Insurance Price</h3>
              <p className="text-sm text-gray-500 mt-1">Compare Perodua Myvi rates</p>
            </Link>
            <Link
              href="/calculator/car-insurance-calculator"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Car Insurance Calculator</h3>
              <p className="text-sm text-gray-500 mt-1">Estimate your exact premium</p>
            </Link>
            <Link
              href="/compare/best-car-insurance-malaysia"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Compare All Insurers</h3>
              <p className="text-sm text-gray-500 mt-1">Top 10 insurers ranked</p>
            </Link>
            <Link
              href="/guide/third-party-vs-comprehensive"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Coverage Types</h3>
              <p className="text-sm text-gray-500 mt-1">Comprehensive vs Third Party</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
