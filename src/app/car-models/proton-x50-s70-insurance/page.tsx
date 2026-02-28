import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function ProtonX50S70InsurancePage() {
  return <CarModelTemplate model={carModels["proton-x50-s70"]} />;
}
