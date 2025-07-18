import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getAqiData } from "@/lib/weather-info";

const AQIComponent = async ({ lat, lon }) => {
  const aqiData = await getAqiData(lat, lon);
  const { main, components } = aqiData;

  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "unknown";
    }
  };
  return (
    <Card>
      <>
        <h6 className="feature-name">Air Pollution &amp; Quality</h6>
        {/* info items */}
        <div className="mt-3 space-y-2 lg:space-y-3">
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Air Quality Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {getAQIRating(main?.aqi)}
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Carbon Monoxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.co} µg/m³
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Nitric Oxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
             {components?.no} ppm
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Nitrogen Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
             {components.no2} ppm
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Ozone
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components.o3} µg/m³
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              Sulfur Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components.so2} ppm
            </span>
          </div>
          {/* item ends */}
          {/* item */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={18}
                height={18}
              />
              PM2.5
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components.pm2_5} µg/m³
            </span>
          </div>
          {/* item ends */}
        </div>
        {/* info items ends */}
      </>
    </Card>
  );
};

export default AQIComponent;
