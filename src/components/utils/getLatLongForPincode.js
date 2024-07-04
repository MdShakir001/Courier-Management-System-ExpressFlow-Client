import axios from "axios";
const API_KEY =
  "n9r3clnTwQEJTJ2JZmSXvpL04HCFT3uY5EWkyTH34Z1oXwexBQDvuNumfHW38Cxr";

const getLatLongForPincode = async (pincode) => {
  try {
    // Send a GET request to Google Maps Geocoding API
    const response = await axios.get(
      "https://api.distancematrix.ai/maps/api/geocode/json",
      {
        params: {
          address: pincode,
          key: API_KEY,
        },
      }
    );
    const results = response.data.result[0];
    if (results) {
      const location = results.geometry.location;
      const { lat, lng } = location;
      return { lat, lng };
    } else {
      console.error("Error: No results found for the provided pin code");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getLatLongForPincode;
