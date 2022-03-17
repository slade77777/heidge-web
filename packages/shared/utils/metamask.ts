export function getShortWalletAddress(fullAddress: string): string {
  return `${fullAddress.slice(0, 6)}...${fullAddress.slice(-4)}`;
}
