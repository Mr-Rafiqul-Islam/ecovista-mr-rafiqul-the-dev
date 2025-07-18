import { getTemperatureData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const Temperature = async ({ lat, lon }) => {
  const temperatureData = await getTemperatureData(lat, lon);

  const { temp, feels_like } = temperatureData;
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_tempareture.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">{temp}°C</h3>

        <span className="feature-name">Feels Like {feels_like}°C</span>
      </div>
    </Card>
  );
};

export default Temperature;
