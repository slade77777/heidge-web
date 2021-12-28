import { BigNumber, ethers } from 'ethers';
import type { BigNumberish } from 'ethers';
import { Network, NetworkName } from '../types';

export function wei2Eth(wei: BigNumberish) {
  return ethers.utils.formatEther(wei);
}

export function sum(x: BigNumberish, y: BigNumberish): string {
  return BigNumber.from(x).add(BigNumber.from(y)).toString();
}

export function getTotalWei(
  quantity: number,
  hedgieWei: string,
  gasWei: string,
): BigNumber {
  return BigNumber.from(hedgieWei).mul(quantity).add(BigNumber.from(gasWei));
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
