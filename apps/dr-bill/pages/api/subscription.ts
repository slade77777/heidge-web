import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method is not allowed' });
  }
  try {
    const contactData = JSON.parse(req.body);
    const data = await fetch(
      `http://5.161.46.108:5000/api/subscribe/${contactData.email}`,
      {
        method: 'POST',
      },
    );
    res.json({ data });
  } catch (e) {
    res.status(400).json({ message: 'Can not subscribe this email' });
  }
}
