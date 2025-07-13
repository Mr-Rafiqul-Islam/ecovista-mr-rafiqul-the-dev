import Wind from "@/components/Wind"


const WindPage = ({ params: { location }, searchParams: { latitude, longitude } }) => {
  return (
    <>
    <Wind  lat={latitude} lon={longitude} />
    </>
  )
}

export default WindPage