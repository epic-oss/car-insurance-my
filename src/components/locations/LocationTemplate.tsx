"use client";

import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import { LocationArea } from "@/lib/data/locations";
import { siteConfig } from "@/lib/data/site-config";

interface LocationTemplateProps {
  location: LocationArea;
}

const currentYear = new Date().getFullYear();

export default function LocationTemplate({ location }: LocationTemplateProps) {
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
            <span className="text-gray-400">Locations</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {location.heroHeadline}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {location.heroSubtitle}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">
                    {location.workshopCount.allianz}+
                  </div>
                  <div className="text-sm text-gray-300">Allianz Workshops</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">
                    {location.workshopCount.zurich}+
                  </div>
                  <div className="text-sm text-gray-300">Zurich Workshops</div>
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
                Get Free Quote - {location.name}
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Areas We Cover</h3>
                <ul className="space-y-3">
                  {location.neighborhoods.map((area, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-secondary-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-200">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agent Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why {location.name} Residents Choose an Agent
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {location.demographicNote}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                WhatsApp Support
              </h3>
              <p className="text-gray-600 text-sm">
                Real person responds to your messages - not a chatbot or ticket system. Get help when you need it, in BM, English, or Chinese.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Claims Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                When accidents happen, we walk you through every step: documentation, police reports, workshop selection, and claim coordination.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Local Workshop Network
              </h3>
              <p className="text-gray-600 text-sm">
                {location.workshopCount.allianz}+ Allianz and {location.workshopCount.zurich}+ Zurich panel workshops near {location.name}. You&apos;ll always have a convenient option nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Workshops Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Panel Workshops Near {location.name}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            When you claim, you want a workshop nearby - not across town. Our insurer partners have comprehensive coverage in {location.name}.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Neighborhoods Coverage */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Areas With Workshop Coverage
              </h3>
              <ul className="space-y-3">
                {location.neighborhoods.map((area, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop Counts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workshop Network
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Allianz Panel Workshops</div>
                    <div className="text-sm text-gray-600">
                      Road Rangers 24/7 roadside assistance included
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary-800">
                    {location.workshopCount.allianz}+
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Zurich Panel Workshops</div>
                    <div className="text-sm text-gray-600">
                      24/7 roadside assistance available
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary-800">
                    {location.workshopCount.zurich}+
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Workshop counts are approximate for the {location.name} area. Actual availability may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Insurance Considerations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {location.name} Insurance Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {location.localConsiderations}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flood Risk */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">Flood Risk Areas</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {location.floodRiskAreas.map((area, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">{location.floodRiskNote}</p>
                <Link
                  href="/guide/flood-car-insurance-malaysia"
                  className="inline-flex items-center text-primary-800 font-medium text-sm mt-3 hover:text-primary-600 transition-colors"
                >
                  Learn about flood coverage
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Traffic & Roads */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-orange-500 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">High-Traffic Zones</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {location.majorRoads.map((road, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{road}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">{location.trafficNote}</p>
                <Link
                  href="/guide/ncd-explained"
                  className="inline-flex items-center text-primary-800 font-medium text-sm mt-3 hover:text-primary-600 transition-colors"
                >
                  Protect your NCD discount
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Theft */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-red-500 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">Theft Considerations</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">{location.theftNote}</p>
                <Link
                  href="/guide/third-party-vs-comprehensive"
                  className="inline-flex items-center text-primary-800 font-medium text-sm hover:text-primary-600 transition-colors"
                >
                  Why comprehensive matters
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Service in {location.name}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We&apos;re not physically in {location.name}, but everything is handled online and via WhatsApp. Same-day response, real person, real support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What We Provide</h3>
              <ul className="space-y-3">
                {[
                  "Allianz and Zurich coverage options",
                  "WhatsApp support (not hotline queues)",
                  "Claims guidance in BM/English/Chinese",
                  "Digital cover note delivery",
                  "Road tax renewal assistance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">How It Works</h3>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Get Quote", desc: "Fill in our form or WhatsApp us your details" },
                  { step: "2", title: "Compare Options", desc: "We present Allianz & Zurich quotes with honest advice" },
                  { step: "3", title: "Buy Online", desc: "Pay securely and receive your cover note digitally" },
                  { step: "4", title: "Claims Support", desc: "When you need to claim, we're one WhatsApp away" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={location.faqs}
        title={`Car Insurance FAQ - ${location.name}`}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Car Insurance Quote - {location.name}
            </h2>
            <p className="text-xl text-gray-300">
              {location.name} residents: compare Allianz & Zurich rates with personal agent support. No obligation, no pushy sales.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
            <LeadForm variant="modal" source={`location-${location.slug}`} />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Car Insurance Calculator",
                description: "Estimate your exact premium",
                link: "/calculator/car-insurance-calculator",
                icon: "calculator",
              },
              {
                title: "How to Claim",
                description: "Step-by-step claims guide",
                link: "/guide/how-to-claim-car-insurance",
                icon: "shield",
              },
              {
                title: "Flood Coverage Guide",
                description: "Special Perils explained",
                link: "/guide/flood-car-insurance-malaysia",
                icon: "cloud",
              },
              {
                title: "Compare All Insurers",
                description: "Top 10 insurers ranked",
                link: "/compare/best-car-insurance-malaysia",
                icon: "chart",
              },
            ].map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow text-center"
              >
                {page.icon === "calculator" && (
                  <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {page.icon === "shield" && (
                  <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {page.icon === "cloud" && (
                  <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )}
                {page.icon === "chart" && (
                  <svg className="w-10 h-10 text-primary-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                <h3 className="font-semibold text-gray-900">{page.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `CarInsuranceMY - ${location.name}`,
            description: location.metaDescription,
            url: `https://carinsurancemy.com/locations/${location.slug}`,
            areaServed: {
              "@type": "City",
              name: location.name,
              containedInPlace: {
                "@type": "State",
                name: "Selangor",
              },
            },
            serviceType: "Car Insurance Agent",
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
    </>
  );
}
