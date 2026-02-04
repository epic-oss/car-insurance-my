import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function ToyotaViosInsurancePage() {
  return <CarModelTemplate model={carModels["toyota-vios"]} />;
}
