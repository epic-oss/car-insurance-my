import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function KualaLumpurPage() {
  return <LocationTemplate location={locations["kuala-lumpur"]} />;
}
