export type Price = {
  generation: number;
  gasPriceCent: number;
  gasPriceWei: string;
  hedgiePriceCent: number;
  hedgiePriceWei: string;
  hedgie_quantity: number;
};

export type Response<T> = Promise<{
  data: T;
}>;

export type OrderParams = {
  hedgie_quantity: number;
  wallet: string;
};
