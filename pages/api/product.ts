// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import type { Product } from '@prisma/client'

const prisma = new PrismaClient()

type Data = Product[]

export const getProduct = async () => {
  return await prisma.product.findMany()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allProduct = await getProduct()
  res.status(200).json(allProduct)
}
