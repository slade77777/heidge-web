import { BigNumber, ethers } from 'ethers';
import type { BigNumberish } from 'ethers';
import { Network, NetworkName } from '../types';

export function wei2Eth(wei: BigNumberish): string {
  const ethStr = ethers.utils.formatEther(wei);
  return parseFloat(ethStr).toFixed(4);
}

export function str2BigNumber(vl: string): BigNumber {
  return BigNumber.from(vl || 0);
}

export function hasEnoughBalance(balanceWei: string, amountWei: BigNumber) {
  return BigNumber.from(balanceWei).gt(amountWei);
}

export const networkMapper: Record<number, NetworkName> = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
};

export const NETWORKS: Record<NetworkName, Network> = {
  mainnet: {
    hex: '0x1',
    decimal: 1,
    name: 'Ethereum Main Network (Mainnet)',
  },
  ropsten: {
    hex: '0x3',
    decimal: 3,
    name: 'Ropsten Test Network',
  },
  rinkeby: {
    hex: '0x4',
    decimal: 4,
    name: 'Rinkeby Test Network',
  },
};

export function cent2Dollar(cent: number) {
  return cent / 100;
}
