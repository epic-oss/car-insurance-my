import { Handshake } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "1,000+ Claims Handled",
      description: "We know the process inside out",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "24-Hour Support",
      description: "Call us anytime during emergencies",
    },
    {
      icon: <Handshake className="w-6 h-6" strokeWidth={2} />,
      title: "Zurich & Allianz Experts",
      description: "Specialized knowledge, faster resolutions",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white rounded-xl p-5 shadow-sm"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-800 mb-4">
            {badge.icon}
          </div>
          <h3 className="font-semibold text-gray-900">{badge.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
