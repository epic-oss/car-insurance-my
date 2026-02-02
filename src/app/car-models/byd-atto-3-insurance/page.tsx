import CarModelTemplate from "@/components/car-models/CarModelTemplate";
import { carModels } from "@/lib/data/car-models";

export default function BydAtto3InsurancePage() {
  return <CarModelTemplate model={carModels["byd-atto-3"]} />;
}
