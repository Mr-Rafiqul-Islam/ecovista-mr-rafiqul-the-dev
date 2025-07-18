import NoLocationInfo from "@/components/location/NoLocationInfo";
import Temperature from "@/components/Temperature"
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <Temperature lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
}

export default TemperaturePage