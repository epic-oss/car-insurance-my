/**
 * GUIDE CREATION CHECKLIST
 * ========================
 * To add a new guide:
 *
 * 1. Add guide data to this file (guides object)
 *    - id, slug, title, subtitle
 *    - metaTitle, metaDescription, keywords
 *    - sections array with proper types
 *
 * 2. Create page file at /app/guide/[slug]/page.tsx (minimal - uses template)
 *
 * 3. Add to sitemap.ts
 *
 * 4. Add to guide hub page (/app/guide/page.tsx)
 *
 * Section types available:
 * - text: Simple paragraph(s)
 * - list: Bullet points with optional links
 * - numberedList: Ordered steps with descriptions
 * - table: Data table with headers and rows
 * - checklist: ✓/✗ items (green/red)
 * - comparison: Side-by-side cards (2 columns)
 * - callout: Info/warning/tip/success box
 * - tipGrid: Grid of tips with icons
 * - calculation: Calculation breakdown box
 * - claimTypes: Grid of claim type cards
 */

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface TableData {
  headers: string[];
  rows: (string | { text: string; badge?: string; badgeColor?: string })[][];
  footnote?: string;
}

export interface CheckItem {
  text: string;
  description?: string;
  checked: boolean;
}

export interface ListItem {
  text: string;
  description?: string;
  link?: string;
  linkText?: string;
}

export interface NumberedStep {
  number: number;
  title: string;
  description: string;
  tips?: string[];
}

export interface ComparisonCard {
  title: string;
  icon?: string;
  iconColor?: string;
  items: { text: string; description?: string; checked?: boolean }[];
  footer?: string;
  highlighted?: boolean;
  badge?: string;
}

export interface TipItem {
  icon: string;
  title: string;
  description: string;
}

export interface CalculationLine {
  label: string;
  value: string;
  highlight?: "green" | "red" | "bold";
  separator?: boolean;
}

export interface ClaimType {
  title: string;
  description: string;
  points: string[];
}

export type GuideSection =
  | {
      id: string;
      title: string;
      type: "text";
      content: string[];
    }
  | {
      id: string;
      title: string;
      type: "list";
      items: ListItem[];
    }
  | {
      id: string;
      title: string;
      type: "numberedList";
      description?: string;
      steps: NumberedStep[];
    }
  | {
      id: string;
      title: string;
      type: "table";
      description?: string;
      tableData: TableData;
    }
  | {
      id: string;
      title: string;
      type: "checklist";
      variant: "positive" | "negative";
      items: CheckItem[];
    }
  | {
      id: string;
      title: string;
      type: "comparison";
      cards: ComparisonCard[];
    }
  | {
      id: string;
      title?: string;
      type: "callout";
      variant: "info" | "warning" | "tip" | "success";
      title2?: string;
      content: string;
    }
  | {
      id: string;
      title: string;
      type: "tipGrid";
      columns?: 2 | 3;
      tips: TipItem[];
    }
  | {
      id: string;
      title: string;
      type: "calculation";
      description?: string;
      lines: CalculationLine[];
    }
  | {
      id: string;
      title: string;
      type: "claimTypes";
      types: ClaimType[];
    }
  | {
      id: string;
      title: string;
      type: "documentsChecklist";
      columns: {
        title: string;
        icon: string;
        items: string[];
      }[];
    }
  | {
      id: string;
      title: string;
      type: "emergencyNumbers";
      numbers: { label: string; number: string }[];
    };

export interface Guide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  ctaTitle: string;
  ctaDescription: string;
}

export const guides: Record<string, Guide> = {
  "ncd-explained": {
    id: "ncd-explained",
    slug: "ncd-explained",
    title: "NCD Explained: Your Complete Guide",
    subtitle:
      "Everything you need to know about No Claim Discount in Malaysia - how it works, current rates, and how to maximize your savings.",
    lastUpdated: "2026-01-23",
    readTime: "8 min read",
    metaTitle: "NCD Explained: No Claim Discount Guide Malaysia 2026",
    metaDescription:
      "Complete guide to NCD (No Claim Discount) in Malaysia. Learn how NCD works, current rates (25%-55%), how to protect and transfer your NCD, and more.",
    keywords: [
      "ncd explained",
      "no claim discount malaysia",
      "ncd car insurance",
      "ncd rates malaysia",
    ],
    sections: [
      {
        id: "ncd-rates-table",
        title: "Malaysia NCD Rates (2026)",
        type: "table",
        tableData: {
          headers: ["Claim-Free Years", "NCD Rate", "Savings Example*"],
          rows: [
            ["First policy or after a claim", "0%", "RM 1,500 (save RM 0)"],
            ["1 year claim-free", "25%", "RM 1,125 (save RM 375)"],
            ["2 years claim-free", "30%", "RM 1,050 (save RM 450)"],
            ["3 years claim-free", "38.33%", "RM 925 (save RM 575)"],
            ["4 years claim-free", "45%", "RM 825 (save RM 675)"],
            [
              "5+ years claim-free (maximum)",
              { text: "55%", badge: "Maximum", badgeColor: "green" },
              "RM 675 (save RM 825)",
            ],
          ],
          footnote: "* Based on a base premium of RM1,500",
        },
      },
      {
        id: "what-is-ncd",
        title: "What is NCD (No Claim Discount)?",
        type: "text",
        content: [
          "No Claim Discount (NCD) is a reward system used by car insurance companies in Malaysia to incentivize safe driving. Simply put, **the longer you go without making a claim, the bigger discount you get on your premium**.",
          "NCD is also sometimes called No Claims Bonus (NCB). In Malaysia, it's regulated by Bank Negara Malaysia (BNM), which sets the standard discount rates that all insurers must follow.",
        ],
      },
      {
        id: "how-ncd-calculated",
        title: "How NCD is Calculated",
        type: "calculation",
        description:
          "Your NCD discount is applied to your base premium (before add-ons and service tax). Here's how it works:",
        lines: [
          { label: "Base Premium", value: "RM 2,000" },
          { label: "NCD (55%)", value: "- RM 1,100", highlight: "green" },
          { label: "After NCD", value: "RM 900" },
          { label: "Add-ons", value: "+ RM 200" },
          { label: "Service Tax (8%)", value: "+ RM 88" },
          {
            label: "Total Premium",
            value: "RM 1,188",
            highlight: "bold",
            separator: true,
          },
        ],
      },
      {
        id: "claim-impact",
        title: "What Happens When You Make a Claim",
        type: "numberedList",
        description:
          "When you make a claim, your NCD is affected based on how many claims you've made:",
        steps: [
          {
            number: 1,
            title: "First claim",
            description:
              "NCD drops by 2 levels (e.g., 55% drops to 38.33%)",
            tips: [],
          },
          {
            number: 2,
            title: "Second claim in same year",
            description: "NCD drops to 0%",
            tips: [],
          },
          {
            number: 3,
            title: "After NCD resets",
            description: "You start building it up again from 0%",
            tips: [],
          },
        ],
      },
      {
        id: "claims-affect-ncd",
        title: "Types of Claims That Affect NCD",
        type: "comparison",
        cards: [
          {
            title: "Claims That Reduce NCD",
            iconColor: "red",
            items: [
              { text: "Own damage claims (accidents)", checked: false },
              { text: "Theft claims", checked: false },
              { text: "Fire damage claims", checked: false },
              { text: "Third party claims (your fault)", checked: false },
            ],
          },
          {
            title: "Usually Don't Affect NCD",
            iconColor: "green",
            items: [
              { text: "Windscreen claims (if separate)", checked: true },
              { text: "Third party claims (not your fault)", checked: true },
              { text: "Some special perils claims", checked: true },
            ],
          },
        ],
      },
      {
        id: "protect-ncd",
        title: "How to Protect Your NCD",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "NCD Protection Add-on",
            description:
              "Some insurers offer NCD protection as an add-on. This allows you to make one claim per year without losing your NCD. Consider this if:",
            tips: [
              "You have high NCD (45% or 55%)",
              "The cost is reasonable compared to potential NCD loss",
              "You drive frequently and want peace of mind",
            ],
          },
          {
            number: 2,
            title: "Consider Small Claims Carefully",
            description: "Before making a claim, calculate whether it's worth it:",
            tips: [
              "Compare the repair cost to your excess (deductible)",
              "Calculate how much your NCD is worth over the next few years",
              "For minor damage, paying out of pocket may be cheaper long-term",
            ],
          },
          {
            number: 3,
            title: "Separate Windscreen Coverage",
            description:
              "Add windscreen coverage as a separate add-on. This way, if you need to replace a cracked windscreen, it won't affect your NCD.",
            tips: [],
          },
        ],
      },
      {
        id: "transfer-ncd",
        title: "Transferring Your NCD",
        type: "comparison",
        cards: [
          {
            title: "When Buying a New Car",
            items: [
              {
                text: "Request an NCD confirmation letter from your current insurer",
                checked: true,
              },
              { text: "Provide this letter to your new insurer", checked: true },
              {
                text: "Your NCD will be applied to your new policy",
                checked: true,
              },
            ],
            footer: "Your NCD is tied to you, not your car.",
          },
          {
            title: "When Switching Insurers",
            items: [
              {
                text: "Wait until your current policy expires (don't cancel early)",
                checked: true,
              },
              {
                text: "Request NCD confirmation from your current insurer",
                checked: true,
              },
              {
                text: "Apply with your new insurer with the NCD letter",
                checked: true,
              },
            ],
            footer: "You can take your NCD to any insurer.",
          },
        ],
      },
      {
        id: "ncd-validity",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "NCD Validity Period",
        content:
          "Your NCD is valid for **12 months** after your policy expires. If you don't insure a vehicle within this period, you'll lose your NCD and have to start from 0%.",
      },
      {
        id: "multiple-cars",
        title: "NCD for Multiple Cars",
        type: "callout",
        variant: "info",
        content:
          "You can only use your NCD for **one vehicle at a time**. If you own multiple cars, each car needs its own NCD history. However, some insurers offer multi-car discounts as a separate benefit.",
      },
      {
        id: "tips-maximize",
        title: "Tips to Maximize Your NCD Savings",
        type: "tipGrid",
        columns: 3,
        tips: [
          {
            icon: "🚗",
            title: "Drive safely",
            description: "The best way to maintain your NCD is to avoid accidents",
          },
          {
            icon: "💰",
            title: "Pay small repairs yourself",
            description: "Don't claim for minor damage",
          },
          {
            icon: "🪟",
            title: "Get windscreen coverage",
            description: "Protect your NCD from chip claims",
          },
          {
            icon: "🛡️",
            title: "Consider NCD protection",
            description: "Especially if you have 55% NCD",
          },
          {
            icon: "📅",
            title: "Don't let policy lapse",
            description: "Renew before expiry to maintain NCD",
          },
          {
            icon: "🔍",
            title: "Compare insurers",
            description: "Your NCD is portable, so shop around",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to build maximum NCD?",
        answer:
          "It takes 5 years of claim-free driving to reach the maximum NCD of 55%. You start at 0% and progress through 25%, 30%, 38.33%, 45%, and finally 55%.",
      },
      {
        question: "Can I transfer my NCD to a new car?",
        answer:
          "Yes, your NCD is tied to you as a driver, not to your vehicle. When you buy a new car, you can transfer your NCD to the new policy. Just provide your NCD confirmation letter to the new insurer.",
      },
      {
        question: "What happens to my NCD if I sell my car?",
        answer:
          "Your NCD stays with you. Request an NCD confirmation letter from your insurer before selling. Your NCD is valid for 12 months - if you don't insure a new car within this period, you'll lose it.",
      },
      {
        question: "Does making a windscreen claim affect my NCD?",
        answer:
          "If you have windscreen coverage as a separate add-on, most insurers allow windscreen claims without affecting your NCD. However, this depends on your specific policy terms.",
      },
      {
        question: "Can I buy NCD protection?",
        answer:
          "Some insurers offer NCD protection as an add-on. This allows you to make one claim per year without losing your NCD. It's worth considering if you have high NCD.",
      },
    ],
    ctaTitle: "Compare Quotes with Your NCD",
    ctaDescription:
      "See how much you can save with your current NCD from 15+ insurers.",
  },

  "third-party-vs-comprehensive": {
    id: "third-party-vs-comprehensive",
    slug: "third-party-vs-comprehensive",
    title: "Third Party vs Comprehensive Car Insurance",
    subtitle:
      "A complete guide to understanding the differences and choosing the right coverage for your car in Malaysia.",
    lastUpdated: "2026-01-23",
    readTime: "7 min read",
    metaTitle:
      "Third Party vs Comprehensive Car Insurance Malaysia | Complete Guide",
    metaDescription:
      "Understand the difference between third party and comprehensive car insurance in Malaysia. Learn which coverage is right for your car and budget.",
    keywords: [
      "third party vs comprehensive",
      "car insurance malaysia",
      "comprehensive insurance",
      "third party insurance",
    ],
    sections: [
      {
        id: "quick-comparison",
        title: "Quick Comparison",
        type: "comparison",
        cards: [
          {
            title: "Third Party Insurance",
            icon: "3P",
            iconColor: "blue",
            items: [
              { text: "Covers damage to others' property", checked: true },
              { text: "Lower premium", checked: true },
              { text: "Does NOT cover your own car", checked: false },
              { text: "No theft or fire coverage", checked: false },
            ],
            footer: "Best for: Older cars with low market value",
          },
          {
            title: "Comprehensive Insurance",
            icon: "C",
            iconColor: "primary",
            highlighted: true,
            badge: "Recommended",
            items: [
              { text: "Covers damage to others' property", checked: true },
              { text: "Covers your own car damage", checked: true },
              { text: "Theft and fire protection", checked: true },
              { text: "Add-ons available (flood, windscreen, etc.)", checked: true },
            ],
            footer: "Best for: Newer cars, financed vehicles, valuable cars",
          },
        ],
      },
      {
        id: "understanding-third-party",
        title: "Understanding Third Party Insurance",
        type: "text",
        content: [
          "Third party car insurance is the minimum legal requirement in Malaysia under the Road Transport Act 1987. It provides basic protection against your liability if you cause damage to another person's property or vehicle.",
        ],
      },
      {
        id: "third-party-coverage",
        title: "What Third Party Insurance Covers",
        type: "comparison",
        cards: [
          {
            title: "What Third Party Covers",
            iconColor: "green",
            items: [
              {
                text: "Third party property damage",
                description: "Pays for repairs to other vehicles or property",
                checked: true,
              },
              {
                text: "Third party bodily injury",
                description: "Covers medical expenses if you injure someone",
                checked: true,
              },
              {
                text: "Legal defense costs",
                description: "Covers legal fees if you're sued",
                checked: true,
              },
            ],
          },
          {
            title: "What Third Party Does NOT Cover",
            iconColor: "red",
            items: [
              { text: "Damage to your own vehicle", checked: false },
              { text: "Theft of your vehicle", checked: false },
              { text: "Fire damage to your vehicle", checked: false },
              { text: "Natural disaster damage (flood, storm)", checked: false },
              { text: "Personal accident benefits for yourself", checked: false },
            ],
          },
        ],
      },
      {
        id: "understanding-comprehensive",
        title: "Understanding Comprehensive Insurance",
        type: "text",
        content: [
          "Comprehensive insurance provides the most complete protection for your vehicle. It includes everything covered by third party insurance, plus protection for your own vehicle against various risks.",
        ],
      },
      {
        id: "comprehensive-coverage",
        title: "What Comprehensive Insurance Covers",
        type: "comparison",
        cards: [
          {
            title: "What Comprehensive Covers",
            iconColor: "green",
            items: [
              { text: "Everything in third party", checked: true },
              { text: "Own damage (regardless of fault)", checked: true },
              { text: "Theft of vehicle", checked: true },
              { text: "Fire damage", checked: true },
              { text: "Vandalism damage", checked: true },
            ],
          },
          {
            title: "Optional Add-ons Available",
            iconColor: "blue",
            items: [
              { text: "Windscreen coverage (no NCD impact)", checked: true },
              { text: "Flood and natural disaster coverage", checked: true },
              { text: "Personal accident coverage", checked: true },
              { text: "24/7 roadside assistance", checked: true },
              { text: "Car rental during repairs", checked: true },
              { text: "All drivers coverage", checked: true },
            ],
          },
        ],
      },
      {
        id: "tpft",
        title: "Third Party, Fire & Theft (TPFT)",
        type: "callout",
        variant: "warning",
        content:
          "There's also a middle option called Third Party, Fire & Theft (TPFT). This covers everything in third party coverage plus theft and fire damage. However, TPFT does NOT cover damage from accidents. This option is less common in Malaysia but may be suitable for some drivers.",
      },
      {
        id: "cost-comparison",
        title: "Cost Comparison",
        type: "table",
        description:
          "The cost difference between third party and comprehensive can be significant:",
        tableData: {
          headers: ["Coverage Type", "Estimated Annual Premium"],
          rows: [
            [
              "Third Party Only",
              { text: "~RM75 (fixed rate)", badge: "Cheapest", badgeColor: "green" },
            ],
            [
              "Comprehensive (RM50k car)",
              { text: "~RM800 - RM1,500", badgeColor: "blue" },
            ],
            [
              "Comprehensive (RM100k car)",
              { text: "~RM1,500 - RM2,500", badgeColor: "purple" },
            ],
          ],
          footnote: "* Actual premiums depend on NCD, vehicle type, and insurer",
        },
      },
      {
        id: "which-choose",
        title: "Which Should You Choose?",
        type: "comparison",
        cards: [
          {
            title: "Choose Third Party If:",
            icon: "3P",
            iconColor: "blue",
            items: [
              {
                text: "Your car is very old (10+ years) with low market value",
                checked: true,
              },
              { text: "The market value is less than RM10,000", checked: true },
              {
                text: "You have savings to cover repairs/replacement if needed",
                checked: true,
              },
              {
                text: "You mainly use your car for short, low-risk trips",
                checked: true,
              },
            ],
          },
          {
            title: "Choose Comprehensive If:",
            icon: "C",
            iconColor: "primary",
            highlighted: true,
            badge: "Recommended",
            items: [
              {
                text: "Your car is relatively new (under 10 years old)",
                checked: true,
              },
              { text: "Your car has significant market value", checked: true },
              {
                text: "You have a car loan (banks require comprehensive)",
                checked: true,
              },
              { text: "You can't afford unexpected repair bills", checked: true },
              { text: "You drive frequently or long distances", checked: true },
              {
                text: "You park in public areas (higher theft/damage risk)",
                checked: true,
              },
            ],
          },
        ],
      },
      {
        id: "bottom-line",
        title: "The Bottom Line",
        type: "callout",
        variant: "success",
        content:
          "For most Malaysian drivers, **comprehensive insurance is the better choice**. The additional cost provides peace of mind knowing you're protected against a wide range of risks. The last thing you want is to be in an accident and find out you have to pay tens of thousands of ringgit for repairs. However, if your car's value is very low and the comprehensive premium seems disproportionate, third party coverage may make financial sense.",
      },
    ],
    faqs: [
      {
        question: "Is comprehensive insurance worth it for old cars?",
        answer:
          "It depends on your car's market value and your financial situation. If repair or replacement costs would be a significant burden, comprehensive may still be worth it. However, if your car's value is very low (under RM10,000), the premium for comprehensive may not justify the potential payout.",
      },
      {
        question: "Can I upgrade from third party to comprehensive?",
        answer:
          "Yes, you can upgrade your coverage when you renew your policy. You cannot change coverage mid-policy without cancelling and getting a new policy, which may result in loss of your NCD.",
      },
      {
        question: "Does third party cover my passengers?",
        answer:
          "Basic third party insurance covers your legal liability to passengers if they're injured. However, it doesn't cover their medical expenses directly. You may want to add passenger liability coverage as an add-on.",
      },
      {
        question:
          "What happens if I cause an accident with only third party coverage?",
        answer:
          "Third party insurance will cover the damage you cause to other vehicles and property. However, you'll have to pay for your own car repairs out of pocket, regardless of the cost.",
      },
    ],
    ctaTitle: "Compare Quotes for Both Coverage Types",
    ctaDescription:
      "See the exact price difference for your car from 15+ insurers.",
  },

  "how-to-claim-car-insurance": {
    id: "how-to-claim-car-insurance",
    slug: "how-to-claim-car-insurance",
    title: "How to Claim Car Insurance in Malaysia",
    subtitle:
      "A complete step-by-step guide to making a car insurance claim. Know what to do after an accident and get your claim approved faster.",
    lastUpdated: "2026-01-23",
    readTime: "10 min read",
    metaTitle: "How to Claim Car Insurance Malaysia | Step-by-Step Guide 2026",
    metaDescription:
      "Complete guide on how to claim car insurance in Malaysia. Step-by-step process for accident claims, documents needed, and tips for faster approval.",
    keywords: [
      "how to claim car insurance",
      "car insurance claim malaysia",
      "accident claim process",
      "insurance claim documents",
    ],
    sections: [
      {
        id: "emergency-numbers",
        title: "Emergency Numbers",
        type: "emergencyNumbers",
        numbers: [
          { label: "Emergency", number: "999" },
          { label: "Police", number: "999" },
          { label: "Ambulance", number: "999" },
          { label: "Fire", number: "994" },
        ],
      },
      {
        id: "claim-steps",
        title: "Step-by-Step Claims Process",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Ensure Safety First",
            description:
              "Check for injuries and move to safety. Call emergency services (999) if anyone is hurt.",
            tips: [
              "Don't leave the scene until it's appropriate",
              "Turn on hazard lights",
              "Set up warning triangle if available",
            ],
          },
          {
            number: 2,
            title: "Document the Accident",
            description:
              "Collect all necessary evidence and information at the scene.",
            tips: [
              "Take photos of all vehicles involved and damage",
              "Photograph the accident scene from multiple angles",
              "Get the other driver's details (name, IC, license, insurance)",
              "Note down time, date, and location",
              "Get contact details of any witnesses",
            ],
          },
          {
            number: 3,
            title: "Make a Police Report",
            description:
              "Lodge a police report within 24 hours of the accident.",
            tips: [
              "Go to the nearest police station",
              "Bring your IC, driving license, and vehicle documents",
              "Get a copy of the police report (you may need to return for it)",
              "The report is mandatory for insurance claims",
            ],
          },
          {
            number: 4,
            title: "Notify Your Insurance Company",
            description:
              "Contact your insurer as soon as possible to start the claim process.",
            tips: [
              "Call their 24-hour hotline",
              "Provide your policy number and accident details",
              "Ask about the claims process and required documents",
              "Note down the claim reference number",
            ],
          },
          {
            number: 5,
            title: "Send Your Car for Repair",
            description:
              "Take your car to an authorized panel workshop or your preferred workshop.",
            tips: [
              "Panel workshops offer cashless claims (easier process)",
              "Non-panel workshops may require upfront payment and reimbursement",
              "Get a repair estimate before authorizing work",
              "The workshop will liaise with the insurer for approval",
            ],
          },
          {
            number: 6,
            title: "Submit Claim Documents",
            description:
              "Provide all required documents to complete your claim.",
            tips: [
              "Police report",
              "Claim form (signed)",
              "Copy of IC and driving license",
              "Copy of insurance policy",
              "Photos of the accident and damage",
              "Repair invoice/quotation",
            ],
          },
          {
            number: 7,
            title: "Wait for Approval & Repairs",
            description:
              "Your insurer will process the claim and authorize repairs.",
            tips: [
              "Panel workshop claims are usually approved within 1-3 days",
              "Complex claims may take longer",
              "You may need to pay excess before repairs begin",
              "Collect your car once repairs are complete",
            ],
          },
        ],
      },
      {
        id: "documents-checklist",
        title: "Documents Checklist",
        type: "documentsChecklist",
        columns: [
          {
            title: "Required Documents",
            icon: "document",
            items: [
              "Police report",
              "Insurance claim form",
              "Copy of IC (front & back)",
              "Copy of driving license",
              "Copy of insurance policy/cover note",
              "Copy of vehicle registration (VOC)",
            ],
          },
          {
            title: "Photos to Take",
            icon: "camera",
            items: [
              "Overall accident scene",
              "All vehicles involved",
              "Close-up of damage",
              "License plates of all vehicles",
              "Road conditions/signs",
              "Other driver's IC and license",
            ],
          },
        ],
      },
      {
        id: "claim-types",
        title: "Types of Claims",
        type: "claimTypes",
        types: [
          {
            title: "Own Damage Claim",
            description:
              "Claim for damage to your own vehicle, regardless of who's at fault.",
            points: [
              "Available for comprehensive policies",
              "Excess payment required",
              "May affect your NCD",
            ],
          },
          {
            title: "Third Party Claim",
            description:
              "Claim against the other driver's insurance when they're at fault.",
            points: [
              "Requires proof the other party is at fault",
              "No excess payment needed",
              "Your NCD is not affected",
            ],
          },
          {
            title: "Windscreen Claim",
            description:
              "Claim for windscreen repair or replacement due to cracks or chips.",
            points: [
              "Requires windscreen coverage add-on",
              "Usually doesn't affect NCD",
              "May have a coverage limit",
            ],
          },
          {
            title: "Theft Claim",
            description:
              "Claim if your vehicle is stolen (comprehensive policies only).",
            points: [
              "Police report mandatory",
              "Investigation may take time",
              "Payout based on market value",
            ],
          },
        ],
      },
      {
        id: "faster-claims-tips",
        title: "Tips for Faster Claim Approval",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🏪",
            title: "Use Panel Workshops",
            description:
              "Panel workshops have direct communication with insurers, speeding up the approval process.",
          },
          {
            icon: "⚡",
            title: "Report Quickly",
            description:
              "Notify your insurer within 24-48 hours. Delayed reporting can complicate claims.",
          },
          {
            icon: "📸",
            title: "Document Everything",
            description:
              "Take comprehensive photos and notes. The more evidence, the smoother the process.",
          },
          {
            icon: "🧾",
            title: "Keep All Receipts",
            description:
              "Save receipts for towing, temporary transport, and any related expenses.",
          },
          {
            icon: "✅",
            title: "Be Honest",
            description:
              "Provide accurate information. False claims can void your policy and lead to legal issues.",
          },
          {
            icon: "📞",
            title: "Follow Up Regularly",
            description:
              "Stay in contact with your insurer or workshop to track the progress of your claim.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long do I have to make a police report?",
        answer:
          "You should make a police report within 24 hours of the accident. This is a legal requirement under Malaysian law for accidents involving injuries or significant damage. For minor accidents, some police stations may still accept reports within 48 hours, but it's best to report immediately.",
      },
      {
        question: "What is the excess and do I have to pay it?",
        answer:
          "The excess (also called deductible) is the amount you pay towards a claim. For comprehensive policies, the standard excess is usually RM400 for named drivers and higher for unnamed drivers. You typically pay this before repairs begin. Some policies have different excess amounts, so check your policy document.",
      },
      {
        question: "Can I choose any workshop for repairs?",
        answer:
          "Yes, you can choose any workshop. However, using a panel workshop offers advantages: cashless claims, direct billing to insurer, guaranteed workmanship, and usually faster approval. If you use a non-panel workshop, you may need to pay upfront and get reimbursed.",
      },
      {
        question: "How long does the claim process take?",
        answer:
          "For straightforward claims using panel workshops, approval can be as fast as 1-3 business days. Repair time depends on the extent of damage, typically 3-7 days for minor repairs and longer for major damage. Complex claims involving disputes or investigations may take several weeks.",
      },
      {
        question: "Will making a claim affect my NCD?",
        answer:
          "Yes, most claims will reduce your NCD by 2 levels. For example, if you have 55% NCD, it will drop to 38.33% after a claim. However, some claims like windscreen (if covered separately) or knock-for-knock claims may not affect NCD. Check your policy for details.",
      },
      {
        question: "What if the other driver was at fault?",
        answer:
          "If the other driver is at fault, you can claim from their insurance (third party claim). Alternatively, you can claim from your own comprehensive policy and your insurer will recover from the other party. In this case, your NCD may be protected through the knock-for-knock agreement.",
      },
    ],
    ctaTitle: "Need a New Insurance Policy?",
    ctaDescription:
      "Compare coverage and claims experience from 15+ insurers.",
  },

  "cheapest-car-insurance-malaysia": {
    id: "cheapest-car-insurance-malaysia",
    slug: "cheapest-car-insurance-malaysia",
    title: "Cheapest Car Insurance Malaysia: Complete Guide",
    subtitle:
      "How to find the lowest car insurance rates without sacrificing essential coverage. Save hundreds of ringgit on your next renewal.",
    lastUpdated: "2026-01-23",
    readTime: "12 min read",
    metaTitle: "Cheapest Car Insurance Malaysia 2026 | From RM150/year | Save Money",
    metaDescription:
      "Find the cheapest car insurance in Malaysia. Compare Kurnia, Etiqa, Lonpac rates. Third Party from RM150/year, Comprehensive from RM500/year. 10 tips to lower your premium.",
    keywords: [
      "cheapest car insurance malaysia",
      "cheap car insurance malaysia",
      "lowest car insurance rates malaysia",
      "budget car insurance",
    ],
    sections: [
      {
        id: "quick-answer",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Quick Answer",
        content:
          "The **cheapest car insurance in Malaysia** is Third Party coverage, starting from **RM150-300/year**. For comprehensive coverage, **Kurnia, Etiqa, and Lonpac** typically offer the most competitive rates. The key to getting the cheapest premium is maintaining your **NCD (No Claim Discount) at 55%**.",
      },
      {
        id: "coverage-types",
        title: "Cheapest Car Insurance by Coverage Type",
        type: "table",
        tableData: {
          headers: ["Coverage Type", "Price Range", "Best For", "Recommendation"],
          rows: [
            [
              "Third Party",
              { text: "RM150-400/yr", badge: "Cheapest", badgeColor: "green" },
              "Old cars 8+ years, low value",
              "Cheapest option",
            ],
            [
              "Third Party Fire & Theft",
              { text: "RM300-600/yr", badgeColor: "blue" },
              "Medium value cars",
              "Balanced budget",
            ],
            [
              "Comprehensive",
              { text: "RM800-2,500/yr", badgeColor: "purple" },
              "New/financed cars",
              "Best protection",
            ],
          ],
          footnote: "* Prices based on average Malaysian car with 55% NCD",
        },
      },
      {
        id: "saving-tips",
        title: "10 Proven Ways to Lower Your Car Insurance Premium",
        type: "numberedList",
        description: "Implement these strategies to reduce your premium by 20-50%",
        steps: [
          {
            number: 1,
            title: "Maintain Your NCD",
            description:
              "55% discount for claim-free drivers - the single biggest savings",
            tips: [],
          },
          {
            number: 2,
            title: "Compare Multiple Quotes",
            description:
              "Prices vary 20-40% between insurers for identical coverage",
            tips: [],
          },
          {
            number: 3,
            title: "Choose Third Party for Old Cars",
            description:
              "Save RM500-1,500/year on cars 8+ years old or worth under RM20,000",
            tips: [],
          },
          {
            number: 4,
            title: "Increase Your Excess",
            description:
              "Higher excess = lower premium. Potential savings of RM200-500/year",
            tips: [],
          },
          {
            number: 5,
            title: "Remove Unnecessary Add-ons",
            description:
              "Windscreen, flood, special perils add RM100-300. Only buy what you need",
            tips: [],
          },
          {
            number: 6,
            title: "Install Anti-Theft Devices",
            description:
              "Some insurers offer 5-10% discount for approved immobilizers/alarms",
            tips: [],
          },
          {
            number: 7,
            title: "Bundle with Road Tax",
            description:
              "Convenience and sometimes small savings when renewing together",
            tips: [],
          },
          {
            number: 8,
            title: "Pay Annually, Not Monthly",
            description:
              "Avoid installment fees which add 5-10% to your total cost",
            tips: [],
          },
          {
            number: 9,
            title: "Maintain Good Driving Record",
            description:
              "No claims = NCD preserved = continued savings year after year",
            tips: [],
          },
          {
            number: 10,
            title: "Consider Usage-Based Insurance",
            description:
              "Low mileage? Ask about pay-per-km options from some insurers",
            tips: [],
          },
        ],
      },
      {
        id: "cheapest-cars",
        title: "Cheapest Cars to Insure in Malaysia",
        type: "table",
        description: "These popular models have the lowest insurance premiums",
        tableData: {
          headers: ["Car Model", "Engine", "Typical Premium", "Why It's Cheap"],
          rows: [
            [
              "Perodua Axia",
              "1.0L",
              { text: "RM500-900/yr", badgeColor: "green" },
              "Low value, small engine, cheap parts",
            ],
            [
              "Perodua Myvi 1.3",
              "1.3L",
              { text: "RM800-1,200/yr", badgeColor: "green" },
              "Common parts, reliable, popular",
            ],
            [
              "Proton Saga",
              "1.3L",
              { text: "RM700-1,100/yr", badgeColor: "green" },
              "Local brand, cheap spare parts",
            ],
            [
              "Toyota Vios",
              "1.5L",
              { text: "RM1,000-1,500/yr", badgeColor: "blue" },
              "Reliable, good resale value",
            ],
            [
              "Honda City",
              "1.5L",
              { text: "RM1,100-1,600/yr", badgeColor: "blue" },
              "Popular, parts widely available",
            ],
          ],
          footnote: "* Comprehensive coverage with 55% NCD",
        },
      },
      {
        id: "expensive-factors",
        title: "Why Is My Car Insurance So Expensive?",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Sports cars / high-performance vehicles (Golf GTI, Civic Type R)",
            checked: false,
          },
          { text: "Luxury brands (BMW, Mercedes-Benz, Audi)", checked: false },
          { text: "High theft risk models", checked: false },
          { text: "Young drivers under 25 years old", checked: false },
          { text: "Poor claims history (low or 0% NCD)", checked: false },
          { text: "High-risk locations (KL city center)", checked: false },
          { text: "Imported / rare cars with expensive parts", checked: false },
          { text: "Modified vehicles", checked: false },
        ],
      },
      {
        id: "good-news",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Good News",
        content:
          "Even with these factors, you can still save by comparing quotes. Different insurers weigh these factors differently, so one insurer's expensive category might be another's standard rate.",
      },
      {
        id: "trade-offs",
        title: "Is Cheapest Always Best?",
        type: "table",
        description:
          "Understanding the trade-offs between budget and premium insurers",
        tableData: {
          headers: ["Factor", "Budget Insurer", "Premium Insurer"],
          rows: [
            ["Premium Cost", "10-20% lower", "Higher but competitive"],
            ["Workshop Network", "Limited to major cities", "Extensive nationwide"],
            ["Claims Processing", "5-10 business days", "1-3 business days"],
            ["Customer Service", "Basic support hours", "24/7 hotline support"],
            ["Add-on Options", "Limited selection", "Comprehensive options"],
            ["Roadside Assistance", "Basic or extra cost", "Often included free"],
          ],
        },
      },
      {
        id: "verdict",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Our Verdict",
        content:
          "**For old cars (8+ years, worth under RM25,000):** Cheapest is fine. You're saving money on a depreciating asset.\n\n**For new or financed cars:** Balance price with claims reputation. A RM200 annual savings isn't worth weeks of claims delays when you need your car repaired.",
      },
    ],
    faqs: [
      {
        question: "Which car insurance company has the lowest rates in Malaysia?",
        answer:
          "Kurnia, Lonpac, and Pacific typically offer the lowest rates in Malaysia. However, Etiqa and RHB are competitive while offering better service. The cheapest option varies by vehicle type, so always compare quotes from multiple insurers.",
      },
      {
        question: "How much is the cheapest car insurance in Malaysia?",
        answer:
          "Third Party coverage starts from RM150-300/year for small cars. Comprehensive coverage starts from RM500-800/year for affordable cars like Perodua Axia. With maximum NCD (55%), you can reduce these rates by more than half.",
      },
      {
        question: "Is cheap car insurance worth it?",
        answer:
          "For old, low-value cars (8+ years, worth under RM20,000), yes - cheaper insurance makes sense. For new or financed cars, prioritize claims service over price. A RM200 savings isn't worth a difficult claims experience when you need help most.",
      },
      {
        question: "How can I lower my car insurance premium?",
        answer:
          "The top ways to lower your premium: maintain 55% NCD by driving claim-free, compare quotes from multiple insurers, choose appropriate coverage type (Third Party for old cars), increase your excess amount, and remove unnecessary add-ons.",
      },
      {
        question: "Which is cheaper, Etiqa or Allianz?",
        answer:
          "Etiqa is generally 5-10% cheaper than Allianz for similar coverage. Allianz charges a premium for their extensive workshop network (Road Rangers), brand reputation, and comprehensive add-on options. Choose Allianz if service matters more than savings.",
      },
      {
        question: "Is Third Party insurance enough?",
        answer:
          "Third Party insurance is enough for cars worth under RM20,000 or over 8 years old. You'll save RM500-1,500/year but won't be covered for own damage, theft, or fire. For newer or financed cars, comprehensive coverage is strongly recommended.",
      },
      {
        question: "Why is my car insurance so expensive?",
        answer:
          "Common reasons for expensive premiums: low or no NCD (new drivers or after claims), high-value or luxury vehicle, sports/performance car, young driver under 25, high-risk location, or imported car with expensive parts. Compare quotes to find better rates.",
      },
      {
        question: "Can I get cheap car insurance online?",
        answer:
          "Yes! Online comparison platforms and direct insurer websites often offer lower rates than agents due to reduced overhead. You can compare quotes from 15+ insurers in minutes and purchase your policy online with instant activation.",
      },
    ],
    ctaTitle: "Find Your Cheapest Quote",
    ctaDescription:
      "Compare prices from 15+ insurers and find the best rate for your car.",
  },

  "best-ev-car-insurance-malaysia": {
    id: "best-ev-car-insurance-malaysia",
    slug: "best-ev-car-insurance-malaysia",
    title: "Best EV Car Insurance Malaysia: Compare Top 5 Plans",
    subtitle:
      "Compare Malaysia's top EV insurance plans from Allianz, MSIG, Liberty, Etiqa & Tokio Marine. Find coverage for battery, home charger, roadside charging & more.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "10 min read",
    metaTitle: `Best EV Car Insurance Malaysia ${new Date().getFullYear()} - Compare Top 5 Plans`,
    metaDescription:
      "Compare Malaysia's top EV insurance plans from Allianz, MSIG, Liberty, Etiqa & Tokio Marine. Find coverage for battery, home charger, roadside charging & more.",
    keywords: [
      "ev car insurance malaysia",
      "electric car insurance",
      "byd insurance malaysia",
      "tesla insurance malaysia",
      "ev charger coverage",
      "best ev insurance",
    ],
    sections: [
      {
        id: "intro",
        title: "Why EV Insurance is Different",
        type: "text",
        content: [
          "Electric vehicles have unique insurance needs that regular car insurance doesn't fully address. EVs come with **expensive batteries** (RM30,000-50,000 to replace), **home charging equipment**, and **specialized repair requirements** that traditional policies weren't designed to cover.",
          "The good news: several Malaysian insurers now offer **EV-specific coverage** with benefits like home charger protection, portable cable coverage, and even roadside charging assistance. These add-ons address the unique risks of EV ownership.",
          "This guide compares the **top 5 EV insurance options** in Malaysia to help you choose the right coverage for your electric vehicle.",
        ],
      },
      {
        id: "quick-comparison",
        title: "Quick Comparison: Top 5 EV Insurance Plans",
        type: "table",
        tableData: {
          headers: [
            "Insurer",
            "Product Name",
            "Extra Cost",
            "Home Charger",
            "Portable Cable",
            "Roadside Charging",
          ],
          rows: [
            [
              "Allianz",
              { text: "EV Shield", badge: "Best Overall", badgeColor: "green" },
              "FREE",
              "RM15,000",
              "RM2,000",
              "Yes (4 cities)",
            ],
            ["MSIG", "EV Plus", "Add-on fee", "RM20,000", "RM5,000", "No"],
            [
              "Liberty",
              "InsureMyTesla",
              "Included",
              "RM12,000",
              "No",
              "Tow to station",
            ],
            ["Etiqa", "EV Home Charger", "FREE (new EVs)", "RM12,000", "RM2,000", "No"],
            [
              "Tokio Marine",
              "Custom",
              "Varies",
              "Case-by-case",
              "Case-by-case",
              "No",
            ],
          ],
          footnote:
            "* Coverage limits and availability subject to terms and conditions",
        },
      },
      {
        id: "allianz-review",
        title: "1. Allianz EV Shield - Best Overall",
        type: "comparison",
        cards: [
          {
            title: "Allianz EV Shield",
            icon: "A",
            iconColor: "primary",
            highlighted: true,
            badge: "Best Overall",
            items: [
              {
                text: "FREE with any Comprehensive Private Car policy",
                checked: true,
              },
              {
                text: "On-the-spot mobile charging via 'Allianz EV Rangers'",
                checked: true,
              },
              { text: "RM15,000 home charger coverage", checked: true },
              { text: "RM2,000 portable charging cable", checked: true },
              { text: "RM5,000 public charger mishap coverage", checked: true },
              { text: "RM50,000 third-party liability from charger", checked: true },
              { text: "24hr towing to nearest charging station", checked: true },
            ],
            footer:
              "Available in: Klang Valley, Penang, Kuantan, Johor Bahru",
          },
          {
            title: "Best For",
            iconColor: "green",
            items: [
              {
                text: "Drivers wanting complete coverage at no extra cost",
                checked: true,
              },
              {
                text: "Those in Klang Valley, Penang, JB, or Kuantan",
                checked: true,
              },
              { text: "Anyone who wants on-the-spot mobile charging", checked: true },
            ],
          },
        ],
      },
      {
        id: "msig-review",
        title: "2. MSIG EV Plus - Highest Charger Coverage",
        type: "comparison",
        cards: [
          {
            title: "MSIG EV Plus",
            icon: "M",
            iconColor: "blue",
            items: [
              { text: "Add-on to base MSIG motor policy", checked: true },
              {
                text: "RM20,000 home charger coverage (highest in market)",
                checked: true,
              },
              { text: "RM5,000 portable cable coverage (highest)", checked: true },
              { text: "RM50,000 personal liability from charger use", checked: true },
              { text: "RM3,000 repair allowance", checked: true },
              { text: "RM5,000 public charging station incident allowance", checked: true },
              { text: "No roadside charging service", checked: false },
            ],
            footer: "Requires additional premium for EV Plus add-on",
          },
          {
            title: "Best For",
            iconColor: "green",
            items: [
              { text: "EV owners with expensive home charging setups", checked: true },
              { text: "Those wanting maximum charger coverage", checked: true },
              { text: "Premium home wallbox owners (RM10,000+)", checked: true },
            ],
          },
        ],
      },
      {
        id: "liberty-review",
        title: "3. Liberty InsureMyTesla - Tesla Owners Only",
        type: "comparison",
        cards: [
          {
            title: "Liberty InsureMyTesla",
            icon: "L",
            iconColor: "red",
            items: [
              { text: "Tesla's official insurance partner in Malaysia", checked: true },
              { text: "Exclusive to new Tesla vehicles", checked: true },
              { text: "RM12,000 private charger coverage", checked: true },
              {
                text: "24hr towing to charging station (up to 3x/year)",
                checked: true,
              },
              { text: "Key repair/replacement up to RM1,000", checked: true },
              { text: "12-month workmanship warranty on repairs", checked: true },
              { text: "5% discount if financed through AmBank", checked: true },
              { text: "No portable cable coverage", checked: false },
            ],
            footer: "Also available in Hong Kong, Singapore, Thailand",
          },
          {
            title: "Best For",
            iconColor: "green",
            items: [
              { text: "New Tesla owners", checked: true },
              { text: "Those wanting manufacturer-aligned coverage", checked: true },
              { text: "AmBank financing customers (5% discount)", checked: true },
            ],
          },
        ],
      },
      {
        id: "etiqa-review",
        title: "4. Etiqa EV Insurance - Takaful Option Available",
        type: "comparison",
        cards: [
          {
            title: "Etiqa EV Insurance",
            icon: "E",
            iconColor: "amber",
            items: [
              {
                text: "First Malaysian insurer with EV charger coverage (2022)",
                checked: true,
              },
              { text: "Tesla Ensure package for Tesla owners", checked: true },
              { text: "RM12,000 home charger coverage", checked: true },
              { text: "RM2,000 portable cable coverage (add-on)", checked: true },
              { text: "PA coverage up to RM18,000", checked: true },
              { text: "Flood relief allowance included", checked: true },
              {
                text: "Takaful option (Etiqa General Takaful)",
                checked: true,
              },
              { text: "No roadside charging service", checked: false },
            ],
            footer: "FREE for new EV purchases, add-on fee for others",
          },
          {
            title: "Best For",
            iconColor: "green",
            items: [
              { text: "Muslim drivers wanting Shariah-compliant coverage", checked: true },
              { text: "Tesla owners (Tesla Ensure package)", checked: true },
              { text: "New EV buyers (free coverage)", checked: true },
            ],
          },
        ],
      },
      {
        id: "tokio-marine-review",
        title: "5. Tokio Marine - Custom Endorsements",
        type: "comparison",
        cards: [
          {
            title: "Tokio Marine",
            icon: "T",
            iconColor: "purple",
            items: [
              { text: "No dedicated EV product yet", checked: false },
              { text: "Custom endorsements on case-by-case basis", checked: true },
              { text: "Charger coverage available upon request", checked: true },
              { text: "Flexible terms negotiable", checked: true },
              { text: "No standard EV add-on pricing", checked: false },
            ],
            footer: "Contact Tokio Marine directly to discuss EV coverage",
          },
          {
            title: "Best For",
            iconColor: "green",
            items: [
              { text: "Existing Tokio Marine customers", checked: true },
              { text: "Those wanting customized coverage", checked: true },
              { text: "Drivers willing to negotiate terms", checked: true },
            ],
          },
        ],
      },
      {
        id: "ev-coverage-explained",
        title: "What EV Insurance Covers (That Regular Insurance Doesn't)",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🔌",
            title: "Home Wall Charger",
            description:
              "Protection against fire, lightning, theft, and natural disasters for your home charging unit",
          },
          {
            icon: "🔋",
            title: "Portable Charging Cable",
            description:
              "Coverage for loss or damage to your mobile charging cable",
          },
          {
            icon: "⚡",
            title: "Public Charging Incidents",
            description:
              "Protection if something goes wrong at a public charging station",
          },
          {
            icon: "🛡️",
            title: "Third-Party Charger Liability",
            description:
              "Coverage if your charger causes damage to others or their property",
          },
          {
            icon: "🔧",
            title: "Battery-Specific Coverage",
            description:
              "Protection for expensive EV battery repairs from accidents",
          },
          {
            icon: "🚗",
            title: "Towing to Charging Station",
            description:
              "Specialized towing service to nearest charger (not just workshop)",
          },
        ],
      },
      {
        id: "cost-examples",
        title: "EV Insurance Cost Examples",
        type: "table",
        description:
          "Typical annual premiums for popular EVs in Malaysia",
        tableData: {
          headers: ["EV Model", "Market Value", "Annual Premium Range"],
          rows: [
            [
              "BYD Atto 3",
              "RM124,000 - RM168,000",
              { text: "RM2,000 - RM4,100/year", badgeColor: "green" },
            ],
            [
              "Tesla Model 3",
              "RM189,000+",
              { text: "RM5,100 - RM5,900/year", badgeColor: "blue" },
            ],
            [
              "Tesla Model Y",
              "RM199,000+",
              { text: "RM5,400 - RM7,700/year", badgeColor: "purple" },
            ],
          ],
          footnote:
            "* EV insurance premiums are typically 10-20% higher than equivalent petrol cars due to expensive battery repairs",
        },
      },
      {
        id: "premium-note",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Why EV Insurance Costs More",
        content:
          "EV insurance premiums are typically **10-20% higher** than comparable petrol cars. This is due to expensive battery replacement costs (RM30,000-50,000), specialized repair requirements, and higher vehicle market values. However, EVs save money on **road tax (RM0)** and fuel costs, which can offset the higher insurance premium.",
      },
      {
        id: "how-to-choose",
        title: "How to Choose Your EV Insurance",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Tesla Owner?",
            description:
              "Consider Liberty InsureMyTesla or Etiqa Tesla Ensure for manufacturer-aligned coverage",
            tips: [],
          },
          {
            number: 2,
            title: "Want Free EV Coverage?",
            description:
              "Choose Allianz EV Shield - it's completely free with any comprehensive policy",
            tips: [],
          },
          {
            number: 3,
            title: "Expensive Home Charger?",
            description:
              "Go with MSIG EV Plus for the highest charger coverage (RM20,000)",
            tips: [],
          },
          {
            number: 4,
            title: "Need Takaful / Islamic Option?",
            description:
              "Etiqa General Takaful offers Shariah-compliant EV coverage",
            tips: [],
          },
          {
            number: 5,
            title: "Already with Tokio Marine?",
            description:
              "Ask your agent about custom EV endorsements to add charger coverage",
            tips: [],
          },
        ],
      },
      {
        id: "recommendation",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Our Top Pick",
        content:
          "**Allianz EV Shield** is the best overall choice for most EV owners in Malaysia. It's **completely free**, offers comprehensive coverage including on-the-spot mobile charging, and is available from one of Malaysia's most established insurers. The only consideration is that roadside charging is currently limited to Klang Valley, Penang, Kuantan, and Johor Bahru.",
      },
    ],
    faqs: [
      {
        question: "Is EV insurance more expensive than regular car insurance?",
        answer:
          "Yes, EV insurance is typically 10-20% higher than comparable petrol cars. This is due to expensive battery replacement costs (RM30,000-50,000), specialized repair requirements, and higher vehicle market values. However, you save on road tax (RM0 for EVs) and fuel costs.",
      },
      {
        question: "Does regular car insurance cover my EV?",
        answer:
          "Basic comprehensive car insurance will cover your EV for standard risks like accidents, theft, and fire. However, it won't cover EV-specific items like your home charger, portable charging cable, or provide specialized services like towing to charging stations. You should add EV-specific coverage for complete protection.",
      },
      {
        question: "What if my EV battery catches fire?",
        answer:
          "Battery fire damage is covered under comprehensive car insurance. However, check your policy's exclusions as some insurers may have specific terms for battery-related incidents. EVs actually have a lower fire risk than petrol cars statistically, but EV fires can be more difficult to extinguish.",
      },
      {
        question: "Can I insure a used EV?",
        answer:
          "Yes, you can insure a used EV with comprehensive or third party coverage. However, some EV-specific add-ons (like Etiqa's free charger coverage) may only be available for new EV purchases. Used EV owners can still add charger coverage for an additional premium.",
      },
      {
        question: "Is my home charger covered by home insurance or car insurance?",
        answer:
          "EV charger coverage is typically provided through car insurance add-ons, not home insurance. The EV insurance add-ons from Allianz, MSIG, Liberty, and Etiqa specifically cover your home charging equipment against damage, theft, fire, and electrical issues.",
      },
      {
        question: "What happens if I run out of battery on the highway?",
        answer:
          "If you have Allianz EV Shield, you can call for mobile charging assistance (in covered areas). Other insurers provide towing to the nearest charging station. Liberty InsureMyTesla offers up to 3 complimentary tows per year for flat battery situations.",
      },
      {
        question: "Do I need special coverage for public charging?",
        answer:
          "Yes, incidents at public charging stations (like damage from faulty equipment) are covered by EV insurance add-ons. Allianz offers RM5,000 for public charger mishaps, and MSIG provides RM5,000 public charging station incident allowance.",
      },
      {
        question: "Which insurer is best for Tesla in Malaysia?",
        answer:
          "Liberty InsureMyTesla is Tesla's official insurance partner in Malaysia, offering Tesla-specific benefits. Etiqa also has a dedicated Tesla Ensure package. Both provide coverage aligned with Tesla's repair requirements and service network.",
      },
    ],
    ctaTitle: "Get Your Free EV Insurance Quote",
    ctaDescription:
      "Compare EV-specific coverage from top insurers and protect your electric vehicle.",
  },

  "rejected-car-insurance-claim-help-malaysia": {
    id: "rejected-car-insurance-claim-help-malaysia",
    slug: "rejected-car-insurance-claim-help-malaysia",
    title: "Car Insurance Claim Rejected? Here's What to Do",
    subtitle:
      "Getting your car insurance claim rejected is frustrating, but it doesn't have to be the end. Learn why claims get denied, how to appeal, and get expert help. We've successfully appealed 150+ rejected claims.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "12 min read",
    metaTitle: `Car Insurance Claim Rejected Malaysia? Here's What to Do (${new Date().getFullYear()} Guide)`,
    metaDescription:
      "Car insurance claim rejected in Malaysia? Learn why claims get denied, how to appeal, and get expert help. We've successfully appealed 150+ rejected claims.",
    keywords: [
      "car insurance claim rejected malaysia",
      "insurance claim denied",
      "appeal rejected claim",
      "insurance claim rejection",
      "car insurance claim help",
      "rejected claim appeal",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Don't Give Up Yet",
        content:
          "A rejection doesn't mean the end - many rejected claims can be successfully appealed with the right approach and documentation. In our experience handling 1,000+ motor insurance claims in Malaysia, we've helped overturn **150+ rejections**. This guide shows you exactly what to do.",
      },
      {
        id: "why-rejected",
        title: "Why Car Insurance Claims Get Rejected in Malaysia",
        type: "numberedList",
        description:
          "Understanding why your claim was rejected is the first step to a successful appeal.",
        steps: [
          {
            number: 1,
            title: "Policy Exclusions Weren't Understood",
            description:
              "Many rejections happen because drivers didn't realize certain situations aren't covered.",
            tips: [
              "Driving under influence of alcohol/drugs",
              "Using car for commercial purposes (e.g., e-hailing) without proper coverage",
              "Modifications not declared to insurer",
              "Driving without valid license or road tax",
            ],
          },
          {
            number: 2,
            title: "Documentation Problems",
            description:
              "Missing or incorrect paperwork is one of the most common rejection reasons.",
            tips: [
              "Police report filed more than 24 hours after accident",
              "Incomplete claim forms",
              "Missing supporting documents (photos, repair quotations, witness statements)",
              "Inconsistencies between police report and claim form",
            ],
          },
          {
            number: 3,
            title: "Policy Lapses",
            description: "Coverage issues at the time of the accident.",
            tips: [
              "Premium payment overdue",
              "Renewal not processed on time",
              "Coverage expired at time of accident",
            ],
          },
          {
            number: 4,
            title: "Fraudulent Claims Suspected",
            description:
              "Insurers investigate claims that seem suspicious.",
            tips: [
              "Exaggerated damages",
              "Pre-existing damage claimed as new",
              "Staged accidents",
              "False information on claim form",
            ],
          },
          {
            number: 5,
            title: "Betterment Issues",
            description:
              "Disputes over the scope of repairs and replacement parts.",
            tips: [
              "Insurer only pays for 'like-for-like' repairs",
              "Dispute over depreciation charges",
              "Upgrading parts during repair",
            ],
          },
        ],
      },
      {
        id: "what-to-do",
        title: "What to Do If Your Claim is Rejected",
        type: "numberedList",
        description:
          "Follow these steps to maximize your chances of a successful appeal.",
        steps: [
          {
            number: 1,
            title: "Get the Rejection in Writing",
            description:
              "Call your insurer immediately and request official documentation.",
            tips: [
              "Official rejection letter with specific reasons",
              "Policy clauses referenced for rejection",
              "Documentation requirements if appeal is possible",
              "Important: Insurers must provide written rejection under Bank Negara Malaysia guidelines",
            ],
          },
          {
            number: 2,
            title: "Review Your Policy Document",
            description:
              "Carefully check if the rejection reason is valid.",
            tips: [
              "Does the rejection reason match actual policy exclusions?",
              "Were you within policy terms at time of accident?",
              "Did you fulfill all documentation requirements?",
            ],
          },
          {
            number: 3,
            title: "Gather Additional Evidence",
            description: "Strengthen your case with supporting documentation.",
            tips: [
              "Clearer photos of damage and accident scene",
              "Additional witness statements",
              "Expert assessments (mechanic reports, accident reconstruction)",
              "Timeline documentation proving you met deadlines",
            ],
          },
          {
            number: 4,
            title: "Submit Formal Appeal",
            description:
              "Write a professional appeal letter to your insurer.",
            tips: [
              "Reference to original claim number",
              "Point-by-point response to rejection reasons",
              "All supporting evidence attached",
              "Request for reassessment within specified timeframe",
            ],
          },
          {
            number: 5,
            title: "Escalate If Needed",
            description:
              "If your appeal is rejected, you have further options.",
            tips: [
              "Request meeting with claims manager",
              "File complaint with Ombudsman for Financial Services (OFS)",
              "Contact Bank Negara Malaysia LINK system",
              "Seek legal advice for larger claims",
            ],
          },
        ],
      },
      {
        id: "success-stories",
        title: "Common Rejection Reasons We've Overturned",
        type: "comparison",
        cards: [
          {
            title: "Late Police Report",
            iconColor: "green",
            items: [
              {
                text: "Rejection: Police report filed 3 days after minor accident",
                checked: false,
              },
              {
                text: "Our Solution: Provided hospital admission records proving driver was receiving treatment",
                checked: true,
              },
              { text: "Result: Insurer accepted appeal", checked: true },
            ],
          },
          {
            title: "Undeclared Modifications",
            iconColor: "green",
            items: [
              {
                text: "Rejection: Aftermarket bodykit not declared",
                checked: false,
              },
              {
                text: "Our Solution: Showed modifications were cosmetic only, didn't affect safety",
                checked: true,
              },
              {
                text: "Result: Insurer paid claim minus bodykit value",
                checked: true,
              },
            ],
          },
        ],
      },
      {
        id: "commercial-use-case",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Case Study: Commercial Use Rejection Overturned",
        content:
          "**Rejection:** Car used for food delivery during accident.\n\n**Our Solution:** Proved driver was on personal errand, not active delivery. Dashcam footage was key evidence.\n\n**Result:** Full claim approved.",
      },
      {
        id: "when-appeals-wont-work",
        title: "When Appeals Won't Work",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Drink driving with police report evidence",
            checked: false,
          },
          {
            text: "No valid insurance at time of accident",
            checked: false,
          },
          { text: "Deliberately fraudulent claims", checked: false },
          { text: "Accidents while committing crimes", checked: false },
        ],
      },
      {
        id: "how-we-help",
        title: "How We Can Help",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🔍",
            title: "Free Claim Review",
            description:
              "We assess your rejection letter, identify weaknesses in insurer's reasoning, and advise if appeal is worth pursuing.",
          },
          {
            icon: "📋",
            title: "Documentation Assistance",
            description:
              "Help gather required evidence, draft professional appeal letters, and coordinate with workshops and witnesses.",
          },
          {
            icon: "🤝",
            title: "Insurer Negotiation",
            description:
              "Communicate directly with claims department, present your case professionally, and negotiate settlement terms.",
          },
          {
            icon: "⬆️",
            title: "Escalation Support",
            description:
              "Guide you through OFS complaint process, prepare Bank Negara submissions, and advise on legal options if needed.",
          },
        ],
      },
      {
        id: "our-track-record",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Our Track Record",
        content:
          "With **1,000+ claims handled** and **150+ successful appeals**, we know exactly what insurers look for. Our expertise with Zurich and Allianz means we understand their claims processes inside out.",
      },
      {
        id: "prevention",
        title: "Prevention is Better Than Appeal",
        type: "tipGrid",
        columns: 3,
        tips: [
          {
            icon: "📖",
            title: "Read Your Policy",
            description: "Understand your coverage and exclusions thoroughly",
          },
          {
            icon: "📝",
            title: "Declare Everything",
            description:
              "All modifications and changes in car usage must be declared",
          },
          {
            icon: "🚨",
            title: "Report Quickly",
            description: "File police reports within 24 hours of accidents",
          },
          {
            icon: "📸",
            title: "Document Everything",
            description: "Take comprehensive photos at the accident scene",
          },
          {
            icon: "🧾",
            title: "Keep Receipts",
            description: "Save all documentation and repair receipts",
          },
          {
            icon: "✅",
            title: "Be Honest",
            description:
              "Provide accurate information on all claim forms",
          },
        ],
      },
      {
        id: "ofs-info",
        title: "About the Ombudsman for Financial Services (OFS)",
        type: "text",
        content: [
          "The OFS is a **free and independent** service that resolves disputes between consumers and financial service providers in Malaysia. They handle about **60% of complaints in favor of consumers**.",
          "You can file a complaint with OFS if your insurer rejects your appeal. The process is straightforward and doesn't require a lawyer. OFS decisions are binding on the insurer up to RM250,000.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do I have to appeal a rejected claim?",
        answer:
          "Most insurers allow 30-60 days from the rejection date to submit an appeal. Check your rejection letter for the specific deadline. Don't delay - gather evidence and submit your appeal as soon as possible.",
      },
      {
        question: "Can I change insurance companies after a rejected claim?",
        answer:
          "Yes, but you must declare the rejected claim to your new insurer. Hiding it could void future claims. Most insurers ask about claims history (both approved and rejected) in the past 3-5 years.",
      },
      {
        question: "Will appealing affect my NCD?",
        answer:
          "No. Appealing a rejected claim doesn't affect your No Claims Discount status. Your NCD is only affected when a claim is actually paid out.",
      },
      {
        question: "Should I repair my car before the appeal is decided?",
        answer:
          "Don't repair until the claim is approved or you'll lose evidence. If you must repair for safety reasons, document everything thoroughly with photos and videos before any work is done.",
      },
      {
        question: "What if my appeal is rejected again?",
        answer:
          "You can escalate to the Ombudsman for Financial Services (OFS) - it's free and they handle about 60% of complaints in favor of consumers. If OFS can't help, you may need to consider legal action for larger claims.",
      },
      {
        question: "How much does it cost to appeal a rejected claim?",
        answer:
          "Appealing directly with your insurer is free. Filing with the OFS is also free. You only incur costs if you need to hire a lawyer for legal action, which is typically only worthwhile for larger claims.",
      },
      {
        question: "Can I get help appealing my rejected claim?",
        answer:
          "Yes! We offer free claim reviews to assess whether your rejection can be appealed. With 150+ successful appeals, we know what insurers look for and can help you build a strong case.",
      },
    ],
    ctaTitle: "Get Free Claim Review",
    ctaDescription:
      "Don't let a rejection letter be the final word. WhatsApp us your rejection letter and we'll tell you if your case has merit - no obligation.",
  },

  "why-use-insurance-agent-vs-online-comparison-malaysia": {
    id: "why-use-insurance-agent-vs-online-comparison-malaysia",
    slug: "why-use-insurance-agent-vs-online-comparison-malaysia",
    title: "Insurance Agent vs Online Comparison Sites: Which is Better?",
    subtitle:
      "Should you use an insurance agent or buy online through Bjak/PolicyStreet? Honest comparison of both options and when you actually need an agent in Malaysia.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "15 min read",
    metaTitle: `Insurance Agent vs Online Comparison Sites Malaysia: Which is Better for You? (${new Date().getFullYear()})`,
    metaDescription:
      `Should you use an insurance agent or buy online through Bjak/PolicyStreet? Honest comparison of both options and when you actually need an agent in Malaysia ${new Date().getFullYear()}.`,
    keywords: [
      "insurance agent vs online",
      "bjak vs agent",
      "policystreet vs agent",
      "car insurance agent malaysia",
      "online car insurance malaysia",
      "should i use insurance agent",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "text",
        content: [
          "Let's be honest - you can buy car insurance online in 5 minutes through Bjak, PolicyStreet, or CompareHero. So why would anyone use an insurance agent in " + new Date().getFullYear() + "?",
          "This guide gives you the truth: when DIY makes sense, when it doesn't, and what the \"comparison sites won't tell you\" disclaimer actually means.",
        ],
      },
      {
        id: "quick-answer",
        title: "The Quick Answer",
        type: "comparison",
        cards: [
          {
            title: "Use Online Comparison If:",
            iconColor: "blue",
            items: [
              { text: "You understand insurance terms perfectly", checked: true },
              { text: "Your car history is straightforward (no claims, no modifications)", checked: true },
              { text: "You're willing to handle claims yourself", checked: true },
              { text: "You want absolute lowest price regardless of service", checked: true },
            ],
          },
          {
            title: "Use an Agent If:",
            iconColor: "green",
            highlighted: true,
            badge: "Recommended",
            items: [
              { text: "You've had claims issues before", checked: true },
              { text: "You want guidance during accidents", checked: true },
              { text: "Your situation is complex (modified car, young driver, commercial use)", checked: true },
              { text: "You value fast response over saving RM50", checked: true },
            ],
          },
        ],
      },
      {
        id: "online-pros",
        title: "What Online Comparison Sites Do Well",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "⚡",
            title: "Speed & Convenience",
            description: "Compare 15+ insurers in 60 seconds. Buy policy at 2am in your pajamas. Instant cover note via email.",
          },
          {
            icon: "👁️",
            title: "Transparency",
            description: "See all prices side-by-side. Read policy details before buying. No sales pressure.",
          },
          {
            icon: "💰",
            title: "Price Competition",
            description: "Insurers compete aggressively online. Often 5-10% cheaper than walk-in rates. Promotional codes and cashback.",
          },
          {
            icon: "🔄",
            title: "Simple Renewals",
            description: "Auto-reminders, one-click renewal, payment via card/FPX, digital policy storage.",
          },
        ],
      },
      {
        id: "online-verdict",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Online Platform Verdict",
        content: "For straightforward renewals with no claims history, online platforms are excellent.",
      },
      {
        id: "fine-print",
        title: "What Online Comparison Sites Don't Tell You",
        type: "numberedList",
        description: "The fine print everyone ignores:",
        steps: [
          {
            number: 1,
            title: "\"For claims assistance, contact your insurer directly\"",
            description: "Translation: When you have an accident at 3am, you're on your own. The platform's job ends when you buy the policy.",
            tips: [],
          },
          {
            number: 2,
            title: "\"Policy terms subject to insurer approval\"",
            description: "Translation: The quote you see isn't final. Insurer can reject you or increase premium after reviewing your actual details.",
            tips: [],
          },
          {
            number: 3,
            title: "\"We earn commission from insurers\"",
            description: "Translation: The \"cheapest\" option shown might be the one paying highest commission, not actually the best fit.",
            tips: [],
          },
        ],
      },
      {
        id: "case-1",
        title: "When \"Cheap\" Becomes Expensive",
        type: "callout",
        variant: "warning",
        title2: "Case 1: The RM150 Savings That Cost RM4,000",
        content: "Client bought cheapest comprehensive online (RM980 vs RM1,130 with us). Policy excluded flood coverage in fine print.\n\nDuring December floods, his Myvi got submerged. **Claim rejected. Out-of-pocket: RM4,000** for engine repair.\n\n**Our client who paid RM1,130?** Fully covered, car repaired, zero cost.",
      },
      {
        id: "case-2",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Case 2: The \"Comprehensive\" That Wasn't",
        content: "Client compared online, picked mid-priced comprehensive (RM1,450). Felt smart avoiding the RM1,650 \"expensive\" option.\n\nDuring accident, discovered:\n- Betterment charges waiver NOT included (paid RM800 extra)\n- Panel workshop 40km away\n- No towing coverage (paid RM150)\n- Excess was RM1,000 (not the RM500 expected)\n\n**Total unexpected costs: RM1,950.** Would've saved RM300 with the \"expensive\" policy.",
      },
      {
        id: "case-3",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Case 3: The Claim That Got Ghosted",
        content: "Client bought online, had minor accident (RM2,500 damage). Filed claim, insurer requested documents.\n\nClient didn't know what photos to take, how to word police report, which workshop to use, or how to respond to insurer questions.\n\n**Claim delayed 2 months. Client gave up and paid cash.**\n\n**Our clients?** We guide them through every step, claim approved in 8 days.",
      },
      {
        id: "what-agents-do",
        title: "What Insurance Agents Actually Do",
        type: "comparison",
        cards: [
          {
            title: "Before You Buy",
            iconColor: "blue",
            items: [
              { text: "Policy Analysis - explain what's ACTUALLY covered", checked: true },
              { text: "Needs Assessment - match coverage to your situation", checked: true },
              { text: "Insurer Selection - match you with best insurer for your car", checked: true },
              { text: "Identify exclusions that matter for YOUR situation", checked: true },
            ],
          },
          {
            title: "During Claims",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "24/7 phone support when accidents happen", checked: true },
              { text: "Guide you at the accident scene", checked: true },
              { text: "Help with police report wording", checked: true },
              { text: "Submit claims on your behalf", checked: true },
              { text: "Handle disputes and appeals", checked: true },
            ],
          },
        ],
      },
      {
        id: "claims-comparison",
        title: "The Claims Experience: DIY vs Agent",
        type: "comparison",
        cards: [
          {
            title: "DIY Claims Journey",
            iconColor: "red",
            items: [
              { text: "Call insurer hotline (wait 20 mins)", checked: false },
              { text: "Navigate IVR menu", checked: false },
              { text: "Explain to call center staff (who reads script)", checked: false },
              { text: "Wait for assessor callback", checked: false },
              { text: "Submit documents yourself", checked: false },
              { text: "Hope everything goes smoothly", checked: false },
            ],
            footer: "Average claim time: 14-21 days",
          },
          {
            title: "Agent-Assisted Claims",
            iconColor: "green",
            highlighted: true,
            badge: "Our Service",
            items: [
              { text: "Call us (answer in 2 mins, 24/7)", checked: true },
              { text: "We tell you exactly what to do", checked: true },
              { text: "We call insurer for you", checked: true },
              { text: "We submit documents", checked: true },
              { text: "We follow up daily", checked: true },
              { text: "You just collect repaired car", checked: true },
            ],
            footer: "Average claim time: 7-10 days",
          },
        ],
      },
      {
        id: "claims-stats",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Time Saved: 5-10 Hours | Claim Success Rate: 95% vs 78% DIY",
        content: "The difference isn't just convenience - it's outcomes. Our clients have a **95% claim success rate** compared to **78% for DIY claims**. When thousands of ringgit are on the line, this matters.",
      },
      {
        id: "bad-agents",
        title: "The Honest Truth About Agents",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Pushes most expensive policy regardless of needs", checked: false },
          { text: "Represents 20+ different insurers (jack of all trades)", checked: false },
          { text: "Disappears after you buy", checked: false },
          { text: "Doesn't explain policy exclusions", checked: false },
          { text: "Takes 24+ hours to respond", checked: false },
          { text: "Can't explain why they recommend an insurer", checked: false },
        ],
      },
      {
        id: "good-agents",
        title: "What Good Agents Do Differently",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🎯",
            title: "Specialization",
            description: "We only handle Zurich and Allianz. Deep product knowledge, direct contacts at claims departments, know exactly how each processes claims.",
          },
          {
            icon: "📊",
            title: "Track Record",
            description: "1,000+ motor claims handled. 150+ rejected claims appealed successfully. 24/7 actual availability (not call center). 95% claim success rate.",
          },
          {
            icon: "🔍",
            title: "Transparency",
            description: "Earn same commission regardless of which insurer you choose. Tell you when cheaper option is fine. Show you the exclusions.",
          },
          {
            icon: "⚡",
            title: "Response Time",
            description: "WhatsApp response in minutes, not hours. Personal phone support 24/7. Same person handles your case from start to finish.",
          },
        ],
      },
      {
        id: "when-online-ok",
        title: "When Online is Fine",
        type: "numberedList",
        description: "You probably don't need an agent if:",
        steps: [
          {
            number: 1,
            title: "Perfect Renewal",
            description: "Same car, same usage, no claims last year, no changes in coverage needs, policy was good fit before.",
            tips: [],
          },
          {
            number: 2,
            title: "Second/Third Car",
            description: "Already have main car with agent. This is spare car, low value, rarely driven, just need basic coverage.",
            tips: [],
          },
          {
            number: 3,
            title: "You're an Expert",
            description: "You work in insurance, you've handled claims yourself before, you understand all terms, you have time to research.",
            tips: [],
          },
        ],
      },
      {
        id: "for-everyone-else",
        title: "",
        type: "callout",
        variant: "success",
        title2: "For Everyone Else?",
        content: "An agent saves you time, money, and stress **when it matters**. The RM50-150 annual difference is insurance for your insurance.",
      },
      {
        id: "cost-comparison",
        title: "The Real Cost Comparison: Honda City Comprehensive",
        type: "table",
        tableData: {
          headers: ["Factor", "Online Platform", "With Agent (Us)"],
          rows: [
            ["Premium", "RM1,180", "RM1,250"],
            ["Time to buy", "10 mins", "30 mins consultation"],
            ["Coverage review", "Read policy yourself", "We explain everything"],
            ["When accident happens", "Call insurer", "Call us (24/7)"],
            ["Claims guidance", "None", "Full support"],
            ["Document submission", "You handle", "We handle"],
            ["If claim rejected", "Appeal yourself", "We appeal for you"],
            ["Average claim time", "14-21 days", "7-10 days"],
          ],
          footnote: "Price difference: RM70/year (RM5.80/month). Value when you need it: Priceless.",
        },
      },
      {
        id: "why-different",
        title: "Why We're Different",
        type: "text",
        content: [
          "Most agents sell 10+ insurers - jack of all trades, master of none.",
          "**We specialize exclusively in Zurich and Allianz:** Both are premium insurers with excellent claim records, 24/7 support, extensive panel workshop networks, and strong financial backing.",
          "**Our focus:** Being the absolute best at these two, rather than mediocre at fifteen. This means direct contacts at claims departments, knowing which department head to escalate to, understanding internal approval processes, getting claims approved faster, and predicting outcomes accurately.",
        ],
      },
      {
        id: "making-choice",
        title: "Making the Choice",
        type: "numberedList",
        description: "Ask yourself:",
        steps: [
          {
            number: 1,
            title: "\"If I have an accident at midnight, who do I call?\"",
            description: "Online platform: Good luck finding their number. Agent: One WhatsApp message, we respond in minutes.",
            tips: [],
          },
          {
            number: 2,
            title: "\"If my claim gets rejected, who helps?\"",
            description: "Online platform: You're on your own. Agent: We've appealed 150+ successfully.",
            tips: [],
          },
          {
            number: 3,
            title: "\"If I don't understand policy terms, who explains?\"",
            description: "Online platform: Read the PDF (47 pages). Agent: We explain in plain English.",
            tips: [],
          },
          {
            number: 4,
            title: "\"If I save RM100 but my claim takes 3 weeks longer, is it worth it?\"",
            description: "Only you can answer this. But remember: time is money too.",
            tips: [],
          },
        ],
      },
      {
        id: "bottom-line",
        title: "The Bottom Line",
        type: "comparison",
        cards: [
          {
            title: "Online Comparison is Perfect For:",
            iconColor: "blue",
            items: [
              { text: "Simple renewals", checked: true },
              { text: "People who understand insurance deeply", checked: true },
              { text: "Those willing to handle claims themselves", checked: true },
              { text: "Absolute lowest price priority", checked: true },
            ],
          },
          {
            title: "Insurance Agents Are Worth It For:",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "First-time car owners", checked: true },
              { text: "Anyone who's had a claim before", checked: true },
              { text: "People who value their time", checked: true },
              { text: "Complex situations", checked: true },
              { text: "Peace of mind", checked: true },
            ],
          },
        ],
      },
      {
        id: "our-take",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Our Take",
        content: "**If you're reading this guide, you probably need an agent.** People who are truly fine with DIY don't research this much.",
      },
      {
        id: "try-us",
        title: "Try Us Risk-Free",
        type: "text",
        content: [
          "Still undecided? Here's our offer:",
          "**Get a Quote From Both:** Get quote from online platform, get quote from us, compare coverage line-by-line, see the actual price difference.",
          "**If we can't justify the difference, we'll tell you to buy online.** Seriously. We'd rather you make the right choice than earn RM70 commission on the wrong policy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are agents more expensive?",
        answer: "Usually RM50-150 more per year. But the coverage is often better for the price, not just more expensive for the same thing. We include benefits like 24/7 claims support that online platforms don't offer.",
      },
      {
        question: "Can I switch from online to agent mid-year?",
        answer: "Yes, at renewal. Or immediately if you're willing to forfeit pro-rated refund. Most people wait for renewal to switch.",
      },
      {
        question: "Do agents earn more commission than online platforms?",
        answer: "No. Commission rates are set by insurers and are the same whether you buy online or through agents. We earn the same either way.",
      },
      {
        question: "What if I bought online but now need help with a claim?",
        answer: "We can assist for a consultation fee (RM150-300 depending on complexity). Or handle your renewal and include claims support going forward.",
      },
      {
        question: "Can I just call my insurer directly instead?",
        answer: "Yes, but you'll deal with call center staff reading scripts. We deal with actual claims managers who know us. The difference in response time and outcomes is significant.",
      },
      {
        question: "Is this just a sales pitch?",
        answer: "Partially. But everything we've said is verifiable. Check the reviews. Ask your friends who've had claims. The truth is the best sales pitch.",
      },
    ],
    ctaTitle: "Get Expert Quote - Compare Yourself",
    ctaDescription: "Get quotes from both online and us. Compare coverage line-by-line. If we can't justify the difference, we'll tell you to buy online.",
  },

  "best-insurance-agent-for-claims-malaysia": {
    id: "best-insurance-agent-for-claims-malaysia",
    slug: "best-insurance-agent-for-claims-malaysia",
    title: "Best Insurance Agent for Claims Malaysia " + new Date().getFullYear(),
    subtitle:
      "Most insurance agents are great at selling policies. Very few are great at helping with claims. This guide shows you how to find an agent who will actually be there when you need them most.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "15 min read",
    metaTitle: `Best Insurance Agent for Claims Malaysia ${new Date().getFullYear()} - How to Choose`,
    metaDescription:
      `Looking for an insurance agent who actually helps with claims? Learn what separates good agents from bad ones, red flags to avoid, and how to find claims-focused agents in Malaysia ${new Date().getFullYear()}.`,
    keywords: [
      "best insurance agent malaysia",
      "insurance agent for claims",
      "car insurance agent",
      "claims support agent",
      "how to choose insurance agent",
      "insurance agent vs online",
    ],
    sections: [
      {
        id: "sales-vs-claims",
        title: "Why \"Claims Agent\" is Different from \"Sales Agent\"",
        type: "comparison",
        cards: [
          {
            title: "The Typical Insurance Agent",
            iconColor: "red",
            items: [
              { text: "Contacts you once a year (renewal time)", checked: false },
              { text: "Pushes whatever policy pays highest commission", checked: false },
              { text: "Gives you insurer hotline when you have accident", checked: false },
              { text: "Represents 10-20 different insurers", checked: false },
              { text: "Knows a little about everything, expert in nothing", checked: false },
            ],
          },
          {
            title: "The Claims-Focused Agent",
            iconColor: "green",
            highlighted: true,
            badge: "What You Want",
            items: [
              { text: "Available 24/7 when accidents happen", checked: true },
              { text: "Recommends based on claims experience, not commission", checked: true },
              { text: "Guides you through entire claims process personally", checked: true },
              { text: "Specializes in few insurers they know deeply", checked: true },
              { text: "Has handled hundreds of actual claims", checked: true },
            ],
          },
        ],
      },
      {
        id: "difference-matters",
        title: "",
        type: "callout",
        variant: "info",
        title2: "When the Difference Matters Most",
        content: "You're standing on the side of the road at 11pm with a damaged car, confused about what to do next. **That's when you'll know if you chose the right agent.**",
      },
      {
        id: "sign-1",
        title: "7 Signs of a Good Claims Agent",
        type: "numberedList",
        description: "Look for these green flags when choosing an agent:",
        steps: [
          {
            number: 1,
            title: "They Can Quote Actual Claim Statistics",
            description: "Ask: \"How many claims did you handle last year?\"",
            tips: [
              "Red flag: \"A lot\" / \"Many\" / Can't give number",
              "Green flag: \"127 claims last year, 95% approval rate\"",
              "Good agents track their performance because it's their competitive advantage",
            ],
          },
          {
            number: 2,
            title: "They Specialize in Few Insurers",
            description: "Ask: \"Which insurers do you represent?\"",
            tips: [
              "Red flag: \"All major insurers\" / \"15+ companies\"",
              "Green flag: \"I specialize in Zurich and Allianz only\"",
              "Specialization = deep knowledge of specific claim processes, direct contacts at claims departments",
            ],
          },
          {
            number: 3,
            title: "They Explain What's NOT Covered",
            description: "Ask: \"What does this policy NOT cover?\"",
            tips: [
              "Red flag: \"Everything is covered, don't worry\"",
              "Green flag: Lists specific exclusions relevant to your situation",
              "Good agents want you to understand limitations BEFORE an accident",
            ],
          },
          {
            number: 4,
            title: "They Have 24/7 Availability",
            description: "Ask: \"If I have an accident at 2am, what do I do?\"",
            tips: [
              "Red flag: \"Call the insurer hotline\"",
              "Green flag: \"Call me directly. Here's my personal number.\"",
              "If your agent isn't available during emergencies, they're a salesperson, not an advisor",
            ],
          },
          {
            number: 5,
            title: "They Ask About Your Situation",
            description: "Good agents ask before quoting, not after.",
            tips: [
              "How you use your car (daily commute, weekend only, e-hailing)",
              "Where you park (covered, open, roadside)",
              "Who else drives (spouse, children, friends)",
              "Any modifications and previous claims history",
            ],
          },
          {
            number: 6,
            title: "They Have Client Testimonials About Claims",
            description: "Ask: \"Can you share feedback from clients you've helped with claims?\"",
            tips: [
              "Red flag: Only has testimonials about price/service",
              "Green flag: Specific stories like \"Helped me appeal rejected claim\"",
              "Look for: \"Guided me through accident at midnight\"",
            ],
          },
          {
            number: 7,
            title: "They're Transparent About Commission",
            description: "Ask: \"Do you earn more if I choose one insurer over another?\"",
            tips: [
              "Red flag: Avoids the question or gets defensive",
              "Green flag: \"Commission is similar across insurers I recommend. I suggest based on fit.\"",
            ],
          },
        ],
      },
      {
        id: "red-flags",
        title: "5 Red Flags to Avoid",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Disappears After Sale - responsive before you buy, then takes 24-48 hours to reply after",
            checked: false,
          },
          {
            text: "Pushes Unnecessary Add-Ons - every policy comes with maximum add-ons at highest coverage",
            checked: false,
          },
          {
            text: "Can't Explain Policy Terms - can't explain betterment, excess, or NCD clearly",
            checked: false,
          },
          {
            text: "Only Talks Price - every conversation focuses on how much cheaper they are",
            checked: false,
          },
          {
            text: "No Claims Experience - new, works part-time, or motor is just a side business",
            checked: false,
          },
        ],
      },
      {
        id: "test-agent",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Test Your Agent",
        content: "Ask: \"Walk me through how you helped a client with their last claim.\" If they can't give specifics, they lack experience. Also try sending a WhatsApp question about your policy AFTER buying - how long do they take to respond?",
      },
      {
        id: "questions-experience",
        title: "Questions to Ask Before Choosing an Agent",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "📊",
            title: "About Their Experience",
            description: "How many motor claims handled? What's your approval rate? Have you appealed rejected claims? How long specializing in motor?",
          },
          {
            icon: "📞",
            title: "About Their Availability",
            description: "Response time for emergencies? Backup if unavailable? How to reach outside office hours? Will you personally handle my claim?",
          },
          {
            icon: "🧠",
            title: "About Their Knowledge",
            description: "Why recommend this insurer? What's NOT covered? Which workshop for my car? How does claims process work step-by-step?",
          },
          {
            icon: "🤝",
            title: "About Their Service",
            description: "What do you do that online platforms don't? What if claim rejected? Help with police reports? How many clients do you have?",
          },
        ],
      },
      {
        id: "questions-note",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Good Agents Welcome These Questions",
        content: "If an agent gets defensive or dismissive when you ask detailed questions, that's a red flag. Good agents are confident in their answers because they have real experience to back them up.",
      },
      {
        id: "how-to-find",
        title: "How to Find Claims-Focused Agents",
        type: "numberedList",
        description: "Four methods to find the right agent:",
        steps: [
          {
            number: 1,
            title: "Ask Friends Who've Had Claims",
            description: "Not friends who've bought insurance. Friends who've actually CLAIMED.",
            tips: [
              "Ask: \"Was your agent helpful during the claim?\"",
              "Ask: \"Did they respond quickly?\"",
              "Ask: \"Would you use them again?\"",
            ],
          },
          {
            number: 2,
            title: "Check Online Reviews",
            description: "Look for specific claims mentions, not generic praise.",
            tips: [
              "Look for: \"Helped me with accident claim\"",
              "Look for: \"Available at midnight when I called\"",
              "Ignore: Generic \"Good service\" or \"Fast response\"",
            ],
          },
          {
            number: 3,
            title: "Test Before Committing",
            description: "Get quotes from 3 agents and evaluate their approach.",
            tips: [
              "Compare response time and questions they ask",
              "Note whether they mention exclusions",
              "Choose most knowledgeable, not necessarily cheapest",
            ],
          },
          {
            number: 4,
            title: "Ask Insurers Directly",
            description: "Call Allianz or Zurich and ask for top-performing agents.",
            tips: [
              "Ask: \"Who are your top-performing agents in my area?\"",
              "Ask: \"Which agents handle the most claims?\"",
              "Insurers know which agents are active in claims support",
            ],
          },
        ],
      },
      {
        id: "what-to-expect",
        title: "What to Expect From a Good Claims Agent",
        type: "comparison",
        cards: [
          {
            title: "When You Buy",
            iconColor: "blue",
            items: [
              { text: "30-60 minute consultation (not 5-minute quote)", checked: true },
              { text: "Detailed needs assessment", checked: true },
              { text: "Clear explanation of coverage AND exclusions", checked: true },
              { text: "Their personal contact number", checked: true },
            ],
          },
          {
            title: "When Accident Happens",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "Answer your call within minutes, 24/7", checked: true },
              { text: "Tell you exactly what to do at the scene", checked: true },
              { text: "Help you lodge claim and submit documents", checked: true },
              { text: "Daily updates and handle any issues", checked: true },
            ],
          },
        ],
      },
      {
        id: "cost-table",
        title: "The Cost of a Good Agent",
        type: "table",
        description: "What you get for RM50-150 more per year:",
        tableData: {
          headers: ["Service", "DIY/Cheap Agent", "Good Claims Agent"],
          rows: [
            ["24/7 availability", "❌", "✅"],
            ["Accident scene guidance", "❌", "✅"],
            ["Claims submission", "Do yourself", "Agent handles"],
            ["Follow-up with insurer", "Do yourself", "Agent handles"],
            ["Appeal rejected claims", "Do yourself", "Agent handles"],
            ["Workshop coordination", "Do yourself", "Agent handles"],
            ["Documentation help", "❌", "✅"],
            ["Average claim time", "14-21 days", "7-10 days"],
          ],
        },
      },
      {
        id: "roi-calculation",
        title: "",
        type: "callout",
        variant: "info",
        title2: "ROI Calculation",
        content: "**DIY claim process:** Research (2hrs) + Insurer calls (3hrs) + Documents (2hrs) + Follow-ups (3hrs) + Workshop (2hrs) = **12 hours**\n\nAt RM50/hour, that's **RM600 of your time**.\n\n**With good agent:** One phone call (10 mins) = **RM8 of your time**.\n\n**Net benefit on one claim:** RM592 saved. Extra premium paid: RM100/year. **Plus:** faster claim, less stress, higher approval rate.",
      },
      {
        id: "our-track-record",
        title: "Why We Focus on Claims",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "📊",
            title: "Our Track Record",
            description: "1,000+ motor claims handled. 150+ rejected claims appealed. 95% approval rate (vs 78% industry). 7-10 day average completion.",
          },
          {
            icon: "🎯",
            title: "Our Specialization",
            description: "Only Zurich and Allianz. Both have excellent claim rates, 24/7 support, extensive workshop networks. We know their processes inside out.",
          },
          {
            icon: "📞",
            title: "Our Availability",
            description: "24/7 phone support (real person). WhatsApp response within 15 minutes. Personal handling, not passed to assistants.",
          },
          {
            icon: "✅",
            title: "Our Guarantee",
            description: "If we can't justify our premium difference with better service, we'll tell you to buy online. Your right choice matters more than our commission.",
          },
        ],
      },
      {
        id: "getting-started",
        title: "How to Get Started",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Free Consultation",
            description: "Tell us about your car, how you use it, previous insurance experience, any claims history, and what matters most to you.",
            tips: [],
          },
          {
            number: 2,
            title: "Honest Recommendation",
            description: "We'll recommend which insurer (Zurich or Allianz) suits you better, which coverage level makes sense, what add-ons you need, and what you can skip.",
            tips: [],
          },
          {
            number: 3,
            title: "Compare Yourself",
            description: "Get our quote alongside online platforms. Compare actual coverage (not just price), what's included vs excluded, service commitment.",
            tips: [],
          },
          {
            number: 4,
            title: "Your Choice",
            description: "Choose what's right for you. If online makes more sense for your situation, we'll tell you honestly.",
            tips: [],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know you're actually good at claims?",
        answer: "Ask us for references. We'll connect you with clients we've helped with claims who can share their experience. Our track record is verifiable.",
      },
      {
        question: "What if I already have an agent but want better claims support?",
        answer: "Switch to us at your next renewal. We'll review your current coverage and suggest improvements. No need to wait if your policy is up for renewal soon.",
      },
      {
        question: "Do you only help with claims for policies you sold?",
        answer: "Primarily yes. But we offer paid consultation (RM150-300) for claims assistance on policies bought elsewhere. We can also handle your next renewal.",
      },
      {
        question: "What's your response time for emergencies?",
        answer: "Under 5 minutes during waking hours. Under 15 minutes overnight. We track this and it's part of our service commitment.",
      },
      {
        question: "How many clients do you have? Will I get personal attention?",
        answer: "We limit our client base specifically to ensure personal attention. Quality over quantity. You won't be just a policy number to us.",
      },
      {
        question: "What happens if you're sick or on holiday?",
        answer: "We have backup coverage. You'll always reach someone who knows your policy. We don't disappear when you need us most.",
      },
    ],
    ctaTitle: "Get Free Claims-Focused Consultation",
    ctaDescription: "Tell us about your situation. We'll give you honest advice on whether you need an agent or if online is fine for you.",
  },

  "zurich-24-hour-roadside-assist-malaysia": {
    id: "zurich-24-hour-roadside-assist-malaysia",
    slug: "zurich-24-hour-roadside-assist-malaysia",
    title: "Zurich 24-Hour Roadside Assist Malaysia: Complete Guide",
    subtitle:
      "Everything you need to know about Zurich's 24-hour roadside assistance - what's covered, how to use it, and real experiences from drivers who've used it.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "10 min read",
    metaTitle: `Zurich 24-Hour Roadside Assist Malaysia ${new Date().getFullYear()} - Complete Guide`,
    metaDescription:
      "Complete guide to Zurich's 24-hour roadside assistance in Malaysia. Learn what's covered, how to use it, response times, and real user experiences.",
    keywords: [
      "zurich roadside assist",
      "zurich 24 hour towing",
      "zurich car insurance roadside",
      "roadside assistance malaysia",
      "zurich breakdown service",
      "zurich towing service",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Quick Summary",
        content:
          "Zurich's 24-Hour Roadside Assist is included FREE with all comprehensive motor policies. It covers towing, flat tire, battery jump-start, lockout, fuel delivery, and minor repairs - available 24/7 across Malaysia.",
      },
      {
        id: "whats-covered",
        title: "What's Covered Under Zurich Roadside Assist",
        type: "tipGrid",
        columns: 3,
        tips: [
          {
            icon: "🚗",
            title: "Towing Service",
            description:
              "Free towing to nearest Zurich panel workshop (up to 150km). For breakdowns and accidents.",
          },
          {
            icon: "🔧",
            title: "Flat Tire Change",
            description:
              "Technician will change to your spare tire. Service is free; you provide the spare.",
          },
          {
            icon: "🔋",
            title: "Battery Jump-Start",
            description:
              "Jump-start service for flat batteries. If battery needs replacement, you pay for new battery only.",
          },
          {
            icon: "🔑",
            title: "Lockout Assistance",
            description:
              "Help when you're locked out of your car. Technician will attempt to unlock without damage.",
          },
          {
            icon: "⛽",
            title: "Emergency Fuel Delivery",
            description:
              "Fuel delivered if you run out. You pay for fuel cost only; delivery is free.",
          },
          {
            icon: "🔩",
            title: "Minor Roadside Repairs",
            description:
              "Basic repairs that can be done roadside (loose connections, minor issues).",
          },
        ],
      },
      {
        id: "coverage-limits",
        title: "Coverage Limits & Fine Print",
        type: "table",
        description: "Important details to know:",
        tableData: {
          headers: ["Service", "Coverage Limit", "Notes"],
          rows: [
            ["Towing distance", "Up to 150km", "To nearest panel workshop"],
            ["Service calls per year", "Unlimited", "No cap on usage"],
            ["Response time target", "45-60 minutes", "Urban areas; may be longer in rural"],
            ["Operating hours", "24/7/365", "Including public holidays"],
            ["Geographic coverage", "Peninsular Malaysia", "Limited coverage in East Malaysia"],
          ],
          footnote: "Coverage details may vary. Check your policy schedule for exact terms.",
        },
      },
      {
        id: "not-covered",
        title: "What's NOT Covered",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Vehicle recovery from off-road locations (ditches, mud, etc.)", checked: false },
          { text: "Cost of replacement parts (battery, tire, etc.)", checked: false },
          { text: "Damage caused during recovery attempts", checked: false },
          { text: "Commercial vehicles over 3.5 tonnes", checked: false },
          { text: "Motorcycles", checked: false },
          { text: "Pre-existing mechanical faults", checked: false },
        ],
      },
      {
        id: "how-to-use",
        title: "How to Use Zurich Roadside Assist",
        type: "numberedList",
        description: "Step-by-step when you need help:",
        steps: [
          {
            number: 1,
            title: "Call the 24-Hour Hotline",
            description: "Call Zurich Roadside Assist at 1-800-22-6888 (toll-free).",
            tips: [
              "Save this number in your phone NOW",
              "Available 24/7 including public holidays",
              "Have your policy number ready",
            ],
          },
          {
            number: 2,
            title: "Provide Your Details",
            description: "Give the operator your information.",
            tips: [
              "Policy number or IC number",
              "Vehicle registration number",
              "Your exact location (use Google Maps if unsure)",
              "Nature of the problem",
            ],
          },
          {
            number: 3,
            title: "Wait for Assistance",
            description: "Stay with your vehicle in a safe location.",
            tips: [
              "Turn on hazard lights",
              "Set up warning triangle if you have one",
              "Stay inside vehicle if on highway",
              "Typical response: 45-60 minutes in urban areas",
            ],
          },
          {
            number: 4,
            title: "Service Completion",
            description: "Once help arrives, they'll assess and assist.",
            tips: [
              "Show your IC and policy documents if requested",
              "Sign the service form",
              "Keep a copy for your records",
            ],
          },
        ],
      },
      {
        id: "hotline",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Save This Number Now",
        content:
          "**Zurich 24-Hour Roadside Assist: 1-800-22-6888**\n\nAdd it to your phone contacts now. When you're stranded at 2am, you'll thank yourself.",
      },
      {
        id: "real-experiences",
        title: "Real User Experiences",
        type: "comparison",
        cards: [
          {
            title: "Positive Experience",
            iconColor: "green",
            items: [
              {
                text: "\"Battery died at Genting at 11pm. Called hotline, help arrived in 50 minutes. Jump-start done in 10 mins. Very impressed.\"",
                description: "- Ahmad, Selangor",
                checked: true,
              },
              {
                text: "\"Flat tire on Federal Highway. Couldn't figure out the jack. Technician came and changed it in 15 mins. No charge.\"",
                description: "- Michelle, KL",
                checked: true,
              },
            ],
          },
          {
            title: "Mixed Experience",
            iconColor: "amber",
            items: [
              {
                text: "\"Waited 2 hours for tow truck in Ipoh. Eventually came and service was good, but the wait was frustrating.\"",
                description: "- Raj, Perak",
                checked: false,
              },
              {
                text: "\"Called at 3am, took multiple calls to get through. But once connected, they dispatched help quickly.\"",
                description: "- Sarah, Penang",
                checked: false,
              },
            ],
          },
        ],
      },
      {
        id: "tips-for-faster",
        title: "Tips for Faster Service",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "📍",
            title: "Know Your Exact Location",
            description:
              "Use Google Maps or Waze to share your exact GPS coordinates. \"Near the Shell station\" isn't helpful.",
          },
          {
            icon: "📱",
            title: "Keep Phone Charged",
            description:
              "A flat phone battery is worse than a flat car battery. Keep a car charger handy.",
          },
          {
            icon: "📋",
            title: "Have Policy Number Ready",
            description:
              "Keep a photo of your policy schedule in your phone. Speeds up verification.",
          },
          {
            icon: "🚨",
            title: "Be Clear About Urgency",
            description:
              "If you're in a dangerous location (highway shoulder), tell them immediately.",
          },
        ],
      },
      {
        id: "vs-other-services",
        title: "Zurich vs Other Roadside Assist Programs",
        type: "table",
        tableData: {
          headers: ["Feature", "Zurich", "AAM", "Allianz Road Rangers"],
          rows: [
            ["Cost", "Free with policy", "RM120-180/year", "Free with policy"],
            ["Towing distance", "150km", "100km", "Unlimited to panel"],
            ["Response target", "45-60 mins", "30-45 mins", "30 mins"],
            ["Coverage area", "Peninsular", "Nationwide", "Peninsular + Sabah/Sarawak"],
            ["Minor repairs", "Yes", "Yes", "Yes"],
            ["Accident management", "No", "No", "Yes (on-site)"],
          ],
        },
      },
      {
        id: "when-to-use",
        title: "When to Use Roadside Assist vs Call Agent",
        type: "comparison",
        cards: [
          {
            title: "Use Roadside Assist Hotline",
            iconColor: "blue",
            items: [
              { text: "Flat tire / Puncture", checked: true },
              { text: "Dead battery", checked: true },
              { text: "Locked out of car", checked: true },
              { text: "Run out of fuel", checked: true },
              { text: "Minor breakdown (non-accident)", checked: true },
            ],
          },
          {
            title: "Call Your Agent First",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "After an accident", checked: true },
              { text: "If another vehicle is involved", checked: true },
              { text: "If there are injuries", checked: true },
              { text: "If you need claims guidance", checked: true },
              { text: "If you're unsure what to do", checked: true },
            ],
          },
        ],
      },
      {
        id: "agent-value",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Why Call Your Agent for Accidents",
        content:
          "Roadside Assist handles the towing. But your agent guides you through police reports, claims forms, workshop selection, and ensures you don't make mistakes that could affect your claim. **For accidents, call your agent first, then roadside assist.**",
      },
      {
        id: "east-malaysia",
        title: "Coverage in East Malaysia",
        type: "text",
        content: [
          "Zurich Roadside Assist has limited coverage in Sabah and Sarawak. While the hotline is accessible, response times may be significantly longer and not all services may be available in remote areas.",
          "If you're frequently in East Malaysia, consider Allianz which has better coverage in Sabah and Sarawak through their Road Rangers network.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Zurich Roadside Assist really free?",
        answer:
          "Yes, it's included at no extra cost with all Zurich comprehensive motor insurance policies. You don't need to add it or pay extra.",
      },
      {
        question: "How many times can I use it per year?",
        answer:
          "There's no limit on the number of service calls per year. Whether it's your first flat tire or your fifth, you're covered.",
      },
      {
        question: "What if I'm not the policyholder but driving the insured car?",
        answer:
          "Roadside Assist covers the vehicle, not the driver. Any authorized driver of the insured vehicle can use the service.",
      },
      {
        question: "Can I choose which workshop to tow to?",
        answer:
          "For free towing, it's to the nearest Zurich panel workshop. If you want to tow to a specific non-panel workshop, you may need to pay the difference.",
      },
      {
        question: "What if I need help in Singapore?",
        answer:
          "Zurich Malaysia Roadside Assist covers Malaysia only. If you're driving in Singapore, you'd need separate coverage or pay for local services.",
      },
      {
        question: "How long does it usually take for help to arrive?",
        answer:
          "Target is 45-60 minutes in urban areas. In rural areas or during peak times (heavy rain, holidays), it may take longer. Our experience: typically 45 mins in KL/Selangor, up to 2 hours in remote areas.",
      },
    ],
    ctaTitle: "Get Zurich Coverage with Expert Claims Support",
    ctaDescription:
      "Roadside Assist is just the beginning. Get comprehensive Zurich coverage with 24/7 agent support for accidents and claims.",
  },

  "allianz-road-rangers-review-malaysia": {
    id: "allianz-road-rangers-review-malaysia",
    slug: "allianz-road-rangers-review-malaysia",
    title: "Allianz Road Rangers Review: Is It Worth It?",
    subtitle:
      "Honest review of Allianz Road Rangers - Malaysia's only on-site accident assistance service. What it covers, real response times, and whether it's worth choosing Allianz for.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "12 min read",
    metaTitle: `Allianz Road Rangers Review Malaysia ${new Date().getFullYear()} - Honest Assessment`,
    metaDescription:
      "Honest review of Allianz Road Rangers in Malaysia. Learn what it covers, real response times, and whether it's worth choosing Allianz for.",
    keywords: [
      "allianz road rangers",
      "allianz road rangers review",
      "allianz accident assistance",
      "allianz roadside assist malaysia",
      "road rangers malaysia",
      "allianz towing service",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Quick Verdict",
        content:
          "Allianz Road Rangers is **the best roadside/accident assistance** in Malaysian car insurance. It's the only service that sends a trained responder to accident scenes to help with everything - not just towing. If claims support matters to you, this is a major reason to choose Allianz.",
      },
      {
        id: "what-is-it",
        title: "What is Allianz Road Rangers?",
        type: "text",
        content: [
          "Road Rangers is Allianz's premium roadside and accident assistance service, included FREE with all comprehensive motor policies. Unlike standard roadside assist that just sends a tow truck, Road Rangers sends a trained responder who helps you handle the entire accident situation.",
          "Think of it as having a claims expert show up at your accident scene - they guide you on what to do, help with documentation, coordinate with police, and manage the entire process.",
        ],
      },
      {
        id: "what-makes-different",
        title: "What Makes Road Rangers Different",
        type: "comparison",
        cards: [
          {
            title: "Standard Roadside Assist",
            iconColor: "gray",
            items: [
              { text: "Sends tow truck driver", checked: true },
              { text: "Tows your car to workshop", checked: true },
              { text: "You handle police report yourself", checked: false },
              { text: "You handle other driver yourself", checked: false },
              { text: "You figure out claims process yourself", checked: false },
              { text: "No guidance at scene", checked: false },
            ],
          },
          {
            title: "Allianz Road Rangers",
            iconColor: "green",
            highlighted: true,
            badge: "Full Service",
            items: [
              { text: "Sends trained Road Ranger responder", checked: true },
              { text: "Coordinates towing to panel workshop", checked: true },
              { text: "Guides you through police report", checked: true },
              { text: "Helps exchange info with other driver", checked: true },
              { text: "Explains claims process on the spot", checked: true },
              { text: "Documents accident scene properly", checked: true },
            ],
          },
        ],
      },
      {
        id: "services-covered",
        title: "Full List of Road Rangers Services",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🚨",
            title: "Accident Response",
            description:
              "Road Ranger comes to accident scene, assesses situation, provides immediate guidance on what to do next.",
          },
          {
            icon: "📋",
            title: "Documentation Help",
            description:
              "Helps you document the scene properly - photos, measurements, witness details for claims.",
          },
          {
            icon: "👮",
            title: "Police Report Guidance",
            description:
              "Advises whether police report needed, accompanies you if required, ensures report is complete.",
          },
          {
            icon: "🚗",
            title: "Towing Coordination",
            description:
              "Arranges towing to nearest Allianz panel workshop. Unlimited distance for accident towing.",
          },
          {
            icon: "🔧",
            title: "Standard Roadside Assist",
            description:
              "Flat tire, battery jump-start, lockout, fuel delivery, minor repairs - all covered.",
          },
          {
            icon: "📱",
            title: "Claims Initiation",
            description:
              "Starts your claims process on the spot. No paperwork confusion later.",
          },
        ],
      },
      {
        id: "response-times",
        title: "Real Response Times",
        type: "table",
        description: "Based on actual user reports and our experience:",
        tableData: {
          headers: ["Location", "Target Time", "Typical Actual Time"],
          rows: [
            ["KL City Center", "30 mins", "20-40 mins"],
            ["Selangor suburbs", "30 mins", "25-45 mins"],
            ["Penang/JB urban", "30 mins", "30-50 mins"],
            ["Highway (Peninsular)", "45 mins", "30-60 mins"],
            ["Rural Peninsular", "60 mins", "45-90 mins"],
            ["Sabah/Sarawak urban", "45 mins", "40-70 mins"],
          ],
          footnote: "Times vary based on traffic, weather, and responder availability.",
        },
      },
      {
        id: "response-note",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Response Time Reality",
        content:
          "30 minutes is the target, not a guarantee. In our experience handling 500+ Road Rangers calls, **80% arrive within 45 minutes** in urban areas. The real value isn't speed - it's having someone competent show up who knows exactly what to do.",
      },
      {
        id: "real-experiences",
        title: "Real User Experiences",
        type: "comparison",
        cards: [
          {
            title: "Positive Reviews",
            iconColor: "green",
            items: [
              {
                text: "\"Got rear-ended at traffic light. Road Ranger arrived in 25 mins, helped me exchange details with the other driver, took photos, explained the claim process. I was clueless and he handled everything.\"",
                description: "- Daniel, KL",
                checked: true,
              },
              {
                text: "\"My first accident ever. Panicking on the highway shoulder. Road Ranger calmed me down, made sure I was safe first, then handled everything systematically. Worth every sen.\"",
                description: "- Priya, Selangor",
                checked: true,
              },
            ],
          },
          {
            title: "Constructive Feedback",
            iconColor: "amber",
            items: [
              {
                text: "\"Waited 70 minutes in Kajang. Good service when he arrived, but the wait was stressful. They said traffic jam.\"",
                description: "- Wei Ming, Selangor",
                checked: false,
              },
              {
                text: "\"Minor fender bender, Road Ranger said police report not needed. Later workshop asked for it. Some confusion on requirements.\"",
                description: "- Farah, Penang",
                checked: false,
              },
            ],
          },
        ],
      },
      {
        id: "how-to-use",
        title: "How to Use Road Rangers",
        type: "numberedList",
        description: "When you have an accident or breakdown:",
        steps: [
          {
            number: 1,
            title: "Ensure Safety First",
            description: "Move to safe location if possible. Turn on hazard lights.",
            tips: [
              "Don't move vehicles if serious accident (wait for police)",
              "Check for injuries - call ambulance (999) if needed",
              "Set up warning triangle if you have one",
            ],
          },
          {
            number: 2,
            title: "Call Road Rangers Hotline",
            description: "Call 1-800-22-5542 (toll-free, 24/7).",
            tips: [
              "Save this number in your phone NOW",
              "Have policy number or IC ready",
              "Describe your exact location (use Waze/Google Maps)",
            ],
          },
          {
            number: 3,
            title: "Wait for Road Ranger",
            description: "Stay safe while waiting for responder to arrive.",
            tips: [
              "Stay in vehicle if on highway",
              "Don't argue with other driver",
              "Take photos while waiting if safe to do so",
              "Note down other vehicle's plate number",
            ],
          },
          {
            number: 4,
            title: "Road Ranger Handles Everything",
            description: "Once Road Ranger arrives, they take over.",
            tips: [
              "They'll assess the situation",
              "Guide you on police report if needed",
              "Help exchange information",
              "Arrange towing if required",
              "Start claims documentation",
            ],
          },
        ],
      },
      {
        id: "hotline",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Save This Number",
        content:
          "**Allianz Road Rangers: 1-800-22-5542**\n\nFree, 24/7, 365 days. Add it to your contacts now - you'll need it when you least expect it.",
      },
      {
        id: "vs-competitors",
        title: "Road Rangers vs Competitors",
        type: "table",
        tableData: {
          headers: ["Feature", "Allianz Road Rangers", "Zurich Roadside", "Etiqa ERV"],
          rows: [
            ["On-site accident responder", "✅ Yes", "❌ No", "❌ No"],
            ["Claims guidance at scene", "✅ Yes", "❌ No", "❌ No"],
            ["Towing included", "✅ Unlimited", "✅ 150km", "✅ 200km"],
            ["Response time target", "30 mins", "45-60 mins", "45 mins"],
            ["Sabah/Sarawak coverage", "✅ Yes", "Limited", "Limited"],
            ["Cost", "Free", "Free", "Free"],
            [
              { text: "Overall rating", badge: "Best", badgeColor: "green" },
              "⭐⭐⭐⭐⭐",
              "⭐⭐⭐⭐",
              "⭐⭐⭐⭐",
            ],
          ],
        },
      },
      {
        id: "why-matters",
        title: "Why Road Rangers Matters",
        type: "text",
        content: [
          "Most people buy car insurance hoping they'll never use it. But when accidents happen, the experience is often stressful and confusing - especially for first-time claimants.",
          "Road Rangers bridges this gap by providing expert help at the moment you need it most. Instead of frantically Googling \"what to do after car accident Malaysia\" while standing on the roadside, you have a professional guiding you through every step.",
        ],
      },
      {
        id: "when-valuable",
        title: "When Road Rangers is Most Valuable",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🆕",
            title: "First-Time Claimants",
            description:
              "Never filed a claim before? Road Ranger ensures you don't make costly mistakes.",
          },
          {
            icon: "😰",
            title: "Stressful Situations",
            description:
              "Other driver being aggressive? Language barrier? Road Ranger mediates.",
          },
          {
            icon: "🤔",
            title: "Unclear Fault Situations",
            description:
              "Not sure who's at fault? Road Ranger helps document everything properly.",
          },
          {
            icon: "🏞️",
            title: "Remote Locations",
            description:
              "Accident in unfamiliar area? Road Ranger knows the local procedures.",
          },
        ],
      },
      {
        id: "limitations",
        title: "Limitations to Know",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Response times not guaranteed - traffic and availability affect actual arrival",
            checked: false,
          },
          {
            text: "Road Ranger is not a lawyer - can't provide legal advice in disputes",
            checked: false,
          },
          {
            text: "Won't handle negotiations with third party for settlement",
            checked: false,
          },
          {
            text: "Rural/remote areas may have longer wait times",
            checked: false,
          },
        ],
      },
      {
        id: "our-recommendation",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Our Recommendation",
        content:
          "Road Rangers is a **genuine differentiator** for Allianz. If you're choosing between insurers with similar prices, Road Rangers tips the balance in Allianz's favor. For first-time drivers, nervous drivers, or anyone who wants peace of mind - it's worth it.\n\n**Combine Road Rangers with a good insurance agent**, and you have the best possible support system when accidents happen.",
      },
    ],
    faqs: [
      {
        question: "Is Road Rangers really free?",
        answer:
          "Yes, Road Rangers is included at no extra cost with all Allianz comprehensive motor insurance policies. No add-on purchase needed.",
      },
      {
        question: "Can I use Road Rangers for non-accidents?",
        answer:
          "Yes! Road Rangers covers standard roadside assistance too - flat tire, battery jump-start, lockout, fuel delivery, minor breakdowns.",
      },
      {
        question: "What if the Road Ranger takes too long?",
        answer:
          "If you've waited beyond 60 minutes in an urban area, call the hotline again to check status. In our experience, delays are usually due to traffic or multiple simultaneous calls in the area.",
      },
      {
        question: "Will the Road Ranger deal with the other driver for me?",
        answer:
          "The Road Ranger will help facilitate information exchange and can mediate if there's tension, but they won't negotiate fault or settlement on your behalf.",
      },
      {
        question: "Does Road Rangers cover me in Singapore?",
        answer:
          "No, Road Rangers covers Malaysia only. If you're driving in Singapore, you'd need local services.",
      },
      {
        question: "What if I have an accident at 3am?",
        answer:
          "Road Rangers operates 24/7, 365 days including public holidays. Night calls are handled the same as daytime - though response times may vary.",
      },
    ],
    ctaTitle: "Get Allianz with Road Rangers Support",
    ctaDescription:
      "Experience the best accident assistance in Malaysia. Get your free Allianz quote with expert agent support.",
  },

  "allianz-ev-shield-explained-malaysia": {
    id: "allianz-ev-shield-explained-malaysia",
    slug: "allianz-ev-shield-explained-malaysia",
    title: "Allianz EV Shield Explained: Complete Guide",
    subtitle:
      "Everything you need to know about Allianz EV Shield - Malaysia's most comprehensive EV insurance add-on. Coverage details, costs, and who it's for.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "10 min read",
    metaTitle: `Allianz EV Shield Explained Malaysia ${new Date().getFullYear()} - Complete Guide`,
    metaDescription:
      "Complete guide to Allianz EV Shield in Malaysia. Learn what's covered, costs, and whether it's worth adding to your EV insurance.",
    keywords: [
      "allianz ev shield",
      "allianz electric vehicle insurance",
      "ev insurance malaysia",
      "allianz ev coverage",
      "electric car insurance malaysia",
      "ev charger insurance",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Quick Summary",
        content:
          "Allianz EV Shield is a comprehensive add-on for electric vehicle owners that covers your EV battery, home charger, charging cables, and even provides mobile charging assistance. It's one of the most complete EV protection packages in Malaysia.",
      },
      {
        id: "what-is-it",
        title: "What is Allianz EV Shield?",
        type: "text",
        content: [
          "EV Shield is Allianz's dedicated add-on coverage for electric vehicles. It addresses the unique risks that EV owners face - things that standard car insurance doesn't cover, like battery damage, charger theft, and charging-related incidents.",
          "Think of it as an extension to your comprehensive motor insurance that's specifically designed for the EV ownership experience.",
        ],
      },
      {
        id: "coverage-details",
        title: "What's Covered Under EV Shield",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🔋",
            title: "EV Battery Coverage",
            description:
              "Covers battery damage from accidents, fire, theft. Up to RM50,000 for battery replacement/repair costs.",
          },
          {
            icon: "🔌",
            title: "Home Charger Protection",
            description:
              "Covers your home wallbox charger against damage, theft, fire, and electrical issues. Up to RM10,000.",
          },
          {
            icon: "🔗",
            title: "Charging Cable Coverage",
            description:
              "Covers portable charging cables against theft, damage, electrical faults. Up to RM5,000.",
          },
          {
            icon: "⚡",
            title: "Public Charging Incidents",
            description:
              "Coverage for incidents at public charging stations - damage from faulty equipment. Up to RM5,000.",
          },
          {
            icon: "🚗",
            title: "Mobile Charging Service",
            description:
              "Emergency mobile charging if you run flat (in covered areas). Get enough charge to reach a charging station.",
          },
          {
            icon: "🚛",
            title: "Flatbed Towing",
            description:
              "Guaranteed flatbed towing for EVs (wheel-lift towing can damage EV drivetrain). Unlimited distance to Allianz panel.",
          },
        ],
      },
      {
        id: "coverage-limits",
        title: "Coverage Limits & Details",
        type: "table",
        description: "Specific coverage amounts:",
        tableData: {
          headers: ["Coverage Item", "Limit", "Excess"],
          rows: [
            ["EV Battery", "Up to RM50,000", "As per policy"],
            ["Home Charger (Wallbox)", "Up to RM10,000", "RM500"],
            ["Charging Cables", "Up to RM5,000", "RM200"],
            ["Public Charging Station Incidents", "Up to RM5,000", "RM500"],
            ["Mobile Charging Assistance", "Included", "Nil"],
            ["Flatbed Towing", "Unlimited to panel", "Nil"],
          ],
          footnote: "Limits may vary. Check your policy schedule for exact terms.",
        },
      },
      {
        id: "cost",
        title: "How Much Does EV Shield Cost?",
        type: "text",
        content: [
          "EV Shield typically costs **RM150-300 per year** depending on your vehicle and coverage level. Given that EV batteries alone can cost RM30,000-80,000 to replace, this is relatively affordable protection.",
          "The exact premium depends on your EV model, age of vehicle, and sum insured.",
        ],
      },
      {
        id: "cost-breakdown",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Cost vs Protection",
        content:
          "**EV Shield cost:** ~RM200/year\n\n**What it protects:**\n- EV Battery: RM30,000-80,000\n- Home Charger: RM3,000-8,000\n- Charging Cable: RM500-2,000\n\n**ROI:** One battery incident and EV Shield pays for itself 150x over.",
      },
      {
        id: "not-covered",
        title: "What's NOT Covered",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Normal battery degradation over time (capacity loss)", checked: false },
          { text: "Software/firmware issues", checked: false },
          { text: "Damage from using non-approved chargers", checked: false },
          { text: "Cosmetic damage to charger that doesn't affect function", checked: false },
          { text: "Commercial EVs (e-hailing, company fleets)", checked: false },
          { text: "Modifications not approved by manufacturer", checked: false },
        ],
      },
      {
        id: "battery-note",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Battery Degradation Note",
        content:
          "EV Shield covers **damage** to your battery (accident, fire, flood), not natural degradation. All EV batteries lose capacity over time - this is normal and not an insurable event. Most manufacturers warrant batteries for 8 years/160,000km.",
      },
      {
        id: "who-needs",
        title: "Who Should Get EV Shield?",
        type: "comparison",
        cards: [
          {
            title: "Strongly Recommended For",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "New EV owners (battery still valuable)", checked: true },
              { text: "Home charger installed (wallbox protection)", checked: true },
              { text: "Frequent public charging users", checked: true },
              { text: "Living in flood-prone areas", checked: true },
              { text: "Premium EVs (Tesla, Mercedes EQ, BMW i)", checked: true },
            ],
          },
          {
            title: "Optional For",
            iconColor: "blue",
            items: [
              { text: "Older EVs with degraded battery (less to protect)", checked: false },
              { text: "Only charging at work (no home charger)", checked: false },
              { text: "Budget EVs with cheaper battery replacement", checked: false },
              { text: "Leased EVs (check if lessor requires it)", checked: false },
            ],
          },
        ],
      },
      {
        id: "vs-others",
        title: "EV Shield vs Other EV Coverage",
        type: "table",
        tableData: {
          headers: ["Feature", "Allianz EV Shield", "Etiqa EV", "MSIG EV Protect"],
          rows: [
            ["Battery coverage", "RM50,000", "Included in SI", "RM30,000"],
            ["Home charger", "RM10,000", "RM5,000 (new EV only)", "RM5,000"],
            ["Charging cable", "RM5,000", "RM2,000", "RM3,000"],
            ["Public charging incidents", "RM5,000", "Not specified", "RM5,000"],
            ["Mobile charging", "✅ Yes", "❌ No", "❌ No"],
            ["Flatbed guarantee", "✅ Yes", "✅ Yes", "✅ Yes"],
            ["Road Rangers support", "✅ Yes", "❌ No", "❌ No"],
          ],
        },
      },
      {
        id: "advantages",
        title: "Allianz EV Shield Advantages",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "💰",
            title: "Highest Battery Limit",
            description:
              "RM50,000 battery coverage is the highest in the market - important for premium EVs.",
          },
          {
            icon: "⚡",
            title: "Mobile Charging",
            description:
              "Unique feature: emergency mobile charging if you run flat. Not offered by competitors.",
          },
          {
            icon: "🛣️",
            title: "Road Rangers Integration",
            description:
              "EV Shield comes with Allianz Road Rangers - on-site accident assistance for EVs.",
          },
          {
            icon: "🔌",
            title: "Comprehensive Charger Coverage",
            description:
              "Covers home charger AND cables - some competitors only cover one.",
          },
        ],
      },
      {
        id: "how-to-claim",
        title: "How to Claim Under EV Shield",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Report the Incident",
            description: "Contact your agent or Allianz hotline immediately after any incident.",
            tips: [
              "For accidents: Call Road Rangers 1-800-22-5542",
              "For theft: Lodge police report within 24 hours",
              "For charger damage: Document with photos",
            ],
          },
          {
            number: 2,
            title: "Document Everything",
            description: "Take comprehensive evidence for your claim.",
            tips: [
              "Photos of all damage",
              "Serial numbers of damaged equipment",
              "Purchase receipts for charger/cables",
              "Police report (if applicable)",
            ],
          },
          {
            number: 3,
            title: "Submit Claim Form",
            description: "Your agent will help you complete the EV Shield claim form.",
            tips: [
              "Separate claim form for EV Shield items",
              "Original receipts for equipment",
              "Repair quotes from authorized service center",
            ],
          },
          {
            number: 4,
            title: "Assessment & Approval",
            description: "Allianz will assess your claim.",
            tips: [
              "May require inspection for battery claims",
              "Typical processing: 7-14 days",
              "Payment direct to service center or reimbursement",
            ],
          },
        ],
      },
      {
        id: "common-claims",
        title: "Common EV Shield Claims",
        type: "comparison",
        cards: [
          {
            title: "Battery Claims",
            iconColor: "red",
            items: [
              { text: "Flood damage to battery pack", checked: true },
              { text: "Accident impact to battery", checked: true },
              { text: "Fire damage", checked: true },
              { text: "Road debris puncturing battery", checked: true },
            ],
          },
          {
            title: "Charger Claims",
            iconColor: "blue",
            items: [
              { text: "Home charger stolen", checked: true },
              { text: "Lightning surge damage", checked: true },
              { text: "Vandalism to public charging", checked: true },
              { text: "Cable theft while charging", checked: true },
            ],
          },
        ],
      },
      {
        id: "tips",
        title: "Tips for EV Shield Owners",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "📸",
            title: "Document Your Setup",
            description:
              "Take photos of your home charger installation, cables, and receipts. Keep in cloud storage.",
          },
          {
            icon: "🔢",
            title: "Record Serial Numbers",
            description:
              "Note down serial numbers of your charger and cables. Makes theft claims easier.",
          },
          {
            icon: "⚡",
            title: "Use Approved Equipment",
            description:
              "Only use manufacturer-approved chargers. Non-approved equipment may void coverage.",
          },
          {
            icon: "🚨",
            title: "Report Quickly",
            description:
              "Report incidents promptly. Delayed reporting can complicate claims.",
          },
        ],
      },
      {
        id: "verdict",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Our Verdict",
        content:
          "Allianz EV Shield is the **most comprehensive EV add-on** in Malaysia. The combination of high battery coverage (RM50,000), mobile charging, and Road Rangers support makes it the top choice for EV owners.\n\nAt ~RM200/year, it's a small price for peace of mind when your EV battery alone costs RM30,000-80,000.",
      },
    ],
    faqs: [
      {
        question: "Is EV Shield mandatory for EVs?",
        answer:
          "No, EV Shield is an optional add-on. You can insure your EV with just standard comprehensive coverage. But given the unique risks of EVs (expensive batteries, charging equipment), we strongly recommend it.",
      },
      {
        question: "Does EV Shield cover battery degradation?",
        answer:
          "No. Battery capacity loss over time is normal and not covered. EV Shield covers sudden damage - accidents, fire, flood, theft. Normal degradation is usually covered by manufacturer warranty (8 years/160,000km for most EVs).",
      },
      {
        question: "Can I get EV Shield for a used EV?",
        answer:
          "Yes, EV Shield is available for both new and used EVs. The premium may vary based on the vehicle's age and battery condition.",
      },
      {
        question: "What if I don't have a home charger?",
        answer:
          "You can still get EV Shield for battery and public charging coverage. The home charger component simply won't apply. You might get a slightly lower premium.",
      },
      {
        question: "Does EV Shield cover Tesla Supercharger incidents?",
        answer:
          "Yes, public charging incidents are covered up to RM5,000. This includes damage from any public charging station including Tesla Superchargers.",
      },
      {
        question: "How does mobile charging assistance work?",
        answer:
          "If you run flat in a covered area, call Road Rangers and they'll dispatch mobile charging assistance to give you enough charge to reach the nearest charging station. Coverage areas are primarily urban Peninsular Malaysia.",
      },
    ],
    ctaTitle: "Get Allianz EV Shield Quote",
    ctaDescription:
      "Protect your EV investment with Malaysia's most comprehensive EV coverage. Get your free quote today.",
  },

  "flood-car-insurance-malaysia": {
    id: "flood-car-insurance-malaysia",
    slug: "flood-car-insurance-malaysia",
    title: "Flood Car Insurance Malaysia - Is Your Car Covered?",
    subtitle:
      "Malaysia's monsoon seasons are getting worse. December 2021's floods caused over RM500 million in vehicle damage alone. Yet many car owners discover their \"comprehensive\" insurance doesn't cover floods - only after it's too late. This guide explains exactly what covers flood damage, how to make sure you're protected, and what to do if your car gets flooded.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "15 min read",
    metaTitle: `Flood Car Insurance Malaysia ${new Date().getFullYear()} - Is Your Car Covered?`,
    metaDescription:
      "Is your car covered for flood damage in Malaysia? Complete guide to Special Perils coverage, how to claim flood damage, and which insurers offer the best protection.",
    keywords: [
      "flood car insurance malaysia",
      "special perils coverage",
      "flood damage car insurance",
      "car insurance flood claim",
      "natural disaster car insurance",
      "monsoon car insurance malaysia",
    ],
    sections: [
      {
        id: "shocking-truth",
        title: "The Shocking Truth: \"Comprehensive\" Doesn't Cover Floods",
        type: "comparison",
        cards: [
          {
            title: "What Most People Assume",
            iconColor: "red",
            items: [
              {
                text: "\"I have comprehensive insurance, so I'm covered for everything.\"",
                checked: false,
              },
            ],
          },
          {
            title: "The Reality",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "Standard comprehensive covers: Accidents, Theft, Fire, Third-party liability", checked: true },
              { text: "Standard comprehensive does NOT cover: Flood, Storm, Landslide, Earthquake", checked: false },
              { text: "You need \"Special Perils\" add-on for flood coverage", checked: true },
            ],
          },
        ],
      },
      {
        id: "warning",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Important",
        content:
          "**You need \"Special Perils\" add-on for flood coverage.** Without it, your comprehensive insurance will NOT pay for flood damage to your car.",
      },
      {
        id: "what-is-special-perils",
        title: "What is Special Perils Coverage?",
        type: "text",
        content: [
          "Special Perils is an optional add-on to your comprehensive policy that covers damage from natural disasters. It's surprisingly affordable but absolutely essential if you live in or drive through flood-prone areas.",
        ],
      },
      {
        id: "covered-events",
        title: "Events Covered by Special Perils",
        type: "tipGrid",
        columns: 3,
        tips: [
          {
            icon: "🌊",
            title: "Flood",
            description: "Rising water, flash floods, drainage overflow",
          },
          {
            icon: "⛈️",
            title: "Storm/Tempest",
            description: "Wind damage, hail, heavy rain damage",
          },
          {
            icon: "🌀",
            title: "Typhoon/Hurricane",
            description: "Rare in Malaysia but covered",
          },
          {
            icon: "⛰️",
            title: "Landslide/Landslip",
            description: "Ground movement damage",
          },
          {
            icon: "🕳️",
            title: "Subsidence",
            description: "Sinking ground damage",
          },
          {
            icon: "🌋",
            title: "Volcanic/Earthquake",
            description: "Extremely rare but covered",
          },
        ],
      },
      {
        id: "not-covered-special-perils",
        title: "NOT Covered (Even with Special Perils)",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Driving into visible flood waters intentionally", checked: false },
          { text: "Damage from driving through flooded areas (engine hydrolocking)", checked: false },
          { text: "Wear and tear accelerated by water exposure", checked: false },
          { text: "Mold/mildew from delayed repairs", checked: false },
          { text: "Personal belongings in car", checked: false },
        ],
      },
      {
        id: "critical-distinction",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Critical Distinction",
        content:
          "✅ **Covered:** Car parked, flood waters rise and damage it\n\n❌ **Not covered:** You drive into flood water and engine dies",
      },
      {
        id: "cost-table",
        title: "How Much Does Special Perils Cost?",
        type: "table",
        description: "Special Perils is surprisingly affordable - roughly 0.1% of your car's value per year:",
        tableData: {
          headers: ["Car Value", "Typical Special Perils Premium"],
          rows: [
            ["RM50,000", "RM50-80/year"],
            ["RM80,000", "RM70-110/year"],
            ["RM100,000", "RM90-140/year"],
            ["RM150,000", "RM120-180/year"],
            ["RM200,000", "RM150-220/year"],
          ],
        },
      },
      {
        id: "cost-analysis",
        title: "Cost vs Risk Analysis",
        type: "comparison",
        cards: [
          {
            title: "Average Flood Repair Costs",
            iconColor: "red",
            items: [
              { text: "Minor (interior water damage): RM3,000-8,000", checked: false },
              { text: "Moderate (electrical + interior): RM10,000-25,000", checked: false },
              { text: "Severe (engine hydrolocked): RM20,000-50,000+", checked: false },
              { text: "Total loss (submerged): Full car value", checked: false },
            ],
          },
          {
            title: "Special Perils Protection",
            iconColor: "green",
            highlighted: true,
            badge: "Worth It",
            items: [
              { text: "Cost: RM100-200/year", checked: true },
              { text: "One flood claim pays for 50-200 years of premium", checked: true },
              { text: "Essential for flood-prone areas", checked: true },
            ],
          },
        ],
      },
      {
        id: "high-risk-areas",
        title: "High-Risk Flood Areas in Malaysia",
        type: "text",
        content: [
          "**Klang Valley - Very High Risk:** Taman Sri Muda (Shah Alam), Kampung Melayu Subang, Klang town areas, Parts of Kajang, Hulu Langat areas",
          "**Klang Valley - High Risk:** Certain areas of Petaling Jaya, Parts of Ampang, Cheras lowlands, Puchong certain sections, Setapak areas",
          "**Other States:** Kelantan & Terengganu (annual monsoon flooding), Pahang (Kuantan, Temerloh, Pekan), Penang (Georgetown certain areas, Jelutong), Johor (Kota Tinggi, Segamat, parts of JB)",
        ],
      },
      {
        id: "risk-check",
        title: "Do You Need Special Perils?",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Do you live in a flood-prone area?", checked: true, description: "If YES, you need Special Perils" },
          { text: "Do you commute through low-lying areas?", checked: true, description: "If YES, you need Special Perils" },
          { text: "Does your workplace parking flood?", checked: true, description: "If YES, you need Special Perils" },
          { text: "Is your home parking at ground level in flood area?", checked: true, description: "If YES, you need Special Perils" },
        ],
      },
      {
        id: "how-to-get",
        title: "How to Get Special Perils Coverage",
        type: "numberedList",
        description: "Two options depending on your situation:",
        steps: [
          {
            number: 1,
            title: "If Buying New Policy",
            description: "Simply request Special Perils add-on when purchasing. All major insurers offer it:",
            tips: [
              "Allianz ✅",
              "Zurich ✅",
              "MSIG ✅",
              "Etiqa ✅",
              "Tokio Marine ✅",
              "RHB Insurance ✅",
              "Lonpac ✅",
            ],
          },
          {
            number: 2,
            title: "If You Already Have a Policy",
            description: "You can add Special Perils mid-term via endorsement.",
            tips: [
              "Contact your insurer or agent",
              "Request Special Perils endorsement",
              "Pay pro-rated premium",
              "Coverage starts immediately",
              "Our recommendation: Add immediately if monsoon season approaching",
            ],
          },
        ],
      },
      {
        id: "best-insurers",
        title: "Which Insurers Have Best Flood Coverage?",
        type: "table",
        tableData: {
          headers: ["Insurer", "Special Perils Availability", "Notes"],
          rows: [
            [{ text: "Allianz Motor Plus", badge: "Best", badgeColor: "green" }, "Bundled (included)", "Best value - no extra cost"],
            ["Zurich Z-Driver", "Optional add-on", "Competitive pricing"],
            [{ text: "MSIG Motor Plus", badge: "Good", badgeColor: "blue" }, "Bundled (included)", "Good coverage"],
            ["Etiqa", "Optional add-on", "Available for Takaful too"],
            ["Others", "Optional add-on", "Standard coverage"],
          ],
          footnote: "Tip: Allianz Motor Plus and MSIG Motor Plus include Special Perils in the package at no extra cost.",
        },
      },
      {
        id: "how-to-claim",
        title: "How to Claim Flood Damage",
        type: "numberedList",
        description: "Follow these steps carefully to ensure your claim is approved:",
        steps: [
          {
            number: 1,
            title: "Document Everything (Before Moving Car)",
            description: "Take photos/videos of damage before doing anything else.",
            tips: [
              "Water level marks on car",
              "Surrounding flood conditions",
              "Interior water damage",
              "Dashboard/electronics",
              "Engine bay if accessible",
              "Timestamp everything",
              "DON'T START THE ENGINE - this can cause additional damage not covered",
            ],
          },
          {
            number: 2,
            title: "File Police Report (Within 24 Hours)",
            description: "Go to nearest police station with IC, driving license, car registration, and photos.",
            tips: [
              "What to say: \"My car was damaged by flood at [location] on [date/time]. The car was parked/stationary when flood waters rose.\"",
              "IMPORTANT: Don't say you drove into flood water",
            ],
          },
          {
            number: 3,
            title: "Contact Insurer or Agent",
            description: "Call immediately with your policy number, location, damage description, and police report number.",
            tips: [
              "Allianz: 1-300-22-5542",
              "Zurich: 1-300-888-622",
              "Or contact your agent directly",
            ],
          },
          {
            number: 4,
            title: "Arrange Towing (Don't Drive)",
            description: "Your insurer will arrange towing to panel workshop.",
            tips: [
              "Do NOT attempt to start the engine",
              "Do NOT drive the car",
              "Do NOT move the car yourself",
              "Even if car looks okay, water damage can cause short circuits and fire risk",
            ],
          },
          {
            number: 5,
            title: "Workshop Assessment",
            description: "Panel workshop will assess damage and submit repair quotation.",
            tips: [
              "Full damage assessment",
              "List affected components",
              "Submit repair quotation to insurer",
              "Wait for approval before repairs begin",
            ],
          },
          {
            number: 6,
            title: "Repair or Total Loss Decision",
            description: "Insurer decides based on repair cost vs car value.",
            tips: [
              "If repairable: Insurer approves, workshop proceeds, you pay excess only",
              "If total loss (repair > 70% of car value): Insurer offers market value payout minus excess",
            ],
          },
        ],
      },
      {
        id: "claim-timeline",
        title: "Typical Flood Claim Timeline",
        type: "table",
        description: "Flood claims take longer than normal claims due to high volume and parts issues:",
        tableData: {
          headers: ["Stage", "Duration"],
          rows: [
            ["Report and towing", "Day 1"],
            ["Workshop assessment", "Day 2-3"],
            ["Insurer approval", "Day 4-7"],
            ["Parts ordering", "Day 8-14"],
            ["Repairs", "Day 15-30"],
            ["Collection", "Day 30-45"],
          ],
          footnote: "During major flood events, expect longer delays due to workshop capacity constraints and parts shortages.",
        },
      },
      {
        id: "damage-levels",
        title: "What to Expect: Repair vs Total Loss",
        type: "comparison",
        cards: [
          {
            title: "Minor Damage (Water Below Seat)",
            iconColor: "green",
            items: [
              { text: "Interior cleaning/sanitizing", checked: true },
              { text: "Carpet replacement", checked: true },
              { text: "Seat foam replacement", checked: true },
              { text: "Basic electrical checks", checked: true },
              { text: "Cost: RM3,000-8,000", checked: true },
              { text: "Usually approved, car saved", checked: true },
            ],
          },
          {
            title: "Moderate Damage (Water at Dashboard)",
            iconColor: "amber",
            items: [
              { text: "All minor damage items", checked: true },
              { text: "Dashboard electronics replacement", checked: true },
              { text: "ECU/computer assessment", checked: true },
              { text: "Wiring checks/replacement", checked: true },
              { text: "Cost: RM10,000-25,000", checked: true },
              { text: "Usually repaired with thorough inspection", checked: true },
            ],
          },
        ],
      },
      {
        id: "severe-damage",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Severe Damage (Engine Submerged)",
        content:
          "**Assessment:** Full electronics replacement, engine internal inspection, transmission check, all sensors and modules, safety systems.\n\n**Cost:** RM25,000-50,000+\n\n**Outcome:** Often total loss if older car.\n\n**Total Loss Calculation:** Car is total loss if repair cost > Market value × 70% (some insurers use 60%)",
      },
      {
        id: "total-loss-example",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Total Loss Example",
        content:
          "**Market value:** RM60,000\n**Threshold (70%):** RM42,000\n**Repair quote:** RM45,000\n**Decision:** Total loss\n\n**You receive:**\n- Market value: RM60,000\n- Minus excess: RM500\n- **Payout: RM59,500**",
      },
      {
        id: "common-problems",
        title: "Common Flood Claim Problems",
        type: "numberedList",
        description: "Issues we've helped clients resolve:",
        steps: [
          {
            number: 1,
            title: "\"You Drove Into Flood Water\"",
            description: "Insurer says: \"Damage caused by driving into visible flood water is excluded.\"",
            tips: [
              "How to avoid: Document that car was parked/stationary",
              "Get witness statements if possible",
              "CCTV footage from parking area",
              "Don't admit to driving through flood",
            ],
          },
          {
            number: 2,
            title: "No Special Perils Coverage",
            description: "Insurer says: \"Your policy doesn't include Special Perils.\"",
            tips: [
              "Solution: Check your policy NOW",
              "If not included, add immediately",
              "Don't wait for monsoon season",
            ],
          },
          {
            number: 3,
            title: "Market Value Dispute",
            description: "Insurer offers less than you believe car is worth.",
            tips: [
              "Get independent valuation",
              "Show similar cars for sale at higher prices",
              "Negotiate with evidence",
              "Escalate to Ombudsman if needed",
            ],
          },
          {
            number: 4,
            title: "Betterment Charges",
            description: "Insurer says: \"You need to pay extra for new parts on old car.\"",
            tips: [
              "Allianz Motor Plus includes Betterment Waiver",
              "Some policies have Betterment cover add-on",
              "Negotiate based on parts availability",
            ],
          },
          {
            number: 5,
            title: "Delayed Repairs",
            description: "Workshop says: \"Parts not available, wait 2 months.\"",
            tips: [
              "Request alternative workshop",
              "Ask insurer to source parts",
              "Negotiate rental car coverage",
              "Document all delays",
            ],
          },
        ],
      },
      {
        id: "how-we-help",
        title: "How We Help With Flood Claims",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🚨",
            title: "Immediate Response",
            description:
              "24/7 availability during flood events. Guide you on documentation. Advise on do's and don'ts. Arrange towing to right workshop.",
          },
          {
            icon: "📋",
            title: "Claims Management",
            description:
              "Submit claims on your behalf. Follow up daily with insurer. Handle documentation. Negotiate repair scope.",
          },
          {
            icon: "⚖️",
            title: "Problem Resolution",
            description:
              "Dispute unfair rejections. Negotiate market value. Handle betterment issues. Escalate if needed.",
          },
          {
            icon: "🛡️",
            title: "Prevention Advice",
            description:
              "Ensure Special Perils coverage. Recommend parking strategies. Pre-monsoon policy review.",
          },
        ],
      },
      {
        id: "prevention-tips",
        title: "Flood Prevention Tips",
        type: "comparison",
        cards: [
          {
            title: "Parking Strategy",
            iconColor: "blue",
            items: [
              { text: "At home: Use elevated parking if available", checked: true },
              { text: "Don't park at ground floor during flood warnings", checked: true },
              { text: "At work: Know your office parking flood history", checked: true },
              { text: "Shopping malls: Don't park at basement during heavy rain", checked: true },
            ],
          },
          {
            title: "Driving Strategy",
            iconColor: "green",
            items: [
              { text: "Avoid known flood areas during heavy rain", checked: true },
              { text: "Check Waze/Google for flood reports", checked: true },
              { text: "Don't drive through standing water", checked: true },
              { text: "Rule: If water is higher than bottom of doors, don't drive through", checked: true },
            ],
          },
        ],
      },
      {
        id: "monsoon-prep",
        title: "Monsoon Season Preparation Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Confirm Special Perils coverage on your policy", checked: true },
          { text: "Save insurer/agent emergency numbers in phone", checked: true },
          { text: "Know nearest elevated parking options", checked: true },
          { text: "Install flood alert apps (Waze, NADMA)", checked: true },
          { text: "Keep torch and basic supplies in car", checked: true },
          { text: "Know your evacuation routes from flood-prone areas", checked: true },
        ],
      },
    ],
    faqs: [
      {
        question: "Is flood damage covered under basic comprehensive?",
        answer:
          "No. You need Special Perils add-on for flood coverage. Standard comprehensive only covers accidents, theft, fire, and third-party liability.",
      },
      {
        question: "Can I add Special Perils mid-year?",
        answer:
          "Yes. Contact your insurer or agent to add via endorsement. Pro-rated premium applies and coverage starts immediately.",
      },
      {
        question: "Will claiming flood damage affect my NCD?",
        answer:
          "Yes, typically. Flood claims are treated like other claims for NCD purposes. Some insurers offer NCD Protector add-ons that can help.",
      },
      {
        question: "What if I drove through flood and engine died?",
        answer:
          "This is generally NOT covered. Driving into visible flood water is excluded. Coverage is for parked/stationary cars affected by rising water.",
      },
      {
        question: "How is market value determined for total loss?",
        answer:
          "Insurers use systems like VSS (Vehicle Sales Statistics) to determine market value based on similar cars sold recently. You can dispute with evidence of higher values.",
      },
      {
        question: "Can I choose my own workshop for flood repairs?",
        answer:
          "For insurance coverage, you typically must use a panel workshop. You can use your own workshop but may need to pay first and claim back.",
      },
      {
        question: "How long do flood repairs take?",
        answer:
          "4-8 weeks typically. During major flood events, can be longer due to parts shortages and workshop backlogs.",
      },
      {
        question: "What if flood damaged my EV battery?",
        answer:
          "EV batteries are sealed and more water-resistant. However, if damaged, it's covered under comprehensive (not Special Perils specifically). Check with an EV-specialized insurer like Allianz EV Shield.",
      },
    ],
    ctaTitle: "Check If You Have Flood Coverage",
    ctaDescription:
      "Get a free policy review and make sure you're protected before the next monsoon season. Don't wait until it's too late.",
  },

  "sst-car-insurance-malaysia": {
    id: "sst-car-insurance-malaysia",
    slug: "sst-car-insurance-malaysia",
    title: "SST on Car Insurance Malaysia - Complete Guide",
    subtitle:
      "SST is calculated on Total Premium (after NCD discount), not Gross Premium. Your NCD discount reduces the base on which SST is calculated - so higher NCD = lower SST too. This guide explains how SST works and strategies to minimize the impact.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "12 min read",
    metaTitle: `SST on Car Insurance Malaysia ${new Date().getFullYear()} - How to Minimize the Impact`,
    metaDescription:
      "Complete guide to SST on car insurance in Malaysia. Learn how the 8% service tax is calculated, strategies to minimize impact, and which add-ons are worth keeping.",
    keywords: [
      "sst car insurance malaysia",
      "car insurance sst",
      "service tax car insurance",
      "car insurance tax malaysia",
      "sst motor insurance",
      "car insurance premium sst",
    ],
    sections: [
      {
        id: "intro",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Key Point",
        content:
          "**SST is calculated on Total Premium (after NCD discount), not Gross Premium.** Your NCD discount reduces the base on which SST is calculated - so higher NCD = lower SST too.",
      },
      {
        id: "strategy-1",
        title: "Strategy 1: Maximize Your NCD",
        type: "text",
        content: [
          "NCD (No Claim Discount) reduces both your premium AND the SST amount. This is the most effective way to minimize your total insurance cost including SST.",
        ],
      },
      {
        id: "ncd-sst-table",
        title: "NCD Impact on Premium and SST",
        type: "table",
        tableData: {
          headers: ["NCD Level", "Premium", "SST (8%)", "Total"],
          rows: [
            ["0%", "RM1,200", "RM96", "RM1,306"],
            ["25%", "RM900", "RM72", "RM982"],
            ["38.33%", "RM739", "RM59", "RM808"],
            ["45%", "RM660", "RM53", "RM723"],
            [{ text: "55%", badge: "Max", badgeColor: "green" }, "RM540", "RM43", "RM593"],
          ],
          footnote: "Difference between 0% and 55% NCD: RM713 saved (including SST)",
        },
      },
      {
        id: "protect-ncd",
        title: "How to Protect Your NCD",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Drive carefully to avoid accidents", checked: true },
          { text: "For minor damages, consider paying cash instead of claiming", checked: true },
          { text: "Add NCD Protector add-on if available", checked: true },
          { text: "Report accidents but don't always claim (assess cost vs NCD loss)", checked: true },
        ],
      },
      {
        id: "strategy-2",
        title: "Strategy 2: Remove Unnecessary Add-Ons",
        type: "text",
        content: [
          "Review your add-ons carefully. Each one increases your premium AND the SST on that premium. Some add-ons may not be necessary for your situation.",
        ],
      },
      {
        id: "unnecessary-addons",
        title: "Commonly Unnecessary Add-Ons",
        type: "table",
        tableData: {
          headers: ["Add-On", "Typical Cost", "SST on It", "Consider Removing If..."],
          rows: [
            ["Rental Car Reimbursement", "RM100-200", "RM8-16", "You have second car or rarely claim"],
            ["Personal Accident (high limit)", "RM50-150", "RM4-12", "You have separate PA coverage"],
            ["Legal Liability to Passengers", "RM30-50", "RM2-4", "You rarely carry passengers"],
            ["Strike/Riot Coverage", "RM20-40", "RM2-3", "Low risk area"],
          ],
        },
      },
      {
        id: "keep-addons",
        title: "Add-Ons Worth Keeping (Despite SST)",
        type: "tipGrid",
        columns: 3,
        tips: [
          {
            icon: "🌊",
            title: "Special Perils (Flood)",
            description: "RM50-150 + RM4-12 SST. One flood claim pays for decades of premiums.",
          },
          {
            icon: "🚗",
            title: "Windscreen Coverage",
            description: "RM30-80 + RM2-6 SST. Essential for highway drivers.",
          },
          {
            icon: "🔧",
            title: "Betterment Waiver",
            description: "RM50-100 + RM4-8 SST. Saves RM500-5,000 in claims for older cars.",
          },
        ],
      },
      {
        id: "strategy-3",
        title: "Strategy 3: Increase Voluntary Excess",
        type: "text",
        content: [
          "Higher excess means lower premium, which means lower SST. This is a good strategy if you rarely claim and have cash buffer for emergencies.",
        ],
      },
      {
        id: "excess-table",
        title: "Voluntary Excess Impact",
        type: "table",
        tableData: {
          headers: ["Excess Level", "Premium Impact", "SST Savings"],
          rows: [
            ["Standard (RM0)", "Base rate", "Base SST"],
            ["+RM500 voluntary", "-5% to -10%", "-RM4 to -8"],
            ["+RM1,000 voluntary", "-10% to -15%", "-RM8 to -12"],
          ],
          footnote: "Trade-off: You pay more out-of-pocket if you claim.",
        },
      },
      {
        id: "excess-good-if",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Good Strategy If:",
        content:
          "• You rarely claim\n• You have cash buffer for emergencies\n• Your driving record is clean\n• Your car is lower value (less likely to claim for minor damage)",
      },
      {
        id: "strategy-4",
        title: "Strategy 4: Choose the Right Insurer",
        type: "text",
        content: [
          "Different insurers price differently. The same car can have 20-30% premium difference between insurers. Lower premium = lower SST.",
        ],
      },
      {
        id: "insurer-comparison",
        title: "Example: Honda City Insurance Comparison",
        type: "comparison",
        cards: [
          {
            title: "Insurer A",
            iconColor: "green",
            highlighted: true,
            badge: "Better Value",
            items: [
              { text: "Premium: RM1,100", checked: true },
              { text: "SST (8%): RM88", checked: true },
              { text: "Total: RM1,198", checked: true },
            ],
          },
          {
            title: "Insurer B",
            iconColor: "gray",
            items: [
              { text: "Premium: RM1,300", checked: false },
              { text: "SST (8%): RM104", checked: false },
              { text: "Total: RM1,414", checked: false },
            ],
            footer: "Difference: RM216 (including RM16 SST difference)",
          },
        ],
      },
      {
        id: "dont-chase-price",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "Don't Just Chase Lowest Price",
        content:
          "Consider these factors too:\n• Claims service quality\n• Workshop network\n• Roadside assistance\n• Your agent's support\n\n**Saving RM100 on premium isn't worth it if claims become a nightmare.**",
      },
      {
        id: "strategy-5",
        title: "Strategy 5: Bundle Policies",
        type: "text",
        content: [
          "Some insurers offer discounts for multiple policies. Typical bundle discount is 5-10% on each policy. The discount reduces premium, which reduces SST too.",
        ],
      },
      {
        id: "bundle-options",
        title: "Bundle Options",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Car + motorcycle insurance", checked: true },
          { text: "Car + home insurance", checked: true },
          { text: "Multiple cars (family discount)", checked: true },
          { text: "Car + travel insurance (some insurers)", checked: true },
        ],
      },
      {
        id: "sst-addons-analysis",
        title: "SST on Add-Ons: Detailed Analysis",
        type: "comparison",
        cards: [
          {
            title: "Worth It (Despite SST)",
            iconColor: "green",
            items: [
              { text: "Special Perils: RM54-162/year total. One flood claim = RM10,000-50,000+", checked: true },
              { text: "Windscreen: RM32-86/year total. One replacement = RM500-2,000", checked: true },
              { text: "Betterment Waiver: RM54-108/year total. Saves RM500-5,000 in claims", checked: true },
            ],
          },
          {
            title: "Reconsider These",
            iconColor: "amber",
            items: [
              { text: "High PA limits - check if employer provides PA coverage", checked: false },
              { text: "Rental Car - calculate cost × years vs rental if needed", checked: false },
              { text: "Very high legal liability - basic RM100,000 usually sufficient", checked: false },
            ],
          },
        ],
      },
      {
        id: "bigger-picture",
        title: "The Bigger Picture: Value Over Price",
        type: "text",
        content: [
          "Many people react to SST by choosing the cheapest insurer, removing important add-ons, or reducing coverage. Then when they need to claim: slow service, missing coverage, rejected claims, and more out-of-pocket costs.",
        ],
      },
      {
        id: "sst-trap",
        title: "The SST Trap",
        type: "comparison",
        cards: [
          {
            title: "Budget Approach (Saved RM150)",
            iconColor: "red",
            items: [
              { text: "Claim takes 3 weeks", checked: false },
              { text: "Used 8 hours of your time on calls", checked: false },
              { text: "Workshop far from home", checked: false },
              { text: "Stress and frustration", checked: false },
            ],
          },
          {
            title: "Quality Approach (Paid RM150 more)",
            iconColor: "green",
            highlighted: true,
            badge: "Better Value",
            items: [
              { text: "Agent handles everything", checked: true },
              { text: "Claim approved in 5 days", checked: true },
              { text: "Convenient workshop", checked: true },
              { text: "Peace of mind", checked: true },
            ],
            footer: "Your time at RM50/hour: 8 hours = RM400 lost. Net result: 'Expensive' insurer saved RM250 in time value.",
          },
        ],
      },
      {
        id: "perspective",
        title: "",
        type: "callout",
        variant: "info",
        title2: "Keep It In Perspective",
        content:
          "**RM20-100 extra in SST per year is:**\n• RM1.67-8.33 per month\n• Less than one coffee\n• Insignificant vs claim complications\n\n**Don't sacrifice good coverage for the price of a few coffees.**",
      },
      {
        id: "premium-breakdown",
        title: "What You're Actually Paying For",
        type: "table",
        description: "Where does your insurance premium go?",
        tableData: {
          headers: ["Component", "Approximate %"],
          rows: [
            ["Claims fund", "60-70%"],
            ["Operating costs", "15-20%"],
            ["Agent commission", "10-15%"],
            ["Insurer profit", "5-10%"],
            [{ text: "SST (to government)", badge: "Tax", badgeColor: "blue" }, "8%"],
          ],
          footnote: "SST is not 'extra profit' for insurers. They collect and remit to government.",
        },
      },
      {
        id: "recommendation",
        title: "Our Recommendation",
        type: "numberedList",
        description: "Focus on total value, not just SST savings:",
        steps: [
          {
            number: 1,
            title: "Right Coverage",
            description: "Are you properly protected for floods, accidents, and theft?",
            tips: [],
          },
          {
            number: 2,
            title: "Right Insurer",
            description: "Do they pay claims well? Check their reputation and service quality.",
            tips: [],
          },
          {
            number: 3,
            title: "Right Agent",
            description: "Will someone help when you need to claim? 24/7 support matters.",
            tips: [],
          },
          {
            number: 4,
            title: "Then Consider Price",
            description: "Is it reasonable for the value received? Compare total package, not just premium.",
            tips: [],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I avoid SST on car insurance?",
        answer:
          "No. SST on insurance services is mandatory under Malaysian law. All insurers must charge exactly 8% SST. There's no negotiation possible on the tax rate.",
      },
      {
        question: "Is SST different for different insurers?",
        answer:
          "No. All insurers charge exactly 8% SST. The rate is set by government and applies uniformly to all motor insurance.",
      },
      {
        question: "Does SST apply to Takaful?",
        answer:
          "Yes. Takaful contributions are also subject to 8% SST, same as conventional insurance.",
      },
      {
        question: "Will SST increase again?",
        answer:
          "Unknown. Government reviews tax rates periodically. The current 8% rate has been stable since March 2024.",
      },
      {
        question: "Is there SST on motorcycle insurance?",
        answer:
          "Yes, the same 8% SST applies to all motor insurance including motorcycles.",
      },
      {
        question: "Can I claim back SST?",
        answer:
          "Individual car owners cannot claim back SST. Only SST-registered businesses can offset input tax in certain circumstances.",
      },
      {
        question: "Why did my quote increase by more than the SST change?",
        answer:
          "Other factors also affect premiums: your car's age, claims history, market value changes, and insurer pricing adjustments. SST is just one component.",
      },
      {
        question: "Is online insurance SST-exempt?",
        answer:
          "No. Whether you buy online or through an agent, SST is the same 8%. There's no tax advantage to buying online.",
      },
    ],
    ctaTitle: "Get Value-Focused Insurance Quote",
    ctaDescription:
      "We'll show you quotes from Zurich and Allianz with full breakdown of premium + SST, what's included vs excluded, and our honest recommendation for your situation.",
  },

  "agreed-value-vs-market-value-car-insurance-malaysia": {
    id: "agreed-value-vs-market-value-car-insurance-malaysia",
    slug: "agreed-value-vs-market-value-car-insurance-malaysia",
    title: "Agreed Value vs Market Value Car Insurance - Which is Better?",
    subtitle:
      "One of the biggest disappointments in car insurance happens when your car is totaled and the payout is RM20,000 less than you expected. The culprit? Market value vs agreed value. Here's how to avoid that surprise.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "12 min read",
    metaTitle: `Agreed Value vs Market Value Car Insurance Malaysia ${new Date().getFullYear()} - Which is Better?`,
    metaDescription:
      "Should you choose agreed value or market value for your car insurance? Complete comparison with examples, when each makes sense, and how to avoid payout disappointments.",
    keywords: [
      "agreed value car insurance",
      "market value car insurance",
      "agreed value vs market value",
      "car insurance payout malaysia",
      "sum insured car insurance",
      "car depreciation insurance",
    ],
    sections: [
      {
        id: "quick-explanation",
        title: "The Quick Explanation",
        type: "comparison",
        cards: [
          {
            title: "Market Value (Default)",
            iconColor: "amber",
            items: [
              { text: "If car is totaled, insurer pays what car is worth TODAY", checked: false },
              { text: "Not what you paid, not what you insured it for", checked: false },
              { text: "Example: Insured for RM80,000, totaled after 1 year", checked: false },
              { text: "Market value now: RM65,000 → Payout: RM65,000", checked: false },
              { text: "Your surprise: \"But I insured it for RM80,000!\"", checked: false },
            ],
          },
          {
            title: "Agreed Value",
            iconColor: "green",
            highlighted: true,
            badge: "Certainty",
            items: [
              { text: "You and insurer agree on a fixed value upfront", checked: true },
              { text: "If car is totaled, you get that exact amount", checked: true },
              { text: "Example: Agreed to insure at RM75,000", checked: true },
              { text: "Car totaled 1 year later → Payout: RM75,000", checked: true },
              { text: "No surprises, guaranteed amount", checked: true },
            ],
          },
        ],
      },
      {
        id: "depreciation-problem",
        title: "Why This Matters: The Depreciation Problem",
        type: "table",
        description: "Cars lose value fast - here's typical depreciation:",
        tableData: {
          headers: ["Year", "New Car Value", "Market Value", "Depreciation"],
          rows: [
            ["Year 0", "RM100,000", "RM100,000", "0%"],
            ["Year 1", "RM100,000", "RM85,000", "-15%"],
            ["Year 2", "RM100,000", "RM72,000", "-28%"],
            ["Year 3", "RM100,000", "RM61,000", "-39%"],
            ["Year 4", "RM100,000", "RM52,000", "-48%"],
            ["Year 5", "RM100,000", "RM44,000", "-56%"],
          ],
          footnote: "Reality: After 3 years, your car may be worth 40% less than you paid.",
        },
      },
      {
        id: "insurance-gap-example",
        title: "The Insurance Gap Problem",
        type: "callout",
        variant: "warning",
        title2: "Scenario: You buy car with loan",
        content:
          "**Purchase:** Car RM100,000, Loan RM90,000 (90% financing)\n\n**After 2 years:**\n- Market value: RM72,000\n- Loan balance: RM65,000\n- Insurance payout: RM72,000\n- After settling loan: RM7,000 left\n\n**You're not underwater, but...**\n- You paid RM28,000+ in installments over 2 years\n- You get back RM7,000\n- Net loss: RM21,000+ (plus interest paid)\n\n**With agreed value at RM85,000:** Payout RM85,000, after loan: RM20,000 left. You kept more value.",
      },
      {
        id: "how-market-value-determined",
        title: "How Market Value is Determined",
        type: "comparison",
        cards: [
          {
            title: "What Insurers Consider",
            iconColor: "blue",
            items: [
              { text: "Vehicle Sales Statistics (VSS) database", checked: true },
              { text: "Make, model, year of manufacture", checked: true },
              { text: "Mileage and assumed average condition", checked: true },
              { text: "Variant/specifications", checked: true },
              { text: "Regional pricing differences", checked: true },
            ],
          },
          {
            title: "What Insurers DON'T Consider",
            iconColor: "red",
            items: [
              { text: "What you paid for the car", checked: false },
              { text: "Sum insured on your policy", checked: false },
              { text: "Your emotional attachment", checked: false },
              { text: "Recent upgrades/modifications", checked: false },
              { text: "Below-average mileage or exceptional condition", checked: false },
            ],
          },
        ],
      },
      {
        id: "sum-insured-misconception",
        title: "",
        type: "callout",
        variant: "warning",
        title2: "The \"Sum Insured\" Misconception",
        content:
          "**Common belief:** \"I insured my car for RM80,000, so I'll get RM80,000.\"\n\n**Reality:** Sum insured is the MAXIMUM payout, not guaranteed payout.\n\n**How it works:**\n- Sum insured: RM80,000 (maximum)\n- Market value at claim: RM65,000\n- Payout: RM65,000 (lower of the two)\n\n**The sum insured only matters if market value exceeds it (rare) or you have agreed value endorsement.**",
      },
      {
        id: "how-agreed-value-works",
        title: "How Agreed Value Works",
        type: "numberedList",
        description: "The process at policy purchase:",
        steps: [
          {
            number: 1,
            title: "Request and Propose",
            description: "Tell your agent you want agreed value and propose a value that's reasonable.",
            tips: [],
          },
          {
            number: 2,
            title: "Insurer Assessment",
            description: "Insurer checks if your car qualifies and assesses if proposed value is reasonable.",
            tips: [],
          },
          {
            number: 3,
            title: "Agreement and Documentation",
            description: "Both parties agree on the sum insured. This becomes the fixed payout amount, documented on policy.",
            tips: [],
          },
          {
            number: 4,
            title: "Pay Adjusted Premium",
            description: "Agreed value costs 5-15% more than market value basis. Higher agreed value = higher premium.",
            tips: [],
          },
        ],
      },
      {
        id: "detailed-comparison",
        title: "Agreed Value vs Market Value: Detailed Comparison",
        type: "table",
        tableData: {
          headers: ["Factor", "Market Value", "Agreed Value"],
          rows: [
            ["Payout basis", "Current market value", "Pre-agreed fixed amount"],
            ["Payout certainty", "Uncertain", "Guaranteed"],
            ["Premium cost", "Lower", "5-15% higher"],
            ["Availability", "All cars", "Usually newer cars only"],
            ["Depreciation protection", "None", "Partial (depends on agreed amount)"],
            ["Claim disputes", "More common", "Rare"],
            ["Best for", "Older cars, budget-conscious", "New cars, financed cars"],
          ],
        },
      },
      {
        id: "when-choose-agreed",
        title: "When to Choose Agreed Value",
        type: "tipGrid",
        columns: 2,
        tips: [
          {
            icon: "🆕",
            title: "Brand New Car (First 1-3 Years)",
            description:
              "Depreciation is steepest in early years. A RM120,000 car may be worth RM102,000 after 1 year. Agreed value protects that RM18,000 gap.",
          },
          {
            icon: "💳",
            title: "Financed Car (High Loan-to-Value)",
            description:
              "Ensures payout covers loan balance. With 90% financing, market value may barely cover loan after 2 years.",
          },
          {
            icon: "🔧",
            title: "Modified Cars (With Documentation)",
            description:
              "Market value ignores modifications. RM25,000 in upgrades? Gone with market value. Agreed value can include them.",
          },
          {
            icon: "🏎️",
            title: "Classic/Collector Cars",
            description:
              "Classic cars appreciate or hold value differently. Market value tools may undervalue. Agreed value based on specialist valuation.",
          },
        ],
      },
      {
        id: "when-market-value-fine",
        title: "When Market Value is Fine",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Budget is your primary concern - save RM100-300/year on premium", checked: true },
          { text: "Older car (5+ years) - depreciation has stabilized", checked: true },
          { text: "Second/third car - lower financial stakes", checked: true },
          { text: "Fully paid off car - no risk of being underwater on loan", checked: true },
          { text: "You understand and accept depreciation risk", checked: true },
        ],
      },
      {
        id: "real-example-1",
        title: "Real-World Example: New Proton X50",
        type: "callout",
        variant: "info",
        title2: "The Numbers",
        content:
          "**Purchase:** New price RM95,000, Loan RM85,500 (90%)\n\n**After 2 years with MARKET VALUE:**\n- Market value: ~RM72,000\n- Loan balance: ~RM62,000\n- Payout: RM72,000\n- Net after loan: RM10,000\n\n**After 2 years with AGREED VALUE RM88,000:**\n- Payout: RM88,000\n- Net after loan: RM26,000\n- **Difference: RM16,000 more**\n\n**Extra premium paid:** ~RM150/year × 2 = RM300\n**ROI if totaled:** RM16,000 return on RM300 investment",
      },
      {
        id: "real-example-2",
        title: "Real-World Example: Modified Civic",
        type: "callout",
        variant: "warning",
        title2: "Why Modifications Need Agreed Value",
        content:
          "**Situation:** Car RM130,000 + Modifications RM25,000 (documented) = Total invested RM155,000\n\n**Market value problem:**\n- Market value ignores modifications\n- Payout: ~RM110,000 (base car depreciated)\n- Lost: RM25,000+ in modifications\n\n**With agreed value RM140,000:**\n- Payout: RM140,000\n- Modifications partially protected\n\n**Recommendation:** Agreed value is essential for modified cars.",
      },
      {
        id: "insurers-offering",
        title: "Insurers That Offer Agreed Value",
        type: "table",
        description: "Availability varies by insurer:",
        tableData: {
          headers: ["Insurer", "Agreed Value Availability", "Typical Restrictions"],
          rows: [
            ["Allianz", "Yes", "New cars, selected models"],
            ["Zurich", "Yes", "Typically up to 3 years"],
            ["MSIG", "Yes", "Case by case assessment"],
            ["Tokio Marine", "Yes", "Selected vehicles"],
            ["AXA", "Yes", "New cars primarily"],
            ["Etiqa", "Limited", "Varies by situation"],
          ],
          footnote: "Each insurer has different rules. Ask specifically - don't assume availability.",
        },
      },
      {
        id: "disputing-market-value",
        title: "If You Disagree with Market Value Payout",
        type: "numberedList",
        description: "Steps to dispute if you think valuation is too low:",
        steps: [
          {
            number: 1,
            title: "Ask for Breakdown",
            description: "Request how they calculated value, which VSS data used, what factors considered.",
            tips: [],
          },
          {
            number: 2,
            title: "Gather Counter-Evidence",
            description: "Similar cars for sale at higher prices, recent ads from mudah.my/carlist.my, dealer quotes.",
            tips: [],
          },
          {
            number: 3,
            title: "Negotiate",
            description: "Present your evidence professionally. Be reasonable, aim for middle ground.",
            tips: [],
          },
          {
            number: 4,
            title: "Escalate if Needed",
            description: "Ombudsman for Financial Services (OFS) or Bank Negara LINK if negotiation fails.",
            tips: [],
          },
        ],
      },
      {
        id: "prevention-note",
        title: "",
        type: "callout",
        variant: "tip",
        title2: "Prevention is Better",
        content:
          "Agreed value eliminates payout disputes entirely. Consider the premium difference as \"dispute prevention insurance.\"",
      },
      {
        id: "bottom-line",
        title: "The Bottom Line",
        type: "comparison",
        cards: [
          {
            title: "Choose Agreed Value If:",
            iconColor: "green",
            highlighted: true,
            items: [
              { text: "Car is new (1-3 years old)", checked: true },
              { text: "You have a loan (especially high LTV)", checked: true },
              { text: "Car is modified with documented value", checked: true },
              { text: "You want payout certainty", checked: true },
              { text: "Premium difference is acceptable", checked: true },
            ],
          },
          {
            title: "Choose Market Value If:",
            iconColor: "blue",
            items: [
              { text: "Car is older (5+ years)", checked: true },
              { text: "No loan or low loan balance", checked: true },
              { text: "Budget is tight", checked: true },
              { text: "It's a secondary vehicle", checked: true },
              { text: "You accept depreciation risk", checked: true },
            ],
          },
        ],
      },
      {
        id: "recommendation",
        title: "",
        type: "callout",
        variant: "success",
        title2: "Our Recommendation",
        content:
          "For most new car buyers with financing:\n\n**Agreed value for first 3 years, then switch to market value.**\n\nThis protects during highest depreciation period while optimizing premium spend over car's lifetime.",
      },
    ],
    faqs: [
      {
        question: "Can I switch from market value to agreed value mid-policy?",
        answer:
          "Typically no. Changes happen at renewal. Plan ahead and request agreed value when you renew your policy.",
      },
      {
        question: "Is agreed value the same as 'new for old' replacement?",
        answer:
          "No. New for old replaces with a brand new car (very rare, very expensive). Agreed value pays a fixed cash amount that you agreed to upfront.",
      },
      {
        question: "What if my proposed agreed value is too high?",
        answer:
          "Insurer won't agree to unrealistic values. They assess and may counter-propose a lower amount. You can't insure a RM80,000 car for RM150,000.",
      },
      {
        question: "Does agreed value cover my loan fully?",
        answer:
          "Not necessarily. You choose the agreed value amount. Make sure it covers your expected loan balance at any point during the policy year.",
      },
      {
        question: "What happens to agreed value if I make a partial claim?",
        answer:
          "Partial claims (repairs) don't affect it. Only total loss triggers the agreed value payout. Repairs are covered at actual cost.",
      },
      {
        question: "Can I get agreed value for a second-hand car I just bought?",
        answer:
          "Possibly, if the car is recent enough (usually under 5 years). Insurer will assess. Value would be based on your purchase price, not original new price.",
      },
      {
        question: "Is there a maximum agreed value limit?",
        answer:
          "Yes, insurers cap at reasonable values based on market data. The agreed value must be justifiable and within reasonable range of actual worth.",
      },
    ],
    ctaTitle: "Get Expert Advice on Agreed Value",
    ctaDescription:
      "Not sure if agreed value is right for your car? We'll assess your situation and recommend the best approach for your specific vehicle and loan situation.",
  },
  "best-panel-workshops-car-insurance-malaysia": {
    id: "best-panel-workshops-car-insurance-malaysia",
    slug: "best-panel-workshops-car-insurance-malaysia",
    title: `Best Panel Workshops for Car Insurance Claims Malaysia ${new Date().getFullYear()}`,
    subtitle:
      "Not all panel workshops are equal. Some deliver excellent repairs with genuine parts. Others cut corners, use cheap parts, and leave you with problems months later. Here's how to navigate panel workshops and get the repairs your car deserves.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "15 min read",
    metaTitle: `Best Panel Workshops for Car Insurance Claims Malaysia ${new Date().getFullYear()}`,
    metaDescription:
      "How to choose the right panel workshop for your insurance claim. Workshop quality varies hugely - here's how to get the best repairs and avoid common problems.",
    keywords: [
      "panel workshop",
      "car insurance claim workshop",
      "panel workshop Malaysia",
      "insurance repair workshop",
      "best panel workshop",
      "car repair insurance claim",
      "Allianz panel workshop",
      "Zurich panel workshop",
      "workshop quality",
      "genuine parts insurance",
    ],
    sections: [
      {
        id: "what-is-panel-workshop",
        title: "What is a Panel Workshop?",
        type: "text",
        content: [
          "Panel workshops are repair shops approved by insurance companies to handle claims. When you make a claim, your insurer directs you to their panel workshops.",
        ],
      },
      {
        id: "how-it-works",
        title: "How It Works",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "You make a claim",
            description: "Report the accident or damage to your insurer",
          },
          {
            number: 2,
            title: "Insurer approves repair",
            description: "Claim is assessed and repair is authorized",
          },
          {
            number: 3,
            title: "Insurer directs you to panel workshop",
            description:
              "You're given a list of approved workshops to choose from",
          },
          {
            number: 4,
            title: "Workshop repairs your car",
            description: "Repairs are carried out according to approval",
          },
          {
            number: 5,
            title: "Insurer pays workshop directly",
            description: "Cashless transaction between insurer and workshop",
          },
          {
            number: 6,
            title: "You pay only excess (if any)",
            description: "Your only cost is the policy excess amount",
          },
        ],
      },
      {
        id: "why-insurers-use-panel",
        title: "Why Insurers Use Panel Workshops",
        type: "comparison",
        cards: [
          {
            title: "For Insurers",
            icon: "building",
            iconColor: "blue",
            items: [
              { text: "Negotiated rates (cheaper repairs)" },
              { text: "Quality control (theoretically)" },
              { text: "Streamlined claims process" },
              { text: "Reduced fraud" },
            ],
          },
          {
            title: "For You",
            icon: "user",
            iconColor: "green",
            items: [
              { text: "Cashless repairs (no upfront payment)" },
              { text: "Supposedly vetted quality" },
              { text: "Warranty on repairs" },
            ],
          },
        ],
      },
      {
        id: "workshop-quality-varies",
        title: "The Reality: Workshop Quality Varies Hugely",
        type: "comparison",
        cards: [
          {
            title: "The Good Workshops",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Use genuine or quality OEM parts" },
              { text: "Skilled technicians" },
              { text: "Proper equipment" },
              { text: "Good communication" },
              { text: "Stand behind their work" },
              { text: "Treat your car like their own" },
            ],
          },
          {
            title: "The Bad Workshops",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Use cheap imitation parts" },
              { text: "Rush jobs to maximize volume" },
              { text: "Poor paint matching" },
              { text: "Incomplete repairs" },
              { text: "Disappear when problems arise" },
              { text: 'Treat your car as "just another claim"' },
            ],
          },
        ],
      },
      {
        id: "why-bad-workshops-exist",
        title: "Why Bad Workshops Exist",
        type: "tipGrid",
        tips: [
          {
            icon: "chart",
            title: "Volume Pressure",
            description:
              "Workshops paid fixed rates by insurers. More cars = more profit. Incentive to rush.",
          },
          {
            icon: "money",
            title: "Cost Cutting",
            description:
              "Genuine parts expensive, imitation parts much cheaper. Difference goes to workshop profit.",
          },
          {
            icon: "alert",
            title: "Lack of Accountability",
            description:
              "You didn't choose them, you may never return, no reputation pressure.",
          },
        ],
      },
      {
        id: "identify-good-workshops",
        title: "How to Identify Good Panel Workshops",
        type: "text",
        content: [
          "Before committing to a workshop, do your research. A little effort upfront can save major headaches later.",
        ],
      },
      {
        id: "check-google-reviews",
        title: "1. Check Google Reviews",
        type: "comparison",
        cards: [
          {
            title: "Green Flags",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "4.0+ stars with 50+ reviews" },
              { text: "Specific positive comments about insurance claims" },
              { text: "Responses to negative reviews" },
              { text: "Recent reviews (last 6 months)" },
            ],
          },
          {
            title: "Red Flags",
            icon: "alert",
            iconColor: "red",
            items: [
              { text: "Below 3.5 stars" },
              { text: "Complaints about parts quality" },
              { text: '"Car came back with new problems"' },
              { text: "No reviews at all" },
            ],
          },
        ],
      },
      {
        id: "ask-your-agent",
        title: "2. Ask Your Agent",
        type: "text",
        content: [
          "Good agents know which workshops deliver quality. Questions to ask:",
        ],
      },
      {
        id: "agent-questions",
        title: "",
        type: "list",
        items: [
          {
            text: '"Which panel workshop do you recommend for my car type?"',
          },
          { text: '"Have your clients had good experiences there?"' },
          { text: '"Which workshops should I avoid?"' },
        ],
      },
      {
        id: "check-credentials",
        title: "3. Check Workshop Credentials",
        type: "checklist",
        variant: "positive",
        items: [
          {
            text: "Brand authorization (Toyota, Honda, etc.)",
            checked: true,
          },
          { text: "Industry certifications", checked: true },
          { text: "Years in business", checked: true },
          { text: "Specialization in your car type", checked: true },
        ],
      },
      {
        id: "visit-before-committing",
        title: "4. Visit Before Committing",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Is it clean and organized?", checked: true },
          { text: "Are staff professional?", checked: true },
          { text: "Do they explain the process?", checked: true },
          { text: "What's their timeline estimate?", checked: true },
        ],
      },
      {
        id: "red-flags-during-repair",
        title: "Red Flags During Repair",
        type: "tipGrid",
        tips: [
          {
            icon: "x",
            title: "No Communication",
            description:
              'Good workshop updates you regularly. Bad workshop: radio silence until "it\'s ready".',
          },
          {
            icon: "clock",
            title: "Extended Delays",
            description:
              'Multiple delays without clear reason = red flag. "Almost ready" for weeks = problem.',
          },
          {
            icon: "alert",
            title: "Pressure to Accept",
            description:
              '"It\'s good enough" or "You won\'t notice" = They\'re cutting corners.',
          },
          {
            icon: "eye",
            title: "Resistance to Inspection",
            description:
              "You have the right to inspect before accepting. Resistance = something to hide.",
          },
        ],
      },
      {
        id: "insurer-panel-networks",
        title: "Insurer Panel Workshop Networks",
        type: "text",
        content: [
          "Different insurers have different panel networks. Here's what you need to know about the major ones.",
        ],
      },
      {
        id: "allianz-panel",
        title: "Allianz Panel Network",
        type: "text",
        content: [
          "Size: 500+ workshops nationwide",
          "Strengths: Extensive coverage, generally good quality control, clear escalation process. Major authorized workshops included, EV-capable workshops identified.",
          "How to find: Allianz2u app or call 1-300-22-5542",
        ],
      },
      {
        id: "zurich-panel",
        title: "Zurich Panel Network",
        type: "text",
        content: [
          "Size: 300+ workshops nationwide",
          "Strengths: Quality over quantity approach, good communication systems, reasonable timelines.",
          "How to find: Zurich website or call 1-300-888-622",
        ],
      },
      {
        id: "panel-comparison",
        title: "Allianz vs Zurich Panel Comparison",
        type: "table",
        tableData: {
          headers: ["Factor", "Allianz", "Zurich"],
          rows: [
            ["Network size", "500+", "300+"],
            ["Coverage (urban)", "Excellent", "Excellent"],
            ["Coverage (rural)", "Good", "Moderate"],
            ["EV workshops", "Growing", "Limited"],
            ["Average quality", "Good", "Good-Excellent"],
          ],
        },
      },
      {
        id: "choosing-by-car-type",
        title: "Choosing the Right Workshop for Your Car",
        type: "text",
        content: [
          "Different cars have different workshop requirements. Here's a guide by car type.",
        ],
      },
      {
        id: "car-type-recommendations",
        title: "Workshop Recommendations by Car Type",
        type: "table",
        tableData: {
          headers: ["Car Type", "Recommendation", "Why"],
          rows: [
            [
              "Japanese (Toyota, Honda, Mazda)",
              "Any reputable panel workshop",
              "Most workshops handle well, parts readily available",
            ],
            [
              "Korean (Hyundai, Kia)",
              "Ask for Korean car experience",
              "Improving parts availability, some workshops specialize",
            ],
            [
              "European (BMW, Mercedes, VW)",
              "Authorized or specialist workshop",
              "Specialized skills needed, genuine parts important for electrical",
            ],
            [
              "Local (Proton, Perodua)",
              "Any panel workshop fine",
              "All workshops handle, parts very available",
            ],
            [
              "Electric (Tesla, BYD)",
              "ONLY EV-certified workshops",
              "High-voltage training required, specialized equipment needed",
            ],
          ],
        },
      },
      {
        id: "damage-type-recommendations",
        title: "Workshop Requirements by Damage Type",
        type: "table",
        tableData: {
          headers: ["Damage Type", "Workshop Requirement", "Note"],
          rows: [
            [
              "Minor dents/scratches",
              "Any competent panel workshop",
              "Focus on paint matching skills",
            ],
            [
              "Bumper replacement",
              "Standard skill level",
              "Ensure genuine/quality parts",
            ],
            [
              "Panel replacement",
              "Proper alignment skills",
              "Check gap consistency after repair",
            ],
            [
              "Structural damage",
              "Authorized workshops preferred",
              "Ask about frame straightening capability",
            ],
            [
              "Electrical/sensor damage",
              "Brand-specific knowledge",
              "Diagnostic equipment essential",
            ],
            [
              "ADAS recalibration",
              "Specialist equipment required",
              "Many workshops cannot do this - verify first",
            ],
          ],
        },
      },
      {
        id: "your-rights",
        title: "Your Rights with Panel Workshops",
        type: "text",
        content: ["Know what you can and cannot request when using panel workshops."],
      },
      {
        id: "what-you-can-request",
        title: "What You Can Request",
        type: "checklist",
        variant: "positive",
        items: [
          {
            text: "Choice within network",
            description:
              'You can request a specific panel workshop. "I\'d like to use [Workshop X] for my repair."',
            checked: true,
          },
          {
            text: "Genuine parts",
            description:
              "You can request genuine parts. You may need to pay the difference.",
            checked: true,
          },
          {
            text: "Inspection before collection",
            description:
              'You have the right to inspect repairs before accepting. "I\'d like to inspect the car before signing off."',
            checked: true,
          },
          {
            text: "Repair warranty",
            description:
              'Panel repairs should come with warranty (typically 6-12 months). "What warranty do you provide?"',
            checked: true,
          },
          {
            text: "Itemized repair list",
            description:
              '"Please provide itemized list of repairs and parts used."',
            checked: true,
          },
        ],
      },
      {
        id: "what-you-cannot-demand",
        title: "What You Cannot Demand",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Using non-panel workshop",
            description:
              "Insurer not obligated to approve. You can use non-panel but may need to pay upfront.",
            checked: false,
          },
          {
            text: "Specific technician",
            description:
              "Workshops assign based on availability. You can request but not demand.",
            checked: false,
          },
          {
            text: "Immediate completion",
            description:
              "Parts availability affects timeline. Rushing leads to poor quality.",
            checked: false,
          },
        ],
      },
      {
        id: "common-problems",
        title: "Common Panel Workshop Problems (And Solutions)",
        type: "text",
        content: [
          "Here are the most common issues and how to handle them.",
        ],
      },
      {
        id: "problem-paint-matching",
        title: "Problem 1: Poor Paint Matching",
        type: "callout",
        variant: "warning",
        content:
          "Symptom: Repaired panel is noticeably different shade. Why: Quick spray instead of proper blending, wrong paint code, insufficient clear coat. Solution: Don't accept until corrected. Proper repair requires blending into adjacent panels. Escalate to insurer if workshop refuses.",
      },
      {
        id: "problem-cheap-parts",
        title: "Problem 2: Cheap Replacement Parts",
        type: "callout",
        variant: "warning",
        content:
          "Symptom: Parts look different, fit not quite right, no brand markings, fails prematurely. Why: Workshop profits from parts difference. Solution: Request genuine parts upfront, ask for old parts back, document with photos, escalate if issues arise.",
      },
      {
        id: "problem-incomplete",
        title: "Problem 3: Incomplete Repairs",
        type: "callout",
        variant: "warning",
        content:
          'Symptom: Some damage not addressed, "we only fixed what\'s approved", hidden damage discovered later. Solution: Inspect thoroughly before accepting, test drive before signing off, document outstanding issues, request supplementary claim if needed.',
      },
      {
        id: "problem-new-issues",
        title: "Problem 4: New Problems After Repair",
        type: "callout",
        variant: "warning",
        content:
          "Symptom: Rattles that weren't there before, water leaks, electrical issues, poor alignment. Why: Reassembly not done properly, clips/seals not replaced. Solution: Return immediately under repair warranty, document problems, escalate to insurer if unresponsive.",
      },
      {
        id: "problem-delays",
        title: "Problem 5: Endless Delays",
        type: "callout",
        variant: "warning",
        content:
          'Symptom: "Parts delayed" repeatedly, weeks turn into months, no clear completion date. Solution: Request specific timeline in writing, escalate to insurer after 2 weeks, ask about rental car, consider requesting workshop change.',
      },
      {
        id: "inspection-checklist",
        title: "How to Inspect Your Car After Repair",
        type: "text",
        content: [
          "Don't accept your car back without a thorough inspection. Use this checklist.",
        ],
      },
      {
        id: "visual-inspection",
        title: "Visual Inspection Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Paint color matches surrounding panels", checked: true },
          { text: "No orange peel or runs in paint", checked: true },
          { text: "Panel gaps are even", checked: true },
          { text: "Badges/emblems properly placed", checked: true },
          { text: "No overspray on trim/glass", checked: true },
          { text: "Lights working properly", checked: true },
          { text: "No scratches or marks from repair", checked: true },
          {
            text: "Dashboard lights all off (no new warnings)",
            checked: true,
          },
          { text: "A/C working", checked: true },
          { text: "All controls functional", checked: true },
          { text: "No loose panels/trim", checked: true },
        ],
      },
      {
        id: "test-drive-checklist",
        title: "Test Drive Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Starts normally", checked: true },
          { text: "No warning lights", checked: true },
          { text: "Steering straight (no pulling)", checked: true },
          { text: "Brakes feel normal", checked: true },
          { text: "No vibrations", checked: true },
          { text: "No unusual noises", checked: true },
          { text: "A/C blows cold", checked: true },
          { text: "All electrics working", checked: true },
        ],
      },
      {
        id: "before-signing-off",
        title: "Before Signing Off",
        type: "list",
        items: [
          { text: '"What parts were replaced?"' },
          { text: '"Were genuine or aftermarket parts used?"' },
          { text: '"What is the warranty on this repair?"' },
          { text: '"Do you have the old parts I can see?"' },
        ],
      },
      {
        id: "get-documents",
        title: "Documents to Get",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Written repair summary", checked: true },
          { text: "Warranty documentation", checked: true },
          { text: "Old parts (if requested earlier)", checked: true },
        ],
      },
      {
        id: "when-to-escalate",
        title: "When to Escalate",
        type: "text",
        content: [
          "If things go wrong, here's the escalation path.",
        ],
      },
      {
        id: "escalate-agent",
        title: "Step 1: Contact Your Agent",
        type: "callout",
        variant: "info",
        content:
          "Contact us if: workshop is unresponsive, quality concerns not addressed, unreasonable delays, you're uncomfortable. We can contact workshop on your behalf, escalate to insurer, arrange workshop change if needed, and advise on your options.",
      },
      {
        id: "escalate-insurer",
        title: "Step 2: Contact Insurer Directly",
        type: "callout",
        variant: "info",
        content:
          "Contact insurer if: agent cannot resolve, workshop refuses to cooperate, significant quality issues, policy questions. Allianz: 1-300-22-5542. Zurich: 1-300-888-622.",
      },
      {
        id: "escalate-ombudsman",
        title: "Step 3: Ombudsman (Last Resort)",
        type: "callout",
        variant: "tip",
        content:
          "Contact OFS if: insurer not resolving issue, significant financial impact, all other channels exhausted. Ombudsman for Financial Services (OFS) at ofs.org.my - free dispute resolution service.",
      },
      {
        id: "our-recommendations",
        title: "Our Panel Workshop Recommendations",
        type: "text",
        content: [
          "Based on client feedback, here are our general recommendations.",
        ],
      },
      {
        id: "recommendations-table",
        title: "Workshop Recommendations Summary",
        type: "table",
        tableData: {
          headers: ["Car Category", "Recommendation", "Why"],
          rows: [
            [
              "European (BMW, Mercedes, VW)",
              "Authorized service centers or specialist workshops",
              "Electrical systems, sensors, specific procedures require expertise",
            ],
            [
              "EVs (Tesla, BYD)",
              "EV-certified workshops ONLY",
              "High-voltage trained technicians, specialized equipment required",
            ],
            [
              "Japanese/Korean/Local",
              "Most panel workshops capable",
              "Check reviews, ask agent for recommendations",
            ],
          ],
        },
      },
      {
        id: "repair-timeline",
        title: "Expected Repair Timelines",
        type: "table",
        tableData: {
          headers: ["Damage Level", "Expected Timeline", "Note"],
          rows: [
            ["Minor", "3-7 days", "Scratches, small dents"],
            ["Moderate", "1-3 weeks", "Panel replacement, bumper work"],
            ["Major", "3-6 weeks", "Structural repairs, multiple panels"],
          ],
          footnote: "Delays beyond these timeframes warrant questions.",
        },
      },
    ],
    faqs: [
      {
        question: "Can I choose any workshop I want?",
        answer:
          "You can choose within the insurer's panel network. Using non-panel workshops is possible but may require upfront payment and reimbursement (often at lower rate).",
      },
      {
        question: "What if the nearest panel workshop is far away?",
        answer:
          "Ask insurer for towing to preferred panel workshop. Most cover towing within reasonable distance.",
      },
      {
        question: "Can I get genuine parts?",
        answer:
          "Yes, you can request genuine parts. You may need to pay the difference between genuine and aftermarket.",
      },
      {
        question: "What if I'm not happy with the repair quality?",
        answer:
          "Don't sign acceptance until satisfied. Document issues with photos. Escalate to agent, then insurer.",
      },
      {
        question: "How long should repairs take?",
        answer:
          "Minor: 3-7 days. Moderate: 1-3 weeks. Major: 3-6 weeks. Delays beyond this warrant questions.",
      },
      {
        question: "Is there warranty on panel workshop repairs?",
        answer:
          "Yes, typically 6-12 months. Get this in writing.",
      },
      {
        question: "Can I request my old parts back?",
        answer:
          "Yes. Request upfront before repair begins. Useful to verify parts were actually replaced.",
      },
      {
        question: "What if the workshop finds additional damage?",
        answer:
          "They should inform you and insurer. Supplementary approval may be needed. You shouldn't be surprised by extra costs.",
      },
    ],
    ctaTitle: "Need Help with Your Panel Workshop Claim?",
    ctaDescription:
      "Having issues with a panel workshop? We'll help you navigate the process, recommend quality workshops, and escalate if needed. Free consultation.",
  },
  "how-to-dispute-insurance-adjuster-report-malaysia": {
    id: "how-to-dispute-insurance-adjuster-report-malaysia",
    slug: "how-to-dispute-insurance-adjuster-report-malaysia",
    title: `How to Dispute Insurance Adjuster Report Malaysia ${new Date().getFullYear()}`,
    subtitle:
      "The adjuster says your car is worth RM45,000. You know it's worth at least RM55,000. Or they've approved only RM8,000 in repairs when the damage clearly needs RM15,000. What can you do? Here's your complete guide to disputing adjuster reports.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "18 min read",
    metaTitle: `How to Dispute Insurance Adjuster Report Malaysia ${new Date().getFullYear()}`,
    metaDescription:
      "Disagree with the insurance adjuster's assessment? Here's how to dispute their report, challenge unfair valuations, and get the payout you deserve.",
    keywords: [
      "dispute insurance adjuster",
      "insurance adjuster report",
      "challenge insurance valuation",
      "dispute car insurance claim",
      "insurance adjuster Malaysia",
      "unfair insurance assessment",
      "total loss dispute",
      "market value dispute",
      "OFS complaint",
      "insurance ombudsman Malaysia",
    ],
    sections: [
      {
        id: "what-is-adjuster",
        title: "What is an Insurance Adjuster?",
        type: "text",
        content: [
          "Insurance adjusters (also called loss adjusters) are professionals appointed by insurers to assess your claim. Understanding their role is the first step to effectively disputing their findings.",
        ],
      },
      {
        id: "adjuster-role",
        title: "Their Role",
        type: "list",
        items: [
          { text: "Assess damage to your vehicle" },
          { text: "Determine repair costs" },
          { text: "Evaluate market value (for total loss)" },
          { text: "Investigate circumstances of incident" },
          { text: "Recommend approval or rejection" },
        ],
      },
      {
        id: "who-they-work-for",
        title: "Who They Work For",
        type: "callout",
        variant: "warning",
        content:
          "Important: Adjusters are paid by the insurance company, not by you. This doesn't mean they're dishonest, but their incentive is to keep claim costs reasonable, identify potential fraud, and apply policy terms strictly. Your job is to ensure the assessment is fair and accurate.",
      },
      {
        id: "types-of-adjusters",
        title: "Types of Adjusters",
        type: "comparison",
        cards: [
          {
            title: "Staff Adjusters",
            icon: "building",
            iconColor: "blue",
            items: [
              { text: "Direct employees of insurance company" },
              { text: "Handle routine claims" },
              { text: "Generally faster processing" },
            ],
          },
          {
            title: "Independent Adjusters",
            icon: "user",
            iconColor: "purple",
            items: [
              { text: "Third-party firms hired by insurers" },
              { text: "Handle complex or large claims" },
              { text: "May be more thorough" },
            ],
          },
        ],
      },
      {
        id: "common-disputes",
        title: "Common Reasons to Dispute",
        type: "text",
        content: [
          "Here are the most common situations where you may need to dispute an adjuster's assessment.",
        ],
      },
      {
        id: "dispute-1-market-value",
        title: "Dispute 1: Market Value Too Low (Total Loss)",
        type: "callout",
        variant: "warning",
        content:
          "Situation: Adjuster says car worth RM45,000, but similar cars selling for RM55,000+. You'll lose RM10,000+ on payout. Why it happens: VSS data may be outdated, condition factors not considered, lower value = lower payout for insurer.",
      },
      {
        id: "dispute-2-repair-estimate",
        title: "Dispute 2: Repair Estimate Too Low",
        type: "callout",
        variant: "warning",
        content:
          "Situation: Damage clearly extensive, adjuster approves only partial repair, workshop says it needs more work. Why it happens: Adjuster didn't see all damage, hidden damage not assessed, cost-cutting pressure.",
      },
      {
        id: "dispute-3-scope-limited",
        title: "Dispute 3: Scope of Repairs Limited",
        type: "callout",
        variant: "warning",
        content:
          "Situation: Adjuster says 'repair' when 'replace' is needed, aftermarket parts approved instead of genuine, related damage excluded. Why it happens: Repair is cheaper than replace, aftermarket saves money, narrow interpretation of damage.",
      },
      {
        id: "dispute-4-betterment",
        title: "Dispute 4: Betterment Charges Excessive",
        type: "callout",
        variant: "warning",
        content:
          "Situation: You're asked to pay RM3,000 'betterment', seems unfair for normal wear parts, calculation unclear. Why it happens: Old parts replaced with new, policy allows betterment deduction, sometimes applied too aggressively.",
      },
      {
        id: "dispute-5-liability",
        title: "Dispute 5: Liability Assessment Wrong",
        type: "callout",
        variant: "warning",
        content:
          "Situation: Adjuster says you're partially at fault, you believe other driver 100% responsible, affects your NCD and payout. Why it happens: Adjuster only has partial information, other party tells different story, without evidence adjuster makes judgment call.",
      },
      {
        id: "dispute-6-rejected",
        title: "Dispute 6: Claim Rejected Entirely",
        type: "callout",
        variant: "warning",
        content:
          "Situation: Adjuster recommends rejection, reason given seems unfair, you believe claim is valid. Common rejection reasons: Policy exclusion applied, late notification, documentation insufficient, suspected fraud.",
      },
      {
        id: "dispute-process",
        title: "How to Dispute: Step-by-Step Process",
        type: "text",
        content: [
          "Follow these steps to effectively dispute an adjuster's assessment.",
        ],
      },
      {
        id: "step-1-understand",
        title: "Step 1: Understand the Assessment",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Request full adjuster report in writing",
            description:
              "Get the complete report, not just a summary. You need to see their methodology.",
          },
          {
            number: 2,
            title: "Ask for basis of valuation/estimate",
            description:
              "How was the market value calculated? What VSS data was used?",
          },
          {
            number: 3,
            title: "Get specific policy clauses applied",
            description:
              "Which policy terms are they relying on for their decision?",
          },
          {
            number: 4,
            title: "Request breakdown of calculations",
            description:
              "Ask: Why was this part repair vs replace? What's the betterment calculation?",
          },
        ],
      },
      {
        id: "understand-callout",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "You cannot effectively dispute what you don't understand. Get all the details first before mounting your challenge.",
      },
      {
        id: "step-2-gather-evidence",
        title: "Step 2: Gather Your Evidence",
        type: "text",
        content: [
          "The strength of your dispute depends on the quality of your evidence.",
        ],
      },
      {
        id: "evidence-market-value",
        title: "Evidence for Market Value Disputes",
        type: "table",
        tableData: {
          headers: ["Evidence Type", "Where to Get It"],
          rows: [
            ["Similar car listings", "Mudah.my, Carlist.my, Carsome"],
            ["Dealer quotations", "Call dealers, get written quotes"],
            ["Recent sale prices", "Ask dealers for recent transactions"],
            ["Your car's condition", "Service records, photos, mileage"],
            ["Modifications/upgrades", "Receipts, photos, documentation"],
          ],
        },
      },
      {
        id: "evidence-repair",
        title: "Evidence for Repair Estimate Disputes",
        type: "table",
        tableData: {
          headers: ["Evidence Type", "Where to Get It"],
          rows: [
            ["Workshop assessment", "Detailed quote from panel workshop"],
            ["Second opinion", "Quote from another workshop"],
            ["Parts pricing", "Dealer parts department quotes"],
            ["Technical standards", "Manufacturer repair guidelines"],
            ["Hidden damage", "Photos after disassembly"],
          ],
        },
      },
      {
        id: "evidence-liability",
        title: "Evidence for Liability Disputes",
        type: "table",
        tableData: {
          headers: ["Evidence Type", "Where to Get It"],
          rows: [
            ["Dashcam footage", "Your own recording"],
            ["CCTV footage", "Request from nearby premises"],
            ["Witness statements", "Written and signed"],
            ["Police report", "Official document"],
            ["Accident scene photos", "Your photos from incident"],
          ],
        },
      },
      {
        id: "step-3-write-letter",
        title: "Step 3: Write Your Dispute Letter",
        type: "text",
        content: [
          "A well-structured dispute letter is essential. Include: claim details, summary of dispute, adjuster's assessment, your position, supporting evidence list, and specific request.",
        ],
      },
      {
        id: "letter-structure",
        title: "Dispute Letter Structure",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Subject line with claim reference",
            description:
              "Subject: Dispute of Adjuster Assessment - Claim [Reference Number]",
          },
          {
            number: 2,
            title: "Claim details section",
            description:
              "Include claim reference, policy number, date of loss, adjuster name, assessment date",
          },
          {
            number: 3,
            title: "Summary of dispute",
            description: "One paragraph explaining what you disagree with",
          },
          {
            number: 4,
            title: "Adjuster's assessment vs Your position",
            description:
              "Clearly state what they concluded and what you believe is correct",
          },
          {
            number: 5,
            title: "Supporting evidence list",
            description: "Number each evidence item and note it's attached",
          },
          {
            number: 6,
            title: "Specific request",
            description:
              "State exactly what outcome you want and request response within 14 days",
          },
        ],
      },
      {
        id: "step-4-submit",
        title: "Step 4: Submit Formally",
        type: "checklist",
        variant: "positive",
        items: [
          {
            text: "Email to claims department",
            checked: true,
          },
          {
            text: "CC your agent",
            checked: true,
          },
          {
            text: "Request read receipt",
            checked: true,
          },
          {
            text: "Keep copy for records",
            checked: true,
          },
          {
            text: "Call to confirm receipt",
            checked: true,
          },
          {
            text: "Note who you spoke to",
            checked: true,
          },
          {
            text: "Get timeline for response",
            checked: true,
          },
        ],
      },
      {
        id: "step-5-negotiate",
        title: "Step 5: Negotiate",
        type: "text",
        content: [
          "If insurer responds with counter-offer, assess whether it's reasonable and what the gap is from your position.",
        ],
      },
      {
        id: "negotiation-tactics",
        title: "Negotiation Tactics",
        type: "tipGrid",
        tips: [
          {
            icon: "document",
            title: "Focus on Evidence",
            description:
              "Stick to facts and documentation, not emotion or frustration.",
          },
          {
            icon: "scale",
            title: "Be Willing to Compromise",
            description:
              "Within reason - if evidence supports RM52k, accepting RM50k may be reasonable.",
          },
          {
            icon: "chat",
            title: "Ask for Their Reasoning",
            description:
              "Understanding their position helps you counter it effectively.",
          },
          {
            icon: "handshake",
            title: "Propose Middle Ground",
            description:
              "Your position: RM55k, Their position: RM45k, Reasonable settlement: RM50-52k.",
          },
        ],
      },
      {
        id: "step-6-escalate",
        title: "Step 6: Escalate if Necessary",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Claims Supervisor",
            description: "First level of internal escalation",
          },
          {
            number: 2,
            title: "Claims Manager",
            description: "If supervisor doesn't resolve",
          },
          {
            number: 3,
            title: "Head of Claims",
            description: "Senior management level",
          },
          {
            number: 4,
            title: "Complaints Department",
            description: "Formal internal complaint",
          },
          {
            number: 5,
            title: "Ombudsman for Financial Services (OFS)",
            description: "External escalation - free dispute resolution",
          },
          {
            number: 6,
            title: "Bank Negara Malaysia",
            description: "Regulatory escalation for serious issues",
          },
        ],
      },
      {
        id: "market-value-guide",
        title: "Disputing Market Value: Detailed Guide",
        type: "text",
        content: [
          "Market value disputes are among the most common. Here's how insurers determine value and how to challenge it.",
        ],
      },
      {
        id: "how-insurers-value",
        title: "How Insurers Determine Market Value",
        type: "comparison",
        cards: [
          {
            title: "Factors Considered",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Make, model, variant" },
              { text: "Year of manufacture" },
              { text: "Mileage (assumed average if not specified)" },
              { text: "General condition (assumed average)" },
            ],
          },
          {
            title: "Factors Often NOT Considered",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Your specific car's condition" },
              { text: "Below-average mileage" },
              { text: "Modifications/upgrades" },
              { text: "Recent maintenance" },
              { text: "Accident-free history" },
            ],
          },
        ],
      },
      {
        id: "building-market-case",
        title: "Building Your Market Value Case",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Find Comparable Sales",
            description:
              "Search Mudah.my, Carlist.my, Carsome for same model, year, similar mileage. Document at least 5-10 comparable listings.",
          },
          {
            number: 2,
            title: "Adjust for Condition",
            description:
              "Low mileage (+5-10%), excellent condition (+5-10%), recent major service (+2-5%), new tyres/battery (+1-3%), no accident history (+5%).",
          },
          {
            number: 3,
            title: "Account for Modifications",
            description:
              "Document legitimate upgrades with receipts. Note: Not all modifications add value, some may decrease it.",
          },
          {
            number: 4,
            title: "Calculate Fair Value",
            description:
              "Base VSS value + condition adjustments = your assessed value. Present with evidence for each adjustment.",
          },
        ],
      },
      {
        id: "market-value-example",
        title: "Market Value Calculation Example",
        type: "table",
        tableData: {
          headers: ["Factor", "Amount"],
          rows: [
            ["Base market value (VSS)", "RM45,000"],
            ["Low mileage adjustment (+8%)", "+RM3,600"],
            ["Excellent condition (+5%)", "+RM2,250"],
            ["Recent major service", "+RM1,000"],
            ["Your assessed value", "RM51,850"],
          ],
          footnote: "Present this calculation with evidence for each adjustment.",
        },
      },
      {
        id: "repair-guide",
        title: "Disputing Repair Assessment: Detailed Guide",
        type: "text",
        content: [
          "Repair disputes often involve disagreements about repair vs replace, parts quality, or scope of work.",
        ],
      },
      {
        id: "common-repair-disputes",
        title: "Common Repair Disputes",
        type: "tipGrid",
        tips: [
          {
            icon: "wrench",
            title: "Repair vs Replace",
            description:
              "Adjuster says 'repair bumper' but it's cracked. Manufacturer guidelines may require replacement for safety.",
          },
          {
            icon: "car",
            title: "Aftermarket vs Genuine",
            description:
              "Aftermarket RM400 vs genuine RM1,200. Argue fit issues, paint matching, warranty concerns, quality/safety.",
          },
          {
            icon: "eye",
            title: "Hidden Damage",
            description:
              "Initial RM5k approval, after disassembly RM12k needed. Request supplementary claim for additional damage.",
          },
          {
            icon: "link",
            title: "Related Damage Excluded",
            description:
              "Bumper approved but radiator support excluded. Argue damage is connected to same incident.",
          },
        ],
      },
      {
        id: "repair-case-checklist",
        title: "Building Your Repair Case",
        type: "checklist",
        variant: "positive",
        items: [
          {
            text: "Get detailed workshop assessment",
            description: "Itemized list of all damage, part-by-part recommendations",
            checked: true,
          },
          {
            text: "Get genuine parts pricing",
            description: "Quotes from dealer parts department",
            checked: true,
          },
          {
            text: "Get second opinion",
            description: "Another panel workshop or authorized service center quote",
            checked: true,
          },
          {
            text: "Research manufacturer standards",
            description: "Repair vs replace guidelines, safety requirements",
            checked: true,
          },
          {
            text: "Document with photos",
            description: "Photos of all damage including hidden damage after disassembly",
            checked: true,
          },
        ],
      },
      {
        id: "liability-guide",
        title: "Disputing Liability Assessment",
        type: "text",
        content: [
          "Liability affects whether your claim is paid, your NCD, recovery from other party, and future premiums.",
        ],
      },
      {
        id: "liability-disputes",
        title: "Common Liability Disputes",
        type: "comparison",
        cards: [
          {
            title: "50% Fault Assigned",
            icon: "scale",
            iconColor: "amber",
            items: [
              { text: "Adjuster says shared liability" },
              { text: "You believe 100% other driver's fault" },
              { text: "Need evidence to prove your case" },
            ],
          },
          {
            title: "Based on Police Report",
            icon: "document",
            iconColor: "blue",
            items: [
              { text: "Adjuster following police finding" },
              { text: "Police report may be inaccurate" },
              { text: "Your evidence may contradict it" },
            ],
          },
        ],
      },
      {
        id: "liability-evidence",
        title: "Liability Evidence (In Order of Strength)",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Dashcam footage",
            description: "Near irrefutable evidence of what happened",
          },
          {
            number: 2,
            title: "Independent CCTV",
            description:
              "Request from nearby shops/buildings within 7 days - very strong",
          },
          {
            number: 3,
            title: "Witness statements",
            description:
              "Written and signed, especially from independent witnesses",
          },
          {
            number: 4,
            title: "Physical evidence",
            description: "Damage patterns, debris location, skid marks",
          },
          {
            number: 5,
            title: "Police report",
            description: "Helpful but not conclusive",
          },
          {
            number: 6,
            title: "Your testimony",
            description: "Weakest evidence as self-interested party",
          },
        ],
      },
      {
        id: "ofs-section",
        title: "Escalating to Ombudsman (OFS)",
        type: "text",
        content: [
          "The Ombudsman for Financial Services provides free dispute resolution when internal complaints are exhausted.",
        ],
      },
      {
        id: "when-to-escalate-ofs",
        title: "When to Escalate to OFS",
        type: "comparison",
        cards: [
          {
            title: "Do Escalate When",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Internal complaint exhausted" },
              { text: "Insurer final response unsatisfactory" },
              { text: "Dispute involves genuine disagreement" },
              { text: "Financial impact is significant" },
            ],
          },
          {
            title: "Don't Escalate For",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "First-time complaints (try insurer first)" },
              { text: "Clear policy exclusions validly applied" },
              { text: "Trivial amounts (not worth the effort)" },
              { text: "Fraud or misrepresentation on your part" },
            ],
          },
        ],
      },
      {
        id: "ofs-process",
        title: "How OFS Works",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Submit complaint to OFS",
            description: "Online at www.ofs.org.my, email, phone, or in person",
          },
          {
            number: 2,
            title: "OFS reviews and contacts insurer",
            description: "They will gather information from both sides",
          },
          {
            number: 3,
            title: "Mediation attempted",
            description: "OFS tries to help both parties reach agreement",
          },
          {
            number: 4,
            title: "OFS makes decision if unresolved",
            description: "Decision binding on insurer up to RM250,000",
          },
        ],
      },
      {
        id: "ofs-details",
        title: "OFS Contact Details",
        type: "callout",
        variant: "info",
        content:
          "Website: www.ofs.org.my | Email: enquiry@ofs.org.my | Phone: 03-2272 2811 | Timeline: 3-6 months typically, complex cases longer | Cost: Free for complainants, no lawyers needed.",
      },
      {
        id: "ofs-tips",
        title: "Tips for OFS Success",
        type: "checklist",
        variant: "positive",
        items: [
          {
            text: "Exhaust internal complaints first",
            description: "OFS will ask if you did",
            checked: true,
          },
          {
            text: "Be factual, not emotional",
            description: "Stick to facts and evidence",
            checked: true,
          },
          {
            text: "Be specific about desired outcome",
            description: "I want RM52,000 instead of RM45,000",
            checked: true,
          },
          {
            text: "Provide organized evidence",
            description: "Make it easy to review your case",
            checked: true,
          },
          {
            text: "Be patient",
            description: "Process takes time - 3-6 months typical",
            checked: true,
          },
          {
            text: "Be reasonable",
            description: "OFS looks for fair resolution, not maximum payout",
            checked: true,
          },
        ],
      },
      {
        id: "how-we-help",
        title: "How We Can Help",
        type: "text",
        content: [
          "We've successfully helped clients increase market value payouts by RM5,000-15,000, get repair scope expanded, reverse unfair liability findings, and overturn claim rejections.",
        ],
      },
      {
        id: "agent-support",
        title: "Agent Support for Disputes",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Review adjuster reports", checked: true },
          { text: "Advise on strength of your case", checked: true },
          { text: "Help gather evidence", checked: true },
          { text: "Draft dispute letters", checked: true },
          { text: "Communicate with insurer on your behalf", checked: true },
          { text: "Escalate to our contacts", checked: true },
          { text: "Guide you through OFS if needed", checked: true },
        ],
      },
      {
        id: "when-to-contact",
        title: "When to Contact Us",
        type: "callout",
        variant: "tip",
        content:
          "Contact us as soon as you receive an assessment you disagree with, before signing any acceptance, before agreeing to settlement, or when you need advice on whether to dispute. Don't wait - some deadlines apply.",
      },
    ],
    faqs: [
      {
        question: "Can I refuse the adjuster's assessment?",
        answer:
          "Yes. You're not obligated to accept. But insurer may not pay until resolved.",
      },
      {
        question: "How long do I have to dispute?",
        answer:
          "Typically 14-30 days from receiving assessment. Check your policy. Don't delay.",
      },
      {
        question: "Can I hire my own adjuster?",
        answer:
          "Yes (public adjuster), but uncommon for motor claims in Malaysia. Usually not cost-effective for typical claims.",
      },
      {
        question: "What if I already accepted and signed?",
        answer:
          "Much harder to dispute after acceptance. May still be possible for significant errors or misrepresentation. Consult immediately.",
      },
      {
        question: "Will disputing affect my future premiums or renewals?",
        answer:
          "No. Disputing a claim assessment should not affect your insurability. Insurers cannot penalize you for exercising your rights.",
      },
      {
        question: "What if the adjuster was rude or unprofessional?",
        answer:
          "Document behavior and complain separately to insurer. But focus dispute on factual issues, not personality conflicts.",
      },
      {
        question: "Can I get the adjuster changed?",
        answer:
          "You can request, but insurer decides. Focus on disputing the findings rather than the person.",
      },
      {
        question: "How often do disputes succeed?",
        answer:
          "With good evidence, reasonably often. Many disputes result in improved offers. Complete reversals are less common but happen.",
      },
    ],
    ctaTitle: "Need Help Disputing an Assessment?",
    ctaDescription:
      "Disagree with your adjuster's report? We'll review your case, advise on your options, help gather evidence, and fight for the payout you deserve. Free consultation.",
  },
  "e-hailing-insurance-malaysia": {
    id: "e-hailing-insurance-malaysia",
    slug: "e-hailing-insurance-malaysia",
    title: `E-Hailing Insurance Malaysia ${new Date().getFullYear()} - Complete Driver Guide`,
    subtitle:
      "If you drive for Grab, Lalamove, MULA, or any licensed e-hailing platform, your regular car insurance is NOT enough. Without proper e-hailing coverage, your claims will be rejected - and you'll be personally liable for accidents. Here's everything you need to know.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "16 min read",
    metaTitle: `E-Hailing Insurance Malaysia ${new Date().getFullYear()} - Complete Driver Guide`,
    metaDescription:
      "Driving for Grab, Lalamove, or MULA? Your regular car insurance won't cover you. Complete guide to e-hailing add-ons, daily insurance options, and avoiding claim rejection.",
    keywords: [
      "e-hailing insurance",
      "Grab driver insurance",
      "Lalamove insurance",
      "MULA insurance",
      "e-hailing add-on",
      "ride-hailing insurance Malaysia",
      "Grab insurance Malaysia",
      "commercial car insurance",
      "e-hailing coverage",
      "delivery driver insurance",
      "daily e-hailing insurance",
    ],
    sections: [
      {
        id: "harsh-reality",
        title: "The Harsh Reality: Regular Insurance Won't Cover You",
        type: "callout",
        variant: "warning",
        content:
          "Your standard private car insurance excludes commercial use. When you sign up as an e-hailing driver, your car becomes a commercial vehicle. Private insurance no longer covers accidents during work. Claims made while 'on the job' = REJECTED.",
      },
      {
        id: "real-consequences",
        title: "Real Consequences",
        type: "comparison",
        cards: [
          {
            title: "Without E-Hailing Add-On",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "You submit claim after Grab accident" },
              { text: "Insurer investigates, discovers Grab app active" },
              { text: "Claim REJECTED" },
              { text: "You pay for repairs yourself" },
              { text: "Passenger injuries = YOUR liability" },
            ],
          },
          {
            title: "With E-Hailing Add-On",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Claim approved normally" },
              { text: "Repairs covered" },
              { text: "Passenger injuries covered" },
              { text: "Third-party liability covered" },
              { text: "You're fully protected" },
            ],
          },
        ],
      },
      {
        id: "how-insurers-know",
        title: "How Insurers Know You Were Working",
        type: "list",
        items: [
          { text: "Checking if you're registered with e-hailing platforms" },
          { text: "Phone records showing app was active" },
          { text: "Passenger in car during accident" },
          { text: "Witness statements" },
          { text: "Social media (some drivers post about their work)" },
          { text: "JPJ records (e-hailing vehicle registration)" },
        ],
      },
      {
        id: "dont-risk-it",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "Don't risk it. The savings from skipping e-hailing add-on isn't worth one rejected claim. One accident without coverage can cost you RM5,000-100,000+.",
      },
      {
        id: "what-is-ehailing-insurance",
        title: "What is E-Hailing Insurance?",
        type: "text",
        content: [
          "E-hailing insurance is an add-on (endorsement) to your comprehensive private car policy that extends coverage to include driving for licensed ride-hailing platforms (Grab, MULA, MyCar, DIFF), delivery platforms (Lalamove, Grab Express, FoodPanda), passenger liability, and goods-in-transit for delivery.",
        ],
      },
      {
        id: "coverage-comparison",
        title: "What E-Hailing Add-On Covers",
        type: "table",
        tableData: {
          headers: ["Coverage", "Without Add-On", "With Add-On"],
          rows: [
            ["Accidents while offline", "✅ Covered", "✅ Covered"],
            ["Accidents while on job", "❌ REJECTED", "✅ Covered"],
            ["Passenger injuries", "❌ REJECTED", "✅ Covered"],
            ["Third-party liability (working)", "❌ REJECTED", "✅ Covered"],
            ["Goods damage (delivery)", "❌ Not covered", "✅ Covered (some)"],
          ],
        },
      },
      {
        id: "platforms-licensed",
        title: "E-Hailing Platforms in Malaysia - Licensed & Operating",
        type: "table",
        tableData: {
          headers: ["Platform", "Type", "Status"],
          rows: [
            ["Grab", "Ride-hailing + Delivery", "✅ Fully licensed"],
            ["MULA", "Ride-hailing", "✅ Licensed"],
            ["DIFF", "Ride-hailing", "✅ Licensed"],
            ["MyCar", "Ride-hailing", "✅ Licensed"],
            ["Lalamove", "Delivery", "✅ Licensed"],
          ],
        },
      },
      {
        id: "platforms-ceased",
        title: "Platforms No Longer Operating",
        type: "table",
        tableData: {
          headers: ["Platform", "Status"],
          rows: [
            ["InDrive", "❌ Ordered to cease operations July 2025"],
            ["Maxim", "❌ Ordered to cease operations July 2025"],
          ],
        },
      },
      {
        id: "platform-warning",
        title: "",
        type: "callout",
        variant: "warning",
        content:
          "Why InDrive and Maxim were shut down: APAD found both platforms violated the Land Public Transport Act 2010. Many drivers lacked PSV licenses and proper e-hailing insurance. Important: Only drive for licensed platforms. If your platform isn't APAD-compliant, your e-hailing insurance may be void even if you have the add-on.",
      },
      {
        id: "legal-requirement",
        title: "Legal Requirement",
        type: "callout",
        variant: "info",
        content:
          "Since 2017, e-hailing drivers must have appropriate insurance. SPAD/APAD regulations mandate coverage. Platforms like Grab require proof of insurance. Driving without proper insurance = breaking the law.",
      },
      {
        id: "addon-cost",
        title: "E-Hailing Add-On Cost",
        type: "table",
        tableData: {
          headers: ["Insurer", "Annual Add-On", "Daily Option", "Notes"],
          rows: [
            ["Allianz", "RM350-500", "❌", "Road Rangers included"],
            ["Zurich", "RM350-550", "❌", "Good claims process"],
            ["Etiqa", "RM300-450", "❌", "Takaful available"],
            ["AmAssurance", "RM300-450", "✅ GrabDaily", "Official Grab partner"],
            ["Kurnia (Liberty)", "RM280-450", "✅ Daily", "Flexible options"],
            ["RHB", "RM280-450", "❌", "Budget option"],
          ],
          footnote:
            "Factors: car value, age, driving history, full-time vs part-time, platform type",
        },
      },
      {
        id: "daily-vs-annual",
        title: "Daily vs Annual E-Hailing Insurance",
        type: "text",
        content: [
          "Not all drivers need annual coverage. If you only drive part-time, daily insurance could save you money.",
        ],
      },
      {
        id: "annual-addon",
        title: "Annual Add-On (Full-Time Drivers)",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Pay once per year (RM300-500)", checked: true },
          { text: "Continuous coverage", checked: true },
          { text: "Best if driving 15+ days/month", checked: true },
          { text: "Available from most insurers", checked: true },
        ],
      },
      {
        id: "daily-insurance",
        title: "Daily Insurance (Part-Time Drivers)",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Pay only on days you work", checked: true },
          { text: "RM8-15 per day typically", checked: true },
          { text: "Good for weekend warriors", checked: true },
          { text: "Switch on/off via app", checked: true },
        ],
      },
      {
        id: "daily-providers",
        title: "Insurers Offering Daily Option",
        type: "list",
        items: [
          { text: "AmAssurance - GrabDaily (official Grab partner)" },
          { text: "Kurnia (Liberty) - Daily e-hailing coverage" },
        ],
      },
      {
        id: "daily-breakeven",
        title: "Break-Even Calculation",
        type: "callout",
        variant: "tip",
        content:
          "Annual add-on: ~RM400/year. Daily rate: ~RM10/day. If driving 40+ days/year → Annual is cheaper. If driving <40 days/year → Daily saves money.",
      },
      {
        id: "cost-vs-risk",
        title: "Cost vs Risk Analysis",
        type: "comparison",
        cards: [
          {
            title: "Add-On Cost",
            icon: "money",
            iconColor: "green",
            items: [
              { text: "Annual: RM300-500/year" },
              { text: "Daily: RM8-15/day" },
              { text: "= Less than RM1.50/day (annual)" },
            ],
          },
          {
            title: "One Rejected Claim Cost",
            icon: "alert",
            iconColor: "red",
            items: [
              { text: "Minor accident: RM5,000-15,000" },
              { text: "Major accident: RM30,000-100,000+" },
              { text: "Passenger injury liability: RM50,000-500,000+" },
            ],
          },
        ],
      },
      {
        id: "verdict",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "Break-even: One rejected claim = 10-100+ years of add-on premium. Not having e-hailing add-on is financially insane.",
      },
      {
        id: "how-to-get-coverage",
        title: "How to Get E-Hailing Coverage",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Register Your Vehicle with Platform",
            description:
              "Get EVP permit from APAD, register vehicle with chosen platform (Grab, etc.), get PSV license for passenger services.",
          },
          {
            number: 2,
            title: "Get Comprehensive Insurance with Add-On",
            description:
              "Option A: Add to existing policy (endorsement) - contact insurer/agent, pay pro-rated premium. Option B: New policy with add-on included at renewal.",
          },
          {
            number: 3,
            title: "Provide to Platform",
            description:
              "Grab, Lalamove, etc. require insurance cover note/policy showing e-hailing endorsement with valid dates.",
          },
          {
            number: 4,
            title: "Keep Documentation",
            description:
              "Always have accessible: insurance policy copy, e-hailing endorsement letter, EVP permit, PSV license (if applicable).",
          },
        ],
      },
      {
        id: "by-platform",
        title: "E-Hailing Insurance by Platform",
        type: "text",
        content: [
          "Different platforms have different requirements. Here's what you need for each.",
        ],
      },
      {
        id: "grab-drivers",
        title: "Grab Drivers (Ride-Hailing)",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Comprehensive insurance", checked: true },
          { text: "E-hailing (passenger) add-on", checked: true },
          { text: "Minimum third-party liability: RM100,000", checked: true },
        ],
      },
      {
        id: "grab-warning",
        title: "",
        type: "callout",
        variant: "warning",
        content:
          "Grab provides supplementary coverage, BUT only while trip is active. It doesn't replace your own insurance and has limits and conditions. Don't rely on Grab's insurance alone - get your own proper coverage.",
      },
      {
        id: "delivery-drivers",
        title: "Lalamove / Grab Express (Delivery)",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Comprehensive insurance", checked: true },
          { text: "E-hailing (delivery) add-on", checked: true },
          {
            text: "Goods-in-transit coverage (optional but recommended)",
            checked: true,
          },
        ],
      },
      {
        id: "delivery-note",
        title: "",
        type: "callout",
        variant: "info",
        content:
          "No passengers, so passenger liability less critical. But goods damage can be expensive. Still need commercial use coverage.",
      },
      {
        id: "mula-mycar-diff",
        title: "MULA / MyCar / DIFF Drivers",
        type: "text",
        content: [
          "Same as Grab - comprehensive insurance plus e-hailing passenger add-on. Check platform-specific requirements as they may vary. All licensed platforms have similar insurance requirements.",
        ],
      },
      {
        id: "motorcycle-delivery",
        title: "Food Delivery (Motorcycle)",
        type: "callout",
        variant: "info",
        content:
          "If using motorcycle: Different insurance class. You need motorcycle comprehensive insurance with delivery/e-hailing endorsement. Different from car insurance. Separate NCD applies.",
      },
      {
        id: "making-claims",
        title: "Making Claims as E-Hailing Driver",
        type: "text",
        content: [
          "Know what to do after an accident to ensure your claim is approved.",
        ],
      },
      {
        id: "after-accident-steps",
        title: "What to Do After Accident",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Ensure Safety",
            description:
              "Check yourself, passengers, others for injuries. Move to safe location if possible.",
          },
          {
            number: 2,
            title: "Document Everything",
            description:
              "Photos of all vehicles, damage, scene. Screenshot your app showing trip status. Note time of accident. Passenger details. Witness contacts.",
          },
          {
            number: 3,
            title: "File Police Report (within 24 hours)",
            description:
              "Include all relevant details. Mention you were working (e-hailing). Get report copy.",
          },
          {
            number: 4,
            title: "Notify Your Insurer/Agent",
            description:
              "Report the accident. Mention it occurred during e-hailing. Provide trip details.",
          },
          {
            number: 5,
            title: "Notify the Platform",
            description:
              "Report through Grab/Lalamove app. They may have supplementary coverage. Document everything.",
          },
        ],
      },
      {
        id: "claim-pitfalls",
        title: "Common Claim Pitfalls for E-Hailing Drivers",
        type: "checklist",
        variant: "negative",
        items: [
          {
            text: "Hiding that you were working",
            description:
              "If discovered (likely), entire claim rejected. Don't do this.",
            checked: false,
          },
          {
            text: "Not having the add-on",
            description:
              "No retroactive coverage. If you don't have it, you're not covered.",
            checked: false,
          },
          {
            text: "Relying only on platform insurance",
            description: "Platform insurance has gaps, limits, and conditions.",
            checked: false,
          },
          {
            text: "Incomplete documentation",
            description:
              "Without proof of trip status, harder to process claim.",
            checked: false,
          },
        ],
      },
      {
        id: "if-rejected",
        title: "If Your Claim is Rejected",
        type: "text",
        content: [
          "Common reasons: No e-hailing add-on on policy, policy lapsed at time of accident, excluded vehicle type, material misrepresentation.",
          "What to do: Get written rejection reason, review your policy terms, if you have add-on and claim wrongly rejected - dispute it, contact us for help navigating the dispute.",
        ],
      },
      {
        id: "best-insurers",
        title: "Best Insurers for E-Hailing",
        type: "text",
        content: [
          "Not all insurers are equal when it comes to e-hailing coverage. Here are our recommendations.",
        ],
      },
      {
        id: "allianz-ehailing",
        title: "#1 Allianz - Best Overall",
        type: "comparison",
        cards: [
          {
            title: "Pros",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Comprehensive e-hailing add-on" },
              { text: "Clear terms and coverage" },
              { text: "Good claims experience" },
              { text: "Road Rangers support still applies" },
            ],
          },
          {
            title: "Cons",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Slightly higher premium" },
              { text: "Some vehicle restrictions" },
            ],
          },
        ],
      },
      {
        id: "zurich-ehailing",
        title: "#2 Zurich - Good Alternative",
        type: "comparison",
        cards: [
          {
            title: "Pros",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Competitive pricing" },
              { text: "Solid coverage terms" },
              { text: "Established claims process" },
            ],
          },
          {
            title: "Cons",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Less marketing around e-hailing specifically" },
            ],
          },
        ],
      },
      {
        id: "etiqa-ehailing",
        title: "#3 Etiqa - Budget Option",
        type: "comparison",
        cards: [
          {
            title: "Pros",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Competitive rates" },
              { text: "Takaful option available" },
              { text: "Good for Malay-speaking drivers" },
            ],
          },
          {
            title: "Cons",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Some limitations on vehicle age" },
            ],
          },
        ],
      },
      {
        id: "insurer-comparison",
        title: "E-Hailing Insurer Comparison",
        type: "table",
        tableData: {
          headers: ["Insurer", "Annual Add-On", "Daily Option", "Notes"],
          rows: [
            ["Allianz", "RM350-500", "❌", "Road Rangers included"],
            ["Zurich", "RM350-550", "❌", "Good claims process"],
            ["Etiqa", "RM300-450", "❌", "Takaful available"],
            ["AmAssurance", "RM300-450", "✅ GrabDaily", "Official Grab partner"],
            ["Kurnia (Liberty)", "RM280-450", "✅ Daily", "Flexible options"],
            ["RHB", "RM280-450", "❌", "Budget option"],
          ],
        },
      },
      {
        id: "myths",
        title: "E-Hailing Insurance Myths",
        type: "text",
        content: [
          "Don't fall for these common misconceptions that could leave you unprotected.",
        ],
      },
      {
        id: "myth-1",
        title: "Myth 1: \"Grab's insurance covers me fully\"",
        type: "callout",
        variant: "warning",
        content:
          "Reality: Grab provides supplementary coverage, NOT primary insurance. It's only active during trips, has limits (may not cover full damage), has exclusions, doesn't cover your car repairs, and is secondary to your own insurance. You still need your own e-hailing insurance.",
      },
      {
        id: "myth-2",
        title: "Myth 2: \"I only drive part-time, so I don't need it\"",
        type: "callout",
        variant: "warning",
        content:
          "Reality: Coverage is based on activity, not frequency. If you drive even ONE trip without proper insurance, that ONE accident can be rejected. Doesn't matter if it's your first trip ever. Part-time drivers need the same coverage as full-time.",
      },
      {
        id: "myth-3",
        title: "Myth 3: \"My private insurance will cover me if I don't tell them\"",
        type: "callout",
        variant: "warning",
        content:
          "Reality: This is insurance fraud. Material misrepresentation (hiding e-hailing use) can result in claim rejection, policy cancellation, being blacklisted, and potential legal action. Not worth the risk.",
      },
      {
        id: "myth-4",
        title: "Myth 4: \"E-hailing add-on is too expensive\"",
        type: "callout",
        variant: "warning",
        content:
          "Reality: RM300-500/year = RM25-42/month = less than RM1.50/day. One rejected claim costs RM5,000-100,000+. The math is obvious.",
      },
      {
        id: "myth-5",
        title: "Myth 5: \"I can add it after I have an accident\"",
        type: "callout",
        variant: "warning",
        content:
          "Reality: Insurance doesn't work retroactively. If accident happens without coverage, you cannot add coverage after the fact. That accident is permanently uncovered. No insurer will cover a pre-existing incident. Get coverage BEFORE you start driving.",
      },
      {
        id: "tax-considerations",
        title: "E-Hailing Tax Considerations",
        type: "text",
        content: [
          "E-hailing income is taxable. Keep records of all earnings, platform statements, and expenses (fuel, maintenance, insurance).",
          "Your e-hailing insurance add-on may be tax-deductible as business expense. Keep insurance receipts, policy documents, and payment records. Consult a tax professional for your specific situation.",
        ],
      },
      {
        id: "how-we-help",
        title: "How We Help E-Hailing Drivers",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Review your current coverage", checked: true },
          { text: "Identify gaps in protection", checked: true },
          { text: "Get you proper e-hailing add-on", checked: true },
          { text: "Provide claims guidance", checked: true },
          { text: "Answer your questions", checked: true },
        ],
      },
      {
        id: "why-choose-us",
        title: "Why Drivers Choose Us",
        type: "tipGrid",
        tips: [
          {
            icon: "check",
            title: "We Understand E-Hailing",
            description:
              "Many agents don't understand e-hailing requirements. We specialize in making sure you're properly covered.",
          },
          {
            icon: "shield",
            title: "No Rejected Claims",
            description:
              "Claims get rejected due to missing add-on. We ensure your policy is correct from day one.",
          },
          {
            icon: "document",
            title: "Simple Process",
            description:
              "Confusing requirements and documentation? We guide you through the entire process.",
          },
        ],
      },
      {
        id: "before-driving-checklist",
        title: "Before You Start Driving Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Get EVP permit from APAD", checked: true },
          { text: "Register with platform (Grab, etc.)", checked: true },
          { text: "Get PSV license (if passenger service)", checked: true },
          { text: "Buy comprehensive insurance with e-hailing add-on", checked: true },
          { text: "Verify add-on shows on policy", checked: true },
          { text: "Submit insurance to platform", checked: true },
        ],
      },
      {
        id: "documents-in-car",
        title: "Documents to Keep in Car",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Insurance policy copy", checked: true },
          { text: "E-hailing endorsement letter", checked: true },
          { text: "EVP permit", checked: true },
          { text: "PSV license", checked: true },
          { text: "Platform registration", checked: true },
        ],
      },
      {
        id: "after-accident-checklist",
        title: "After Accident Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Ensure everyone's safety", checked: true },
          { text: "Take photos/videos", checked: true },
          { text: "Screenshot app showing trip status", checked: true },
          { text: "Exchange details with other parties", checked: true },
          { text: "File police report within 24 hours", checked: true },
          { text: "Notify your insurer/agent", checked: true },
          { text: "Report to platform", checked: true },
          { text: "Keep all documentation", checked: true },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use any car for e-hailing?",
        answer:
          "No. Your car must meet platform requirements (age limits, type restrictions) and have EVP permit from APAD.",
      },
      {
        question: "Does e-hailing add-on affect my NCD?",
        answer:
          "The add-on itself doesn't affect NCD. But if you make claims (e-hailing or not), normal NCD rules apply.",
      },
      {
        question: "What if I stop doing e-hailing?",
        answer:
          "You can remove the add-on at renewal and go back to private insurance only.",
      },
      {
        question: "Is e-hailing insurance more expensive than private?",
        answer:
          "Yes, the add-on costs RM300-500/year extra. Your base premium is the same.",
      },
      {
        question: "Can I drive for multiple platforms?",
        answer:
          "Yes, same e-hailing add-on typically covers all licensed platforms (Grab, Lalamove, MULA, etc.). Verify with insurer. Only drive for APAD-licensed platforms.",
      },
      {
        question: "What about food delivery on motorcycle?",
        answer:
          "Different insurance class. You need motorcycle insurance with delivery/e-hailing endorsement.",
      },
      {
        question: "Is there e-hailing insurance for electric vehicles?",
        answer:
          "Yes. Same process - comprehensive + e-hailing add-on. EV-specific benefits (like Allianz EV Shield) still apply.",
      },
      {
        question: "What happens if passenger is injured?",
        answer:
          "Your e-hailing add-on includes passenger liability. Covers injury claims from passengers up to policy limit.",
      },
      {
        question: "Can my family members drive my e-hailing registered car?",
        answer:
          "For personal use (not e-hailing), yes if they're listed drivers. For e-hailing, only registered e-hailing drivers should drive.",
      },
      {
        question: "Do I need to tell the insurer my car is for e-hailing?",
        answer:
          "Yes, absolutely. Failure to declare is misrepresentation and grounds for claim rejection.",
      },
    ],
    ctaTitle: "Get E-Hailing Insurance Quote",
    ctaDescription:
      "Driving for Grab, Lalamove, or MULA? We'll make sure you have the right coverage - full protection at a fair price. Free consultation for all e-hailing drivers.",
  },
  "modified-car-insurance-malaysia": {
    id: "modified-car-insurance-malaysia",
    slug: "modified-car-insurance-malaysia",
    title: `Modified Car Insurance Malaysia ${new Date().getFullYear()} - How to Insure Your Modified Car`,
    subtitle:
      "Modified your car with new rims, exhaust, body kit, or engine swap? Your insurance may not cover you unless you've declared everything properly. One undeclared modification = rejected claim = you pay everything yourself. Here's how to protect your investment.",
    lastUpdated: new Date().toISOString().split("T")[0],
    readTime: "16 min read",
    metaTitle: `Modified Car Insurance Malaysia ${new Date().getFullYear()} - How to Insure Your Modified Car`,
    metaDescription:
      "Modified your car? Here's how to get proper insurance coverage. What to declare, which insurers accept modifications, and how to avoid claim rejections.",
    keywords: [
      "modified car insurance",
      "car modification insurance Malaysia",
      "turbo insurance",
      "body kit insurance",
      "declare modifications",
      "modified car claim",
      "aftermarket parts insurance",
      "engine swap insurance",
      "JPJ modification",
      "PUSPAKOM modification",
    ],
    sections: [
      {
        id: "brutal-truth",
        title: "The Brutal Truth About Undeclared Modifications",
        type: "text",
        content: [
          "Think you can hide your modifications from your insurer? Think again. One undeclared modification can result in your entire claim being rejected.",
        ],
      },
      {
        id: "what-happens-undeclared",
        title: "What Happens If You Don't Declare",
        type: "callout",
        variant: "warning",
        content:
          "Scenario: You installed a turbo kit worth RM15,000. Never told insurer. Car gets totaled. Result: You submit claim → Adjuster inspects car → Discovers turbo kit → Checks your policy - no turbo declared → Claim REJECTED for misrepresentation → You get NOTHING → RM15,000 turbo + car value = total loss.",
      },
      {
        id: "why-insurers-reject",
        title: "Why Insurers Reject Undeclared Mods",
        type: "list",
        items: [
          { text: "Performance mods = higher accident risk" },
          { text: "Expensive parts = higher theft target" },
          { text: "Non-standard parts = harder to value/repair" },
          { text: "They priced your policy based on STOCK car" },
        ],
      },
      {
        id: "fraud-warning",
        title: "",
        type: "callout",
        variant: "warning",
        content:
          "Hiding modifications = fraud. Insurers take this seriously. It's not about being difficult - it's about accurate risk assessment.",
      },
      {
        id: "how-they-find-out",
        title: "How Insurers Find Out",
        type: "tipGrid",
        tips: [
          {
            icon: "eye",
            title: "Adjuster Inspection",
            description: "They physically inspect the car after accident",
          },
          {
            icon: "wrench",
            title: "Workshop Assessment",
            description: "Panel workshop reports non-standard parts",
          },
          {
            icon: "camera",
            title: "Your Own Photos",
            description: "Your claim photos show aftermarket parts",
          },
          {
            icon: "document",
            title: "PUSPAKOM Records",
            description: "If you endorsed modifications legally",
          },
          {
            icon: "user",
            title: "Social Media",
            description: "Some adjusters check your Facebook/Instagram",
          },
          {
            icon: "history",
            title: "Previous Claims",
            description: "History shows different specs",
          },
        ],
      },
      {
        id: "bottom-line",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "Bottom line: Assume they will find out. Because they usually do.",
      },
      {
        id: "what-counts-as-mod",
        title: "What Counts as a \"Modification\"?",
        type: "text",
        content: [
          "Not sure what needs to be declared? Here's a comprehensive list.",
        ],
      },
      {
        id: "must-declare-performance",
        title: "Performance Modifications - MUST Declare",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Engine swap or upgrade", checked: false },
          { text: "Turbo/supercharger installation", checked: false },
          { text: "ECU tuning/remapping", checked: false },
          { text: "Exhaust system changes", checked: false },
          { text: "Air intake upgrades", checked: false },
          { text: "Intercooler installation", checked: false },
          { text: "Nitrous oxide systems", checked: false },
        ],
      },
      {
        id: "must-declare-suspension",
        title: "Suspension & Handling - MUST Declare",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Lowered suspension", checked: false },
          { text: "Coilovers/adjustable suspension", checked: false },
          { text: "Sway bars/anti-roll bars", checked: false },
          { text: "Strut braces", checked: false },
          { text: "Upgraded brakes (big brake kits)", checked: false },
        ],
      },
      {
        id: "must-declare-exterior",
        title: "Exterior Modifications - MUST Declare",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Body kits (bumpers, side skirts, spoilers)", checked: false },
          { text: "Wide body kits", checked: false },
          { text: "Custom paint/wrap (color change)", checked: false },
          { text: "Aftermarket wheels/rims", checked: false },
          { text: "Non-standard lighting (HID, LED conversions)", checked: false },
          { text: "Window tinting (beyond factory)", checked: false },
        ],
      },
      {
        id: "must-declare-interior",
        title: "Interior Modifications - MUST Declare",
        type: "checklist",
        variant: "negative",
        items: [
          { text: "Racing seats", checked: false },
          { text: "Roll cage", checked: false },
          { text: "Custom steering wheel", checked: false },
          { text: "Aftermarket audio system (if significantly valuable)", checked: false },
        ],
      },
      {
        id: "usually-no-declare",
        title: "Usually Don't Need Declaration",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Dashcam", checked: true },
          { text: "Phone holder", checked: true },
          { text: "Floor mats", checked: true },
          { text: "Seat covers", checked: true },
          { text: "Door visors (within JPJ limits)", checked: true },
          { text: "Genuine manufacturer accessories", checked: true },
          { text: "Dealer-installed options at purchase", checked: true },
        ],
      },
      {
        id: "when-in-doubt",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "When in doubt, declare it. Better safe than rejected.",
      },
      {
        id: "jpj-requirements",
        title: "JPJ Legal Requirements for Modifications",
        type: "text",
        content: [
          "Some modifications require legal endorsement from JPJ. Operating without proper endorsement can void your insurance.",
        ],
      },
      {
        id: "legal-vs-illegal",
        title: "Legal vs Illegal Modifications",
        type: "comparison",
        cards: [
          {
            title: "Legal (with proper endorsement)",
            icon: "check",
            iconColor: "green",
            items: [
              { text: "Engine swap (with JPJ approval + PUSPAKOM B2)" },
              { text: "Color change (with JPJ update)" },
              { text: "Rim upgrade (within fender coverage)" },
              { text: "Spoilers (within size limits)" },
              { text: "Exhaust (within 35% of original capacity)" },
            ],
          },
          {
            title: "Illegal (don't do it)",
            icon: "x",
            iconColor: "red",
            items: [
              { text: "Stanced/excessively lowered suspension" },
              { text: "Non-compliant HID lights (aftermarket without proper housing)" },
              { text: "Decorative lights on while driving" },
              { text: "Oversized rims extending beyond fenders" },
              { text: "Non-standard number plates" },
              { text: "Engine swap without endorsement" },
            ],
          },
        ],
      },
      {
        id: "engine-categories",
        title: "JPJ Modification Categories (Engine)",
        type: "table",
        tableData: {
          headers: ["Category", "Description", "Requirement"],
          rows: [
            ["1", "Same make, within 25% capacity", "Standard process"],
            ["2", "Different make OR over 25% capacity", "Special approval"],
            ["3", "Fuel type change (petrol to diesel, etc.)", "Special approval"],
            ["4-6", "Commercial/special vehicles", "Additional permits"],
          ],
        },
      },
      {
        id: "window-tint",
        title: "Window Tint Regulations (Current)",
        type: "table",
        tableData: {
          headers: ["Window", "Maximum VLT (Visible Light Transmission)"],
          rows: [
            ["Front windscreen", "70% (30% tint darkness)"],
            ["Front side windows", "50% (50% tint darkness)"],
            ["Rear side windows", "30% (70% tint darkness)"],
            ["Rear windscreen", "30% (70% tint darkness)"],
          ],
          footnote: "Tint must have QR code security label for compliance verification.",
        },
      },
      {
        id: "penalties",
        title: "Penalties for Illegal Modifications",
        type: "list",
        items: [
          { text: "Fine up to RM2,000" },
          { text: "Imprisonment up to 6 months" },
          { text: "Insurance policy voided" },
          { text: "Vehicle cannot pass PUSPAKOM" },
          { text: "Cannot renew road tax" },
        ],
      },
      {
        id: "how-to-insure",
        title: "How to Properly Insure Modified Car",
        type: "text",
        content: [
          "Follow these steps to ensure your modified car is properly covered.",
        ],
      },
      {
        id: "step-1-document",
        title: "Step 1: Document All Modifications",
        type: "text",
        content: [
          "Create a modification list with: modification type, brand/part name, cost, date installed, and whether you have the receipt. Keep all receipts - they're critical for proving value during claims.",
        ],
      },
      {
        id: "mod-list-example",
        title: "Example Modification List",
        type: "table",
        tableData: {
          headers: ["Modification", "Brand/Part", "Cost", "Date Installed"],
          rows: [
            ["Turbo kit", "Garrett GT28", "RM8,000", "Jan 2025"],
            ["Coilovers", "BC Racing", "RM3,500", "Mar 2025"],
            ["Exhaust", "HKS Hi-Power", "RM2,200", "Jan 2025"],
            ["Wheels", "Volk TE37", "RM6,000", "Feb 2025"],
          ],
        },
      },
      {
        id: "step-2-jpj",
        title: "Step 2: Get JPJ Endorsement (If Required)",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "For engine changes",
            description: "Submit application to JPJ State Office",
          },
          {
            number: 2,
            title: "Get approval letter",
            description: "Processing takes 1-2 weeks",
          },
          {
            number: 3,
            title: "Book PUSPAKOM B2 inspection",
            description: "Required for engine modifications",
          },
          {
            number: 4,
            title: "Pass inspection",
            description: "Vehicle must meet safety standards",
          },
          {
            number: 5,
            title: "Update vehicle registration card (grant)",
            description: "Official record of modification",
          },
          {
            number: 6,
            title: "Provide updated grant to insurer",
            description: "For proper coverage",
          },
        ],
      },
      {
        id: "step-3-declare",
        title: "Step 3: Declare to Insurer",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Provide full modification list", checked: true },
          { text: "Include estimated value of modifications", checked: true },
          { text: "Attach JPJ endorsement (if applicable)", checked: true },
          { text: "Include photos of modifications", checked: true },
          { text: "Provide receipts/invoices", checked: true },
        ],
      },
      {
        id: "be-honest",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "Be honest. Underdeclaring value = underpaid claim. Declare the true value of your modifications.",
      },
      {
        id: "step-4-coverage",
        title: "Step 4: Get Proper Coverage",
        type: "text",
        content: [
          "Standard comprehensive only covers stock car value. What you need: Agreed value (for total car including mods), accessories coverage endorsement, and declared modifications on policy schedule. Check your policy schedule - modifications should be listed.",
        ],
      },
      {
        id: "step-5-update",
        title: "Step 5: Update When You Add More Mods",
        type: "numberedList",
        steps: [
          {
            number: 1,
            title: "Inform your insurer/agent",
            description: "Every time you modify the car",
          },
          {
            number: 2,
            title: "Provide details and value",
            description: "Part name, cost, installation date",
          },
          {
            number: 3,
            title: "Get policy endorsed",
            description: "May adjust premium (pro-rated for mid-year)",
          },
          {
            number: 4,
            title: "Get updated policy schedule",
            description: "Verify new mods are listed",
          },
        ],
      },
      {
        id: "which-insurers",
        title: "Which Insurers Accept Modified Cars?",
        type: "text",
        content: [
          "Many insurers don't want modified cars due to higher risk, harder valuation, and non-standard parts. Some will reject outright, others accept with conditions.",
        ],
      },
      {
        id: "insurers-table",
        title: "Insurers That Accept Modifications",
        type: "table",
        tableData: {
          headers: ["Insurer", "Accepts Mods", "Notes"],
          rows: [
            ["Allianz", "✅ Yes", "Case-by-case, need full disclosure"],
            ["Zurich", "✅ Yes", "Accepts most legal mods"],
            ["MSIG", "✅ Yes", "Good for performance cars"],
            ["Tokio Marine", "✅ Limited", "Conservative on engine swaps"],
            ["Etiqa", "⚠️ Limited", "Basic mods only usually"],
            ["RHB", "⚠️ Limited", "Case-by-case"],
          ],
        },
      },
      {
        id: "our-recommendation",
        title: "Our Recommendation",
        type: "callout",
        variant: "tip",
        content:
          "Allianz and Zurich are generally most accommodating for modified cars. They have experience with enthusiast vehicles, clear process for declaring mods, fair assessment of modification value, and better understanding of aftermarket parts. We specialize in these two and know how to present your modifications for approval.",
      },
      {
        id: "premium-impact",
        title: "Modified Car Premium Impact",
        type: "table",
        tableData: {
          headers: ["Modification Type", "Premium Impact"],
          rows: [
            ["Cosmetic (body kit, wrap)", "+5-15%"],
            ["Wheels/suspension", "+10-20%"],
            ["Exhaust only", "+5-10%"],
            ["Engine tune (ECU)", "+15-30%"],
            ["Turbo/supercharger", "+25-50%"],
            ["Full engine swap", "+30-60%"],
          ],
          footnote: "Higher horsepower, expensive parts, track-focused mods, and young drivers increase premium more.",
        },
      },
      {
        id: "premium-example",
        title: "Example Premium Calculation",
        type: "comparison",
        cards: [
          {
            title: "Stock Honda Civic FC",
            icon: "car",
            iconColor: "blue",
            items: [
              { text: "Market value: RM85,000" },
              { text: "Annual premium: ~RM1,800" },
            ],
          },
          {
            title: "Modified Honda Civic FC",
            icon: "car",
            iconColor: "amber",
            items: [
              { text: "Stock value: RM85,000" },
              { text: "Modifications: RM25,000" },
              { text: "Agreed value: RM100,000" },
              { text: "Annual premium: ~RM2,500-3,000" },
            ],
          },
        ],
      },
      {
        id: "worth-it",
        title: "",
        type: "callout",
        variant: "tip",
        content:
          "Premium increase: RM700-1,200/year. Worth it? One rejected claim on RM25,000 mods = 20+ years of extra premium.",
      },
      {
        id: "making-claims",
        title: "Making Claims on Modified Cars",
        type: "text",
        content: [
          "Know what to expect when claiming on a modified vehicle.",
        ],
      },
      {
        id: "partial-damage",
        title: "For Partial Damage (Repairs)",
        type: "list",
        items: [
          { text: "Modified parts damaged = covered if declared" },
          { text: "Standard repair process applies" },
          { text: "May need to source aftermarket parts yourself" },
          { text: "Workshop may not stock your specific parts" },
        ],
      },
      {
        id: "total-loss",
        title: "For Total Loss",
        type: "list",
        items: [
          { text: "Payout based on agreed value (including mods)" },
          { text: "Or market value + declared modifications value" },
          { text: "Must have documentation of modification costs" },
        ],
      },
      {
        id: "common-claim-problems",
        title: "Common Claim Problems",
        type: "tipGrid",
        tips: [
          {
            icon: "money",
            title: "\"Your mods aren't worth that much\"",
            description: "Keep original receipts, photos, get independent valuation if needed.",
          },
          {
            icon: "alert",
            title: "\"This part isn't on your declaration\"",
            description: "Declare everything upfront. Intentionally hidden mods = likely rejection.",
          },
          {
            icon: "search",
            title: "\"We can't find replacement parts\"",
            description: "Cash settlement for part value, or source part yourself for reimbursement.",
          },
          {
            icon: "wrench",
            title: "\"Modification caused the damage\"",
            description: "Get independent mechanical assessment, prove proper installation.",
          },
        ],
      },
      {
        id: "smooth-claims-tips",
        title: "Tips for Smooth Claims",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Document your build - Photos at each stage", checked: true },
          { text: "Keep all receipts - Every part, every install", checked: true },
          { text: "Use reputable installers - Professional installation records", checked: true },
          { text: "Maintain properly - Service records showing care", checked: true },
          { text: "Update insurer - Every significant modification", checked: true },
        ],
      },
      {
        id: "special-cases",
        title: "Special Cases",
        type: "text",
        content: [
          "Some modified car situations require special consideration.",
        ],
      },
      {
        id: "track-day",
        title: "Track Day Coverage",
        type: "callout",
        variant: "warning",
        content:
          "Standard insurance does NOT cover: track days, time attack, racing events, or driver training on track. If you track your car, get separate track day insurance or accept you're uninsured on track. Some enthusiast insurers offer track add-ons but this is rare in Malaysia.",
      },
      {
        id: "show-cars",
        title: "Show Cars / Concours",
        type: "list",
        items: [
          { text: "Agreed value essential for high-value show cars" },
          { text: "Professional appraisal recommended" },
          { text: "Detailed photo documentation required" },
          { text: "May need specialist classic/collector policy" },
        ],
      },
      {
        id: "imported-jdm",
        title: "Imported JDM Cars",
        type: "list",
        items: [
          { text: "Original modifications should be on import docs" },
          { text: "PUSPAKOM B2 required for registration" },
          { text: "Declare everything on insurance" },
          { text: "May need valuation for rare parts" },
        ],
      },
      {
        id: "stance-cars",
        title: "Stance / Heavily Lowered Cars",
        type: "callout",
        variant: "warning",
        content:
          "Reality check: Excessive lowering is illegal. Insurance may not cover illegal modifications. PUSPAKOM will fail the car. Risk of policy being voided. Recommendation: Stay within legal limits or accept the risk.",
      },
      {
        id: "how-we-help",
        title: "How We Help Modified Car Owners",
        type: "text",
        content: [
          "We understand the enthusiast community. We know how to present modifications to insurers, understand performance parts and their value, can advocate for fair valuations, and help navigate JPJ endorsement requirements.",
        ],
      },
      {
        id: "what-we-do",
        title: "What We Do",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Review your modification list", checked: true },
          { text: "Advise on declaration requirements", checked: true },
          { text: "Find insurers that accept your mods", checked: true },
          { text: "Get fair agreed values", checked: true },
          { text: "Support claims involving modified parts", checked: true },
        ],
      },
      {
        id: "why-choose-us",
        title: "Why Enthusiasts Choose Us",
        type: "tipGrid",
        tips: [
          {
            icon: "chat",
            title: "We Speak Your Language",
            description: "Turbo, coilovers, downpipe - we get it. Many agents don't understand modifications.",
          },
          {
            icon: "money",
            title: "Fair Valuations",
            description: "We advocate for proper valuation with documentation when insurers undervalue your mods.",
          },
          {
            icon: "shield",
            title: "Claims Support",
            description: "Claims with aftermarket parts get complicated. We guide you through the process.",
          },
        ],
      },
      {
        id: "before-insuring-checklist",
        title: "Before Insuring Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "List all modifications with values", checked: true },
          { text: "Gather receipts/invoices for all parts", checked: true },
          { text: "Take photos of all modifications", checked: true },
          { text: "Get JPJ endorsement if required", checked: true },
          { text: "Determine total agreed value needed", checked: true },
        ],
      },
      {
        id: "getting-policy-checklist",
        title: "When Getting Policy Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Declare all modifications", checked: true },
          { text: "Provide documentation", checked: true },
          { text: "Request agreed value coverage", checked: true },
          { text: "Verify mods listed on policy schedule", checked: true },
          { text: "Understand what's covered vs excluded", checked: true },
        ],
      },
      {
        id: "ongoing-checklist",
        title: "Ongoing Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Update insurer when adding mods", checked: true },
          { text: "Keep new receipts organized", checked: true },
          { text: "Maintain modification records", checked: true },
          { text: "Review coverage at renewal", checked: true },
        ],
      },
      {
        id: "claim-checklist",
        title: "If You Claim Checklist",
        type: "checklist",
        variant: "positive",
        items: [
          { text: "Document damage thoroughly", checked: true },
          { text: "Provide modification documentation", checked: true },
          { text: "Be prepared to source parts yourself", checked: true },
          { text: "Keep communication records", checked: true },
        ],
      },
    ],
    faqs: [
      {
        question: "Will my premium go up if I declare modifications?",
        answer:
          "Yes, usually 10-50% depending on modification type. But undeclared mods = zero payout when you claim.",
      },
      {
        question: "Can I insure illegal modifications?",
        answer:
          "Generally no. Insurers won't knowingly cover illegal mods. If discovered, claim rejected.",
      },
      {
        question: "What if I bought a car that was already modified?",
        answer:
          "Still your responsibility to declare. Previous owner's insurance doesn't transfer. Inspect and list all mods.",
      },
      {
        question: "Do I need to declare if I'm going back to stock?",
        answer:
          "Yes, inform insurer when you remove modifications. May reduce premium.",
      },
      {
        question: "Can I get coverage for modifications done overseas?",
        answer:
          "Possible if properly imported and endorsed. Need documentation of parts and installation.",
      },
      {
        question: "What about warranty vs insurance?",
        answer:
          "Different things. Insurance covers accidents/theft. Warranty covers defects. Modifications may void manufacturer warranty but shouldn't affect insurance if declared.",
      },
      {
        question: "My friend didn't declare and got his claim paid - why declare?",
        answer:
          "Lucky. Or small claim that wasn't investigated thoroughly. Don't gamble your RM50,000+ investment on luck.",
      },
      {
        question: "How do I prove my modification values?",
        answer:
          "Receipts, invoices, bank statements, photos, independent valuations. Keep everything.",
      },
    ],
    ctaTitle: "Get Modified Car Insurance Quote",
    ctaDescription:
      "Modified your car? We understand enthusiasts and know how to get proper coverage for your build. Fair valuations, proper declarations, and claims support when you need it.",
  },
};

// Helper functions
export function getGuide(id: string): Guide | undefined {
  return guides[id];
}

export function getAllGuides(): Guide[] {
  return Object.values(guides);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return Object.values(guides).find((guide) => guide.slug === slug);
}

// Get guide for hub page display
export interface GuidePreview {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const guidesPreviews: GuidePreview[] = [
  {
    id: "ncd-explained",
    slug: "ncd-explained",
    title: "NCD Explained",
    description: "Learn how No Claim Discount works and save up to 55%",
    icon: "chart",
    color: "green",
  },
  {
    id: "third-party-vs-comprehensive",
    slug: "third-party-vs-comprehensive",
    title: "Third Party vs Comprehensive",
    description: "Which coverage type is right for your car?",
    icon: "scale",
    color: "blue",
  },
  {
    id: "how-to-claim-car-insurance",
    slug: "how-to-claim-car-insurance",
    title: "How to Claim Car Insurance",
    description: "Step-by-step guide to making a car insurance claim",
    icon: "document",
    color: "purple",
  },
  {
    id: "cheapest-car-insurance-malaysia",
    slug: "cheapest-car-insurance-malaysia",
    title: "Cheapest Car Insurance Malaysia",
    description: "Find the lowest rates and tips to save money",
    icon: "money",
    color: "amber",
  },
  {
    id: "best-ev-car-insurance-malaysia",
    slug: "best-ev-car-insurance-malaysia",
    title: "Best EV Car Insurance Malaysia",
    description: "Compare top 5 EV insurance plans with charger coverage",
    icon: "bolt",
    color: "green",
  },
  {
    id: "rejected-car-insurance-claim-help-malaysia",
    slug: "rejected-car-insurance-claim-help-malaysia",
    title: "Claim Rejected? Here's What to Do",
    description: "How to appeal rejected claims and get expert help",
    icon: "alert",
    color: "red",
  },
  {
    id: "why-use-insurance-agent-vs-online-comparison-malaysia",
    slug: "why-use-insurance-agent-vs-online-comparison-malaysia",
    title: "Agent vs Online: Which is Better?",
    description: "Honest comparison of buying through agents vs Bjak/PolicyStreet",
    icon: "scale",
    color: "blue",
  },
  {
    id: "best-insurance-agent-for-claims-malaysia",
    slug: "best-insurance-agent-for-claims-malaysia",
    title: "Best Agent for Claims",
    description: "How to find an agent who actually helps with claims",
    icon: "user",
    color: "purple",
  },
  {
    id: "zurich-24-hour-roadside-assist-malaysia",
    slug: "zurich-24-hour-roadside-assist-malaysia",
    title: "Zurich 24-Hour Roadside Assist",
    description: "Complete guide to Zurich's roadside assistance service",
    icon: "car",
    color: "blue",
  },
  {
    id: "allianz-road-rangers-review-malaysia",
    slug: "allianz-road-rangers-review-malaysia",
    title: "Allianz Road Rangers Review",
    description: "Honest review of Malaysia's best accident assistance service",
    icon: "shield",
    color: "blue",
  },
  {
    id: "allianz-ev-shield-explained-malaysia",
    slug: "allianz-ev-shield-explained-malaysia",
    title: "Allianz EV Shield Explained",
    description: "Complete guide to EV-specific coverage for electric vehicles",
    icon: "bolt",
    color: "green",
  },
  {
    id: "flood-car-insurance-malaysia",
    slug: "flood-car-insurance-malaysia",
    title: "Flood Car Insurance Malaysia",
    description: "Is your car covered? Guide to Special Perils coverage",
    icon: "cloud-rain",
    color: "blue",
  },
  {
    id: "sst-car-insurance-malaysia",
    slug: "sst-car-insurance-malaysia",
    title: "SST on Car Insurance",
    description: "How to minimize the 8% service tax impact",
    icon: "receipt",
    color: "amber",
  },
  {
    id: "agreed-value-vs-market-value-car-insurance-malaysia",
    slug: "agreed-value-vs-market-value-car-insurance-malaysia",
    title: "Agreed Value vs Market Value",
    description: "Which payout method is better for your car?",
    icon: "scale",
    color: "purple",
  },
  {
    id: "best-panel-workshops-car-insurance-malaysia",
    slug: "best-panel-workshops-car-insurance-malaysia",
    title: "Best Panel Workshops",
    description: "How to choose quality workshops for insurance claims",
    icon: "wrench",
    color: "amber",
  },
  {
    id: "how-to-dispute-insurance-adjuster-report-malaysia",
    slug: "how-to-dispute-insurance-adjuster-report-malaysia",
    title: "Dispute Adjuster Report",
    description: "Challenge unfair valuations and get the payout you deserve",
    icon: "scale",
    color: "red",
  },
  {
    id: "e-hailing-insurance-malaysia",
    slug: "e-hailing-insurance-malaysia",
    title: "E-Hailing Insurance",
    description: "Essential coverage for Grab, Lalamove & MULA drivers",
    icon: "car",
    color: "green",
  },
  {
    id: "modified-car-insurance-malaysia",
    slug: "modified-car-insurance-malaysia",
    title: "Modified Car Insurance",
    description: "How to properly insure your modified car",
    icon: "wrench",
    color: "purple",
  },
];
