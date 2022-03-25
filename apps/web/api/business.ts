import { getAxiosInstance } from "shared";
import { API_URL } from "../constants";

const requester = getAxiosInstance(`${API_URL}api/v1`);

export function getBusinesses(limit: number, offset: number) {
  return requester.get(`businesses?limit=${limit}&offset=${offset}`);
}
