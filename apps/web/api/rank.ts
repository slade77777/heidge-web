import { getAxiosInstance } from "shared";
import { API_URL } from "../constants";
import { rankType } from "../constants/enum";

const requester = getAxiosInstance(`${API_URL}api/v1`);

export function getRanking(type: rankType) {
  return requester.get(`/leaderboard/hedgies/curio?rank_type=${type}`);
}
