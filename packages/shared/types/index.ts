export type NetworkName = 'mainnet' | 'ropsten' | 'rinkeby';

export type Network = {
  hex: string;
  decimal: number;
  name: string;
};

export type PurchaseParams = {
  quantity: number;
  hedgieWei: string;
  gasWei: string;
};

export interface Hedgie {
  id: string;
  color?: string;
  level?: number;
  ownerName?: string;
  status?: number;
  canTakeGen3?: number;
}
