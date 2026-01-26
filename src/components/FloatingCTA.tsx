"use client";

import { useState, useEffect } from "react";

const socialProofMessages = [
  { name: "T*****n", location: "Kuala Lumpur", saved: "RM280" },
  { name: "A*****a", location: "Selangor", saved: "RM350" },
  { name: "M*****d", location: "Penang", saved: "RM220" },
  { name: "S*****i", location: "Johor", saved: "RM410" },
  { name: "L*****g", location: "Perak", saved: "RM190" },
];

export default function FloatingCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentProof, setCurrentProof] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate social proof every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % socialProofMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    const form = document.getElementById("quote-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll to top where form typically is
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const proof = socialProofMessages[currentProof];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-white border border-gray-200 text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          aria-label="Back to top"
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Compact Social Proof - no icon */}
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg text-xs max-w-[200px] animate-fade-in">
        <p className="text-gray-700">
          <span className="font-medium">{proof.name}</span> from {proof.location}
        </p>
        <p className="text-green-600 font-semibold">saved {proof.saved}</p>
      </div>

      {/* Get Free Quote CTA */}
      <button
        onClick={scrollToForm}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
      >
        Get Free Quote
      </button>
    </div>
  );
}
