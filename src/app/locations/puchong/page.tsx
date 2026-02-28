import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function PuchongPage() {
  return <LocationTemplate location={locations["puchong"]} />;
}
