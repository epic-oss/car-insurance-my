import Image from "next/image";

const insurers = [
  { name: "Zurich", logo: "/images/insurers/zurich.png" },
  { name: "Allianz", logo: "/images/insurers/allianz.png" },
];

export default function InsurerLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">
          We specialize in Malaysia&apos;s most trusted insurers
        </p>
        <div className="flex justify-center items-center gap-12">
          {insurers.map((insurer) => (
            <div
              key={insurer.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-24 w-48"
            >
              <Image
                src={insurer.logo}
                alt={`${insurer.name} car insurance logo`}
                width={160}
                height={60}
                className="object-contain max-h-[60px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
