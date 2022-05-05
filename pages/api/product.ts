// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import type { Product } from '@prisma/client'

const prisma = new PrismaClient()

type Data = Product[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allProduct = await prisma.product.findMany()
  res.status(200).json(allProduct)
}
