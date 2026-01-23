import { currentYear } from "@/lib/utils";

export const siteConfig = {
  name: "CarInsuranceMY",
  domain: "carinsurancemy.com",
  currentYear,
  lastUpdated: "January 2026",

  // Stats shown across the site
  stats: {
    minPrice: "RM600",
    insurerCount: "15+",
    quoteTime: "60s",
  },

  // Reusable disclaimers
  disclaimers: {
    price: "* Estimates based on 55% NCD. Actual premium varies by age, location, and claims history.",
    priceTable: "* Prices are estimates based on 55% NCD. Actual premium depends on driver age, location, and insurer.",
  },

  // Coverage comparison data
  coverageComparison: {
    comprehensive: {
      ownDamage: true,
      theft: true,
      fire: true,
      thirdPartyDamage: true,
      thirdPartyInjury: true,
      bestFor: "New/financed cars (under 8 years old)",
    },
    thirdParty: {
      ownDamage: false,
      theft: false,
      fire: false,
      thirdPartyDamage: true,
      thirdPartyInjury: true,
      bestFor: "Old cars (8+ years old)",
    },
  },

  // Pricing factors - reusable across all car model pages
  pricingFactors: [
    {
      id: "ncd",
      title: "NCD (No Claim Discount)",
      description: "Up to 55% discount if you haven't made claims. This is the biggest factor in reducing your insurance cost.",
      icon: "shield-check",
    },
    {
      id: "age",
      title: "Driver's Age & Experience",
      description: "Younger drivers (under 25) typically pay higher premiums. Named drivers also affect pricing.",
      icon: "user",
    },
    {
      id: "location",
      title: "Location",
      description: "Urban areas like KL have higher premiums than East Malaysia due to traffic and accident statistics.",
      icon: "map-pin",
    },
    {
      id: "coverage",
      title: "Coverage Type",
      description: "Comprehensive costs more but covers your car against damage, theft, and accidents.",
      icon: "shield",
    },
    {
      id: "value",
      title: "Sum Insured (Market Value)",
      description: "Higher market value means higher premium. Lower value vehicles keep insurance costs reasonable.",
      icon: "dollar",
    },
    {
      id: "addons",
      title: "Add-ons Selected",
      description: "Windscreen coverage, flood protection, and other add-ons increase your premium.",
      icon: "plus",
    },
  ],

  // Saving tips - reusable across all car model pages
  savingTips: [
    {
      title: "Maintain Your NCD",
      description: "Drive safely and avoid claims to keep your 55% No Claim Discount.",
      link: "/guide/ncd-explained",
      linkText: "Learn About NCD",
    },
    {
      title: "Compare Multiple Quotes",
      description: "Prices vary significantly between insurers for the same coverage.",
      link: "/calculator/car-insurance-calculator",
      linkText: "Use Calculator",
    },
    {
      title: "Choose Right Coverage",
      description: "Consider Third Party for older cars (8+ years) to save significantly.",
      link: "/guide/third-party-vs-comprehensive",
      linkText: "Compare Coverage",
    },
    {
      title: "Bundle Road Tax",
      description: "Some insurers offer discounts when you renew road tax together with insurance.",
      link: "/calculator/car-insurance-calculator",
      linkText: "Get Quote",
    },
  ],

  // Top insurers for car model pages
  topInsurers: [
    {
      rank: 1,
      id: "etiqa",
      name: "Etiqa",
      badge: "Best for Pricing",
      description: "Competitive rates with fast digital claims",
      link: "/compare/etiqa-car-insurance-review",
    },
    {
      rank: 2,
      id: "allianz",
      name: "Allianz",
      badge: "Best for Service",
      description: "Premium service with Road Rangers roadside assistance",
      link: "/compare/allianz-car-insurance-review",
    },
    {
      rank: 3,
      id: "tokio-marine",
      name: "Tokio Marine",
      badge: "Best for Claims",
      description: "Excellent claims experience with EZ Claim service",
      link: "/compare/tokio-marine-car-insurance-review",
    },
    {
      rank: 4,
      id: "axa",
      name: "AXA",
      badge: "Flexibility",
      description: "Wide range of add-ons and customization options",
      link: "/compare/axa-car-insurance-review",
    },
    {
      rank: 5,
      id: "zurich",
      name: "Zurich",
      badge: "Premium Option",
      description: "Comprehensive coverage with excellent customer service",
      link: "/compare/zurich-car-insurance-review",
    },
  ],

  // Related pages for car model pages
  relatedPages: [
    {
      title: "Car Insurance Calculator",
      description: "Estimate your exact premium",
      link: "/calculator/car-insurance-calculator",
      icon: "calculator",
    },
    {
      title: "Compare All Insurers",
      description: "Top 10 insurers ranked",
      link: "/compare/best-car-insurance-malaysia",
      icon: "chart",
    },
    {
      title: "NCD Explained",
      description: "Maximize your discount",
      link: "/guide/ncd-explained",
      icon: "dollar",
    },
    {
      title: "Coverage Types",
      description: "Comprehensive vs Third Party",
      link: "/guide/third-party-vs-comprehensive",
      icon: "shield",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
