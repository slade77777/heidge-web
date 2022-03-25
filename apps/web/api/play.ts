import { getAxiosInstance } from "shared";
import { API_URL } from "../constants";

const requester = getAxiosInstance(`${API_URL}api/v1`);

export function getWorlds() {
  return requester.get("/worlds");
}
