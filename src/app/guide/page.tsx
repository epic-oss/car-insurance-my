"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { guidesPreviews } from "@/lib/data/guides";

const currentYear = new Date().getFullYear();

const guideIcons: Record<string, React.ReactNode> = {
  chart: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
  scale: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  ),
  document: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  money: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const guideColors: Record<string, string> = {
  green: "bg-green-50 text-green-600 border-green-200",
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  amber: "bg-amber-50 text-amber-600 border-amber-200",
};

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) {
      return guidesPreviews;
    }

    const query = searchQuery.toLowerCase().trim();
    return guidesPreviews.filter((guide) => {
      const titleMatch = guide.title.toLowerCase().includes(query);
      const descriptionMatch = guide.description.toLowerCase().includes(query);
      const slugMatch = guide.slug.toLowerCase().includes(query);
      return titleMatch || descriptionMatch || slugMatch;
    });
  }, [searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Resource Center</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Insurance Guides Malaysia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to know about car insurance in Malaysia.
              Written by experts, updated for {currentYear}.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides... e.g. flood insurance, NCD, claims"
                  className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-xl border-0 focus:ring-2 focus:ring-primary-400 outline-none transition-shadow"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGuides.length > 0 ? (
            <>
              {searchQuery && (
                <p className="text-gray-600 mb-6">
                  Found {filteredGuides.length} guide
                  {filteredGuides.length !== 1 ? "s" : ""} matching &quot;
                  {searchQuery}&quot;
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guide/${guide.slug}`}
                    className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center ${guideColors[guide.color]}`}
                      >
                        {guideIcons[guide.icon]}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
                          {guide.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{guide.description}</p>
                        <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                          Read guide
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No guides found
              </h3>
              <p className="text-gray-600 mb-4">
                No guides match &quot;{searchQuery}&quot;. Try a different search
                term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}

          {!searchQuery && (
            <p className="text-center text-gray-500 text-sm mt-8">
              Last updated: {currentYear}
            </p>
          )}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Tips for Malaysian Drivers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "🛡️",
                tip: "Always compare quotes from multiple insurers",
              },
              { icon: "📅", tip: "Renew early to avoid policy lapse" },
              { icon: "💰", tip: "Higher NCD = Lower premium" },
              { icon: "📝", tip: "Read your policy document carefully" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Compare Car Insurance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get quotes from 15+ insurers in 60 seconds.
          </p>
          <Link
            href="/#quote-form"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
