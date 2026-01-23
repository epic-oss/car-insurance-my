import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    compare: [
      { name: "All Reviews", href: "/compare" },
      { name: "Best Car Insurance Malaysia", href: "/compare/best-car-insurance-malaysia" },
      { name: "Etiqa Review", href: "/compare/etiqa-car-insurance-review" },
      { name: "Allianz Review", href: "/compare/allianz-car-insurance-review" },
      { name: "AXA Review", href: "/compare/axa-car-insurance-review" },
      { name: "Tokio Marine Review", href: "/compare/tokio-marine-car-insurance-review" },
      { name: "Zurich Review", href: "/compare/zurich-car-insurance-review" },
    ],
    guides: [
      { name: "All Guides", href: "/guide" },
      { name: "Cheapest Car Insurance", href: "/guide/cheapest-car-insurance-malaysia" },
      { name: "Third Party vs Comprehensive", href: "/guide/third-party-vs-comprehensive" },
      { name: "NCD Explained", href: "/guide/ncd-explained" },
      { name: "How to Claim Insurance", href: "/guide/how-to-claim-car-insurance" },
    ],
    tools: [
      { name: "Car Insurance Calculator", href: "/calculator/car-insurance-calculator" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Compare */}
          <div>
            <h3 className="text-white font-semibold mb-4">Compare Insurers</h3>
            <ul className="space-y-2">
              {footerLinks.compare.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://bjak.my/?p=OOI-YING-JYE-AT9T1T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm"
                >
                  Instant Quote via Bjak
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold">CarInsuranceMY</span>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} CarInsuranceMY. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            CarInsuranceMY is a comparison platform. We work with BNM licensed insurance partners to bring you the best quotes.
            Insurance products are provided by respective insurance companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
