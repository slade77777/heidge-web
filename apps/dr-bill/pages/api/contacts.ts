import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method is not allowed' });
  }

  const contactData = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: contactData,
  });

  res.json(savedContact);
}
