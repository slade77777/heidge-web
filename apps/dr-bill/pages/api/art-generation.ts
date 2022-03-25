import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method is not allowed' });
  }

  if (!req.query?.id || !req.query?.random) {
    return res.status(400).json({ message: 'Id and Random is required' });
  }

  try {
    const response = await fetch(
      `http://5.161.46.108:5000/api/Generator/${req.query.id}-${req.query.random}`,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      },
    );
    const blob: any = await response.blob();
    // const imageData = response.json();
    // console.log('image---', response);
    // res.setHeader('Content-Type', 'application/octet-stream');
    // res.setHeader('Content-Type', 'application/octet-stream');
    console.log('blob', blob);
    res.send(blob);
  } catch (e) {
    res.status(400).json({ message: 'Can not subscribe this email' });
  }
}
