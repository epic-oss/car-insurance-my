import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { currentYear } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return {
    title: `How to Claim Car Insurance Malaysia | Step-by-Step Guide ${currentYear}`,
    description: "Complete guide on how to claim car insurance in Malaysia. Step-by-step process for accident claims, documents needed, and tips for faster approval.",
    openGraph: {
      title: "How to Claim Car Insurance Malaysia | CarInsuranceMY",
      description: "Step-by-step guide to claiming car insurance in Malaysia. Documents, process, and tips.",
    },
  };
}

const steps = [
  {
    number: 1,
    title: "Ensure Safety First",
    description: "Check for injuries and move to safety. Call emergency services (999) if anyone is hurt.",
    tips: ["Don't leave the scene until it's appropriate", "Turn on hazard lights", "Set up warning triangle if available"],
  },
  {
    number: 2,
    title: "Document the Accident",
    description: "Collect all necessary evidence and information at the scene.",
    tips: [
      "Take photos of all vehicles involved and damage",
      "Photograph the accident scene from multiple angles",
      "Get the other driver's details (name, IC, license, insurance)",
      "Note down time, date, and location",
      "Get contact details of any witnesses",
    ],
  },
  {
    number: 3,
    title: "Make a Police Report",
    description: "Lodge a police report within 24 hours of the accident.",
    tips: [
      "Go to the nearest police station",
      "Bring your IC, driving license, and vehicle documents",
      "Get a copy of the police report (you may need to return for it)",
      "The report is mandatory for insurance claims",
    ],
  },
  {
    number: 4,
    title: "Notify Your Insurance Company",
    description: "Contact your insurer as soon as possible to start the claim process.",
    tips: [
      "Call their 24-hour hotline",
      "Provide your policy number and accident details",
      "Ask about the claims process and required documents",
      "Note down the claim reference number",
    ],
  },
  {
    number: 5,
    title: "Send Your Car for Repair",
    description: "Take your car to an authorized panel workshop or your preferred workshop.",
    tips: [
      "Panel workshops offer cashless claims (easier process)",
      "Non-panel workshops may require upfront payment and reimbursement",
      "Get a repair estimate before authorizing work",
      "The workshop will liaise with the insurer for approval",
    ],
  },
  {
    number: 6,
    title: "Submit Claim Documents",
    description: "Provide all required documents to complete your claim.",
    tips: [
      "Police report",
      "Claim form (signed)",
      "Copy of IC and driving license",
      "Copy of insurance policy",
      "Photos of the accident and damage",
      "Repair invoice/quotation",
    ],
  },
  {
    number: 7,
    title: "Wait for Approval & Repairs",
    description: "Your insurer will process the claim and authorize repairs.",
    tips: [
      "Panel workshop claims are usually approved within 1-3 days",
      "Complex claims may take longer",
      "You may need to pay excess before repairs begin",
      "Collect your car once repairs are complete",
    ],
  },
];

const faqs = [
  {
    question: "How long do I have to make a police report?",
    answer:
      "You should make a police report within 24 hours of the accident. This is a legal requirement under Malaysian law for accidents involving injuries or significant damage. For minor accidents, some police stations may still accept reports within 48 hours, but it's best to report immediately.",
  },
  {
    question: "What is the excess and do I have to pay it?",
    answer:
      "The excess (also called deductible) is the amount you pay towards a claim. For comprehensive policies, the standard excess is usually RM400 for named drivers and higher for unnamed drivers. You typically pay this before repairs begin. Some policies have different excess amounts, so check your policy document.",
  },
  {
    question: "Can I choose any workshop for repairs?",
    answer:
      "Yes, you can choose any workshop. However, using a panel workshop offers advantages: cashless claims, direct billing to insurer, guaranteed workmanship, and usually faster approval. If you use a non-panel workshop, you may need to pay upfront and get reimbursed.",
  },
  {
    question: "How long does the claim process take?",
    answer:
      "For straightforward claims using panel workshops, approval can be as fast as 1-3 business days. Repair time depends on the extent of damage, typically 3-7 days for minor repairs and longer for major damage. Complex claims involving disputes or investigations may take several weeks.",
  },
  {
    question: "Will making a claim affect my NCD?",
    answer:
      "Yes, most claims will reduce your NCD by 2 levels. For example, if you have 55% NCD, it will drop to 38.33% after a claim. However, some claims like windscreen (if covered separately) or knock-for-knock claims may not affect NCD. Check your policy for details.",
  },
  {
    question: "What if the other driver was at fault?",
    answer:
      "If the other driver is at fault, you can claim from their insurance (third party claim). Alternatively, you can claim from your own comprehensive policy and your insurer will recover from the other party. In this case, your NCD may be protected through the knock-for-knock agreement.",
  },
];

export default function HowToClaimPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Car Insurance Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Claim Car Insurance in Malaysia
            </h1>
            <p className="text-xl text-gray-300">
              A complete step-by-step guide to making a car insurance claim. Know what to do after an accident and get your claim approved faster.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-8 bg-red-50 border-b-2 border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-sm text-red-600 font-medium">Emergency</p>
              <p className="text-2xl font-bold text-red-700">999</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-red-600 font-medium">Police</p>
              <p className="text-2xl font-bold text-red-700">999</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-red-600 font-medium">Ambulance</p>
              <p className="text-2xl font-bold text-red-700">999</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-red-600 font-medium">Fire</p>
              <p className="text-2xl font-bold text-red-700">994</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Step-by-Step Claims Process
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300" />
                )}

                <div className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-800 text-white flex items-center justify-center font-bold text-lg z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Documents Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Required Documents
              </h3>
              <ul className="space-y-3">
                {[
                  "Police report",
                  "Insurance claim form",
                  "Copy of IC (front & back)",
                  "Copy of driving license",
                  "Copy of insurance policy/cover note",
                  "Copy of vehicle registration (VOC)",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Photos to Take
              </h3>
              <ul className="space-y-3">
                {[
                  "Overall accident scene",
                  "All vehicles involved",
                  "Close-up of damage",
                  "License plates of all vehicles",
                  "Road conditions/signs",
                  "Other driver's IC and license",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Claims */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Types of Claims
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Own Damage Claim</h3>
              <p className="text-gray-600 mb-4">
                Claim for damage to your own vehicle, regardless of who&apos;s at fault.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Available for comprehensive policies</li>
                <li>• Excess payment required</li>
                <li>• May affect your NCD</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Third Party Claim</h3>
              <p className="text-gray-600 mb-4">
                Claim against the other driver&apos;s insurance when they&apos;re at fault.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Requires proof the other party is at fault</li>
                <li>• No excess payment needed</li>
                <li>• Your NCD is not affected</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Windscreen Claim</h3>
              <p className="text-gray-600 mb-4">
                Claim for windscreen repair or replacement due to cracks or chips.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Requires windscreen coverage add-on</li>
                <li>• Usually doesn&apos;t affect NCD</li>
                <li>• May have a coverage limit</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Theft Claim</h3>
              <p className="text-gray-600 mb-4">
                Claim if your vehicle is stolen (comprehensive policies only).
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Police report mandatory</li>
                <li>• Investigation may take time</li>
                <li>• Payout based on market value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Faster Claims */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tips for Faster Claim Approval
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Use Panel Workshops",
                description: "Panel workshops have direct communication with insurers, speeding up the approval process.",
              },
              {
                title: "Report Quickly",
                description: "Notify your insurer within 24-48 hours. Delayed reporting can complicate claims.",
              },
              {
                title: "Document Everything",
                description: "Take comprehensive photos and notes. The more evidence, the smoother the process.",
              },
              {
                title: "Keep All Receipts",
                description: "Save receipts for towing, temporary transport, and any related expenses.",
              },
              {
                title: "Be Honest",
                description: "Provide accurate information. False claims can void your policy and lead to legal issues.",
              },
              {
                title: "Follow Up Regularly",
                description: "Stay in contact with your insurer or workshop to track the progress of your claim.",
              },
            ].map((tip) => (
              <div key={tip.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} title="Claims FAQ" />

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a New Insurance Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Compare coverage and claims experience from 15+ insurers.
          </p>
          <Link href="/#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
