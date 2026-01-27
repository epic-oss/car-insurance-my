"use client";

import { useState } from "react";

interface LeadFormProps {
  variant?: "hero" | "modal" | "inline";
  source?: string;
  insurerName?: string;
}

const STORAGE_KEY = "carinsurancemy_submissions";
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

interface StoredSubmission {
  nric: string;
  phone: string;
  timestamp: number;
}

// Check if NRIC or phone was submitted in the last 24 hours
function checkForDuplicate(nric: string, phone: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;

    const submissions: StoredSubmission[] = JSON.parse(stored);
    const now = Date.now();

    // Clean up old entries and check for duplicates
    const recentSubmissions = submissions.filter(
      (s) => now - s.timestamp < DUPLICATE_WINDOW_MS
    );

    // Update storage with cleaned entries
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSubmissions));

    // Check if this NRIC or phone was recently submitted
    const normalizedNric = nric.replace(/\D/g, "");
    const normalizedPhone = phone.replace(/\s|-/g, "");

    return recentSubmissions.some(
      (s) => s.nric === normalizedNric || s.phone === normalizedPhone
    );
  } catch {
    return false;
  }
}

// Store submission to prevent duplicates
function storeSubmission(nric: string, phone: string): void {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const submissions: StoredSubmission[] = stored ? JSON.parse(stored) : [];

    submissions.push({
      nric: nric.replace(/\D/g, ""),
      phone: phone.replace(/\s|-/g, ""),
      timestamp: Date.now(),
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  } catch {
    // Ignore storage errors
  }
}

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
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [error, setError] = useState("");

  // Format NRIC as user types (XXXXXX-XX-XXXX)
  const formatNRIC = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Format with dashes
    if (digits.length <= 6) {
      return digits;
    } else if (digits.length <= 8) {
      return `${digits.slice(0, 6)}-${digits.slice(6)}`;
    } else {
      return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 12)}`;
    }
  };

  // Validate NRIC format (XXXXXX-XX-XXXX or 12 digits)
  const isValidNRIC = (nric: string) => {
    const digits = nric.replace(/\D/g, "");
    return digits.length === 12;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[LeadForm] handleSubmit called", { formData, source });
    setIsSubmitting(true);
    setError("");

    // Validation
    if (!formData.name || !formData.nric || !formData.phone || !formData.car_plate || !formData.postcode) {
      console.log("[LeadForm] Validation failed: missing fields");
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // NRIC validation
    if (!isValidNRIC(formData.nric)) {
      console.log("[LeadForm] Validation failed: invalid NRIC");
      setError("Please enter a valid 12-digit IC number");
      setIsSubmitting(false);
      return;
    }

    // Phone validation (Malaysian format)
    const phoneRegex = /^(\+?6?01)[0-9]{8,9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s|-/g, ""))) {
      console.log("[LeadForm] Validation failed: invalid phone");
      setError("Please enter a valid Malaysian phone number");
      setIsSubmitting(false);
      return;
    }

    // Postcode validation (5 digits)
    if (!/^\d{5}$/.test(formData.postcode)) {
      console.log("[LeadForm] Validation failed: invalid postcode");
      setError("Please enter a valid 5-digit postcode");
      setIsSubmitting(false);
      return;
    }

    // Check for duplicate submission
    if (checkForDuplicate(formData.nric, formData.phone)) {
      console.log("[LeadForm] Duplicate detected - skipping webhook");
      setIsDuplicate(true);
      setIsSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: Record<string, string> = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        nric: formData.nric.replace(/\D/g, ""), // Send without dashes
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

      console.log("[LeadForm] Sending to webhook:", payload);

      await fetch(
        "https://hook.us2.make.com/5kcnxdvv4yu49sar3fqin7ul081ginvn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("[LeadForm] Webhook call completed successfully");

      // Store submission to prevent duplicates
      storeSubmission(formData.nric, formData.phone);
      setIsSubmitted(true);
    } catch (error) {
      console.error("[LeadForm] Form submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${variant === "hero" ? "bg-white rounded-2xl shadow-xl p-8" : "p-6"} text-center`}>
        <div className={`w-16 h-16 ${isDuplicate ? "bg-blue-100" : "bg-secondary-100"} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <svg
            className={`w-8 h-8 ${isDuplicate ? "text-blue-600" : "text-secondary-600"}`}
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isDuplicate ? "Already Submitted!" : "Thank You!"}
        </h3>
        <p className="text-gray-600">
          {isDuplicate
            ? "You've already submitted a quote request. We'll contact you shortly!"
            : "We'll WhatsApp you shortly."}
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
        {/* 1. Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g., Ahmad bin Ali"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* 2. IC Number (NRIC) */}
        <div>
          <label htmlFor="nric" className="block text-sm font-medium text-gray-700 mb-1">
            IC Number (NRIC)
          </label>
          <input
            type="text"
            id="nric"
            placeholder="e.g., 901231-14-5678"
            className={inputClasses}
            value={formData.nric}
            onChange={(e) => setFormData({ ...formData, nric: formatNRIC(e.target.value) })}
            maxLength={14}
          />
          <p className="text-xs text-gray-500 mt-1">Required to generate accurate quote</p>
        </div>

        {/* 3. Car Plate Number */}
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

        {/* 4. Postcode and 5. WhatsApp Number */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode (for Cover Note)
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
              WhatsApp Number
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
