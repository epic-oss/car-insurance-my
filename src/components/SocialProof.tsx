"use client";

import { useState, useEffect } from "react";

const testimonials = [
  { name: "M*****d", location: "Putrajaya", savings: 320 },
  { name: "A*****h", location: "Petaling Jaya", savings: 450 },
  { name: "T*****n", location: "Kuala Lumpur", savings: 280 },
  { name: "S*****a", location: "Johor Bahru", savings: 390 },
  { name: "L*****g", location: "Penang", savings: 415 },
  { name: "R*****i", location: "Shah Alam", savings: 350 },
  { name: "N*****a", location: "Subang Jaya", savings: 270 },
  { name: "K*****n", location: "Ipoh", savings: 380 },
  { name: "W*****g", location: "Klang", savings: 295 },
  { name: "H*****n", location: "Melaka", savings: 340 },
  { name: "J*****e", location: "Kota Kinabalu", savings: 425 },
  { name: "C*****a", location: "Cyberjaya", savings: 310 },
  { name: "F*****k", location: "Puchong", savings: 365 },
  { name: "Y*****n", location: "Ampang", savings: 285 },
  { name: "Z*****a", location: "Cheras", savings: 375 },
  { name: "B*****r", location: "Seremban", savings: 330 },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-secondary-600"
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
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {current.name} from {current.location}
            </p>
            <p className="text-sm text-gray-600">
              just renewed - <span className="text-secondary-600 font-semibold">saved RM{current.savings}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">A few moments ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
