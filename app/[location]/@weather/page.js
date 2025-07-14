import NoLocationInfo from "@/components/location/NoLocationInfo";
import Weather from "@/components/Weather"
import { getResolvedLatLong } from "@/lib/location-info";


const WeatherPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <Weather lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
}

export default WeatherPage