import { BigNumber, ethers } from 'ethers';
import type { BigNumberish } from 'ethers';

export function wei2Eth(wei: BigNumberish) {
  return ethers.utils.formatEther(wei);
}

export function sum(x: BigNumberish, y: BigNumberish): string {
  return BigNumber.from(x).add(BigNumber.from(y)).toString();
}
