import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function bookCourier(courier) {
  try {
    const response = await api.post("/courier/addCourier", courier);
    return response.data;
  } catch (e) {
    throw new Error(`Error in placing shipment ${e.message}`);
  }
}
export async function trackCourier(trackingId) {
  try {
    const response = await api.post("/courier/courierByTrackingId", trackingId);
    return response.data;
  } catch (e) {
    throw new Error("No courier Found with this trackingId");
  }
}
