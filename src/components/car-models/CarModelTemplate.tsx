"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import { CarModel, formatPriceRange } from "@/lib/data/car-models";
import { siteConfig } from "@/lib/data/site-config";

interface CarModelTemplateProps {
  model: CarModel;
}

// Icon components
const Icons = {
  shieldCheck: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  mapPin: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  dollar: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  plus: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  checkGreen: (
    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  x: (
    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  chevronDown: (
    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  chevronRight: (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  arrowRight: (
    <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  car: (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 5h8m-4 5v-5m-8 9h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  calculator: (
    <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  chart: (
    <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  dollarLarge: (
    <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shieldLarge: (
    <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  building: (
    <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": Icons.shieldCheck,
  user: Icons.user,
  "map-pin": Icons.mapPin,
  shield: Icons.shield,
  dollar: Icons.dollar,
  plus: Icons.plus,
};

const relatedIconMap: Record<string, React.ReactNode> = {
  calculator: Icons.calculator,
  chart: Icons.chart,
  dollar: Icons.dollarLarge,
  shield: Icons.shieldLarge,
  building: Icons.building,
};

export default function CarModelTemplate({ model }: CarModelTemplateProps) {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(
    model.variantGroups[0]?.id || null
  );

  const { currentYear } = siteConfig;
  const minMarketValue = Math.min(...model.variants.map((v) => v.marketValue));
  const maxMarketValue = Math.max(...model.variants.map((v) => v.marketValue));
  const firstVariantRoadTax = model.variants[0]?.roadTax || 90;

  // Get comprehensive price range across all variants
  const minComprehensive = Math.min(...model.variants.map((v) => v.comprehensiveRange[0]));
  const maxComprehensive = Math.max(...model.variants.map((v) => v.comprehensiveRange[1]));
  const minThirdParty = Math.min(...model.variants.map((v) => v.thirdPartyRange[0]));
  const maxThirdParty = Math.max(...model.variants.map((v) => v.thirdPartyRange[1]));

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Car Models</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{model.shortName} Insurance</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {model.shortName} Insurance Price Malaysia {currentYear}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{model.heroSubtitle}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">
                    From RM{model.minPrice}
                  </div>
                  <div className="text-sm text-gray-300">per year</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">
                    {siteConfig.stats.insurerCount}
                  </div>
                  <div className="text-sm text-gray-300">Insurers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">
                    {siteConfig.stats.quoteTime}
                  </div>
                  <div className="text-sm text-gray-300">Quote Time</div>
                </div>
              </div>

              <Link
                href="/calculator/car-insurance-calculator"
                className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
              >
                Get Free {model.shortName} Quote
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    {Icons.car}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{model.name}</h3>
                <p className="text-center text-gray-300 text-sm">{model.tagline}</p>
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engine Options:</span>
                    <span className="font-medium">
                      {[...new Set(model.variants.map((v) => v.engine))].join(" / ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price Range:</span>
                    <span className="font-medium">
                      RM{(minMarketValue / 1000).toFixed(0)}K - RM{(maxMarketValue / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance From:</span>
                    <span className="font-medium text-secondary-400">
                      RM{model.minPrice}/year
                    </span>
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
            {model.shortName} Insurance Price Comparison {currentYear}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Compare estimated insurance prices for all {model.name} variants. Prices based on 55%
            NCD.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{model.shortName} Variant</th>
                  <th className="px-6 py-4 text-left font-semibold">Engine</th>
                  <th className="px-6 py-4 text-left font-semibold">Market Value</th>
                  <th className="px-6 py-4 text-left font-semibold">Comprehensive</th>
                  <th className="px-6 py-4 text-left font-semibold">Third Party</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {model.variants.map((variant, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{variant.name}</td>
                    <td className="px-6 py-4 text-gray-600">{variant.engine}</td>
                    <td className="px-6 py-4 text-gray-600">
                      RM{variant.marketValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">
                        {formatPriceRange(variant.comprehensiveRange)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-600 font-semibold">
                        {formatPriceRange(variant.thirdPartyRange)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {model.variants.map((variant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                <div className="font-bold text-gray-900 mb-3">{variant.name}</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Engine:</div>
                  <div>{variant.engine}</div>
                  <div className="text-gray-500">Market Value:</div>
                  <div>RM{variant.marketValue.toLocaleString()}</div>
                  <div className="text-gray-500">Comprehensive:</div>
                  <div className="text-green-600 font-semibold">
                    {formatPriceRange(variant.comprehensiveRange)}
                  </div>
                  <div className="text-gray-500">Third Party:</div>
                  <div className="text-blue-600 font-semibold">
                    {formatPriceRange(variant.thirdPartyRange)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            {siteConfig.disclaimers.priceTable}
          </p>

          <div className="text-center mt-8">
            <Link href="/calculator/car-insurance-calculator" className="btn-primary inline-block px-8 py-3">
              Calculate Your Exact Price
            </Link>
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Factors Affecting Your {model.shortName} Insurance Price
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding these factors helps you find the best {model.shortName.toLowerCase()}{" "}
            insurance price Malaysia offers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.pricingFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  {iconMap[factor.icon]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variant Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {model.shortName} Insurance by Variant
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Detailed breakdown of {model.name.toLowerCase()} insurance price for each variant.
          </p>

          <div className="space-y-4">
            {model.variantGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setExpandedVariant(expandedVariant === group.id ? null : group.id)
                  }
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
                    <p className="text-sm text-gray-500">{group.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-600 font-bold hidden sm:block">
                      From RM{group.insuranceRange[0].toLocaleString()}/year
                    </span>
                    <div
                      className={`transition-transform ${
                        expandedVariant === group.id ? "rotate-180" : ""
                      }`}
                    >
                      {Icons.chevronDown}
                    </div>
                  </div>
                </button>
                {expandedVariant === group.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex justify-between">
                            <span>Engine:</span>
                            <span className="font-medium">{group.engineCC.toLocaleString()}cc</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Market Value:</span>
                            <span className="font-medium">
                              RM{group.marketValueRange[0].toLocaleString()} - RM
                              {group.marketValueRange[1].toLocaleString()}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Road Tax:</span>
                            <span className="font-medium">RM{firstVariantRoadTax}/year</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Insurance Price:</span>
                            <span className="font-medium text-green-600">
                              RM{group.insuranceRange[0].toLocaleString()} - RM
                              {group.insuranceRange[1].toLocaleString()}/year
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {group.bestFor.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              {Icons.check}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm text-gray-500">
                          <strong>Recommended:</strong>{" "}
                          {group.recommendedInsurers.map((insurer, i) => (
                            <span key={insurer.id}>
                              {i > 0 && " or "}
                              <Link
                                href={`/compare/${insurer.id}-car-insurance-review`}
                                className="text-primary-800 hover:underline"
                              >
                                {insurer.label}
                              </Link>
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive vs Third Party */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive vs Third Party for {model.shortName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choosing the right coverage type can save you money while protecting your {model.name}.
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
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Price for {model.shortName}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">
                    RM{minComprehensive.toLocaleString()}-{maxComprehensive.toLocaleString()}/year
                  </td>
                  <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                    RM{minThirdParty.toLocaleString()}-{maxThirdParty.toLocaleString()}/year
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Own Damage Cover</td>
                  <td className="px-6 py-4 text-center">{Icons.checkGreen}</td>
                  <td className="px-6 py-4 text-center">{Icons.x}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Theft Protection</td>
                  <td className="px-6 py-4 text-center">{Icons.checkGreen}</td>
                  <td className="px-6 py-4 text-center">{Icons.x}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Third Party Liability</td>
                  <td className="px-6 py-4 text-center">{Icons.checkGreen}</td>
                  <td className="px-6 py-4 text-center">{Icons.checkGreen}</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-center text-sm">
                    New/financed {model.shortName}
                    <br />
                    (under 8 years old)
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    Old {model.shortName}
                    <br />
                    (8+ years old)
                  </td>
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
              {Icons.chevronRight}
            </Link>
          </div>
        </div>
      </section>

      {/* How to Save */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How to Save on {model.shortName} Insurance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Smart tips to get the lowest {model.shortName.toLowerCase()} insurance price malaysia
            has to offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.savingTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
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
                      {Icons.chevronRight}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Insurers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Best Insurers for {model.shortName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Top 5 recommended insurance companies for {model.name} owners.
          </p>

          <div className="grid gap-4">
            {siteConfig.topInsurers.map((insurer) => (
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
                {Icons.arrowRight}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/compare/best-car-insurance-malaysia" className="btn-primary inline-block px-8 py-3">
              Compare All Insurers
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={model.faqs} title={`${model.shortName} Insurance FAQ`} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Your {model.shortName} Insurance Quote?
            </h2>
            <p className="text-xl text-gray-300">
              Compare prices from 15+ insurers and save up to RM500 on your {model.name} insurance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
            <LeadForm variant="modal" source={model.slug} />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.relatedPages.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
              >
                {relatedIconMap[page.icon]}
                <h3 className="font-semibold text-gray-900">{page.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
