import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function TeslaModel3InsurancePage() {
  return <CarModelTemplate model={carModels["tesla-model-3"]} />;
}
