import { BigNumber, ethers } from 'ethers';
import type { BigNumberish } from 'ethers';

let provider: any = null;

function initSigner() {
  if (!provider) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  return provider.getSigner();
}

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
type Params = {
  quantity: number;
  hedgieWei: string;
  gasWei: string;
};
export function purchase(to: string, params: Params) {
  const signer = initSigner();

  return signer.sendTransaction({
    to,
    value: getTotalWei(params.quantity, params.hedgieWei, params.gasWei),
  });
}
