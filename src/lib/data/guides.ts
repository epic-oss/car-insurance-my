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
];
