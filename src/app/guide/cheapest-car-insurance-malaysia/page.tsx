import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { currentYear } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: `Cheapest Car Insurance Malaysia ${currentYear} | From RM150/year | Save Money`,
    description:
      "Find the cheapest car insurance in Malaysia. Compare Kurnia, Etiqa, Lonpac rates. Third Party from RM150/year, Comprehensive from RM500/year. 10 tips to lower your premium.",
    keywords:
      "cheapest car insurance malaysia, cheap car insurance malaysia, lowest car insurance rates malaysia, budget car insurance, cheapest third party car insurance malaysia",
    openGraph: {
      title: `Cheapest Car Insurance Malaysia ${currentYear} | Complete Guide`,
      description:
        "How to find the lowest car insurance rates in Malaysia without sacrificing coverage.",
    },
  };
}

const coverageTypes = [
  {
    type: "Third Party",
    priceRange: "RM150-400/yr",
    bestFor: "Old cars 8+ years, low value",
    recommended: "Cheapest option",
    color: "green",
  },
  {
    type: "Third Party Fire & Theft",
    priceRange: "RM300-600/yr",
    bestFor: "Medium value cars",
    recommended: "Balanced budget",
    color: "blue",
  },
  {
    type: "Comprehensive",
    priceRange: "RM800-2,500/yr",
    bestFor: "New/financed cars",
    recommended: "Best protection",
    color: "purple",
  },
];

const cheapestInsurers = [
  {
    rank: 1,
    name: "Kurnia Insurance",
    priceTier: "Budget-Friendly",
    bestFor: "Drivers prioritizing low premiums",
    savings: "10-15% below market average",
    tradeOff: "Now part of AmGeneral, transitioning services",
    link: "/compare/best-car-insurance-malaysia",
  },
  {
    rank: 2,
    name: "Etiqa Insurance",
    priceTier: "Competitive",
    bestFor: "Balance of price and service",
    savings: "5-10% below average",
    bonus: "Good digital experience, fast claims",
    link: "/compare/etiqa-car-insurance-review",
  },
  {
    rank: 3,
    name: "Lonpac Insurance",
    priceTier: "Budget-Friendly",
    bestFor: "Basic coverage needs",
    savings: "10-15% below average",
    tradeOff: "Less brand recognition, fewer branches",
    link: "/compare/best-car-insurance-malaysia",
  },
  {
    rank: 4,
    name: "RHB Insurance",
    priceTier: "Competitive",
    bestFor: "RHB bank customers (bundled discounts)",
    savings: "5-10% with banking relationship",
    bonus: "Easy integration with RHB accounts",
    link: "/compare/best-car-insurance-malaysia",
  },
  {
    rank: 5,
    name: "Pacific Insurance",
    priceTier: "Budget-Friendly",
    bestFor: "Simple, no-frills coverage",
    savings: "10-15% below average",
    tradeOff: "Smaller workshop network",
    link: "/compare/best-car-insurance-malaysia",
  },
];

const savingTips = [
  {
    number: 1,
    title: "Maintain Your NCD",
    description: "55% discount for claim-free drivers - the single biggest savings",
    link: "/guide/ncd-explained",
    linkText: "Learn about NCD",
  },
  {
    number: 2,
    title: "Compare Multiple Quotes",
    description: "Prices vary 20-40% between insurers for identical coverage",
    link: "/calculator/car-insurance-calculator",
    linkText: "Compare quotes",
  },
  {
    number: 3,
    title: "Choose Third Party for Old Cars",
    description: "Save RM500-1,500/year on cars 8+ years old or worth under RM20,000",
    link: "/guide/third-party-vs-comprehensive",
    linkText: "Coverage comparison",
  },
  {
    number: 4,
    title: "Increase Your Excess",
    description: "Higher excess = lower premium. Potential savings of RM200-500/year",
    link: null,
    linkText: null,
  },
  {
    number: 5,
    title: "Remove Unnecessary Add-ons",
    description: "Windscreen, flood, special perils add RM100-300. Only buy what you need",
    link: null,
    linkText: null,
  },
  {
    number: 6,
    title: "Install Anti-Theft Devices",
    description: "Some insurers offer 5-10% discount for approved immobilizers/alarms",
    link: null,
    linkText: null,
  },
  {
    number: 7,
    title: "Bundle with Road Tax",
    description: "Convenience and sometimes small savings when renewing together",
    link: null,
    linkText: null,
  },
  {
    number: 8,
    title: "Pay Annually, Not Monthly",
    description: "Avoid installment fees which add 5-10% to your total cost",
    link: null,
    linkText: null,
  },
  {
    number: 9,
    title: "Maintain Good Driving Record",
    description: "No claims = NCD preserved = continued savings year after year",
    link: null,
    linkText: null,
  },
  {
    number: 10,
    title: "Consider Usage-Based Insurance",
    description: "Low mileage? Ask about pay-per-km options from some insurers",
    link: null,
    linkText: null,
  },
];

const cheapestCars = [
  {
    car: "Perodua Axia",
    engine: "1.0L",
    premium: "RM500-900/yr",
    reason: "Low value, small engine, cheap parts",
    link: null,
  },
  {
    car: "Perodua Myvi 1.3",
    engine: "1.3L",
    premium: "RM800-1,200/yr",
    reason: "Common parts, reliable, popular",
    link: "/car-models/myvi-insurance",
  },
  {
    car: "Proton Saga",
    engine: "1.3L",
    premium: "RM700-1,100/yr",
    reason: "Local brand, cheap spare parts",
    link: null,
  },
  {
    car: "Toyota Vios",
    engine: "1.5L",
    premium: "RM1,000-1,500/yr",
    reason: "Reliable, good resale value",
    link: "/car-models/vios-insurance",
  },
  {
    car: "Honda City",
    engine: "1.5L",
    premium: "RM1,100-1,600/yr",
    reason: "Popular, parts widely available",
    link: null,
  },
];

const expensiveFactors = [
  "Sports cars / high-performance vehicles (Golf GTI, Civic Type R)",
  "Luxury brands (BMW, Mercedes-Benz, Audi)",
  "High theft risk models",
  "Young drivers under 25 years old",
  "Poor claims history (low or 0% NCD)",
  "High-risk locations (KL city center)",
  "Imported / rare cars with expensive parts",
  "Modified vehicles",
];

const tradeOffs = [
  {
    factor: "Premium Cost",
    budget: "10-20% lower",
    premium: "Higher but competitive",
  },
  {
    factor: "Workshop Network",
    budget: "Limited to major cities",
    premium: "Extensive nationwide",
  },
  {
    factor: "Claims Processing",
    budget: "5-10 business days",
    premium: "1-3 business days",
  },
  {
    factor: "Customer Service",
    budget: "Basic support hours",
    premium: "24/7 hotline support",
  },
  {
    factor: "Add-on Options",
    budget: "Limited selection",
    premium: "Comprehensive options",
  },
  {
    factor: "Roadside Assistance",
    budget: "Basic or extra cost",
    premium: "Often included free",
  },
];

const faqs = [
  {
    question: "Which car insurance company has the lowest rates in Malaysia?",
    answer:
      "Kurnia, Lonpac, and Pacific typically offer the lowest rates in Malaysia. However, Etiqa and RHB are competitive while offering better service. The cheapest option varies by vehicle type, so always compare quotes from multiple insurers.",
  },
  {
    question: "How much is the cheapest car insurance in Malaysia?",
    answer:
      "Third Party coverage starts from RM150-300/year for small cars. Comprehensive coverage starts from RM500-800/year for affordable cars like Perodua Axia. With maximum NCD (55%), you can reduce these rates by more than half.",
  },
  {
    question: "Is cheap car insurance worth it?",
    answer:
      "For old, low-value cars (8+ years, worth under RM20,000), yes - cheaper insurance makes sense. For new or financed cars, prioritize claims service over price. A RM200 savings isn't worth a difficult claims experience when you need help most.",
  },
  {
    question: "How can I lower my car insurance premium?",
    answer:
      "The top ways to lower your premium: maintain 55% NCD by driving claim-free, compare quotes from multiple insurers, choose appropriate coverage type (Third Party for old cars), increase your excess amount, and remove unnecessary add-ons.",
  },
  {
    question: "Which is cheaper, Etiqa or Allianz?",
    answer:
      "Etiqa is generally 5-10% cheaper than Allianz for similar coverage. Allianz charges a premium for their extensive workshop network (Road Rangers), brand reputation, and comprehensive add-on options. Choose Allianz if service matters more than savings.",
  },
  {
    question: "Is Third Party insurance enough?",
    answer:
      "Third Party insurance is enough for cars worth under RM20,000 or over 8 years old. You'll save RM500-1,500/year but won't be covered for own damage, theft, or fire. For newer or financed cars, comprehensive coverage is strongly recommended.",
  },
  {
    question: "Why is my car insurance so expensive?",
    answer:
      "Common reasons for expensive premiums: low or no NCD (new drivers or after claims), high-value or luxury vehicle, sports/performance car, young driver under 25, high-risk location, or imported car with expensive parts. Compare quotes to find better rates.",
  },
  {
    question: "Can I get cheap car insurance online?",
    answer:
      "Yes! Online comparison platforms and direct insurer websites often offer lower rates than agents due to reduced overhead. You can compare quotes from 15+ insurers in minutes and purchase your policy online with instant activation.",
  },
];

export default function CheapestCarInsurancePage() {
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
            <span className="text-gray-400">Guides</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Cheapest Car Insurance</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Car Insurance Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cheapest Car Insurance Malaysia {currentYear}: Complete Guide
            </h1>
            <p className="text-xl text-gray-300">
              How to find the lowest car insurance rates without sacrificing essential coverage.
              Save hundreds of ringgit on your next renewal.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January {currentYear}</p>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">Quick Answer</h2>
            <p className="text-green-900">
              The <strong>cheapest car insurance in Malaysia</strong> is Third Party coverage,
              starting from <strong>RM150-300/year</strong>. For comprehensive coverage,{" "}
              <strong>Kurnia, Etiqa, and Lonpac</strong> typically offer the most competitive
              rates. The key to getting the cheapest premium is maintaining your{" "}
              <strong>NCD (No Claim Discount) at 55%</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Cheapest by Coverage Type */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Cheapest Car Insurance by Coverage Type
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Coverage Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  <th className="px-6 py-4 text-left font-semibold">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {coverageTypes.map((coverage, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{coverage.type}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                          coverage.color === "green"
                            ? "bg-green-100 text-green-800"
                            : coverage.color === "blue"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {coverage.priceRange}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{coverage.bestFor}</td>
                    <td className="px-6 py-4 text-gray-600">{coverage.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Prices based on average Malaysian car with 55% NCD
          </p>
        </div>
      </section>

      {/* Top 5 Cheapest Insurers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Top 5 Cheapest Car Insurance Companies Malaysia {currentYear}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Based on market analysis of comprehensive coverage premiums
          </p>

          <div className="space-y-4">
            {cheapestInsurers.map((insurer) => (
              <div
                key={insurer.rank}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-800 font-bold text-xl mr-4 flex-shrink-0">
                    {insurer.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{insurer.name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {insurer.priceTier}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Best for:</strong> {insurer.bestFor}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Typical savings:</strong> {insurer.savings}
                    </p>
                    {insurer.bonus && (
                      <p className="text-green-600 text-sm">
                        <strong>Bonus:</strong> {insurer.bonus}
                      </p>
                    )}
                    {insurer.tradeOff && (
                      <p className="text-amber-600 text-sm">
                        <strong>Trade-off:</strong> {insurer.tradeOff}
                      </p>
                    )}
                  </div>
                  <Link
                    href={insurer.link}
                    className="text-primary-800 hover:text-primary-600 font-medium text-sm flex-shrink-0"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> Prices vary by vehicle, location, and driver profile. Always
              compare quotes from multiple insurers for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Ways to Save */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            10 Proven Ways to Lower Your Car Insurance Premium
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Implement these strategies to reduce your premium by 20-50%
          </p>

          <div className="grid gap-4">
            {savingTips.map((tip) => (
              <div
                key={tip.number}
                className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {tip.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                    {tip.link && (
                      <Link
                        href={tip.link}
                        className="inline-flex items-center text-primary-800 font-medium text-sm mt-2 hover:text-primary-600"
                      >
                        {tip.linkText}
                        <svg
                          className="w-4 h-4 ml-1"
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
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cheapest Cars to Insure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Cheapest Cars to Insure in Malaysia
          </h2>
          <p className="text-gray-600 text-center mb-8">
            These popular models have the lowest insurance premiums
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Car Model</th>
                  <th className="px-6 py-4 text-left font-semibold">Engine</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Premium</th>
                  <th className="px-6 py-4 text-left font-semibold">Why It&apos;s Cheap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cheapestCars.map((car, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {car.link ? (
                        <Link
                          href={car.link}
                          className="font-medium text-primary-800 hover:underline"
                        >
                          {car.car}
                        </Link>
                      ) : (
                        <span className="font-medium text-gray-900">{car.car}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{car.engine}</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">{car.premium}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{car.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Comprehensive coverage with 55% NCD
          </p>
        </div>
      </section>

      {/* Why Is Insurance Expensive */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Why Is My Car Insurance So Expensive?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Factors that increase your premium above average
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4">
              Factors That Increase Your Premium:
            </h3>
            <ul className="space-y-3">
              {expensiveFactors.map((factor, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-red-900">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">Good News:</h3>
            <p className="text-green-900">
              Even with these factors, you can still save by comparing quotes. Different insurers
              weigh these factors differently, so one insurer&apos;s expensive category might be
              another&apos;s standard rate.
            </p>
          </div>
        </div>
      </section>

      {/* Cheap vs Good Trade-offs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Is Cheapest Always Best?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Understanding the trade-offs between budget and premium insurers
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th className="px-6 py-4 text-center font-semibold">Budget Insurer</th>
                  <th className="px-6 py-4 text-center font-semibold">Premium Insurer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tradeOffs.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.factor}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{item.budget}</td>
                    <td className="px-6 py-4 text-center text-green-600">{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Our Verdict:</h3>
            <p className="text-blue-900">
              <strong>For old cars (8+ years, worth under RM25,000):</strong> Cheapest is fine.
              You&apos;re saving money on a depreciating asset.
            </p>
            <p className="text-blue-900 mt-2">
              <strong>For new or financed cars:</strong> Balance price with claims reputation. A
              RM200 annual savings isn&apos;t worth weeks of claims delays when you need your car
              repaired.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} title="Cheap Car Insurance FAQ" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Your Cheapest Quote</h2>
            <p className="text-xl text-gray-300">
              Compare prices from 15+ insurers and find the best rate for your car.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
            <LeadForm variant="modal" source="cheapest-guide" />
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/guide/third-party-vs-comprehensive"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Third Party vs Comprehensive</h3>
              <p className="text-sm text-gray-600">
                Understand the difference and choose the right coverage for your situation.
              </p>
            </Link>
            <Link
              href="/guide/ncd-explained"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">NCD Explained</h3>
              <p className="text-sm text-gray-600">
                How No Claim Discount works and how to maximize your 55% savings.
              </p>
            </Link>
            <Link
              href="/guide/how-to-claim-car-insurance"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">How to Claim Insurance</h3>
              <p className="text-sm text-gray-600">
                Step-by-step guide to filing a car insurance claim in Malaysia.
              </p>
            </Link>
            <Link
              href="/compare/best-car-insurance-malaysia"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Compare All Insurers</h3>
              <p className="text-sm text-gray-600">
                Full comparison of top 10 car insurance companies in Malaysia.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
