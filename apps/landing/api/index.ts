import { getAxiosInstance } from 'shared';
import { Price, Response } from '../types';

const requester = getAxiosInstance(
  'https://api.staging.hedgie.io/api/v1/hedgies',
);

export function getPrice(): Response<Price> {
  return requester.get('/getPrice/gen3');
}
