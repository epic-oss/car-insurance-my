import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function ShahAlamPage() {
  return <LocationTemplate location={locations["shah-alam"]} />;
}
