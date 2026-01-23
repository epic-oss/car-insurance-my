import Link from "next/link";
import FAQ from "@/components/FAQ";
import type {
  Guide,
  GuideSection,
  TableData,
  CheckItem,
  NumberedStep,
  ComparisonCard,
  TipItem,
  CalculationLine,
  ClaimType,
} from "@/lib/data/guides";

// Text Section
function TextSection({
  section,
}: {
  section: Extract<GuideSection, { type: "text" }>;
}) {
  return (
    <div className="mb-12">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      )}
      <div className="space-y-4 text-gray-600">
        {section.content.map((paragraph, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                .replace(/&apos;/g, "'"),
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Table Section
function TableSection({
  section,
}: {
  section: Extract<GuideSection, { type: "table" }>;
}) {
  const renderCell = (
    cell: string | { text: string; badge?: string; badgeColor?: string }
  ) => {
    if (typeof cell === "string") {
      return cell;
    }
    const badgeColors: Record<string, string> = {
      green: "bg-green-100 text-green-800",
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
      amber: "bg-amber-100 text-amber-800",
      red: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
          badgeColors[cell.badgeColor || "blue"]
        }`}
      >
        {cell.text}
        {cell.badge && <span className="ml-1">({cell.badge})</span>}
      </span>
    );
  };

  return (
    <div className="mb-12">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      )}
      {section.description && (
        <p className="text-gray-600 mb-6">{section.description}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-primary-800 text-white">
            <tr>
              {section.tableData.headers.map((header, i) => (
                <th key={i} className="px-6 py-4 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {section.tableData.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4">
                    {j === 0 ? (
                      <span className="font-medium text-gray-900">
                        {renderCell(cell)}
                      </span>
                    ) : (
                      renderCell(cell)
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.tableData.footnote && (
        <p className="text-sm text-gray-500 mt-4">{section.tableData.footnote}</p>
      )}
    </div>
  );
}

// Numbered List Section
function NumberedListSection({
  section,
}: {
  section: Extract<GuideSection, { type: "numberedList" }>;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      {section.description && (
        <p className="text-gray-600 mb-6">{section.description}</p>
      )}
      <div className="space-y-4">
        {section.steps.map((step) => (
          <div key={step.number} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-lg">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                {step.tips && step.tips.length > 0 && (
                  <ul className="space-y-1 text-gray-600">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Comparison Section
function ComparisonSection({
  section,
}: {
  section: Extract<GuideSection, { type: "comparison" }>;
}) {
  const getIconColor = (color?: string) => {
    switch (color) {
      case "green":
        return "bg-green-50 border-green-200";
      case "red":
        return "bg-red-50 border-red-200";
      case "blue":
        return "bg-blue-50 border-blue-200";
      case "primary":
        return "bg-primary-50 border-primary-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getHeaderIconColor = (color?: string) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "red":
        return "text-red-600";
      case "blue":
        return "text-blue-600";
      case "primary":
        return "text-primary-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="mb-12">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {section.cards.map((card, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 ${
              card.highlighted
                ? "bg-primary-50 border-2 border-primary-200"
                : `border ${getIconColor(card.iconColor)}`
            }`}
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              {card.icon ? (
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    card.highlighted
                      ? "bg-primary-600 text-white"
                      : card.iconColor === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {card.icon}
                </span>
              ) : card.iconColor === "green" ? (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : card.iconColor === "red" ? (
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              ) : card.iconColor === "blue" ? (
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              ) : null}
              {card.title}
              {card.badge && (
                <span className="ml-auto text-xs bg-secondary-500 text-white px-2 py-1 rounded-full">
                  {card.badge}
                </span>
              )}
            </h3>
            <ul className="space-y-2">
              {card.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-700">
                  <span
                    className={`mt-1 ${
                      item.checked === true
                        ? "text-green-500"
                        : item.checked === false
                        ? "text-red-500"
                        : card.iconColor === "blue"
                        ? "text-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {item.checked === true
                      ? "✓"
                      : item.checked === false
                      ? "✗"
                      : card.iconColor === "blue"
                      ? "+"
                      : "•"}
                  </span>
                  <div>
                    <span className={item.description ? "font-medium" : ""}>
                      {item.text}
                    </span>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {card.footer && (
              <p className="mt-4 text-sm text-gray-500">{card.footer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Callout Section
function CalloutSection({
  section,
}: {
  section: Extract<GuideSection, { type: "callout" }>;
}) {
  const variantStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    tip: "bg-green-50 border-green-200 text-green-900",
    success: "bg-green-50 border-l-4 border-green-500 text-gray-700",
  };

  const titleStyles = {
    info: "text-blue-800",
    warning: "text-amber-800",
    tip: "text-green-800",
    success: "text-green-800",
  };

  return (
    <div className="mb-12">
      {section.title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      )}
      <div
        className={`rounded-xl p-6 ${
          section.variant === "success"
            ? "bg-green-50 border-l-4 border-green-500 rounded-l-none"
            : `border ${variantStyles[section.variant]}`
        }`}
      >
        {section.title2 && (
          <h3 className={`font-bold mb-2 ${titleStyles[section.variant]}`}>
            {section.title2}
          </h3>
        )}
        <div
          className={section.variant === "success" ? "text-gray-700" : ""}
          dangerouslySetInnerHTML={{
            __html: section.content
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
              .replace(/\n\n/g, "</p><p class='mt-4'>")
              .replace(/&apos;/g, "'"),
          }}
        />
      </div>
    </div>
  );
}

// Tip Grid Section
function TipGridSection({
  section,
}: {
  section: Extract<GuideSection, { type: "tipGrid" }>;
}) {
  const gridCols = section.columns === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
      <div className={`grid ${gridCols} gap-4`}>
        {section.tips.map((tip, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-2">{tip.icon}</div>
            <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
            <p className="text-sm text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Calculation Section
function CalculationSection({
  section,
}: {
  section: Extract<GuideSection, { type: "calculation" }>;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      {section.description && (
        <p className="text-gray-600 mb-6">{section.description}</p>
      )}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          Example Calculation
        </h3>
        <div className="space-y-2 text-gray-700">
          {section.lines.map((line, i) => (
            <div
              key={i}
              className={`flex justify-between ${
                line.separator ? "pt-3 mt-3 border-t border-blue-300" : ""
              } ${line.highlight === "green" ? "text-green-700" : ""}`}
            >
              <span className={line.highlight === "bold" ? "font-bold text-gray-900" : ""}>
                {line.label}:
              </span>
              <span
                className={
                  line.highlight === "bold"
                    ? "font-bold text-lg text-gray-900"
                    : "font-medium"
                }
              >
                {line.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Checklist Section
function ChecklistSection({
  section,
}: {
  section: Extract<GuideSection, { type: "checklist" }>;
}) {
  const bgColor = section.variant === "positive" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200";
  const iconColor = section.variant === "positive" ? "text-green-600" : "text-red-600";

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
      <div className={`rounded-xl border p-6 ${bgColor}`}>
        <ul className="space-y-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {section.variant === "positive" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                )}
              </svg>
              <span className={section.variant === "negative" ? "text-red-900" : "text-green-900"}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Documents Checklist Section
function DocumentsChecklistSection({
  section,
}: {
  section: Extract<GuideSection, { type: "documentsChecklist" }>;
}) {
  const getIcon = (iconType: string) => {
    if (iconType === "document") {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {section.columns.map((col, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                {getIcon(col.icon)}
              </span>
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.items.map((item, j) => (
                <li key={j} className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-3 w-4 h-4 text-primary-600"
                    readOnly
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Emergency Numbers Section
function EmergencyNumbersSection({
  section,
}: {
  section: Extract<GuideSection, { type: "emergencyNumbers" }>;
}) {
  return (
    <div className="py-8 bg-red-50 border-b-2 border-red-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {section.numbers.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-sm text-red-600 font-medium">{item.label}</p>
            <p className="text-2xl font-bold text-red-700">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Claim Types Section
function ClaimTypesSection({
  section,
}: {
  section: Extract<GuideSection, { type: "claimTypes" }>;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {section.types.map((type, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <ul className="text-sm text-gray-600 space-y-2">
              {type.points.map((point, j) => (
                <li key={j}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Section Renderer
function renderSection(section: GuideSection) {
  switch (section.type) {
    case "text":
      return <TextSection key={section.id} section={section} />;
    case "table":
      return <TableSection key={section.id} section={section} />;
    case "numberedList":
      return <NumberedListSection key={section.id} section={section} />;
    case "comparison":
      return <ComparisonSection key={section.id} section={section} />;
    case "callout":
      return <CalloutSection key={section.id} section={section} />;
    case "tipGrid":
      return <TipGridSection key={section.id} section={section} />;
    case "calculation":
      return <CalculationSection key={section.id} section={section} />;
    case "checklist":
      return <ChecklistSection key={section.id} section={section} />;
    case "documentsChecklist":
      return <DocumentsChecklistSection key={section.id} section={section} />;
    case "emergencyNumbers":
      return <EmergencyNumbersSection key={section.id} section={section} />;
    case "claimTypes":
      return <ClaimTypesSection key={section.id} section={section} />;
    default:
      return null;
  }
}

// Main Template Component
export default function GuideTemplate({ guide }: { guide: Guide }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-300 mb-4">Car Insurance Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{guide.title}</h1>
            <p className="text-xl text-gray-300">{guide.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {guide.sections.map((section) => renderSection(section))}
        </div>
      </section>

      {/* FAQ */}
      {guide.faqs.length > 0 && (
        <FAQ faqs={guide.faqs} title={`${guide.title.split(":")[0]} FAQ`} />
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{guide.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8">{guide.ctaDescription}</p>
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
