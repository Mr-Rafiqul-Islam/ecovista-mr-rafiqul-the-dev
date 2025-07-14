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

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};