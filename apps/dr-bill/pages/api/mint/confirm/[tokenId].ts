import { NextApiRequest, NextApiResponse } from 'next';
import { ssrBaseUrl } from '../../../../@api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method is not allowed' });
  }
  const tokenId = req.query?.tokenId as string;

  if (!tokenId) {
    return res.status(400).json({ message: 'Param is required' });
  }
  try {
    const response = await fetch(`${ssrBaseUrl}/api/minted/${tokenId}`);
    res.json({ status: response.ok });
  } catch (err) {
    return res.status(400).json({ message: err?.message });
  }
}
