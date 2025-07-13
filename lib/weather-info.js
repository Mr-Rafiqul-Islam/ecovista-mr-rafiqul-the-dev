export const getWeatherData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.weather[0];
  } catch (err) {
    console.error(err.message);
  }
};

export const getTemperatureData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.main;
  } catch (err) {
    console.error(err.message);
  }
};

export const getWindData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.wind;
  } catch (err) {
    console.error(err.message);
  }
};

export const getAqiData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await res.json();

    return data?.list[0];
  } catch (err) {
    console.error(err.message);
  }
};
