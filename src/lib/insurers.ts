export interface Insurer {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  rating: number;
  established: number;
  claimsRating: string;
  priceRating: string;
  features: string[];
  pros: string[];
  cons: string[];
  description: string;
  claimProcess: string;
  coverage: string[];
  addOns: string[];
  color: string;
}

export const insurers: Insurer[] = [
  {
    id: "etiqa",
    name: "Etiqa Insurance",
    shortName: "Etiqa",
    logo: "/images/insurers/etiqa.png",
    rating: 4.5,
    established: 2007,
    claimsRating: "Excellent",
    priceRating: "Competitive",
    features: [
      "24/7 roadside assistance",
      "Flood coverage available",
      "Windscreen coverage",
      "Personal accident coverage",
    ],
    pros: [
      "Fast claims processing",
      "Wide panel of workshops",
      "Good mobile app",
      "Competitive pricing",
    ],
    cons: [
      "Limited add-on options compared to some competitors",
      "Customer service wait times can be long during peak periods",
    ],
    description: "Etiqa is one of Malaysia's largest insurance companies, backed by Maybank. They offer comprehensive car insurance solutions with a strong focus on digital services and customer convenience.",
    claimProcess: "Claims can be filed online through the Etiqa app or website. For minor claims, approval can be as fast as 24 hours. Major claims typically take 3-5 business days.",
    coverage: [
      "Own damage protection",
      "Third party liability",
      "Theft protection",
      "Fire damage",
      "Natural disaster coverage (optional)",
    ],
    addOns: [
      "Windscreen protection",
      "Flood coverage",
      "Special perils",
      "Legal liability to passengers",
      "Strike, riot, civil commotion",
    ],
    color: "#E31837",
  },
  {
    id: "allianz",
    name: "Allianz Malaysia",
    shortName: "Allianz",
    logo: "/images/insurers/allianz.png",
    rating: 4.6,
    established: 1890,
    claimsRating: "Excellent",
    priceRating: "Premium",
    features: [
      "Road Rangers assistance",
      "Unlimited towing distance",
      "Key replacement coverage",
      "Car replacement benefit",
    ],
    pros: [
      "Strong global brand reputation",
      "Extensive workshop network",
      "Innovative add-on options",
      "Reliable claims process",
    ],
    cons: [
      "Slightly higher premiums",
      "Some add-ons can be expensive",
    ],
    description: "Allianz Malaysia is part of the global Allianz Group, one of the world's largest insurance companies. They are known for comprehensive coverage options and reliable customer service.",
    claimProcess: "Allianz offers multiple claim channels including their Road Rangers service, authorized workshops, and online claims. Their e-claims system allows for faster processing.",
    coverage: [
      "Comprehensive own damage",
      "Third party liability",
      "Theft and fire",
      "Personal accident",
      "Medical expenses",
    ],
    addOns: [
      "Road Rangers 24/7 assistance",
      "Windscreen coverage",
      "All drivers coverage",
      "Compensation for assessed repair time",
      "Key care coverage",
    ],
    color: "#003781",
  },
  {
    id: "axa",
    name: "AXA Affin General Insurance",
    shortName: "AXA",
    logo: "/images/insurers/Axa.png",
    rating: 4.4,
    established: 1954,
    claimsRating: "Very Good",
    priceRating: "Competitive",
    features: [
      "FlexiDrive plans",
      "Emma chatbot assistance",
      "Workshop freedom choice",
      "Rental car coverage",
    ],
    pros: [
      "Flexible coverage options",
      "Good digital experience",
      "Competitive pricing",
      "Strong international backing",
    ],
    cons: [
      "Limited branches in some areas",
      "Add-on costs can add up",
    ],
    description: "AXA Affin is a joint venture between AXA Group and Affin Bank. They offer innovative products like FlexiDrive which allows customers to customize their coverage.",
    claimProcess: "Claims can be submitted through Emma chatbot, authorized workshops, or customer service hotline. Typical processing time is 3-7 business days depending on claim complexity.",
    coverage: [
      "Own damage coverage",
      "Third party bodily injury",
      "Third party property damage",
      "Theft protection",
      "Fire damage",
    ],
    addOns: [
      "Windscreen protection",
      "Flood cover",
      "Special perils",
      "Passenger liability",
      "24-hour emergency assistance",
    ],
    color: "#00008F",
  },
  {
    id: "tokio-marine",
    name: "Tokio Marine Insurance",
    shortName: "Tokio Marine",
    logo: "/images/insurers/Tokio Marine.png",
    rating: 4.5,
    established: 1879,
    claimsRating: "Excellent",
    priceRating: "Moderate",
    features: [
      "EZ Claim service",
      "Accident forgiveness",
      "New car replacement",
      "Comprehensive roadside assistance",
    ],
    pros: [
      "One of the oldest insurers",
      "Strong financial stability",
      "Good claims experience",
      "Wide coverage options",
    ],
    cons: [
      "Website can be dated",
      "Limited online services compared to newer players",
    ],
    description: "Tokio Marine is one of the oldest insurance companies in the world, established in Japan in 1879. In Malaysia, they are known for their reliable service and comprehensive coverage.",
    claimProcess: "Tokio Marine offers their EZ Claim service for faster processing. Claims can be made through their panel workshops or customer service centers.",
    coverage: [
      "Comprehensive own damage",
      "Third party liability",
      "Fire and theft",
      "Personal accident",
      "Medical expenses reimbursement",
    ],
    addOns: [
      "24-hour roadside assistance",
      "Windscreen coverage",
      "Flood and special perils",
      "Legal liability of passengers",
      "Unlimited towing",
    ],
    color: "#00529B",
  },
  {
    id: "zurich",
    name: "Zurich Insurance Malaysia",
    shortName: "Zurich",
    logo: "/images/insurers/zurich.png",
    rating: 4.4,
    established: 1872,
    claimsRating: "Very Good",
    priceRating: "Premium",
    features: [
      "Z-Assist 24/7",
      "MyZurich app",
      "Genuine parts guarantee",
      "Courtesy car service",
    ],
    pros: [
      "Global brand strength",
      "Excellent customer service",
      "User-friendly app",
      "Premium features",
    ],
    cons: [
      "Higher price point",
      "Some features require higher-tier plans",
    ],
    description: "Zurich Insurance Malaysia is part of the Zurich Insurance Group, a leading multi-line insurer. They are known for premium service and innovative digital solutions.",
    claimProcess: "Claims can be managed through the MyZurich app or via their Z-Assist hotline. They offer doorstep claims service for convenience.",
    coverage: [
      "Comprehensive coverage",
      "Third party protection",
      "Theft and fire damage",
      "Personal accident cover",
      "Emergency medical expenses",
    ],
    addOns: [
      "Z-Assist roadside help",
      "Windscreen protection",
      "Car accessories coverage",
      "Natural disaster protection",
      "Return to invoice",
    ],
    color: "#003399",
  },
  {
    id: "lonpac",
    name: "Lonpac Insurance",
    shortName: "Lonpac",
    logo: "/images/insurers/lonpac.png",
    rating: 4.2,
    established: 1963,
    claimsRating: "Good",
    priceRating: "Budget-Friendly",
    features: [
      "Competitive rates",
      "Simple claims process",
      "Wide workshop network",
      "Basic roadside assistance",
    ],
    pros: [
      "Affordable premiums",
      "Straightforward policies",
      "Good for budget-conscious buyers",
      "Decent claims processing",
    ],
    cons: [
      "Fewer add-on options",
      "Less digital-focused",
    ],
    description: "Lonpac Insurance is a Malaysian insurer known for competitive pricing and straightforward policies. They are a good choice for those looking for value-for-money coverage.",
    claimProcess: "Claims can be submitted through their panel workshops or customer service. Processing typically takes 5-7 business days.",
    coverage: [
      "Own damage protection",
      "Third party liability",
      "Fire and theft coverage",
      "Basic personal accident",
    ],
    addOns: [
      "Windscreen coverage",
      "All drivers extension",
      "Special perils",
      "Passenger liability",
    ],
    color: "#1E3A8A",
  },
  {
    id: "rhb",
    name: "RHB Insurance",
    shortName: "RHB",
    logo: "/images/insurers/rhb.png",
    rating: 4.3,
    established: 1979,
    claimsRating: "Good",
    priceRating: "Competitive",
    features: [
      "RHB banking integration",
      "Cashback rewards",
      "Panel workshop network",
      "Online renewal",
    ],
    pros: [
      "Good for RHB customers",
      "Competitive pricing",
      "Easy online services",
      "Cashback promotions",
    ],
    cons: [
      "Fewer standalone branches",
      "Limited brand awareness outside RHB ecosystem",
    ],
    description: "RHB Insurance is part of the RHB Banking Group, offering integrated financial services. They provide competitive car insurance rates especially for existing RHB customers.",
    claimProcess: "Claims can be processed through their panel workshops or RHB branches. RHB credit card holders may enjoy faster processing.",
    coverage: [
      "Comprehensive protection",
      "Third party coverage",
      "Fire and theft",
      "Personal accident",
    ],
    addOns: [
      "Windscreen protection",
      "Flood coverage",
      "Special perils",
      "24/7 assistance",
    ],
    color: "#0066B3",
  },
  {
    id: "msig",
    name: "MSIG Insurance Malaysia",
    shortName: "MSIG",
    logo: "/images/insurers/msig.png",
    rating: 4.4,
    established: 1979,
    claimsRating: "Very Good",
    priceRating: "Moderate",
    features: [
      "MSIG Assist 24/7",
      "Waiver of betterment",
      "Key replacement",
      "Personal belongings coverage",
    ],
    pros: [
      "Part of MS&AD Group",
      "Comprehensive coverage options",
      "Good claims experience",
      "Strong financial backing",
    ],
    cons: [
      "Premium pricing on some add-ons",
      "Limited promotional offers",
    ],
    description: "MSIG Insurance Malaysia is backed by MS&AD Insurance Group, one of the largest insurance groups globally. They offer reliable coverage with a focus on customer experience.",
    claimProcess: "MSIG offers multiple claim channels including their Assist hotline, panel workshops, and online submissions. Claims are typically processed within 5 business days.",
    coverage: [
      "Comprehensive own damage",
      "Third party liability",
      "Theft and fire protection",
      "Personal accident benefit",
      "Medical expenses",
    ],
    addOns: [
      "MSIG Assist 24/7",
      "Windscreen coverage",
      "Waiver of betterment",
      "Key replacement coverage",
      "Personal effects protection",
    ],
    color: "#E60012",
  },
  {
    id: "pacific",
    name: "Pacific Insurance",
    shortName: "Pacific",
    logo: "/images/insurers/pacific.png",
    rating: 4.1,
    established: 1963,
    claimsRating: "Good",
    priceRating: "Budget-Friendly",
    features: [
      "Affordable rates",
      "Basic coverage options",
      "Panel workshop network",
      "Simple claims",
    ],
    pros: [
      "Budget-friendly options",
      "Straightforward policies",
      "Good for basic coverage needs",
    ],
    cons: [
      "Limited premium features",
      "Smaller workshop network",
    ],
    description: "Pacific Insurance offers affordable car insurance solutions for budget-conscious Malaysians. They provide essential coverage at competitive rates.",
    claimProcess: "Claims can be submitted through panel workshops or their customer service hotline. Processing typically takes 5-10 business days.",
    coverage: [
      "Own damage protection",
      "Third party liability",
      "Fire and theft",
    ],
    addOns: [
      "Windscreen coverage",
      "Special perils",
      "Passenger liability",
    ],
    color: "#2E5090",
  },
  {
    id: "kurnia",
    name: "Kurnia Insurance",
    shortName: "Kurnia",
    logo: "/images/insurers/kurnia.png",
    rating: 4.2,
    established: 1981,
    claimsRating: "Good",
    priceRating: "Competitive",
    features: [
      "Now part of AmGeneral",
      "Wide distribution",
      "Established brand",
      "Basic roadside assistance",
    ],
    pros: [
      "Long-established brand",
      "Wide availability",
      "Competitive pricing",
      "AmBank integration",
    ],
    cons: [
      "Transitioning brand identity",
      "Some confusion with AmGeneral merger",
    ],
    description: "Kurnia Insurance, now operating under AmGeneral Insurance, is one of Malaysia's most recognized motor insurance brands with a long history of serving Malaysian motorists.",
    claimProcess: "Claims are processed through AmGeneral's network of panel workshops and service centers. Online claims submission is available.",
    coverage: [
      "Comprehensive coverage",
      "Third party protection",
      "Fire and theft",
      "Personal accident",
    ],
    addOns: [
      "Windscreen coverage",
      "Flood protection",
      "Special perils",
      "All drivers coverage",
    ],
    color: "#FF6600",
  },
];

export function getInsurerById(id: string): Insurer | undefined {
  return insurers.find((insurer) => insurer.id === id);
}

export function getTopInsurers(count: number = 10): Insurer[] {
  return [...insurers].sort((a, b) => b.rating - a.rating).slice(0, count);
}
