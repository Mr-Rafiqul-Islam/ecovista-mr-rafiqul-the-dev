export const getLocationData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
  }
};