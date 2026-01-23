import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function MyviInsurancePage() {
  return <CarModelTemplate model={carModels.myvi} />;
}
