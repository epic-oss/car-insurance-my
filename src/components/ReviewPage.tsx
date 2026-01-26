"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import VerdictCard from "@/components/VerdictCard";
import { Insurer } from "@/lib/insurers";

interface ReviewPageProps {
  insurer: Insurer;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-6 h-6 ${
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
      <span className="text-lg font-semibold text-gray-900 ml-2">
        {rating.toFixed(1)} / 5.0
      </span>
    </div>
  );
}

export default function ReviewPage({ insurer }: ReviewPageProps) {
  const [showForm, setShowForm] = useState(false);

  const reviewFaqs = [
    {
      question: `Is ${insurer.name} a good car insurance company?`,
      answer: `${insurer.name} is rated ${insurer.rating}/5 based on our comprehensive analysis. They have ${insurer.claimsRating.toLowerCase()} claims service and ${insurer.priceRating.toLowerCase()} pricing. ${insurer.pros[0]} and ${insurer.pros[1].toLowerCase()}.`,
    },
    {
      question: `How do I make a claim with ${insurer.shortName}?`,
      answer: insurer.claimProcess,
    },
    {
      question: `What coverage options does ${insurer.shortName} offer?`,
      answer: `${insurer.name} offers ${insurer.coverage.join(", ").toLowerCase()}. They also have add-ons including ${insurer.addOns.slice(0, 3).join(", ").toLowerCase()}.`,
    },
    {
      question: `How does ${insurer.shortName} compare to other insurers?`,
      answer: `${insurer.name} stands out for ${insurer.features[0].toLowerCase()} and ${insurer.features[1].toLowerCase()}. Compared to competitors, they offer ${insurer.priceRating.toLowerCase()} pricing with ${insurer.claimsRating.toLowerCase()} claims experience.`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={insurer.logo}
                    alt={`${insurer.name} logo`}
                    width={56}
                    height={56}
                    className="object-contain max-h-[56px] w-auto"
                  />
                </div>
                <div>
                  <p className="text-gray-300">Insurance Review</p>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {insurer.name}
                  </h1>
                </div>
              </div>

              <div className="mb-6">
                <StarRating rating={insurer.rating} />
              </div>

              <p className="text-xl text-gray-300 mb-6">
                {insurer.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex px-4 py-2 bg-white/10 rounded-full text-sm">
                  Est. {insurer.established}
                </span>
                <span
                  className={`inline-flex px-4 py-2 rounded-full text-sm ${
                    insurer.claimsRating === "Excellent"
                      ? "bg-green-500/20 text-green-300"
                      : insurer.claimsRating === "Very Good"
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {insurer.claimsRating} Claims
                </span>
                <span
                  className={`inline-flex px-4 py-2 rounded-full text-sm ${
                    insurer.priceRating === "Budget-Friendly"
                      ? "bg-green-500/20 text-green-300"
                      : insurer.priceRating === "Competitive"
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-purple-500/20 text-purple-300"
                  }`}
                >
                  {insurer.priceRating} Pricing
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <LeadForm variant="hero" source={`review-${insurer.id}`} insurerName={insurer.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800">{insurer.rating}</div>
              <div className="text-sm text-gray-600">Overall Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800">{insurer.established}</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800">{insurer.claimsRating}</div>
              <div className="text-sm text-gray-600">Claims Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800">{insurer.priceRating.split("-")[0]}</div>
              <div className="text-sm text-gray-600">Price Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {insurer.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {insurer.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">+</span>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {insurer.cons.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">-</span>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coverage Options */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Coverage Options</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {insurer.coverage.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Add-ons</h2>
                <div className="flex flex-wrap gap-3">
                  {insurer.addOns.map((addon, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>

              {/* Claims Process */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Claims Process</h2>
                <p className="text-gray-700">{insurer.claimProcess}</p>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-4">Get {/^[aeiouAEIOU]/.test(insurer.shortName) ? "an" : "a"} {insurer.shortName} Quote</h3>
                <p className="text-gray-300 mb-6">
                  Compare {insurer.shortName} with other insurers and find the best price for your car.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full btn-primary py-3"
                >
                  Get Free Quote
                </button>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-300 mb-3">Also compare with:</p>
                  <div className="space-y-2">
                    {["Allianz", "Etiqa", "AXA", "Tokio Marine", "Zurich"]
                      .filter((name) => name !== insurer.shortName)
                      .slice(0, 3)
                      .map((name) => (
                        <Link
                          key={name}
                          href={`/compare/${name.toLowerCase().replace(" ", "-")}-car-insurance-review`}
                          className="block text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          → {name} Review
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/calculator/car-insurance-calculator" className="text-primary-600 hover:text-primary-800">
                      → Premium Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/best-car-insurance-malaysia" className="text-primary-600 hover:text-primary-800">
                      → Compare All Insurers
                    </Link>
                  </li>
                  <li>
                    <Link href="/guide/ncd-explained" className="text-primary-600 hover:text-primary-800">
                      → NCD Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Verdict</h2>
          {insurer.verdict ? (
            <VerdictCard
              verdictData={{
                rating: insurer.rating,
                badge: insurer.verdict.badge,
                bestFor: insurer.verdict.bestFor,
                skipIf: insurer.verdict.skipIf,
              }}
              insurerName={insurer.name}
            >
              <p>
                {insurer.name} is a {insurer.rating >= 4.5 ? "top-tier" : insurer.rating >= 4 ? "solid" : "decent"} choice for Malaysian car owners looking for {insurer.priceRating.toLowerCase()} insurance with {insurer.claimsRating.toLowerCase()} claims service.
              </p>
              <p>
                Their standout features include {insurer.features[0].toLowerCase()} and {insurer.features[1].toLowerCase()}, making them particularly suitable for drivers who value these benefits.
              </p>
              <p>
                {insurer.pros[0]} is a significant advantage, though potential customers should be aware that {insurer.cons[0].toLowerCase()}.
              </p>
              <p>
                Overall, we recommend {insurer.shortName} for {insurer.priceRating === "Premium" ? "those who prioritize premium service and comprehensive coverage" : insurer.priceRating === "Budget-Friendly" ? "budget-conscious drivers who need essential coverage" : "drivers seeking a good balance of price and coverage"}.
              </p>
            </VerdictCard>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p>
                {insurer.name} is a {insurer.rating >= 4.5 ? "top-tier" : insurer.rating >= 4 ? "solid" : "decent"} choice for Malaysian car owners looking for {insurer.priceRating.toLowerCase()} insurance with {insurer.claimsRating.toLowerCase()} claims service.
              </p>
              <p>
                Their standout features include {insurer.features[0].toLowerCase()} and {insurer.features[1].toLowerCase()}, making them particularly suitable for drivers who value these benefits.
              </p>
              <p>
                {insurer.pros[0]} is a significant advantage, though potential customers should be aware that {insurer.cons[0].toLowerCase()}.
              </p>
              <p>
                Overall, we recommend {insurer.shortName} for {insurer.priceRating === "Premium" ? "those who prioritize premium service and comprehensive coverage" : insurer.priceRating === "Budget-Friendly" ? "budget-conscious drivers who need essential coverage" : "drivers seeking a good balance of price and coverage"}.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={reviewFaqs} title={`${insurer.shortName} FAQ`} />

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Your {insurer.shortName} Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source={`review-${insurer.id}`} insurerName={insurer.name} />
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your {insurer.shortName} Quote?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Compare with other insurers and find the best price for you.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </>
  );
}
