import LocationInfo from "@/components/location/LocationInfo";

const page = ({ params: { location }, searchParams: { latitude, longitude } }) => {
  return (
    <>
      <LocationInfo lat={latitude} lon={longitude}/>{" "}
    </>
  );
};

export default page;
