import { getAxiosInstance } from "shared";
import { API_URL } from "../constants";

const requester = getAxiosInstance(`${API_URL}api/v1`);

export function subscribeNews(email: string) {
  return requester.post("/subscribe-newsletter", { email });
}
