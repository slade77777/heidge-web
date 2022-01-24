import { getAxiosInstance } from 'shared';
import { PostParams, Price, Response } from '../types';

const requester = getAxiosInstance(
  'https://api.staging.hedgie.io/api/v1/hedgies',
);

export function getPrice(): Response<Price> {
  return requester.get('/getPrice/gen3');
}

export function orderHedgie(params: PostParams) {
  return requester.post('/freegen3/order', params);
}

export function mintHedgie(params: PostParams) {
  return requester.post('/freegen3/mint', params);
}

export function getNumberOfDiscountHedgies(wallet: string): Response<Price> {
  return requester.get(`/freegen3/get?wallet=${wallet}`);
}
