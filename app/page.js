import LocationDetector from "@/components/location/LocationDetector";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense
      fallback={
        <Image src={"/network.gif"} alt="loading..." width={500} height={500} />
      }
    >
      <LocationDetector />
    </Suspense>
  );
}
