export type Price = {
  etherPriceCent: number;
  etherPriceWei: number;
  gasPriceCent: number;
  gasPriceWei: number;
  generation: number;
};

export type Response<T> = Promise<{
  data: T;
}>;
