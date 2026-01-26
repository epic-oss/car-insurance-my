import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function CityInsurancePage() {
  return <CarModelTemplate model={carModels.city} />;
}
