import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const Wind = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};

export default Wind;
