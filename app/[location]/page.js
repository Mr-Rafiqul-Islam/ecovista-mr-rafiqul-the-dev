import LocationInfo from "@/components/location/LocationInfo";
import NoLocationInfo from "@/components/location/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const page = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
    const resolved = await getResolvedLatLong(location, latitude, longitude);
    if (resolved?.lat && resolved?.lon) {
        return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
};

export default page;
