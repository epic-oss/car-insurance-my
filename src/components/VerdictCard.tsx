interface VerdictData {
  rating: number;
  badge: "RECOMMENDED" | "GOOD VALUE" | "BUDGET PICK";
  bestFor: string[];
  skipIf: string[];
}

interface VerdictCardProps {
  verdictData: VerdictData;
  insurerName: string;
  children: React.ReactNode;
}

export default function VerdictCard({ verdictData, insurerName, children }: VerdictCardProps) {
  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "RECOMMENDED":
        return "bg-green-500 text-white";
      case "GOOD VALUE":
        return "bg-blue-500 text-white";
      case "BUDGET PICK":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
      {/* Rating Badge Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">⭐</span>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {verdictData.rating.toFixed(1)}/5
              </div>
              <div className="text-sm text-gray-600">{insurerName} Rating</div>
            </div>
          </div>
          <span
            className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${getBadgeStyles(
              verdictData.badge
            )}`}
          >
            {verdictData.badge}
          </span>
        </div>
      </div>

      {/* Best For / Skip If Section */}
      <div className="grid md:grid-cols-2 gap-0">
        {/* Best For */}
        <div className="p-6 bg-green-50/50">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Best For
          </h4>
          <ul className="space-y-3">
            {verdictData.bestFor.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skip If */}
        <div className="p-6 bg-red-50/50">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-2">
              <svg
                className="w-4 h-4 text-white"
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
            </span>
            Skip If
          </h4>
          <ul className="space-y-3">
            {verdictData.skipIf.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Verdict Paragraphs */}
      <div className="p-6 bg-white border-t border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Full Verdict</h4>
        <div className="prose prose-gray max-w-none">{children}</div>
      </div>
    </div>
  );
}

export type { VerdictData };
