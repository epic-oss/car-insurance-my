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
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Third Party Insurance</h2>
            <p>
              Third party car insurance is the minimum legal requirement in Malaysia under the Road Transport Act 1987. It provides basic protection against your liability if you cause damage to another person&apos;s property or vehicle.
            </p>

            <h3>What Third Party Insurance Covers</h3>
            <ul>
              <li><strong>Third party property damage:</strong> Pays for repairs to other vehicles or property you damage in an accident</li>
              <li><strong>Third party bodily injury:</strong> Covers medical expenses and compensation if you injure someone</li>
              <li><strong>Legal defense costs:</strong> Covers legal fees if you&apos;re sued following an accident</li>
            </ul>

            <h3>What Third Party Insurance Does NOT Cover</h3>
            <ul>
              <li>Damage to your own vehicle (regardless of who&apos;s at fault)</li>
              <li>Theft of your vehicle</li>
              <li>Fire damage to your vehicle</li>
              <li>Natural disaster damage (flood, storm, etc.)</li>
              <li>Personal accident benefits for yourself</li>
            </ul>

            <h2>Understanding Comprehensive Insurance</h2>
            <p>
              Comprehensive insurance provides the most complete protection for your vehicle. It includes everything covered by third party insurance, plus protection for your own vehicle against various risks.
            </p>

            <h3>What Comprehensive Insurance Covers</h3>
            <ul>
              <li><strong>Everything in third party coverage</strong></li>
              <li><strong>Own damage:</strong> Repairs to your car from accidents, regardless of fault</li>
              <li><strong>Theft:</strong> Replacement value if your car is stolen</li>
              <li><strong>Fire damage:</strong> Repairs or replacement due to fire</li>
              <li><strong>Vandalism:</strong> Damage caused by vandals</li>
            </ul>

            <h3>Optional Add-ons for Comprehensive</h3>
            <ul>
              <li>Windscreen coverage (without affecting NCD)</li>
              <li>Flood and natural disaster coverage</li>
              <li>Personal accident coverage</li>
              <li>24/7 roadside assistance</li>
              <li>Car rental during repairs</li>
              <li>All drivers coverage</li>
            </ul>

            <h2>Third Party, Fire & Theft (TPFT)</h2>
            <p>
              There&apos;s also a middle option called Third Party, Fire & Theft (TPFT). This covers:
            </p>
            <ul>
              <li>Everything in third party coverage</li>
              <li>Theft of your vehicle</li>
              <li>Fire damage</li>
            </ul>
            <p>
              However, TPFT does NOT cover damage from accidents. This option is less common in Malaysia but may be suitable for some drivers.
            </p>

            <h2>Cost Comparison</h2>
            <p>
              The cost difference between third party and comprehensive can be significant:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Estimated Annual Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Third Party Only</td>
                  <td>~RM75 (fixed rate)</td>
                </tr>
                <tr>
                  <td>Comprehensive (RM50k car)</td>
                  <td>~RM800 - RM1,500</td>
                </tr>
                <tr>
                  <td>Comprehensive (RM100k car)</td>
                  <td>~RM1,500 - RM2,500</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600">
              * Actual premiums depend on NCD, vehicle type, and insurer
            </p>

            <h2>Which Should You Choose?</h2>

            <h3>Choose Third Party If:</h3>
            <ul>
              <li>Your car is very old (10+ years) with low market value</li>
              <li>The market value is less than RM10,000</li>
              <li>You have savings to cover repairs/replacement if needed</li>
              <li>You mainly use your car for short, low-risk trips</li>
            </ul>

            <h3>Choose Comprehensive If:</h3>
            <ul>
              <li>Your car is relatively new (under 10 years old)</li>
              <li>Your car has significant market value</li>
              <li>You have a car loan (banks require comprehensive coverage)</li>
              <li>You can&apos;t afford unexpected repair bills</li>
              <li>You drive frequently or long distances</li>
              <li>You park in public areas (higher theft/damage risk)</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
              For most Malaysian drivers, <strong>comprehensive insurance is the better choice</strong>. The additional cost provides peace of mind knowing you&apos;re protected against a wide range of risks. The last thing you want is to be in an accident and find out you have to pay tens of thousands of ringgit for repairs.
            </p>
            <p>
              However, if your car&apos;s value is very low and the comprehensive premium seems disproportionate, third party coverage may make financial sense.
            </p>
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
