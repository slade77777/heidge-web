import { getAxiosInstance } from 'shared';
import { PostParams, Price, Response } from '../types';

const requester = getAxiosInstance(
  'https://api.staging.hedgie.io/api/v1/hedgies',
);

export function getPrice(): Response<Price> {
  return requester.get('/getPrice/gen3');
}

export function orderHedgie(params: PostParams) {
  return requester.post('/order/gen3', params);
}

export function mintHedgie(params: PostParams) {
  return requester.post('/mint/gen3', params);
}
