import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { currentYear } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: `NCD Explained: No Claim Discount Guide Malaysia ${currentYear}`,
    description: "Complete guide to NCD (No Claim Discount) in Malaysia. Learn how NCD works, current rates (25%-55%), how to protect and transfer your NCD, and more.",
    openGraph: {
      title: "NCD Explained: No Claim Discount Guide | CarInsuranceMY",
      description: "Everything you need to know about NCD in Malaysia - rates, transfer, protection tips.",
    },
  };
}

const ncdRates = [
  { years: 0, discount: "0%", note: "First policy or after a claim" },
  { years: 1, discount: "25%", note: "1 year claim-free" },
  { years: 2, discount: "30%", note: "2 years claim-free" },
  { years: 3, discount: "38.33%", note: "3 years claim-free" },
  { years: 4, discount: "45%", note: "4 years claim-free" },
  { years: 5, discount: "55%", note: "5+ years claim-free (maximum)" },
];

const faqs = [
  {
    question: "How long does it take to build maximum NCD?",
    answer:
      "It takes 5 years of claim-free driving to reach the maximum NCD of 55%. You start at 0% and progress through 25%, 30%, 38.33%, 45%, and finally 55%.",
  },
  {
    question: "Can I transfer my NCD to a new car?",
    answer:
      "Yes, your NCD is tied to you as a driver, not to your vehicle. When you buy a new car, you can transfer your NCD to the new policy. Just provide your NCD confirmation letter to the new insurer.",
  },
  {
    question: "What happens to my NCD if I sell my car?",
    answer:
      "Your NCD stays with you. Request an NCD confirmation letter from your insurer before selling. Your NCD is valid for 12 months - if you don't insure a new car within this period, you'll lose it.",
  },
  {
    question: "Does making a windscreen claim affect my NCD?",
    answer:
      "If you have windscreen coverage as a separate add-on, most insurers allow windscreen claims without affecting your NCD. However, this depends on your specific policy terms.",
  },
  {
    question: "Can I buy NCD protection?",
    answer:
      "Some insurers offer NCD protection as an add-on. This allows you to make one claim per year without losing your NCD. It's worth considering if you have high NCD.",
  },
];

export default function NCDExplainedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Car Insurance Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NCD Explained: Your Complete Guide
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about No Claim Discount in Malaysia - how it works, current rates, and how to maximize your savings.
            </p>
          </div>
        </div>
      </section>

      {/* NCD Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Malaysia NCD Rates ({currentYear})
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Claim-Free Years
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    NCD Rate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Savings Example*
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ncdRates.map((rate) => (
                  <tr key={rate.years} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{rate.note}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                        rate.years >= 5
                          ? "bg-green-100 text-green-800"
                          : rate.years >= 3
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {rate.discount}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      RM {Math.round(1500 * (1 - parseFloat(rate.discount) / 100)).toLocaleString()}
                      <span className="text-sm text-gray-400"> (save RM {Math.round(1500 * parseFloat(rate.discount) / 100)})</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4">
              * Based on a base premium of RM1,500
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What is NCD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is NCD (No Claim Discount)?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                No Claim Discount (NCD) is a reward system used by car insurance companies in Malaysia to incentivize safe driving. Simply put, <strong className="text-gray-900">the longer you go without making a claim, the bigger discount you get on your premium</strong>.
              </p>
              <p>
                NCD is also sometimes called No Claims Bonus (NCB). In Malaysia, it&apos;s regulated by Bank Negara Malaysia (BNM), which sets the standard discount rates that all insurers must follow.
              </p>
            </div>
          </div>

          {/* How NCD is Calculated */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How NCD is Calculated</h2>
            <p className="text-gray-600 mb-6">
              Your NCD discount is applied to your base premium (before add-ons and service tax). Here&apos;s how it works:
            </p>

            {/* Example Calculation Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Example Calculation
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Base Premium:</span>
                  <span className="font-medium">RM 2,000</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>NCD (55%):</span>
                  <span className="font-medium">- RM 1,100</span>
                </div>
                <div className="flex justify-between">
                  <span>After NCD:</span>
                  <span className="font-medium">RM 900</span>
                </div>
                <div className="flex justify-between">
                  <span>Add-ons:</span>
                  <span className="font-medium">+ RM 200</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Tax (8%):</span>
                  <span className="font-medium">+ RM 88</span>
                </div>
                <div className="flex justify-between pt-3 mt-3 border-t border-blue-300">
                  <span className="font-bold text-gray-900">Total Premium:</span>
                  <span className="font-bold text-lg text-gray-900">RM 1,188</span>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens When You Make a Claim */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When You Make a Claim</h2>
            <p className="text-gray-600 mb-4">
              When you make a claim, your NCD is affected based on how many claims you&apos;ve made:
            </p>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
              <div className="p-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-gray-900">First claim</p>
                  <p className="text-gray-600">NCD drops by 2 levels (e.g., 55% drops to 38.33%)</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Second claim in same year</p>
                  <p className="text-gray-600">NCD drops to 0%</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-gray-900">After NCD resets</p>
                  <p className="text-gray-600">You start building it up again from 0%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Claims That Affect NCD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Claims That Affect NCD</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Claims That Reduce NCD */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Claims That Reduce NCD
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Own damage claims (accidents)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Theft claims
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Fire damage claims
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    Third party claims (your fault)
                  </li>
                </ul>
              </div>

              {/* Claims That Don't Affect NCD */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Usually Don&apos;t Affect NCD
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Windscreen claims (if separate)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Third party claims (not your fault)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    Some special perils claims
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Protect Your NCD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Protect Your NCD</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-lg">1</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">NCD Protection Add-on</h3>
                    <p className="text-gray-600 mb-3">
                      Some insurers offer NCD protection as an add-on. This allows you to make one claim per year without losing your NCD. Consider this if:
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        You have high NCD (45% or 55%)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        The cost is reasonable compared to potential NCD loss
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        You drive frequently and want peace of mind
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-lg">2</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Consider Small Claims Carefully</h3>
                    <p className="text-gray-600 mb-3">
                      Before making a claim, calculate whether it&apos;s worth it:
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        Compare the repair cost to your excess (deductible)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        Calculate how much your NCD is worth over the next few years
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        For minor damage, paying out of pocket may be cheaper long-term
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-lg">3</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Separate Windscreen Coverage</h3>
                    <p className="text-gray-600">
                      Add windscreen coverage as a separate add-on. This way, if you need to replace a cracked windscreen, it won&apos;t affect your NCD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transferring Your NCD */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Transferring Your NCD</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  When Buying a New Car
                </h3>
                <p className="text-gray-600 mb-4">Your NCD is tied to you, not your car. To transfer:</p>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">1.</span>
                    Request an NCD confirmation letter from your current insurer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">2.</span>
                    Provide this letter to your new insurer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">3.</span>
                    Your NCD will be applied to your new policy
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  When Switching Insurers
                </h3>
                <p className="text-gray-600 mb-4">You can take your NCD to any insurer:</p>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">1.</span>
                    Wait until your current policy expires (don&apos;t cancel early)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">2.</span>
                    Request NCD confirmation from your current insurer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-600">3.</span>
                    Apply with your new insurer with the NCD letter
                  </li>
                </ol>
              </div>
            </div>

            {/* NCD Validity Period */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                NCD Validity Period
              </h3>
              <p className="text-gray-700">
                Your NCD is valid for <strong>12 months</strong> after your policy expires. If you don&apos;t insure a vehicle within this period, you&apos;ll lose your NCD and have to start from 0%.
              </p>
            </div>
          </div>

          {/* NCD for Multiple Cars */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">NCD for Multiple Cars</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-600">
                You can only use your NCD for <strong className="text-gray-900">one vehicle at a time</strong>. If you own multiple cars, each car needs its own NCD history. However, some insurers offer multi-car discounts as a separate benefit.
              </p>
            </div>
          </div>

          {/* Tips to Maximize Your NCD Savings */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Maximize Your NCD Savings</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🚗", title: "Drive safely", desc: "The best way to maintain your NCD is to avoid accidents" },
                { icon: "💰", title: "Pay small repairs yourself", desc: "Don't claim for minor damage" },
                { icon: "🪟", title: "Get windscreen coverage", desc: "Protect your NCD from chip claims" },
                { icon: "🛡️", title: "Consider NCD protection", desc: "Especially if you have 55% NCD" },
                { icon: "📅", title: "Don't let policy lapse", desc: "Renew before expiry to maintain NCD" },
                { icon: "🔍", title: "Compare insurers", desc: "Your NCD is portable, so shop around" },
              ].map((tip, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{tip.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* NCD Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Calculate Your Premium with NCD
          </h2>
          <p className="text-gray-600 mb-8">
            See how much you could save with your current NCD level.
          </p>
          <Link href="/calculator/car-insurance-calculator" className="btn-primary inline-block">
            Use Premium Calculator
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} title="NCD Frequently Asked Questions" />

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Compare Quotes with Your NCD
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how much you can save with your current NCD from 15+ insurers.
          </p>
          <Link href="/#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
