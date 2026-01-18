import Image from "next/image";

const insurers = [
  { name: "Allianz", logo: "/images/insurers/allianz.png" },
  { name: "Etiqa", logo: "/images/insurers/etiqa.png" },
  { name: "AXA", logo: "/images/insurers/Axa.png" },
  { name: "Tokio Marine", logo: "/images/insurers/Tokio Marine.png" },
  { name: "Zurich", logo: "/images/insurers/zurich.png" },
  { name: "Lonpac", logo: "/images/insurers/lonpac.png" },
  { name: "RHB", logo: "/images/insurers/rhb.png" },
  { name: "MSIG", logo: "/images/insurers/msig.png" },
];

export default function InsurerLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">
          Compare quotes from Malaysia&apos;s leading insurers
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {insurers.map((insurer) => (
            <div
              key={insurer.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-20"
            >
              <Image
                src={insurer.logo}
                alt={`${insurer.name} car insurance logo`}
                width={120}
                height={50}
                className="object-contain max-h-[50px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
