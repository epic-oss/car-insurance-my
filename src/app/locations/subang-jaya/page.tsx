import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function SubangJayaPage() {
  return <LocationTemplate location={locations["subang-jaya"]} />;
}
