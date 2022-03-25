import { getAxiosInstance } from "shared";
import { API_URL } from "../constants";

const requester = getAxiosInstance(`${API_URL}api/v1`);

export function getAnnouncements(limit: number) {
  return requester.get(`/announcements?limit=${limit}`);
}
