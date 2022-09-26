import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (req.body.id) {
      await prisma.articles.update({
        where: {
          id: req.body.id
        },
        data: {
          ...req.body
        }
      })
    } else {
      await prisma.articles.create({
        data: { ...req.body }
      })
    }

    res.status(200).json({ data: 'Success!' })
  } else {
    const allArticles = await prisma.articles.findMany()
    res.status(200).json({ data: allArticles })
  }
}