import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";
import InsurerLogos from "@/components/InsurerLogos";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Car Insurance with{" "}
                <span className="text-secondary-400">24-Hour Claims Support</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                When accidents happen, you need an expert in your corner. We&apos;ve handled
                1,000+ claims and guide you from accident to settlement.
              </p>
              <div className="mt-8">
                <TrustBadges />
              </div>
            </div>

            <div id="quote-form">
              <LeadForm variant="hero" source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Insurer Logos */}
      <InsurerLogos />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us - More Than Just a Quote */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">More Than Just a Quote</h2>
            <p className="section-subtitle">
              We provide expert service and support throughout your insurance journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Claims Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                With 1,000+ motor insurance claims handled, we understand the process
                thoroughly — from accident reporting to final settlement. Our hands-on
                expertise helps you avoid common issues and ensures smoother, faster
                claim resolutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24-Hour Emergency Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Accidents don&apos;t wait for business hours. Whether it&apos;s guidance
                after an accident, documentation support, or claim follow-up, we&apos;re
                always accessible when you need assistance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus exclusively on Zurich and Allianz motor insurance, allowing us to
                provide in-depth knowledge, accurate advice, and efficient support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Helpful Resources</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/calculator/car-insurance-calculator" className="card p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Calculator</h3>
              <p className="text-gray-600 text-sm">Estimate your car insurance premium based on your vehicle and coverage needs.</p>
            </Link>

            <Link href="/compare/best-car-insurance-malaysia" className="card p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compare Insurers</h3>
              <p className="text-gray-600 text-sm">See how Malaysia&apos;s top car insurance companies stack up against each other.</p>
            </Link>

            <Link href="/guide/ncd-explained" className="card p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance Guides</h3>
              <p className="text-gray-600 text-sm">Learn about NCD, coverage types, and how to make the most of your insurance.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Expert Insurance Support Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            1,000+ claims handled. 24-hour support. Zurich &amp; Allianz specialists.
          </p>
          <Link href="#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Your Free Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
