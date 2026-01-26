"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";

const vehicleTypes = [
  { value: "sedan", label: "Sedan / Hatchback" },
  { value: "suv", label: "SUV / MPV" },
  { value: "pickup", label: "Pickup Truck" },
  { value: "sports", label: "Sports Car" },
];

const ncdOptions = [
  { value: 0, label: "0% (First year / After claim)" },
  { value: 25, label: "25% (1 year without claims)" },
  { value: 30, label: "30% (2 years without claims)" },
  { value: 38.33, label: "38.33% (3 years without claims)" },
  { value: 45, label: "45% (4 years without claims)" },
  { value: 55, label: "55% (5+ years without claims)" },
];

const coverageTypes = [
  { value: "comprehensive", label: "Comprehensive" },
  { value: "thirdParty", label: "Third Party Only" },
  { value: "thirdPartyFireTheft", label: "Third Party, Fire & Theft" },
];

const calculatorFaqs = [
  {
    question: "How is car insurance premium calculated in Malaysia?",
    answer:
      "Car insurance premiums in Malaysia are calculated based on several factors: your vehicle's market value, engine capacity, vehicle type, your location, coverage type (comprehensive or third party), and your No Claim Discount (NCD). The base rate is set by Bank Negara Malaysia, but insurers can offer discounts and add-ons.",
  },
  {
    question: "What affects my car insurance premium the most?",
    answer:
      "The biggest factors are your car's market value (sum insured), engine capacity, and your NCD. A higher market value means higher premiums, while a higher NCD (up to 55%) can significantly reduce your costs. Your age, driving history, and chosen add-ons also play a role.",
  },
  {
    question: "Is this calculator estimate accurate?",
    answer:
      "This calculator provides an estimate based on standard industry rates. Actual premiums may vary based on the insurer, specific vehicle make/model, your claims history, and any additional coverage or add-ons you choose. For an exact quote, use our free quote form.",
  },
  {
    question: "How can I reduce my car insurance premium?",
    answer:
      "You can reduce your premium by maintaining a clean driving record to build up your NCD, choosing a higher excess, removing unnecessary add-ons, and comparing quotes from multiple insurers. Installing safety features and anti-theft devices may also qualify you for discounts.",
  },
];

export default function CalculatorPage() {
  const [vehicleType, setVehicleType] = useState("sedan");
  const [marketValue, setMarketValue] = useState("");
  const [vehicleAge, setVehicleAge] = useState("");
  const [ncd, setNcd] = useState(55);
  const [coverageType, setCoverageType] = useState("comprehensive");
  const [result, setResult] = useState<{min: number; max: number} | null>(null);
  const [showForm, setShowForm] = useState(false);

  const calculatePremium = () => {
    const value = parseFloat(marketValue);
    if (!value || value < 10000) {
      alert("Please enter a valid market value (minimum RM 10,000)");
      return;
    }

    let basePremium = 0;

    // Base rate calculation (simplified Malaysian tariff)
    if (value <= 10000) {
      basePremium = value * 0.026;
    } else if (value <= 25000) {
      basePremium = 260 + (value - 10000) * 0.0238;
    } else if (value <= 50000) {
      basePremium = 617 + (value - 25000) * 0.0216;
    } else if (value <= 75000) {
      basePremium = 1157 + (value - 50000) * 0.0194;
    } else if (value <= 100000) {
      basePremium = 1642 + (value - 75000) * 0.0172;
    } else if (value <= 150000) {
      basePremium = 2072 + (value - 100000) * 0.0155;
    } else {
      basePremium = 2847 + (value - 150000) * 0.0138;
    }

    // Adjust for vehicle type
    const typeMultipliers: Record<string, number> = {
      sedan: 1.0,
      suv: 1.1,
      pickup: 1.05,
      sports: 1.3,
    };
    basePremium *= typeMultipliers[vehicleType];

    // Adjust for coverage type
    if (coverageType === "thirdParty") {
      basePremium = 73.90; // Fixed third party rate in Malaysia
    } else if (coverageType === "thirdPartyFireTheft") {
      basePremium *= 0.6;
    }

    // Apply NCD discount
    const afterNcd = basePremium * (1 - ncd / 100);

    // Add estimated add-ons and service tax
    const minTotal = Math.round(afterNcd * 1.08); // Just service tax
    const maxTotal = Math.round(afterNcd * 1.25); // With common add-ons

    setResult({ min: minTotal, max: maxTotal });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Insurance Premium Calculator
            </h1>
            <p className="text-xl text-gray-300">
              Estimate your car insurance premium in seconds. Enter your vehicle details below to get an instant estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Calculate Your Premium</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {vehicleTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Market Value */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Market Value (RM)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 80000"
                  value={marketValue}
                  onChange={(e) => setMarketValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Vehicle Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Age (Years)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 3"
                  min="0"
                  max="30"
                  value={vehicleAge}
                  onChange={(e) => setVehicleAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* NCD */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No Claim Discount (NCD)
                </label>
                <select
                  value={ncd}
                  onChange={(e) => setNcd(parseFloat(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {ncdOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Coverage Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coverage Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {coverageTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        coverageType === type.value
                          ? "border-primary-600 bg-primary-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="coverageType"
                        value={type.value}
                        checked={coverageType === type.value}
                        onChange={(e) => setCoverageType(e.target.value)}
                        className="sr-only"
                      />
                      <span className={coverageType === type.value ? "text-primary-800 font-medium" : "text-gray-700"}>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={calculatePremium}
              className="w-full btn-primary py-4 text-lg mt-8"
            >
              Calculate Premium
            </button>

            {/* Results */}
            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Estimated Annual Premium
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary-800">
                    RM {result.min.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-600">-</span>
                  <span className="text-4xl font-bold text-primary-800">
                    RM {result.max.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  * Estimate includes service tax. Actual premium may vary based on insurer and add-ons.
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary mt-6 w-full"
                >
                  Get Exact Quote from Insurers
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Your Exact Quote</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <LeadForm variant="modal" source="calculator" />
            </div>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Understanding Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Car Insurance Premiums in Malaysia</h2>
            <p className="text-gray-600">
              Car insurance premiums in Malaysia are calculated based on a tariff system regulated by Bank Negara Malaysia (BNM). While the base rates are standardized, various factors can affect your final premium, making it important to compare quotes from multiple insurers.
            </p>
          </div>

          {/* Key Factors - Icon Cards Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Factors Affecting Your Premium</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Sum Insured (Market Value)</h3>
                <p className="text-sm text-gray-600">The higher your car&apos;s value, the higher the premium. This is the most significant factor.</p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Engine Capacity</h3>
                <p className="text-sm text-gray-600">Vehicles with larger engines typically cost more to insure due to higher repair costs.</p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Vehicle Age</h3>
                <p className="text-sm text-gray-600">Older vehicles may have lower market values but could have higher premiums due to breakdown risk.</p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">No Claim Discount (NCD)</h3>
                <p className="text-sm text-gray-600">Up to 55% discount for 5+ years without claims. The biggest way to save.</p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Coverage Type</h3>
                <p className="text-sm text-gray-600">Comprehensive costs more than third-party only, but offers significantly better protection.</p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-gray-600">Some areas have higher premiums due to accident statistics and crime rates.</p>
              </div>
            </div>
          </div>

          {/* Comprehensive vs Third Party - Callout Box */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive vs Third Party Coverage</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Comprehensive insurance covers damage to your own vehicle as well as third-party liability, including theft and natural disasters. Third-party insurance only covers damage you cause to other people&apos;s property and vehicles.
              </p>
              <p className="text-gray-700 font-medium">
                For most Malaysian drivers, especially those with newer vehicles, comprehensive coverage is recommended for the peace of mind it provides.
              </p>
              <Link href="/guide/third-party-vs-comprehensive" className="inline-flex items-center text-blue-600 font-medium mt-3 hover:underline">
                Learn more about coverage types →
              </Link>
            </div>
          </div>

          {/* Tips - Numbered List */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Lower Your Premium</h2>
            <div className="space-y-3">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">1</span>
                <p className="font-medium pt-1">Maintain a clean driving record to maximize your NCD</p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">2</span>
                <p className="font-medium pt-1">Choose a higher excess (the amount you pay in case of a claim)</p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">3</span>
                <p className="font-medium pt-1">Compare quotes from multiple insurers</p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">4</span>
                <p className="font-medium pt-1">Remove unnecessary add-ons</p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">5</span>
                <p className="font-medium pt-1">Install approved anti-theft devices</p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">6</span>
                <p className="font-medium pt-1">Consider usage-based insurance if you drive less frequently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={calculatorFaqs} title="Car Insurance Calculator FAQ" />

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Real Quotes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our calculator gives you an estimate. Get exact quotes from 15+ insurers now.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quotes
          </button>
        </div>
      </section>
    </>
  );
}

