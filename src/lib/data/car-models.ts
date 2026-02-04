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
  "toyota-vios": {
    id: "toyota-vios",
    name: "Toyota Vios",
    shortName: "Vios",
    brand: "Toyota",
    slug: "toyota-vios-insurance",
    tagline: "Malaysia's Favourite Sedan - Over 505,000 Sold",
    heroSubtitle:
      "Find out how much insurance costs for Toyota Vios 1.5 E, G, Hybrid HEV & GR Sport variants. Compare quotes from 15+ insurers with TSS coverage included.",
    minPrice: 740,
    variants: [
      {
        name: "Vios 1.5 E AT",
        engine: "1.5L 2NR-VE (106 PS)",
        cc: 1496,
        marketValue: 65000,
        comprehensiveRange: [1650, 1850],
        thirdPartyRange: [200, 300],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 G AT",
        engine: "1.5L 2NR-VE (106 PS)",
        cc: 1496,
        marketValue: 77500,
        comprehensiveRange: [1900, 2200],
        thirdPartyRange: [220, 320],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 HEV AT",
        engine: "1.5L Hybrid (111 PS)",
        cc: 1496,
        marketValue: 91500,
        comprehensiveRange: [2200, 2550],
        thirdPartyRange: [250, 350],
        roadTax: 90,
      },
      {
        name: "Vios 1.5 HEV GR Sport AT",
        engine: "1.5L Hybrid (111 PS)",
        cc: 1496,
        marketValue: 98500,
        comprehensiveRange: [2400, 2750],
        thirdPartyRange: [280, 380],
        roadTax: 90,
      },
    ],
    variantGroups: [
      {
        id: "vios-petrol",
        title: "Vios 1.5 E & G (Petrol Variants)",
        subtitle: "Best value for reliable daily driving",
        variants: ["Vios 1.5 E AT", "Vios 1.5 G AT"],
        engineCC: 1496,
        marketValueRange: [60000, 85000],
        insuranceRange: [740, 990],
        bestFor: [
          "Budget-conscious drivers",
          "Reliable daily commuting",
          "Those wanting Toyota Safety Sense standard",
        ],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (ADAS coverage)" },
          { id: "zurich", label: "Zurich (value)" },
        ],
      },
      {
        id: "vios-hybrid",
        title: "Vios 1.5 HEV & GR Sport (Hybrid Variants)",
        subtitle: "Best for fuel efficiency and eco-conscious drivers",
        variants: ["Vios 1.5 HEV AT", "Vios 1.5 HEV GR Sport AT"],
        engineCC: 1496,
        marketValueRange: [85000, 105000],
        insuranceRange: [990, 1240],
        bestFor: [
          "Fuel-conscious drivers (3.6L/100km)",
          "Eco-friendly commuters",
          "Those wanting hybrid technology at B-segment price",
        ],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (hybrid-capable network)" },
          { id: "zurich", label: "Zurich (hybrid experience)" },
        ],
      },
    ],
    bestFor: ["Reliable daily driver", "Family sedan", "Fuel-efficient hybrid"],
    recommendedInsurers: ["allianz", "zurich"],
    faqs: [
      {
        question: "How much is Toyota Vios insurance per year?",
        answer:
          "Toyota Vios insurance costs between RM1,000-2,100 per year for comprehensive coverage (at 0% NCD), depending on variant (petrol vs hybrid). With maximum 55% NCD, you could pay as low as RM740-1,240. Petrol variants (E, G) are cheaper to insure than hybrid variants (HEV, GR Sport).",
      },
      {
        question: "Is Toyota Vios expensive to insure?",
        answer:
          "No, Vios is competitively priced for insurance. It's a B-segment car with excellent parts availability in Malaysia. Insurance is similar to Honda City, Nissan Almera, and Proton S70. Toyota's reliability reputation doesn't mean expensive insurance.",
      },
      {
        question: "Does Toyota Safety Sense (TSS) affect my insurance?",
        answer:
          "TSS benefits you in two ways: (1) Reduces accident risk, keeping your claims history clean. (2) However, after repairs or windscreen replacement, TSS camera calibration is required (RM200-500). Ensure your insurer covers this - quality insurers like Allianz and Zurich do.",
      },
      {
        question: "Should I get comprehensive or third-party for my Vios?",
        answer:
          "For Vios, comprehensive is recommended. The car value (RM60,000-105,000) justifies coverage, theft risk is real for popular cars, and TSS repairs are expensive if paying yourself. The premium difference isn't significant.",
      },
      {
        question: "What about the new Vios Hybrid (HEV)?",
        answer:
          "The hybrid variants cost 10-15% more to insure due to higher vehicle value and specialized components. However, battery/inverter warranty is 8 years from Toyota. Accident damage to hybrid components is covered by insurance. Ensure your insurer's panel workshops have hybrid capability.",
      },
      {
        question: "Which insurer is best for Toyota Vios?",
        answer:
          "Allianz and Zurich are recommended for Vios owners. Both have large panel networks with Toyota-experienced workshops, proper ADAS/TSS calibration coverage, and good claims processing. The RM100/year difference over budget insurers buys faster claims and better service.",
      },
      {
        question: "Can I use Toyota service center for claims?",
        answer:
          "Toyota authorized service centers can handle claims, but may cost more than panel workshops. Your insurer may only pay panel workshop rates - you pay the difference. Better option: use insurer's panel workshop with Toyota experience.",
      },
      {
        question: "What if TSS calibration isn't covered by my insurer?",
        answer:
          "Some budget insurers dispute TSS calibration costs. If this happens: argue it's necessary for safe operation, provide Toyota documentation, and escalate to insurer management. This is why we recommend quality insurers from the start.",
      },
    ],
    updatedAt: new Date().toISOString().split("T")[0],
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
  "byd-atto-3": {
    id: "byd-atto-3",
    name: "BYD Atto 3",
    shortName: "Atto 3",
    brand: "BYD",
    slug: "byd-atto-3-insurance",
    tagline: "Malaysia's Best-Selling Electric SUV",
    heroSubtitle:
      "Find out how much insurance costs for BYD Atto 3 Standard Range & Extended Range variants. Compare EV-specific coverage from 15+ insurers.",
    minPrice: 1800,
    variants: [
      {
        name: "Atto 3 Standard Range",
        engine: "Electric (49.92 kWh)",
        cc: 0, // EV - no engine cc
        marketValue: 150000,
        comprehensiveRange: [1800, 2800],
        thirdPartyRange: [300, 450],
        roadTax: 0, // EVs exempt from road tax
      },
      {
        name: "Atto 3 Extended Range",
        engine: "Electric (60.48 kWh)",
        cc: 0, // EV - no engine cc
        marketValue: 170000,
        comprehensiveRange: [2000, 3100],
        thirdPartyRange: [320, 480],
        roadTax: 0, // EVs exempt from road tax
      },
    ],
    variantGroups: [
      {
        id: "atto3-standard",
        title: "Atto 3 Standard Range (49.92 kWh)",
        subtitle: "Best for city driving and daily commutes",
        variants: ["Atto 3 Standard Range"],
        engineCC: 0,
        marketValueRange: [140000, 160000],
        insuranceRange: [1800, 2800],
        bestFor: [
          "City commuters",
          "First-time EV buyers",
          "Those with home charging",
        ],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (EV coverage)" },
          { id: "etiqa", label: "Etiqa (competitive)" },
        ],
      },
      {
        id: "atto3-extended",
        title: "Atto 3 Extended Range (60.48 kWh)",
        subtitle: "Best for longer range and highway driving",
        variants: ["Atto 3 Extended Range"],
        engineCC: 0,
        marketValueRange: [160000, 180000],
        insuranceRange: [2000, 3100],
        bestFor: [
          "Highway and outstation driving",
          "Those needing 400+ km range",
          "Premium EV seekers",
        ],
        recommendedInsurers: [
          { id: "allianz", label: "Allianz (EV coverage)" },
          { id: "tokio-marine", label: "Tokio Marine (premium)" },
        ],
      },
    ],
    bestFor: ["EV enthusiasts", "Eco-conscious drivers"],
    recommendedInsurers: ["allianz", "etiqa"],
    faqs: [
      {
        question: "How much is BYD Atto 3 insurance per year?",
        answer:
          "BYD Atto 3 comprehensive insurance costs between RM1,800-3,100 per year depending on variant (Standard Range vs Extended Range), your NCD, and insurer. With maximum 55% NCD, you could pay as low as RM810-1,400. Third Party coverage costs around RM300-480 per year.",
      },
      {
        question: "Is EV insurance more expensive than petrol cars?",
        answer:
          "Yes, EV insurance is typically 20-40% higher than comparable petrol cars due to expensive battery replacement costs (RM30,000-50,000), specialized repair requirements, and higher vehicle market value. However, EVs save money on road tax (RM0) and fuel costs.",
      },
      {
        question: "Does BYD Atto 3 insurance cover the battery?",
        answer:
          "Standard comprehensive policies cover battery damage from accidents and theft. However, battery degradation from normal use is NOT covered by car insurance - this falls under BYD's 8-year battery warranty. Always confirm battery coverage with your insurer.",
      },
      {
        question: "How much is BYD Atto 3 road tax?",
        answer:
          "BYD Atto 3 road tax is RM0 - all electric vehicles in Malaysia are exempt from road tax. This saves you approximately RM400-800 per year compared to a similar-sized petrol SUV.",
      },
      {
        question: "Which insurers offer good EV coverage in Malaysia?",
        answer:
          "Allianz, Etiqa, and Tokio Marine have developed EV-specific coverage options. Look for policies that include: battery coverage, home charging equipment protection, and specialized EV roadside assistance. Some insurers offer discounts for EVs due to lower fire risk.",
      },
      {
        question: "What happens if my BYD Atto 3 battery is damaged in an accident?",
        answer:
          "If your battery is damaged in an insured accident, comprehensive insurance covers repair or replacement costs (which can be RM30,000-50,000). The insurer will typically send your car to BYD authorized service centers for assessment and repair.",
      },
      {
        question: "Is BYD Atto 3 expensive to repair?",
        answer:
          "Repair costs for BYD Atto 3 are moderate to high. While it has fewer mechanical parts than petrol cars, body panels and EV-specific components need specialized handling. BYD has been expanding service centers in Malaysia, improving parts availability.",
      },
      {
        question: "Should I add any special coverage for my EV?",
        answer:
          "Consider adding: (1) Extended battery coverage beyond standard policy, (2) Home charging equipment coverage if you have a wallbox, (3) Enhanced roadside assistance that includes flatbed towing (EVs shouldn't be tow-dragged), and (4) Rental car coverage during repairs.",
      },
    ],
    updatedAt: "2026-01-28",
  },
  "tesla-model-3": {
    id: "tesla-model-3",
    name: "Tesla Model 3",
    shortName: "Model 3",
    brand: "Tesla",
    slug: "tesla-model-3-insurance",
    tagline: "Malaysia's Most Popular Premium EV",
    heroSubtitle:
      "Find out how much insurance costs for Tesla Model 3 RWD, Long Range & Performance variants. Compare Liberty InsureMyTesla vs Allianz EV Shield.",
    minPrice: 4500,
    variants: [
      {
        name: "Model 3 RWD",
        engine: "Electric (208 kW)",
        cc: 0,
        marketValue: 160000,
        comprehensiveRange: [4500, 5500],
        thirdPartyRange: [1200, 1500],
        roadTax: 350,
      },
      {
        name: "Model 3 Long Range AWD",
        engine: "Electric (324 kW)",
        cc: 0,
        marketValue: 195000,
        comprehensiveRange: [5500, 6500],
        thirdPartyRange: [1400, 1700],
        roadTax: 450,
      },
      {
        name: "Model 3 Performance",
        engine: "Electric (377 kW)",
        cc: 0,
        marketValue: 215000,
        comprehensiveRange: [6000, 7500],
        thirdPartyRange: [1500, 1800],
        roadTax: 550,
      },
    ],
    variantGroups: [
      {
        id: "model3-rwd",
        title: "Model 3 RWD (Standard Range)",
        subtitle: "Best value Tesla, ideal for city driving",
        variants: ["Model 3 RWD"],
        engineCC: 0,
        marketValueRange: [150000, 170000],
        insuranceRange: [4500, 5500],
        bestFor: [
          "First-time Tesla buyers",
          "City commuters (513km range sufficient)",
          "Those seeking value in premium EV",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "allianz", label: "Allianz EV Shield" },
        ],
      },
      {
        id: "model3-longrange",
        title: "Model 3 Long Range AWD",
        subtitle: "Maximum range for highway and outstation",
        variants: ["Model 3 Long Range AWD"],
        engineCC: 0,
        marketValueRange: [180000, 210000],
        insuranceRange: [5500, 6500],
        bestFor: [
          "Frequent highway/outstation drivers",
          "Those needing 629km range",
          "AWD performance seekers",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "allianz", label: "Allianz EV Shield" },
        ],
      },
      {
        id: "model3-performance",
        title: "Model 3 Performance",
        subtitle: "Track-ready performance, 3.3s 0-100km/h",
        variants: ["Model 3 Performance"],
        engineCC: 0,
        marketValueRange: [200000, 230000],
        insuranceRange: [6000, 7500],
        bestFor: [
          "Performance enthusiasts",
          "Those wanting fastest acceleration",
          "Track day participants",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "tokio-marine", label: "Tokio Marine (premium)" },
        ],
      },
    ],
    bestFor: ["Premium EV buyers", "Tech enthusiasts"],
    recommendedInsurers: ["liberty", "allianz"],
    faqs: [
      {
        question: "How much is Tesla Model 3 insurance per year?",
        answer:
          "Tesla Model 3 comprehensive insurance costs between RM4,500-7,500 per year depending on variant (RWD, Long Range, or Performance), your NCD, and insurer. With maximum 55% NCD, you could pay as low as RM2,000-3,400. Third Party coverage costs around RM1,200-1,800 per year.",
      },
      {
        question: "Why is Tesla insurance so expensive?",
        answer:
          "Tesla insurance is expensive due to: (1) High vehicle value (RM189,000-259,000), (2) Proprietary parts that must be imported, (3) Aluminum body panels that must be replaced not repaired, (4) Expensive Autopilot sensors and cameras, (5) Limited Tesla-certified repair shops in Malaysia, and (6) Structural battery pack that makes moderate accidents often total loss.",
      },
      {
        question: "Should I choose Liberty InsureMyTesla or Allianz?",
        answer:
          "Liberty InsureMyTesla is Tesla's official insurance partner with Tesla-specific benefits like integrated service and 12-month repair warranty. Allianz EV Shield offers higher charger coverage (RM15,000 vs RM12,000) and unique mobile EV charging service. Liberty is best for purists wanting seamless Tesla experience; Allianz may offer better value and features.",
      },
      {
        question: "Does Tesla insurance cover Autopilot accidents?",
        answer:
          "Yes, comprehensive coverage applies regardless of whether Autopilot was engaged. However, remember that Autopilot is driver-assist technology, not fully autonomous. The driver is always legally responsible for the vehicle.",
      },
      {
        question: "Is my Tesla home charger covered?",
        answer:
          "With EV-specific policies: Liberty InsureMyTesla covers RM12,000, Allianz EV Shield covers RM15,000, and Etiqa Tesla Ensure covers RM12,000. Tesla Wall Connector costs RM4,000-6,000 installed, so coverage is typically adequate.",
      },
      {
        question: "What happens if my Tesla battery is damaged?",
        answer:
          "Tesla's battery is a structural component. Even minor underbody impacts may require battery inspection. Battery replacement costs RM80,000-120,000, which often exceeds the total loss threshold. Many moderate Tesla accidents result in total loss due to battery concerns.",
      },
      {
        question: "Can any workshop repair my Tesla?",
        answer:
          "No. Tesla repairs require Tesla-certified body shops that use approved parts and repair procedures. Malaysia has limited certified shops currently, though the network is growing. For insurance claims, your insurer will direct you to a certified facility.",
      },
      {
        question: "How much is Tesla Model 3 road tax in Malaysia?",
        answer:
          "Tesla Model 3 road tax is approximately RM300-600 per year depending on the motor power output. RWD is around RM350, Long Range around RM450, and Performance around RM550. This is significantly cheaper than equivalent petrol luxury sedans.",
      },
    ],
    updatedAt: new Date().toISOString().split("T")[0],
  },
  "tesla-model-y": {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    shortName: "Model Y",
    brand: "Tesla",
    slug: "tesla-model-y-insurance",
    tagline: "Tesla's Best-Selling Electric SUV",
    heroSubtitle:
      "Find out how much insurance costs for Tesla Model Y RWD, Long Range & Performance variants. Compare Liberty InsureMyTesla vs Allianz EV Shield for your SUV.",
    minPrice: 5400,
    variants: [
      {
        name: "Model Y RWD",
        engine: "Electric (220 kW)",
        cc: 0,
        marketValue: 180000,
        comprehensiveRange: [5400, 6200],
        thirdPartyRange: [1400, 1700],
        roadTax: 400,
      },
      {
        name: "Model Y Long Range AWD",
        engine: "Electric (378 kW)",
        cc: 0,
        marketValue: 225000,
        comprehensiveRange: [6200, 7200],
        thirdPartyRange: [1600, 1900],
        roadTax: 500,
      },
      {
        name: "Model Y Performance",
        engine: "Electric (393 kW)",
        cc: 0,
        marketValue: 255000,
        comprehensiveRange: [7000, 7700],
        thirdPartyRange: [1800, 2100],
        roadTax: 550,
      },
    ],
    variantGroups: [
      {
        id: "modely-rwd",
        title: "Model Y RWD (Standard Range)",
        subtitle: "Best value Tesla SUV for city and family use",
        variants: ["Model Y RWD"],
        engineCC: 0,
        marketValueRange: [170000, 190000],
        insuranceRange: [5400, 6200],
        bestFor: [
          "Families needing SUV space",
          "City commuters (455km range sufficient)",
          "First-time Tesla SUV buyers",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "allianz", label: "Allianz EV Shield" },
        ],
      },
      {
        id: "modely-longrange",
        title: "Model Y Long Range AWD",
        subtitle: "Maximum range and AWD for highway driving",
        variants: ["Model Y Long Range AWD"],
        engineCC: 0,
        marketValueRange: [210000, 240000],
        insuranceRange: [6200, 7200],
        bestFor: [
          "Frequent outstation/highway drivers",
          "Those needing 533km range",
          "AWD capability in wet conditions",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "allianz", label: "Allianz EV Shield" },
        ],
      },
      {
        id: "modely-performance",
        title: "Model Y Performance",
        subtitle: "Track-ready SUV, 3.7s 0-100km/h",
        variants: ["Model Y Performance"],
        engineCC: 0,
        marketValueRange: [240000, 270000],
        insuranceRange: [7000, 7700],
        bestFor: [
          "Performance SUV enthusiasts",
          "Those wanting fastest acceleration",
          "Premium feature seekers",
        ],
        recommendedInsurers: [
          { id: "liberty", label: "Liberty InsureMyTesla (official)" },
          { id: "tokio-marine", label: "Tokio Marine (premium)" },
        ],
      },
    ],
    bestFor: ["Premium SUV buyers", "Families wanting EV"],
    recommendedInsurers: ["liberty", "allianz"],
    faqs: [
      {
        question: "How much is Tesla Model Y insurance per year?",
        answer:
          "Tesla Model Y comprehensive insurance costs between RM5,400-7,700 per year depending on variant (RWD, Long Range, or Performance), your NCD, and insurer. With maximum 55% NCD, you could pay as low as RM2,400-3,500. Third Party coverage costs around RM1,400-2,100 per year.",
      },
      {
        question: "Why is Model Y insurance more expensive than Model 3?",
        answer:
          "Model Y insurance is about RM800-1,000 more than Model 3 due to: (1) Higher vehicle value (RM20,000-30,000 more), (2) Larger body panels = more expensive repairs, (3) Bigger panoramic glass roof, and (4) SUV body type historically has higher claims frequency.",
      },
      {
        question: "Is the panoramic glass roof covered?",
        answer:
          "Yes, the glass roof is covered under comprehensive insurance. However, replacement costs RM10,000-15,000 while standard windscreen coverage is usually RM3,000-5,000. You may need to pay the difference or request higher glass coverage limits.",
      },
      {
        question: "Should I choose Liberty InsureMyTesla or Allianz for Model Y?",
        answer:
          "Liberty is Tesla's official partner with seamless integration and 12-month repair warranty. Allianz EV Shield offers higher charger coverage (RM15,000 vs RM12,000), mobile EV charging service, and is often 5-10% cheaper. Allianz is better value; Liberty is better for Tesla purists.",
      },
      {
        question: "Can I use Model Y for e-hailing (Grab)?",
        answer:
          "Private comprehensive insurance does NOT cover commercial use. If using for e-hailing, you need a commercial/e-hailing specific policy with higher premiums and different coverage terms. Always declare commercial use to your insurer.",
      },
      {
        question: "Does the 7-seater option affect insurance?",
        answer:
          "No, the 7-seater option does not affect insurance premium as it doesn't change the vehicle's market value classification. Third-row passengers are covered under standard liability. No special endorsement is needed.",
      },
      {
        question: "What happens if the battery is damaged?",
        answer:
          "Tesla's battery is structural. Even minor underbody impacts may require inspection. Battery replacement costs RM80,000-150,000, often exceeding total loss threshold. Many moderate Model Y accidents result in total loss due to battery concerns.",
      },
      {
        question: "How much is Tesla Model Y road tax in Malaysia?",
        answer:
          "Tesla Model Y road tax is approximately RM400-550 per year depending on motor power output. RWD is around RM400, Long Range around RM500, and Performance around RM550. This is significantly cheaper than equivalent petrol luxury SUVs.",
      },
    ],
    updatedAt: new Date().toISOString().split("T")[0],
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
