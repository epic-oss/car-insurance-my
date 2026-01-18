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
          <div className="prose prose-lg max-w-none">
            <h2>What is NCD (No Claim Discount)?</h2>
            <p>
              No Claim Discount (NCD) is a reward system used by car insurance companies in Malaysia to incentivize safe driving. Simply put, <strong>the longer you go without making a claim, the bigger discount you get on your premium</strong>.
            </p>
            <p>
              NCD is also sometimes called No Claims Bonus (NCB). In Malaysia, it&apos;s regulated by Bank Negara Malaysia (BNM), which sets the standard discount rates that all insurers must follow.
            </p>

            <h2>How NCD is Calculated</h2>
            <p>
              Your NCD discount is applied to your base premium (before add-ons and service tax). Here&apos;s how it works:
            </p>
            <div className="bg-white rounded-lg p-6 my-6 border">
              <p className="font-semibold text-gray-900">Example Calculation:</p>
              <ul className="mt-2 space-y-1">
                <li>Base Premium: RM 2,000</li>
                <li>NCD (55%): -RM 1,100</li>
                <li>After NCD: RM 900</li>
                <li>Add-ons: +RM 200</li>
                <li>Service Tax (8%): +RM 88</li>
                <li><strong>Total Premium: RM 1,188</strong></li>
              </ul>
            </div>

            <h2>What Happens When You Make a Claim</h2>
            <p>
              When you make a claim, your NCD is affected based on how many claims you&apos;ve made:
            </p>
            <ul>
              <li><strong>First claim:</strong> NCD drops by 2 levels (e.g., 55% drops to 38.33%)</li>
              <li><strong>Second claim in same year:</strong> NCD drops to 0%</li>
              <li><strong>After NCD resets:</strong> You start building it up again from 0%</li>
            </ul>

            <h2>Types of Claims That Affect NCD</h2>
            <h3>Claims That Reduce NCD:</h3>
            <ul>
              <li>Own damage claims (accidents)</li>
              <li>Theft claims</li>
              <li>Fire damage claims</li>
              <li>Third party claims where you&apos;re at fault</li>
            </ul>

            <h3>Claims That Usually Don&apos;t Affect NCD:</h3>
            <ul>
              <li>Windscreen claims (if covered separately)</li>
              <li>Third party claims where you&apos;re not at fault (knock-for-knock)</li>
              <li>Some special perils claims (depends on policy)</li>
            </ul>

            <h2>How to Protect Your NCD</h2>
            <h3>1. NCD Protection Add-on</h3>
            <p>
              Some insurers offer NCD protection as an add-on. This allows you to make one claim per year without losing your NCD. Consider this if:
            </p>
            <ul>
              <li>You have high NCD (45% or 55%)</li>
              <li>The cost of the add-on is reasonable compared to potential NCD loss</li>
              <li>You drive frequently and want peace of mind</li>
            </ul>

            <h3>2. Consider Small Claims Carefully</h3>
            <p>
              Before making a claim, calculate whether it&apos;s worth it:
            </p>
            <ul>
              <li>Compare the repair cost to your excess (deductible)</li>
              <li>Calculate how much your NCD is worth over the next few years</li>
              <li>For minor damage, paying out of pocket may be cheaper long-term</li>
            </ul>

            <h3>3. Separate Windscreen Coverage</h3>
            <p>
              Add windscreen coverage as a separate add-on. This way, if you need to replace a cracked windscreen, it won&apos;t affect your NCD.
            </p>

            <h2>Transferring Your NCD</h2>
            <h3>When Buying a New Car</h3>
            <p>
              Your NCD is tied to you, not your car. To transfer:
            </p>
            <ol>
              <li>Request an NCD confirmation letter from your current insurer</li>
              <li>Provide this letter to your new insurer</li>
              <li>Your NCD will be applied to your new policy</li>
            </ol>

            <h3>When Switching Insurers</h3>
            <p>
              You can take your NCD to any insurer. Simply:
            </p>
            <ol>
              <li>Wait until your current policy expires (don&apos;t cancel early)</li>
              <li>Request NCD confirmation from your current insurer</li>
              <li>Apply with your new insurer with the NCD letter</li>
            </ol>

            <h3>NCD Validity Period</h3>
            <p>
              Your NCD is valid for <strong>12 months</strong> after your policy expires. If you don&apos;t insure a vehicle within this period, you&apos;ll lose your NCD and have to start from 0%.
            </p>

            <h2>NCD for Multiple Cars</h2>
            <p>
              You can only use your NCD for <strong>one vehicle at a time</strong>. If you own multiple cars, each car needs its own NCD history. However, some insurers offer multi-car discounts as a separate benefit.
            </p>

            <h2>Tips to Maximize Your NCD Savings</h2>
            <ol>
              <li><strong>Drive safely</strong> - The best way to maintain your NCD is to avoid accidents</li>
              <li><strong>Pay for small repairs yourself</strong> - Don&apos;t claim for minor damage</li>
              <li><strong>Get windscreen coverage</strong> - Protect your NCD from chip claims</li>
              <li><strong>Consider NCD protection</strong> - Especially if you have 55% NCD</li>
              <li><strong>Don&apos;t let your policy lapse</strong> - Renew before expiry to maintain NCD</li>
              <li><strong>Compare insurers</strong> - Your NCD is portable, so shop around</li>
            </ol>
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
