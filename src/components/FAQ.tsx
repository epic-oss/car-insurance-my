"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How does car insurance comparison work?",
    answer:
      "Simply enter your car details and contact information. We'll instantly fetch quotes from 15+ insurance companies and present them to you for comparison. Our advisors will then contact you to help finalize your choice.",
  },
  {
    question: "Is it free to get quotes?",
    answer:
      "Yes, getting quotes is completely free with no obligation. You only pay when you decide to purchase a policy from one of our partner insurers.",
  },
  {
    question: "What is NCD (No Claim Discount)?",
    answer:
      "NCD is a discount given to policyholders who haven't made any claims during the policy period. It ranges from 0% to 55% and can significantly reduce your premium. The longer you go without claims, the higher your discount.",
  },
  {
    question: "What's the difference between Comprehensive and Third Party coverage?",
    answer:
      "Comprehensive coverage protects your car and others' vehicles/property from damage, theft, and accidents. Third Party coverage only covers damage you cause to others' vehicles and property, not your own car. Comprehensive is recommended for newer or more valuable vehicles.",
  },
  {
    question: "How long does it take to get my policy?",
    answer:
      "Once you select and pay for your policy, it's activated instantly. You'll receive your policy documents via email within minutes.",
  },
  {
    question: "Can I renew my insurance before it expires?",
    answer:
      "Yes, you can renew up to 2 months before your current policy expires. Early renewal is recommended to ensure continuous coverage and maintain your NCD.",
  },
];

export default function FAQ({ faqs = defaultFaqs, title = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">{title}</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
