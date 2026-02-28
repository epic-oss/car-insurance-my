import LocationTemplate from "@/components/locations/LocationTemplate";
import { locations } from "@/lib/data/locations";

export default function PetalingJayaPage() {
  return <LocationTemplate location={locations["petaling-jaya"]} />;
}
