import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";
import InsurerLogos from "@/components/InsurerLogos";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SocialProof />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Compare Car Insurance in{" "}
                <span className="text-secondary-400">60 Seconds</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                Get quotes from 15+ top insurers in Malaysia. Save up to RM500 on your
                car insurance renewal.
              </p>
              <div className="mt-8">
                <TrustBadges />
              </div>
            </div>

            <div id="quote-form">
              <LeadForm variant="hero" source="homepage-hero" />
              <div className="mt-4 text-center">
                <a
                  href="https://bjak.my/?p=OOI-YING-JYE-AT9T1T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Compare Prices Instantly with Bjak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer Logos */}
      <InsurerLogos />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Malaysians Trust Us</h2>
            <p className="section-subtitle">
              We make car insurance simple, transparent, and affordable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Save Money",
                description: "Compare prices from 15+ insurers to find the best deal",
                icon: "💰",
              },
              {
                title: "Save Time",
                description: "Get quotes in 60 seconds instead of calling multiple agents",
                icon: "⏱️",
              },
              {
                title: "Expert Advice",
                description: "Our licensed advisors help you choose the right coverage",
                icon: "👨‍💼",
              },
              {
                title: "Secure & Trusted",
                description: "BNM licensed partners with bank-grade security",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
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
            Ready to Save on Your Car Insurance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 100,000+ Malaysians who have saved money with us
          </p>
          <Link href="#quote-form" className="btn-primary inline-block text-lg px-8 py-4">
            Get Your Free Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
