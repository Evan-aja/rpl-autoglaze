// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma=new PrismaClient()
  const body=req.body
  let waktu:Date
  if (body.customer_id == null || body.layanan_id == null || body.waktu == null){
    res.status(400).json({
      success: false,
      error: null,
      message: "data kosong"
    })
  }
  try{
    waktu=new Date(body.waktu)
  }catch(e){
    res.status(400).json({ 
      success: false,
      error: e,
      message: "format waktu salah"
    })
  }
  prisma.$connect
  try {
    await prisma.booking.create({
      data:{
        customer_id: body.customer_id,
        layanan_id: body.layanan_id,
        waktu: new Date(body.waktu)
      }
    })
  }catch(e){
    prisma.$disconnect
    res.status(500).json({
      success: false,
      error: null,
      message: "server tidak dapat dihubungi"
    })
    }
  prisma.$disconnect
  res.status(200).redirect("/")
}