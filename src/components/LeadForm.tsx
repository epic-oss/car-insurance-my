"use client";

import { useState } from "react";

interface LeadFormProps {
  variant?: "hero" | "modal" | "inline";
  source?: string;
  insurerName?: string;
}

export default function LeadForm({
  variant = "hero",
  source = "homepage",
  insurerName,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car_plate: "",
    postcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validation
    if (!formData.name || !formData.phone || !formData.car_plate || !formData.postcode) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Phone validation (Malaysian format)
    const phoneRegex = /^(\+?6?01)[0-9]{8,9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s|-/g, ""))) {
      setError("Please enter a valid Malaysian phone number");
      setIsSubmitting(false);
      return;
    }

    // Postcode validation (5 digits)
    if (!/^\d{5}$/.test(formData.postcode)) {
      setError("Please enter a valid 5-digit postcode");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: Record<string, string> = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        phone: formData.phone.replace(/\s|-/g, ""),
        car_plate: formData.car_plate.toUpperCase(),
        postcode: formData.postcode,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        calculator_type: "car_insurance_my",
        source: source,
        lead_type: "car_insurance",
        site: "carinsurancemy.com",
      };

      // Only include insurer_name if provided
      if (insurerName) {
        payload.insurer_name = insurerName;
      }

      const response = await fetch(
        "https://hook.us2.make.com/x41kcriuri5w5s8fkrfi6884hu05yhpe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-8" : "p-6"} text-center`}>
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-secondary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your request. Our insurance advisor will contact you within 24 hours with your personalized quotes.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-6 md:p-8" : ""}`}
    >
      {variant === "hero" && (
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Get Your Free Quote
        </h3>
      )}

      {insurerName && (
        <p className="text-gray-600 mb-4 text-center">
          Get a quote from {insurerName}
        </p>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="car_plate" className="block text-sm font-medium text-gray-700 mb-1">
            Car Plate Number
          </label>
          <input
            type="text"
            id="car_plate"
            placeholder="e.g., WXY 1234"
            className={inputClasses}
            value={formData.car_plate}
            onChange={(e) =>
              setFormData({ ...formData, car_plate: e.target.value.toUpperCase() })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              placeholder="e.g., 50000"
              maxLength={5}
              className={inputClasses}
              value={formData.postcode}
              onChange={(e) =>
                setFormData({ ...formData, postcode: e.target.value.replace(/\D/g, "") })
              }
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="e.g., 012-3456789"
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Get Free Quotes"
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting, you agree to be contacted by our insurance partners.
        Your information is secure and will not be shared.
      </p>
    </form>
  );
}
