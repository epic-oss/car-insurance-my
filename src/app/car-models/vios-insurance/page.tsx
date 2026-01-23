import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function ViosInsurancePage() {
  return <CarModelTemplate model={carModels.vios} />;
}
