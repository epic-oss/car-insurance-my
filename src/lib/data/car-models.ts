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
  city: {
    id: "city",
    name: "Honda City",
    shortName: "City",
    brand: "Honda",
    slug: "city-insurance",
    tagline: "Malaysia's Popular B-Segment Sedan",
    heroSubtitle:
      "Find out how much insurance costs for Honda City 1.5 S, E, V & RS variants. Compare quotes from 15+ insurers and save up to RM500.",
    minPrice: 750,
    variants: [
      {
        name: "City 1.5 S",
        engine: "1.5L",
        cc: 1498,
        marketValue: 75000,
        comprehensiveRange: [1000, 1500],
        thirdPartyRange: [200, 300],
        roadTax: 90,
      },
      {
        name: "City 1.5 E",
        engine: "1.5L",
        cc: 1498,
        marketValue: 85000,
        comprehensiveRange: [1100, 1650],
        thirdPartyRange: [200, 300],
        roadTax: 90,
      },
      {
        name: "City 1.5 V",
        engine: "1.5L",
        cc: 1498,
        marketValue: 95000,
        comprehensiveRange: [1200, 1800],
        thirdPartyRange: [220, 320],
        roadTax: 90,
      },
      {
        name: "City 1.5 RS",
        engine: "1.5L",
        cc: 1498,
        marketValue: 105000,
        comprehensiveRange: [1300, 1950],
        thirdPartyRange: [220, 320],
        roadTax: 90,
      },
    ],
    variantGroups: [
      {
        id: "city-entry",
        title: "City 1.5 S & E (Entry Variants)",
        subtitle: "Best for budget-conscious drivers",
        variants: ["City 1.5 S", "City 1.5 E"],
        engineCC: 1498,
        marketValueRange: [70000, 90000],
        insuranceRange: [1000, 1650],
        bestFor: [
          "Budget-conscious drivers",
          "Reliable daily driver",
          "City and highway commuting",
        ],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "kurnia", label: "Kurnia (budget)" },
        ],
      },
      {
        id: "city-premium",
        title: "City 1.5 V & RS (Premium Variants)",
        subtitle: "Best for those wanting premium features",
        variants: ["City 1.5 V", "City 1.5 RS"],
        engineCC: 1498,
        marketValueRange: [90000, 110000],
        insuranceRange: [1200, 1950],
        bestFor: [
          "Premium feature seekers",
          "Sportier driving experience (RS)",
          "Families wanting Honda SENSING safety",
        ],
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
        question: "How much is Honda City insurance per year?",
        answer:
          "Honda City insurance costs between RM1,000-1,950 per year for comprehensive coverage, depending on the variant, your NCD, and location. Third Party insurance is much cheaper at RM200-320 per year. Entry variants (S, E) are generally cheaper to insure than premium variants (V, RS).",
      },
      {
        question: "Is Honda City expensive to insure?",
        answer:
          "Honda City insurance is moderate - similar to Toyota Vios. Honda's reputation for reliability and wide parts availability in Malaysia help keep rates reasonable. Expect to pay RM50-150 more than a Perodua sedan but similar to other Japanese B-segment sedans.",
      },
      {
        question: "Which is cheaper to insure, City or Vios?",
        answer:
          "Both Honda City and Toyota Vios have similar insurance costs. Vios may be slightly cheaper due to higher sales volume in Malaysia. Expect a difference of RM50-150 annually. Always compare quotes from both to find the best deal.",
      },
      {
        question: "How much is City road tax and insurance together?",
        answer:
          "For a Honda City 1.5, road tax is RM90 per year plus insurance from RM1,000-1,950, totaling approximately RM1,090-2,040. With maximum NCD of 55%, your total could be as low as RM540-970 annually.",
      },
      {
        question: "Should I get comprehensive or third party for my City?",
        answer:
          "Get comprehensive insurance if your City is less than 8 years old, financed, or worth more than RM40,000. Choose Third Party if your City is older than 8 years and fully paid - the lower premium makes more financial sense for older vehicles.",
      },
    ],
    updatedAt: "2026-01-23",
  },
  axia: {
    id: "axia",
    name: "Perodua Axia",
    shortName: "Axia",
    brand: "Perodua",
    slug: "axia-insurance",
    tagline: "Malaysia's Most Affordable Car",
    heroSubtitle:
      "Find out how much insurance costs for Perodua Axia 1.0 E, SE & AV variants. The cheapest car to insure in Malaysia - from just RM500/year.",
    minPrice: 500,
    variants: [
      {
        name: "Axia 1.0 E",
        engine: "1.0L",
        cc: 998,
        marketValue: 25000,
        comprehensiveRange: [500, 800],
        thirdPartyRange: [120, 200],
        roadTax: 20,
      },
      {
        name: "Axia 1.0 SE",
        engine: "1.0L",
        cc: 998,
        marketValue: 30000,
        comprehensiveRange: [550, 850],
        thirdPartyRange: [120, 200],
        roadTax: 20,
      },
      {
        name: "Axia 1.0 AV",
        engine: "1.0L",
        cc: 998,
        marketValue: 38000,
        comprehensiveRange: [600, 950],
        thirdPartyRange: [130, 220],
        roadTax: 20,
      },
    ],
    variantGroups: [
      {
        id: "axia-entry",
        title: "Axia 1.0 E & SE (Entry Variants)",
        subtitle: "Best for first-time car owners and students",
        variants: ["Axia 1.0 E", "Axia 1.0 SE"],
        engineCC: 998,
        marketValueRange: [22000, 32000],
        insuranceRange: [500, 850],
        bestFor: [
          "First-time car owners",
          "Students and fresh graduates",
          "Budget-conscious buyers",
        ],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "kurnia", label: "Kurnia (budget)" },
        ],
      },
      {
        id: "axia-premium",
        title: "Axia 1.0 AV (Premium Variant)",
        subtitle: "Best for those wanting more features",
        variants: ["Axia 1.0 AV"],
        engineCC: 998,
        marketValueRange: [35000, 42000],
        insuranceRange: [600, 950],
        bestFor: [
          "Those wanting more features",
          "City commuting",
          "Small families",
        ],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "allianz", label: "Allianz (balanced)" },
        ],
      },
    ],
    bestFor: ["First-time car owners", "Budget buyers"],
    recommendedInsurers: ["etiqa", "kurnia"],
    faqs: [
      {
        question: "How much is Axia insurance per year?",
        answer:
          "Comprehensive insurance for Perodua Axia ranges from RM500-950 per year, making it the cheapest car to insure in Malaysia. Third Party insurance starts from just RM120/year. Entry variants (E, SE) are cheaper to insure than the AV variant.",
      },
      {
        question: "Why is Axia the cheapest car to insure?",
        answer:
          "Axia has a small 1.0L engine (998cc), low market value (RM22,000-42,000), and widely available cheap parts. All these factors result in very low insurance premiums - often half the cost of a Myvi.",
      },
      {
        question: "How much is Axia road tax and insurance together?",
        answer:
          "Combined, expect just RM520-970 annually. Axia road tax is only RM20 (the cheapest in Malaysia for any car) plus insurance from RM500-950.",
      },
      {
        question: "Is Third Party insurance enough for Axia?",
        answer:
          "For older Axia (5+ years) worth under RM15,000, Third Party at RM120-200/year could make sense. For newer Axia, comprehensive is recommended since the price difference is small (only RM300-400 more).",
      },
      {
        question: "Can I buy Axia insurance online?",
        answer:
          "Yes! Use our free quote form to compare prices from 15+ insurers and get your policy delivered online. The entire process takes just minutes.",
      },
    ],
    updatedAt: "2026-01-25",
  },
  saga: {
    id: "saga",
    name: "Proton Saga",
    shortName: "Saga",
    brand: "Proton",
    slug: "saga-insurance",
    tagline: "Malaysia's Iconic National Car",
    heroSubtitle:
      "Find out how much insurance costs for Proton Saga 1.3 Standard & Premium variants. Compare quotes from 15+ insurers and save up to RM400.",
    minPrice: 650,
    variants: [
      {
        name: "Saga 1.3 Standard MT",
        engine: "1.3L",
        cc: 1332,
        marketValue: 37000,
        comprehensiveRange: [650, 1000],
        thirdPartyRange: [150, 250],
        roadTax: 70,
      },
      {
        name: "Saga 1.3 Standard AT",
        engine: "1.3L",
        cc: 1332,
        marketValue: 40000,
        comprehensiveRange: [700, 1100],
        thirdPartyRange: [150, 250],
        roadTax: 70,
      },
      {
        name: "Saga 1.3 Premium AT",
        engine: "1.3L",
        cc: 1332,
        marketValue: 45000,
        comprehensiveRange: [750, 1200],
        thirdPartyRange: [150, 250],
        roadTax: 70,
      },
    ],
    variantGroups: [
      {
        id: "saga-standard",
        title: "Saga 1.3 Standard (MT & AT)",
        subtitle: "Best for budget-conscious drivers",
        variants: ["Saga 1.3 Standard MT", "Saga 1.3 Standard AT"],
        engineCC: 1332,
        marketValueRange: [35000, 42000],
        insuranceRange: [650, 1100],
        bestFor: [
          "Budget-conscious drivers",
          "First-time car owners",
          "Grab/e-hailing drivers",
        ],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "kurnia", label: "Kurnia (budget)" },
        ],
      },
      {
        id: "saga-premium",
        title: "Saga 1.3 Premium",
        subtitle: "Best for those wanting more features",
        variants: ["Saga 1.3 Premium AT"],
        engineCC: 1332,
        marketValueRange: [42000, 50000],
        insuranceRange: [750, 1200],
        bestFor: [
          "Those wanting more features",
          "Family sedan",
          "Daily commuting",
        ],
        recommendedInsurers: [
          { id: "etiqa", label: "Etiqa (competitive)" },
          { id: "allianz", label: "Allianz (balanced)" },
        ],
      },
    ],
    bestFor: ["Budget sedan buyers", "E-hailing drivers"],
    recommendedInsurers: ["etiqa", "kurnia"],
    faqs: [
      {
        question: "How much is Proton Saga insurance per year?",
        answer:
          "Comprehensive insurance for Proton Saga ranges from RM650-1,200 per year depending on variant and NCD. Third Party insurance starts from RM150/year. Standard variants are cheaper to insure than Premium.",
      },
      {
        question: "Is Saga cheap to insure?",
        answer:
          "Yes, Saga is one of the cheapest sedans to insure in Malaysia due to its affordable market value (RM35,000-50,000) and widely available locally-made parts.",
      },
      {
        question: "How much is Saga road tax and insurance together?",
        answer:
          "Combined, expect RM720-1,270 annually. Saga 1.3 road tax is RM70 per year plus insurance from RM650-1,200. With maximum 55% NCD, your total could be as low as RM360-610.",
      },
      {
        question: "Which is cheaper to insure, Saga or Myvi?",
        answer:
          "Both are similar in insurance costs. Myvi may be slightly cheaper due to smaller 1.3L engine options, but the difference is minimal - around RM50-100 per year.",
      },
      {
        question: "Is Saga good for e-hailing insurance?",
        answer:
          "Yes, many e-hailing drivers choose Saga for its low running costs. However, you'll need an e-hailing coverage add-on which increases premium by 20-30%. Always declare your e-hailing usage to your insurer.",
      },
    ],
    updatedAt: "2026-01-25",
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
