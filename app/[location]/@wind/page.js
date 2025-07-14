import NoLocationInfo from "@/components/location/NoLocationInfo";
import Wind from "@/components/Wind"
import { getResolvedLatLong } from "@/lib/location-info";


const WindPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  
    const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <Wind lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
}

export default WindPage