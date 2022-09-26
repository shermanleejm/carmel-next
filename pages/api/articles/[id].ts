import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const id = parseInt(req.query.id as string, 10);

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