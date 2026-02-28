import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function CherasPage() {
  return <LocationTemplate location={locations["cheras"]} />;
}
