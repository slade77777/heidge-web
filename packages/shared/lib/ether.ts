import { ethers } from 'ethers';
import type { BigNumberish } from 'ethers';

export function wei2Eth(wei: BigNumberish) {
  return ethers.utils.formatEther(wei);
}
