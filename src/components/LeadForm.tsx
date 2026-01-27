"use client";

import { useState } from "react";

interface LeadFormProps {
  variant?: "hero" | "modal" | "inline";
  source?: string;
  insurerName?: string;
}

const WEBHOOK_URL =
  "https://hook.us2.make.com/5kcnxdvv4yu49sar3fqin7ul081ginvn";

export default function LeadForm({
  variant = "hero",
  source = "homepage",
  insurerName,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    nric: "",
    car_plate: "",
    postcode: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Format NRIC as user types (XXXXXX-XX-XXXX)
  const formatNRIC = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 6) {
      return digits;
    } else if (digits.length <= 8) {
      return `${digits.slice(0, 6)}-${digits.slice(6)}`;
    } else {
      return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 12)}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload: Record<string, string> = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        nric: formData.nric.replace(/\D/g, ""),
        phone: formData.phone.replace(/\s|-/g, ""),
        car_plate: formData.car_plate.toUpperCase(),
        postcode: formData.postcode,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        source: source,
        site: "carinsurancemy.com",
      };

      if (insurerName) {
        payload.insurer_name = insurerName;
      }

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-8" : "p-6"} text-center`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
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
          We&apos;ll WhatsApp you with your quote within 30 minutes during
          business hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-400";

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
            name="name"
            placeholder="Ahmad bin Abdullah"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="nric" className="block text-sm font-medium text-gray-700 mb-1">
            IC Number (NRIC)
          </label>
          <input
            type="text"
            id="nric"
            name="nric"
            placeholder="880101-14-5678"
            className={inputClasses}
            value={formData.nric}
            onChange={(e) => setFormData({ ...formData, nric: formatNRIC(e.target.value) })}
            maxLength={14}
            required
          />
        </div>

        <div>
          <label htmlFor="car_plate" className="block text-sm font-medium text-gray-700 mb-1">
            Car Plate Number
          </label>
          <input
            type="text"
            id="car_plate"
            name="car_plate"
            placeholder="WXY 1234"
            className={inputClasses}
            value={formData.car_plate}
            onChange={(e) =>
              setFormData({ ...formData, car_plate: e.target.value.toUpperCase() })
            }
            required
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
              name="postcode"
              placeholder="50000"
              maxLength={5}
              className={inputClasses}
              value={formData.postcode}
              onChange={(e) =>
                setFormData({ ...formData, postcode: e.target.value.replace(/\D/g, "") })
              }
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="012-3456789"
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Get Free Quotes"}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        We&apos;ll never share your information with third parties.
      </p>
    </form>
  );
}
