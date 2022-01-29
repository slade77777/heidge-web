import { getAxiosInstance } from 'shared';
import { PostParams, Price, Response } from '../types';

const requester = getAxiosInstance(
  'https://api.staging.hedgie.io/api/v1/hedgies',
);

export function getPrice(url: string): Response<Price> {
  return requester.get(url);
}

export function orderHedgie(params: PostParams) {
  return requester.post('/gen3/order', params);
}

export function mintHedgie(params: PostParams) {
  return requester.post('/gen3/mint', params);
}

export function getNumberOfDiscountHedgies(wallet: string): Response<Price> {
  return requester.get(`/freegen3/get?wallet=${wallet}`);
}
