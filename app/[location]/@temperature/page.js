import Temperature from "@/components/Temperature"

const TemperaturePage = ({ params: { location }, searchParams: { latitude, longitude } }) => {
  return (
    <>
      <Temperature lat={latitude} lon={longitude} />
    </>
  )
}

export default TemperaturePage