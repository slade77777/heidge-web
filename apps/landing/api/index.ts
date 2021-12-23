import { getAxiosInstance } from 'shared';
import { OrderParams, Price, Response } from '../types';

const requester = getAxiosInstance(
  'https://api.staging.hedgie.io/api/v1/hedgies',
);

export function getPrice(): Response<Price> {
  return requester.get('/getPrice/gen3');
}

export function orderHedgie(params: OrderParams) {
  return requester.post('/order/gen3', params);
}
