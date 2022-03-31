import { NextApiRequest, NextApiResponse } from 'next';
import { getRandomNumber } from '../../../@api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method is not allowed' });
  }
  const id = req.query?.more as string;
  if (!id) {
    return res.status(400).json({ message: 'Param is required' });
  }
  const randomNumber = await getRandomNumber(id);
  res.json(randomNumber);
}
