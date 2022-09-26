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
  }

  if (req.method === "GET") {
    const allArticles = await prisma.articles.findMany({
      where: {
        deleted: false
      }
    })
    res.status(200).json({ data: allArticles })
  }

  if (req.method === 'DELETE') {
    const id = req.body.id;

    await prisma.articles.update({
      where: {
        id: id
      },
      data: {
        deleted: true
      }
    })

    res.status(200).json({ data: "Deleted!" })
  }
}