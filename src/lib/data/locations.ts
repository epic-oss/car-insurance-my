export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationArea {
  id: string;
  name: string;
  slug: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  neighborhoods: string[];
  floodRiskAreas: string[];
  floodRiskNote: string;
  majorRoads: string[];
  trafficNote: string;
  workshopCount: { allianz: number; zurich: number };
  theftNote: string;
  localConsiderations: string;
  demographicNote: string;
  faqs: LocationFAQ[];
}

export const locations: Record<string, LocationArea> = {
  "petaling-jaya": {
    id: "petaling-jaya",
    name: "Petaling Jaya",
    slug: "petaling-jaya",
    title: "Car Insurance Agent Petaling Jaya",
    metaDescription:
      "Looking for a car insurance agent in Petaling Jaya? Get personalized service, claims support, and competitive rates from Allianz & Zurich specialists.",
    heroHeadline: "Car Insurance Agent in Petaling Jaya",
    heroSubtitle:
      "Looking for car insurance in Petaling Jaya? You have two options: click through 15 tabs on a comparison site, or work with an agent who actually picks up the phone when you need help.",
    neighborhoods: [
      "SS2 / SS3 / Taman SEA",
      "Damansara Utama / Uptown",
      "Bandar Utama / Mutiara Damansara",
      "Kelana Jaya / Ara Damansara",
      "Section 14 / Section 17 / Section 52",
    ],
    floodRiskAreas: [
      "Section 13 industrial area",
      "Certain parts of Damansara Jaya",
      "Low-lying areas near Sungai Damansara",
    ],
    floodRiskNote:
      "Parts of PJ are prone to flash floods, especially during monsoon season. Add Special Perils coverage (RM50-150/year extra) to protect against flood damage.",
    majorRoads: [
      "LDP (Lebuhraya Damansara-Puchong)",
      "Federal Highway",
      "Damansara-Puchong Expressway",
    ],
    trafficNote:
      "PJ's dense traffic on LDP, Federal Highway, and Damansara-Puchong Highway means higher accident risk. Good driving record = 55% NCD = significant savings.",
    workshopCount: { allianz: 15, zurich: 10 },
    theftNote:
      "PJ has moderate theft risk overall. Underground parking areas are safer. Older sections have varied security levels. Comprehensive insurance + steering lock recommended.",
    localConsiderations:
      "Older areas like SS2 and SS3 have different considerations than newer developments like Mutiara Damansara and Bandar Utama. Mixed residential-commercial zones mean varied parking situations and risk profiles.",
    demographicNote:
      "PJ has a diverse mix of working professionals, families, and students. Many residents commute daily on congested highways, making fast claims processing essential.",
    faqs: [
      {
        question: "Do I need to meet in person to get insurance in PJ?",
        answer:
          "No. Everything is done via WhatsApp and online. It's faster and more convenient than meeting face-to-face. You get the same personalized service without the commute.",
      },
      {
        question:
          "Can I choose a workshop near my PJ home or office?",
        answer:
          "Yes. We help you select from panel workshops closest to your location in PJ, whether you're in SS2, Bandar Utama, Kelana Jaya, or anywhere else in the area.",
      },
      {
        question:
          "What if I have an accident on Federal Highway?",
        answer:
          "Call us immediately. We guide you through the process: stay safe, document the scene, file a police report, and select the best workshop near you. We handle the claim coordination.",
      },
      {
        question: "Is insurance more expensive in Petaling Jaya?",
        answer:
          "Slightly higher than rural areas due to traffic density and accident frequency, but the difference is small (5-10%). Your NCD discount has a much bigger impact on your premium.",
      },
      {
        question:
          "Should I add flood coverage for my car in PJ?",
        answer:
          "Yes, especially if you park or drive through Section 13, Damansara Jaya, or areas near Sungai Damansara. Special Perils add-on costs only RM50-150/year and covers flood damage.",
      },
    ],
  },
  "subang-jaya": {
    id: "subang-jaya",
    name: "Subang Jaya",
    slug: "subang-jaya",
    title: "Car Insurance Agent Subang Jaya",
    metaDescription:
      "Subang Jaya car insurance with local claims support. Serving USJ, SS12-SS19, Sunway, Putra Heights residents. Agent service, not just online forms.",
    heroHeadline: "Car Insurance Agent in Subang Jaya",
    heroSubtitle:
      "Subang Jaya residents deserve more than a chatbot. Get car insurance with real agent support - someone who picks up when you need to claim, not a ticket number.",
    neighborhoods: [
      "USJ 1-27",
      "SS12 / SS13 / SS14 / SS15",
      "SS16 / SS17 / SS18 / SS19",
      "Sunway / Bandar Sunway",
      "Putra Heights / USJ Heights",
    ],
    floodRiskAreas: [
      "Certain USJ areas near retention ponds",
      "Low-lying sections of SS13/SS14",
      "Areas near Sungai Kuyoh",
    ],
    floodRiskNote:
      "Some USJ and SS areas experience flash flooding during heavy monsoon rains. Special Perils coverage (RM50-150/year) is a worthwhile add-on for Subang Jaya residents.",
    majorRoads: [
      "NPE (New Pantai Expressway)",
      "Federal Highway",
      "Subang Airport Road (Persiaran Kewajipan)",
      "ELITE Highway",
    ],
    trafficNote:
      "NPE and Federal Highway congestion during peak hours increases fender-bender risk. The Sunway-USJ corridor is particularly busy with university and mall traffic.",
    workshopCount: { allianz: 12, zurich: 8 },
    theftNote:
      "Subang Jaya has moderate theft risk. Areas near universities may see higher break-in rates. Use secured parking and steering locks, especially in older residential sections.",
    localConsiderations:
      "Subang Jaya has a large student population near Sunway University, Taylor's, and Monash. Young drivers (under 25) face higher premiums but can save with good NCD records. The mix of established neighborhoods and newer developments means varied insurance needs.",
    demographicNote:
      "Mix of families, students, and young professionals. High university population around Sunway and Taylor's means many first-time car owners seeking affordable coverage.",
    faqs: [
      {
        question:
          "I'm a student in Sunway/Taylor's area. Can I get affordable insurance?",
        answer:
          "Yes. While drivers under 25 pay slightly higher premiums, we help you find the most competitive rates. Build your NCD early - every claim-free year reduces your future premiums significantly.",
      },
      {
        question:
          "Which areas in Subang Jaya have workshop coverage?",
        answer:
          "Our panel workshop network covers all major Subang areas: USJ, all SS sections, Sunway, Putra Heights, and surrounding areas. You'll always have a convenient workshop nearby.",
      },
      {
        question:
          "Do I need flood coverage in Subang Jaya?",
        answer:
          "Recommended if you're in certain USJ areas or near SS13/SS14 low-lying zones. Special Perils costs only RM50-150/year and gives peace of mind during monsoon season.",
      },
      {
        question:
          "Is Subang Jaya car insurance expensive?",
        answer:
          "Subang Jaya premiums are similar to other Klang Valley urban areas - slightly higher than rural zones but within normal range. Your NCD and car model have a much bigger impact than location.",
      },
      {
        question:
          "Can I renew my insurance and road tax together?",
        answer:
          "Yes, we handle both insurance renewal and road tax. Everything done online via WhatsApp - no need to visit JPJ or post office.",
      },
    ],
  },
  "shah-alam": {
    id: "shah-alam",
    name: "Shah Alam",
    slug: "shah-alam",
    title: "Car Insurance Agent Shah Alam",
    metaDescription:
      "Shah Alam car insurance from Section 1 to Section 25+. Industrial areas, new townships, and everything in between. Local agent service.",
    heroHeadline: "Car Insurance Agent in Shah Alam",
    heroSubtitle:
      "Shah Alam stretches from industrial zones to modern townships. Your insurance needs are just as varied. Get coverage that actually fits, with an agent who understands the difference.",
    neighborhoods: [
      "Section 1-9 (City Centre)",
      "Section 13 / 15 / 23 (Industrial)",
      "Section 7 / Section 8 / Section 9",
      "Setia Alam / Setia City",
      "Kota Kemuning / Bukit Jelutong",
    ],
    floodRiskAreas: [
      "Areas near Sungai Klang",
      "Section 24 / 25 low-lying zones",
      "Parts of Kota Kemuning near waterways",
    ],
    floodRiskNote:
      "Shah Alam's proximity to Sungai Klang makes flood risk real in certain sections. The December 2021 floods showed how quickly water levels can rise. Special Perils coverage is strongly recommended.",
    majorRoads: [
      "LKSA (Lebuhraya Shah Alam)",
      "Federal Highway",
      "KESAS (Shah Alam Expressway)",
      "Guthrie Corridor Expressway",
    ],
    trafficNote:
      "Heavy industrial traffic in Section 13, 15, and 23 areas increases collision risk with commercial vehicles. KESAS and Federal Highway are daily bottlenecks during rush hour.",
    workshopCount: { allianz: 14, zurich: 9 },
    theftNote:
      "Industrial areas have higher theft risk, especially during off-hours. Newer townships like Setia Alam and Bukit Jelutong have better security infrastructure. Comprehensive coverage is essential.",
    localConsiderations:
      "Shah Alam's industrial sections (13, 15, 23) have different risk profiles than residential areas. Commercial vehicle traffic is heavier here than other Klang Valley suburbs. New townships like Setia Alam and Kota Kemuning are rapidly growing with modern infrastructure.",
    demographicNote:
      "Mix of industrial workers, government servants (state capital), and families in newer townships. Many residents drive commercial routes daily alongside heavy vehicles.",
    faqs: [
      {
        question:
          "Is insurance more expensive if I work in Shah Alam's industrial area?",
        answer:
          "Your work location doesn't directly affect premiums. However, driving in industrial zones with heavy vehicle traffic may increase accident risk. Maintaining a clean claims record with 55% NCD is the best way to keep premiums low.",
      },
      {
        question:
          "Should I get flood coverage in Shah Alam?",
        answer:
          "Strongly recommended, especially after the 2021 floods. Areas near Sungai Klang, Section 24/25, and parts of Kota Kemuning are vulnerable. Special Perils coverage costs only RM50-150/year.",
      },
      {
        question:
          "I live in Setia Alam/Kota Kemuning. Are there nearby workshops?",
        answer:
          "Yes. Our panel workshop network covers new townships including Setia Alam, Kota Kemuning, and Bukit Jelutong. Workshop availability has grown with these areas' development.",
      },
      {
        question:
          "Do you cover Shah Alam industrial vehicles?",
        answer:
          "We focus on private car insurance. If your vehicle is used for commercial/business purposes, you'll need commercial coverage. Contact us to discuss your specific situation.",
      },
      {
        question:
          "Can I get same-day cover note in Shah Alam?",
        answer:
          "Yes. Once your payment is confirmed, your cover note is issued digitally the same day. No need to collect physical documents - everything is sent via WhatsApp/email.",
      },
    ],
  },
  "kuala-lumpur": {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    slug: "kuala-lumpur",
    title: "Car Insurance Agent Kuala Lumpur",
    metaDescription:
      "KL car insurance with claims support. Bangsar, Cheras, Kepong, Wangsa Maju, Sentul - all areas covered. Agent service for city drivers.",
    heroHeadline: "Car Insurance Agent in Kuala Lumpur",
    heroSubtitle:
      "KL drivers face the worst traffic in Malaysia. When an accident happens (not if), you need an agent who responds fast - not a call center queue. We provide real support for real city drivers.",
    neighborhoods: [
      "Bangsar / Mont Kiara / Sri Hartamas",
      "KLCC / Bukit Bintang / City Centre",
      "Cheras / Taman Connaught / Taman Midah",
      "Kepong / Desa ParkCity / Segambut",
      "Wangsa Maju / Setapak / Sentul",
    ],
    floodRiskAreas: [
      "Jalan Tun Razak / Kampung Baru low areas",
      "Parts of Kepong near rivers",
      "Certain areas of Cheras",
      "SMART Tunnel approach areas during extreme rain",
    ],
    floodRiskNote:
      "KL's rapid development and concrete surfaces mean flash floods hit fast. The SMART Tunnel helps but doesn't eliminate risk. Areas near rivers and low-lying zones need Special Perils coverage.",
    majorRoads: [
      "MEX (Maju Expressway)",
      "DUKE (Duta-Ulu Kelang Expressway)",
      "SMART Tunnel",
      "MRR2 (Middle Ring Road 2)",
      "SPE (Sungai Besi-Puchong Expressway)",
    ],
    trafficNote:
      "KL has the highest traffic density in Malaysia. MEX, DUKE, MRR2, and city roads are congested daily. Higher accident frequency means your NCD is your most valuable asset - protect it.",
    workshopCount: { allianz: 25, zurich: 15 },
    theftNote:
      "KL has the highest vehicle theft rate in Malaysia. Premium areas with secured parking (Mont Kiara, KLCC condos) have lower risk. Street parking in older neighborhoods carries higher risk. Comprehensive coverage is essential.",
    localConsiderations:
      "KL is vast and diverse - insurance needs in Mont Kiara differ from Kepong, and Bangsar is different from Sentul. What's consistent: dense traffic, higher accident risk, and the need for fast claims processing. KL drivers can't afford to be without their car.",
    demographicNote:
      "Malaysia's most diverse driving population: executives, students, ride-hailing drivers, everyone. Premium range varies widely based on car type and area. High percentage of premium/luxury vehicles.",
    faqs: [
      {
        question: "Is car insurance more expensive in KL?",
        answer:
          "KL premiums are among the highest in Malaysia due to traffic density, accident frequency, and theft rates. Expect 5-15% more than suburban areas. However, maintaining 55% NCD offsets this significantly.",
      },
      {
        question:
          "Which KL areas have the most panel workshops?",
        answer:
          "Cheras, Kepong, and the Bangsar-PJ corridor have the highest concentration of panel workshops. Wherever you are in KL, there's likely a quality workshop within 15 minutes of you.",
      },
      {
        question:
          "I drive through SMART Tunnel daily. Any special coverage needed?",
        answer:
          "Standard comprehensive insurance covers accidents in tunnels. If you're concerned about flood risk near tunnel approaches during extreme weather, Special Perils add-on gives extra protection.",
      },
      {
        question:
          "Is theft coverage important in KL?",
        answer:
          "Yes. KL has the highest vehicle theft rate in Malaysia. Comprehensive insurance includes theft coverage. Additional tip: use a steering lock and park in secured areas to reduce risk.",
      },
      {
        question: "Can you help if I have an accident in KL city center?",
        answer:
          "Absolutely. Contact us immediately via WhatsApp. We guide you through documentation, police reporting, and connect you with the nearest panel workshop. City center accidents need quick coordination due to traffic flow.",
      },
    ],
  },
  puchong: {
    id: "puchong",
    name: "Puchong",
    slug: "puchong",
    title: "Car Insurance Agent Puchong",
    metaDescription:
      "Puchong car insurance with local workshop access. Bandar Puteri, IOI Mall area, Taman Kinrara, Bandar Kinrara residents. Personal agent service.",
    heroHeadline: "Car Insurance Agent in Puchong",
    heroSubtitle:
      "Puchong has grown from a small town to one of Klang Valley's busiest suburbs. More residents, more traffic, more accidents. Get insurance backed by an agent who's ready when you need help.",
    neighborhoods: [
      "Bandar Puteri Puchong",
      "IOI Mall / IOI Boulevard area",
      "Taman Kinrara / Bandar Kinrara",
      "Puchong Perdana / Puchong Utama",
      "Taman Puchong Prima / Puchong Jaya",
    ],
    floodRiskAreas: [
      "Areas near Sungai Klang/Sungai Puchong",
      "Low-lying parts of Taman Kinrara",
      "Certain sections of Puchong Perdana",
    ],
    floodRiskNote:
      "Puchong's rapid development has changed drainage patterns. Areas near Sungai Klang and Sungai Puchong face flood risk during heavy rain. Special Perils coverage is a smart addition.",
    majorRoads: [
      "LDP (Lebuhraya Damansara-Puchong)",
      "Puchong-Serdang Highway",
      "Bukit Jalil Highway",
      "SKVE (South Klang Valley Expressway)",
    ],
    trafficNote:
      "LDP congestion is Puchong's biggest traffic headache. The single main artery serving a rapidly growing population means daily bottlenecks and higher fender-bender frequency.",
    workshopCount: { allianz: 10, zurich: 7 },
    theftNote:
      "Puchong has moderate theft risk. Newer developments like Bandar Puteri have gated security. Older areas have mixed security. Comprehensive coverage recommended for all Puchong residents.",
    localConsiderations:
      "Puchong's rapid development means more residents relying on LDP as the primary highway. Traffic has increased faster than road capacity. Mix of established neighborhoods (Taman Kinrara) and newer developments (Bandar Puteri) with different risk profiles.",
    demographicNote:
      "Young families and working professionals dominate. Many residents commute to PJ/KL via LDP, making reliable car insurance with fast claims processing a priority.",
    faqs: [
      {
        question:
          "Is there good workshop coverage in Puchong?",
        answer:
          "Yes. Allianz has 10+ and Zurich has 7+ panel workshops in the Puchong area. Whether you're in Bandar Puteri, IOI area, or Taman Kinrara, there's a quality workshop nearby.",
      },
      {
        question:
          "LDP accidents are common. How fast is claims processing?",
        answer:
          "With our recommended insurers (Allianz/Zurich), typical claims are processed within 2-3 days for approval. We help coordinate everything from day one so you're back on the road faster.",
      },
      {
        question:
          "Do I need flood coverage in Puchong?",
        answer:
          "Recommended if you're near Sungai Klang, Taman Kinrara low-lying areas, or Puchong Perdana. Costs only RM50-150/year for Special Perils add-on. Worth the peace of mind.",
      },
      {
        question:
          "I'm in a new development with gated security. Does that lower insurance?",
        answer:
          "Gated communities may slightly reduce theft risk, but insurance premiums are primarily based on car value, NCD, and driver profile. The security benefit is more about peace of mind.",
      },
      {
        question:
          "Can I get insurance and road tax renewal done together?",
        answer:
          "Yes. We handle both simultaneously. Everything done via WhatsApp - no need to drive to a counter. Convenient for busy Puchong commuters.",
      },
    ],
  },
  cheras: {
    id: "cheras",
    name: "Cheras",
    slug: "cheras",
    title: "Car Insurance Agent Cheras",
    metaDescription:
      "Cheras car insurance with claims support. Taman Connaught, Taman Midah, Balakong, Sungai Long residents. Not just online - real agent service.",
    heroHeadline: "Car Insurance Agent in Cheras",
    heroSubtitle:
      "Cheras is massive - from Taman Connaught to Balakong, Sungai Long to Taman Midah. Wherever you are in Cheras, you need insurance that comes with real support, not just a policy number.",
    neighborhoods: [
      "Taman Connaught / Taman Midah",
      "Taman Yulek / Taman Cheras",
      "Balakong / Seri Kembangan",
      "Sungai Long / Mahkota Cheras",
      "Bandar Tun Hussein Onn / Cheras Perdana",
    ],
    floodRiskAreas: [
      "Parts of Taman Connaught near drains",
      "Low-lying areas of Balakong industrial zone",
      "Certain sections near Sungai Balak",
    ],
    floodRiskNote:
      "Cheras is generally on higher ground than other Klang Valley areas, but localized flooding occurs near drains and rivers during heavy rain. Special Perils recommended for low-lying zones.",
    majorRoads: [
      "MRR2 (Middle Ring Road 2)",
      "Cheras-Kajang Highway",
      "SILK Highway",
      "Grand Saga (Cheras-Kajang Expressway)",
    ],
    trafficNote:
      "MRR2 and Cheras-Kajang Highway are notoriously congested. The sheer volume of traffic through Cheras - connecting KL to Kajang/Semenyih - makes minor accidents common, especially during rain.",
    workshopCount: { allianz: 18, zurich: 12 },
    theftNote:
      "Cheras has varied theft risk across its vast area. Older neighborhoods have mixed security. Industrial areas like Balakong see higher risk during off-hours. Comprehensive coverage essential.",
    localConsiderations:
      "Cheras is one of Klang Valley's largest and most diverse areas. The Balakong industrial zone has different risk profiles than residential Sungai Long. High traffic density on MRR2 corridor means frequent minor collisions. Good workshop coverage is essential given the area's size.",
    demographicNote:
      "Diverse population from all income levels. Large Chinese community in older Cheras areas, mixed demographics in newer developments. Many residents commute to KL city center daily.",
    faqs: [
      {
        question: "Cheras is huge. Are there enough workshops?",
        answer:
          "Yes. Cheras has excellent workshop coverage due to its large population. Allianz has 18+ and Zurich has 12+ panel workshops across the area. You'll find options near Taman Connaught, Balakong, Sungai Long, and everywhere in between.",
      },
      {
        question:
          "I commute on MRR2 daily. Is my premium affected?",
        answer:
          "Your daily route doesn't directly affect premiums, but MRR2 has high accident frequency. The best protection: maintain a clean driving record for maximum 55% NCD and ensure you have comprehensive coverage.",
      },
      {
        question: "Is Balakong area higher risk for insurance?",
        answer:
          "Balakong's industrial nature means more heavy vehicle traffic and slightly different risk profile. Your premium is based on car value, NCD, and driver profile - not specific sub-area within Cheras.",
      },
      {
        question:
          "Can I claim at a workshop in Cheras even if I bought insurance through you?",
        answer:
          "Absolutely. Our service is location-independent. You can claim at any panel workshop in Cheras or anywhere in Malaysia. We coordinate with the workshop and insurer on your behalf.",
      },
      {
        question:
          "What if I have an accident on Cheras-Kajang Highway?",
        answer:
          "Contact us immediately via WhatsApp. We'll guide you through safety steps, documentation, police reporting, and help you choose the nearest panel workshop to get your car repaired quickly.",
      },
    ],
  },
};

// Helper functions
export function getLocation(slug: string): LocationArea | undefined {
  return locations[slug];
}

export function getAllLocations(): LocationArea[] {
  return Object.values(locations);
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(locations);
}
