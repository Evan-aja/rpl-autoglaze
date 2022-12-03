// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma=new PrismaClient()
  const body=req.body
  if (body.jenis == null || body.keterangan == null || body.admin_id == null){
    res.status(400).json({
      success: false,
      error: null,
      message: "data kosong"
    })
  }
  prisma.$connect
  try {
    await prisma.layanan.create({
      data:{
        jenis: body.jenis,
        keterangan: body.keterangan,
        admin_id: body.admin_id
      }
    })
  }catch(e){
    prisma.$disconnect
    res.status(500).json({
      success: false,
      error: e,
      message: "server tidak dapat dihubungi"
    })
  }
  prisma.$disconnect
  res.status(200).redirect("/")
}