export interface CarVariant {
  name: string;
  engine: string;
  cc: number;
  marketValue: number;
  comprehensiveRange: [number, number];
  thirdPartyRange: [number, number];
  roadTax: number;
}

export interface VariantGroup {
  id: string;
  title: string;
  subtitle: string;
  variants: string[]; // variant names in this group
  engineCC: number;
  marketValueRange: [number, number];
  insuranceRange: [number, number];
  bestFor: string[];
  recommendedInsurers: { id: string; label: string }[];
}

export interface CarModelFAQ {
  question: string;
  answer: string;
}

export interface CarModel {
  id: string;
  name: string;
  shortName: string;
  brand: string;
  slug: string;
  tagline: string;
  heroSubtitle: string;
  minPrice: number;
  variants: CarVariant[];
  variantGroups: VariantGroup[];
  bestFor: string[];
  recommendedInsurers: string[];
  faqs: CarModelFAQ[];
  updatedAt: string;
}

export const carModels: Record<string, CarModel> = {
  myvi: {
    id: "myvi",
    name: "Perodua Myvi",
    shortName: "Myvi",
    brand: "Perodua",
    slug: "myvi-insurance",
    tagline: "Malaysia's Best-Selling Car",
    heroSubtitle: "Find out how much insurance costs for Perodua Myvi 1.3, 1.5 & Advance models. Compare quotes from 15+ insurers and save up to RM500.",
    minPrice: 600,
    variants: [
      {
        name: "Myvi 1.3 G",
        engine: "1.3L",
        cc: 1332,
        marketValue: 45000,
        comprehensiveRange: [800, 1200],
        thirdPartyRange: [150, 250],
        roadTax: 70,
      },
      {
        name: "Myvi 1.3 X",
        engine: "1.3L",
        cc: 1332,
        marketValue: 50000,
        comprehensiveRange: [850, 1300],
        thirdPartyRange: [150, 250],
        roadTax: 70,
      },
      {
        name: "Myvi 1.5 H",
        engine: "1.5L",
        cc: 1498,
        marketValue: 55000,
        comprehensiveRange: [900, 1400],
        thirdPartyRange: [180, 280],
        roadTax: 90,
      },
      {
        name: "Myvi 1.5 AV",
        engine: "1.5L",
        cc: 1498,
        marketValue: 60000,
        comprehensiveRange: [950, 1500],
        thirdPartyRange: [180, 280],
        roadTax: 90,
      },
    ],
    variantGroups: [
      {
        id: "myvi-1.3",
        title: "Myvi 1.3 (G & X Variants)",
        subtitle: "Best for budget-conscious drivers",
        variants: ["Myvi 1.3 G", "Myvi 1.3 X"],
        engineCC: 1332,
        marketValueRange: [40000, 55000],
        insuranceRange: [800, 1200],
        bestFor: ["Budget-conscious drivers", "City commuting", "First-time car owners"],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "kurnia", label: "Kurnia (budget)" },
        ],
      },
      {
        id: "myvi-1.5",
        title: "Myvi 1.5 (H & AV Variants)",
        subtitle: "Best for highway driving & families",
        variants: ["Myvi 1.5 H", "Myvi 1.5 AV"],
        engineCC: 1498,
        marketValueRange: [50000, 65000],
        insuranceRange: [900, 1500],
        bestFor: ["Highway driving", "Families needing more power", "Those wanting Myvi Advance features"],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (premium)" },
          { id: "tokio-marine", label: "Tokio Marine (balanced)" },
        ],
      },
    ],
    bestFor: ["Budget-conscious drivers", "City commuting"],
    recommendedInsurers: ["etiqa", "kurnia"],
    faqs: [
      {
        question: "How much is Myvi insurance per year?",
        answer: "Myvi insurance costs between RM600-1,500 per year for comprehensive coverage, depending on the variant, your NCD, and location. Third Party insurance is much cheaper at RM150-280 per year. Myvi 1.3 variants are generally cheaper to insure than Myvi 1.5 variants.",
      },
      {
        question: "How much is Myvi 1.5 insurance?",
        answer: "Myvi 1.5 comprehensive insurance typically costs RM900-1,500 per year, depending on whether it's the H or AV variant. With maximum NCD of 55%, you could pay as low as RM400-700. Third Party coverage for Myvi 1.5 costs around RM180-280 per year.",
      },
      {
        question: "Is Myvi expensive to insure?",
        answer: "No, Myvi is one of the cheapest cars to insure in Malaysia due to its affordable market value, small engine size, and abundance of spare parts. Compared to similar-sized Japanese cars like Honda Jazz or Toyota Yaris, Myvi insurance is typically 10-20% cheaper.",
      },
      {
        question: "What is the cheapest insurance for Myvi?",
        answer: "The cheapest insurance for Myvi is Third Party coverage, starting from around RM150 per year. For comprehensive coverage, Etiqa and Kurnia typically offer the most competitive rates for Myvi. Always compare quotes from multiple insurers to find the best price.",
      },
      {
        question: "How much is Myvi road tax and insurance together?",
        answer: "For a Myvi 1.3, road tax is RM70 per year plus insurance from RM600-1,200, totaling approximately RM670-1,270. For Myvi 1.5, road tax is RM90 per year plus insurance from RM800-1,500, totaling approximately RM890-1,590.",
      },
      {
        question: "Can I get Myvi insurance online?",
        answer: "Yes, you can get Myvi insurance quotes and purchase policies entirely online through insurance comparison platforms and direct insurer websites. Online renewal is quick and you can compare prices from 15+ insurers in minutes.",
      },
      {
        question: "What is the new Myvi insurance price 2026?",
        answer: "For a new 2026 Myvi with market value around RM45,000-60,000, comprehensive insurance costs approximately RM800-1,500 per year before NCD discount. New car owners typically start with 0% NCD, so expect to pay the full premium in the first year.",
      },
      {
        question: "Should I get comprehensive or third party for my Myvi?",
        answer: "Get comprehensive insurance if your Myvi is less than 8 years old, financed, or worth more than RM25,000. Choose Third Party if your Myvi is older than 8 years and fully paid - the lower premium makes more financial sense for older vehicles.",
      },
    ],
    updatedAt: "2026-01-23",
  },
  vios: {
    id: "vios",
    name: "Toyota Vios",
    shortName: "Vios",
    brand: "Toyota",
    slug: "vios-insurance",
    tagline: "Malaysia's Favourite Sedan",
    heroSubtitle: "Find out how much insurance costs for Toyota Vios 1.5 J, E, G & GR-S variants. Compare quotes from 15+ insurers and save up to RM500.",
    minPrice: 700,
    variants: [
      {
        name: "Vios 1.5 J",
        engine: "1.5L",
        cc: 1496,
        marketValue: 75000,
        comprehensiveRange: [1000, 1500],
        thirdPartyRange: [200, 300],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 E",
        engine: "1.5L",
        cc: 1496,
        marketValue: 85000,
        comprehensiveRange: [1100, 1600],
        thirdPartyRange: [200, 300],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 G",
        engine: "1.5L",
        cc: 1496,
        marketValue: 95000,
        comprehensiveRange: [1200, 1800],
        thirdPartyRange: [220, 320],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 GR-S",
        engine: "1.5L",
        cc: 1496,
        marketValue: 105000,
        comprehensiveRange: [1300, 1900],
        thirdPartyRange: [220, 320],
        roadTax: 90,
      },
    ],
    variantGroups: [
      {
        id: "vios-entry",
        title: "Vios 1.5 J & E (Entry Variants)",
        subtitle: "Best for budget-conscious drivers",
        variants: ["Vios 1.5 J", "Vios 1.5 E"],
        engineCC: 1496,
        marketValueRange: [70000, 90000],
        insuranceRange: [1000, 1600],
        bestFor: ["Budget-conscious drivers", "Reliable daily driver", "City and highway commuting"],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "kurnia", label: "Kurnia (budget)" },
        ],
      },
      {
        id: "vios-premium",
        title: "Vios 1.5 G & GR-S (Premium Variants)",
        subtitle: "Best for those wanting premium features",
        variants: ["Vios 1.5 G", "Vios 1.5 GR-S"],
        engineCC: 1496,
        marketValueRange: [90000, 110000],
        insuranceRange: [1200, 1900],
        bestFor: ["Premium feature seekers", "Sportier driving experience (GR-S)", "Families wanting safety features"],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (premium)" },
          { id: "tokio-marine", label: "Tokio Marine (balanced)" },
        ],
      },
    ],
    bestFor: ["Reliable daily driver", "Family sedan"],
    recommendedInsurers: ["etiqa", "allianz"],
    faqs: [
      {
        question: "How much is Vios insurance per year?",
        answer: "Vios insurance costs between RM1,000-1,900 per year for comprehensive coverage, depending on the variant, your NCD, and location. Third Party insurance is much cheaper at RM200-320 per year. Entry variants (J, E) are generally cheaper to insure than premium variants (G, GR-S).",
      },
      {
        question: "How much is Vios 1.5 insurance?",
        answer: "Toyota Vios 1.5 comprehensive insurance typically costs RM1,000-1,900 per year, depending on the variant. With maximum NCD of 55%, you could pay as low as RM450-850. Third Party coverage for Vios 1.5 costs around RM200-320 per year.",
      },
      {
        question: "Is Vios expensive to insure?",
        answer: "Vios insurance is moderate - higher than national cars like Myvi due to higher market value, but Toyota's reliability and wide parts availability in Malaysia help keep rates reasonable compared to other Japanese sedans.",
      },
      {
        question: "What is the cheapest insurance for Vios?",
        answer: "The cheapest insurance for Vios is Third Party coverage, starting from around RM200 per year. For comprehensive coverage, Etiqa and Kurnia typically offer the most competitive rates for Vios. Always compare quotes from multiple insurers to find the best price.",
      },
      {
        question: "How much is Vios road tax and insurance together?",
        answer: "For a Toyota Vios 1.5, road tax is RM90 per year plus insurance from RM1,000-1,900, totaling approximately RM1,090-1,990. With maximum NCD, your total could be as low as RM540-940 annually.",
      },
      {
        question: "Which is cheaper to insure, Vios or City?",
        answer: "Both Toyota Vios and Honda City have similar insurance costs. Vios may be slightly cheaper due to wider parts availability in Malaysia as it's locally assembled at UMW Toyota. Expect a difference of RM50-150 annually.",
      },
      {
        question: "Can I buy Vios insurance online?",
        answer: "Yes, you can get Vios insurance quotes and purchase policies entirely online through insurance comparison platforms and direct insurer websites. Online renewal is quick and you can compare prices from 15+ insurers in minutes.",
      },
      {
        question: "Should I get comprehensive or third party for my Vios?",
        answer: "Get comprehensive insurance if your Vios is less than 8 years old, financed, or worth more than RM40,000. Choose Third Party if your Vios is older than 8 years and fully paid - the lower premium makes more financial sense for older vehicles.",
      },
    ],
    updatedAt: "2026-01-23",
  },
};

// Helper functions
export function getCarModel(id: string): CarModel | undefined {
  return carModels[id];
}

export function getAllCarModels(): CarModel[] {
  return Object.values(carModels);
}

export function getCarModelBySlug(slug: string): CarModel | undefined {
  return Object.values(carModels).find((model) => model.slug === slug);
}

// Format helpers
export function formatPrice(price: number): string {
  return `RM${price.toLocaleString()}`;
}

export function formatPriceRange(range: [number, number]): string {
  return `RM${range[0].toLocaleString()}-${range[1].toLocaleString()}/year`;
}

export function formatMarketValue(value: number): string {
  return `RM${(value / 1000).toFixed(0)},000`;
}
