import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Third Party vs Comprehensive Car Insurance Malaysia | Complete Guide",
  description: "Understand the difference between third party and comprehensive car insurance in Malaysia. Learn which coverage is right for your car and budget.",
  openGraph: {
    title: "Third Party vs Comprehensive Car Insurance | CarInsuranceMY",
    description: "Complete guide to choosing between third party and comprehensive car insurance in Malaysia.",
  },
};

const faqs = [
  {
    question: "Is comprehensive insurance worth it for old cars?",
    answer:
      "It depends on your car's market value and your financial situation. If repair or replacement costs would be a significant burden, comprehensive may still be worth it. However, if your car's value is very low (under RM10,000), the premium for comprehensive may not justify the potential payout.",
  },
  {
    question: "Can I upgrade from third party to comprehensive?",
    answer:
      "Yes, you can upgrade your coverage when you renew your policy. You cannot change coverage mid-policy without cancelling and getting a new policy, which may result in loss of your NCD.",
  },
  {
    question: "Does third party cover my passengers?",
    answer:
      "Basic third party insurance covers your legal liability to passengers if they're injured. However, it doesn't cover their medical expenses directly. You may want to add passenger liability coverage as an add-on.",
  },
  {
    question: "What happens if I cause an accident with only third party coverage?",
    answer:
      "Third party insurance will cover the damage you cause to other vehicles and property. However, you'll have to pay for your own car repairs out of pocket, regardless of the cost.",
  },
];

export default function ThirdPartyVsComprehensivePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Car Insurance Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Third Party vs Comprehensive Car Insurance
            </h1>
            <p className="text-xl text-gray-300">
              A complete guide to understanding the differences and choosing the right coverage for your car in Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm font-bold">
                  3P
                </span>
                Third Party Insurance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Covers damage to others&apos; property
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lower premium
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Does NOT cover your own car
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  No theft or fire coverage
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Best for: Older cars with low market value
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3 text-sm font-bold">
                  C
                </span>
                Comprehensive Insurance
                <span className="ml-2 text-xs bg-secondary-500 text-white px-2 py-1 rounded-full">
                  Recommended
                </span>
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Covers damage to others&apos; property
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Covers your own car damage
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Theft and fire protection
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Add-ons available (flood, windscreen, etc.)
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Best for: Newer cars, financed vehicles, valuable cars
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Understanding Third Party Insurance */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Third Party Insurance</h2>
            <p className="text-gray-600 mb-6">
              Third party car insurance is the minimum legal requirement in Malaysia under the Road Transport Act 1987. It provides basic protection against your liability if you cause damage to another person&apos;s property or vehicle.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* What it covers */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Third Party Covers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">Third party property damage</span>
                      <p className="text-sm text-gray-500">Pays for repairs to other vehicles or property</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">Third party bodily injury</span>
                      <p className="text-sm text-gray-500">Covers medical expenses if you injure someone</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <span className="font-medium">Legal defense costs</span>
                      <p className="text-sm text-gray-500">Covers legal fees if you&apos;re sued</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What it doesn't cover */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  What Third Party Does NOT Cover
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Damage to your own vehicle
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Theft of your vehicle
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Fire damage to your vehicle
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Natural disaster damage (flood, storm)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Personal accident benefits for yourself
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Understanding Comprehensive Insurance */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Comprehensive Insurance</h2>
            <p className="text-gray-600 mb-6">
              Comprehensive insurance provides the most complete protection for your vehicle. It includes everything covered by third party insurance, plus protection for your own vehicle against various risks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* What it covers */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Comprehensive Covers
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span className="font-medium">Everything in third party</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Own damage (regardless of fault)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Theft of vehicle
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Fire damage
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Vandalism damage
                  </li>
                </ul>
              </div>

              {/* Optional add-ons */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Optional Add-ons Available
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    Windscreen coverage (no NCD impact)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    Flood and natural disaster coverage
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    Personal accident coverage
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    24/7 roadside assistance
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    Car rental during repairs
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">+</span>
                    All drivers coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Party Fire & Theft */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third Party, Fire & Theft (TPFT)</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                There&apos;s also a middle option called Third Party, Fire & Theft (TPFT). This covers:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Everything in third party coverage
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Theft of your vehicle
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Fire damage
                </li>
              </ul>
              <div className="bg-amber-100 rounded-lg p-3">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> TPFT does NOT cover damage from accidents. This option is less common in Malaysia but may be suitable for some drivers.
                </p>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
            <p className="text-gray-600 mb-6">
              The cost difference between third party and comprehensive can be significant:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Coverage Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Estimated Annual Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Third Party Only</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                        ~RM75 (fixed rate)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Comprehensive (RM50k car)</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                        ~RM800 - RM1,500
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Comprehensive (RM100k car)</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-800">
                        ~RM1,500 - RM2,500
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Actual premiums depend on NCD, vehicle type, and insurer
            </p>
          </div>

          {/* Which Should You Choose */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Should You Choose?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Choose Third Party If */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    3P
                  </span>
                  Choose Third Party If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Your car is very old (10+ years) with low market value
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    The market value is less than RM10,000
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You have savings to cover repairs/replacement if needed
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You mainly use your car for short, low-risk trips
                  </li>
                </ul>
              </div>

              {/* Choose Comprehensive If */}
              <div className="bg-primary-50 rounded-xl border-2 border-primary-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                    C
                  </span>
                  Choose Comprehensive If:
                  <span className="ml-auto text-xs bg-secondary-500 text-white px-2 py-1 rounded-full">
                    Recommended
                  </span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Your car is relatively new (under 10 years old)
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Your car has significant market value
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You have a car loan (banks require comprehensive)
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You can&apos;t afford unexpected repair bills
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You drive frequently or long distances
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    You park in public areas (higher theft/damage risk)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Bottom Line */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
              <p className="text-gray-700 mb-4">
                For most Malaysian drivers, <strong className="text-gray-900">comprehensive insurance is the better choice</strong>. The additional cost provides peace of mind knowing you&apos;re protected against a wide range of risks.
              </p>
              <p className="text-gray-700 mb-4">
                The last thing you want is to be in an accident and find out you have to pay tens of thousands of ringgit for repairs.
              </p>
              <p className="text-gray-600 text-sm">
                However, if your car&apos;s value is very low and the comprehensive premium seems disproportionate, third party coverage may make financial sense.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} title="Frequently Asked Questions" />

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Compare Quotes for Both Coverage Types
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See the exact price difference for your car from 15+ insurers.
          </p>
          <Link href="/#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
