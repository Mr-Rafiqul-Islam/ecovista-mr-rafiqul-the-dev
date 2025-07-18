import Image from "next/image";

export const metadata = {
  title: "Ecovista | Learn With Sumit",
  description: "One Place Dashboard for Eco Information",
};

export default function SubLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <Image
        src="/assets/images/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="bg"
      />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
