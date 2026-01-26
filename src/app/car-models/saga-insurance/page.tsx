import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function SagaInsurancePage() {
  return <CarModelTemplate model={carModels.saga} />;
}
