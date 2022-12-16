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
  if (body.pilihan == null || body.layanan == null || body.waktu == null){
    res.status(400).json({
      success: false,
      error: null,
      message: "data kosong"
    })
  }
  console.log(body)
  try{
    waktu=new Date(body.waktu)
  }catch(e){
    return  res.status(400).json({ 
      success: false,
      error: e,
      message: "format waktu salah"
    })
  }
  prisma.$connect
  try {
    await prisma.booking.create({
      data:{
        customer_id: 1,
        layanan_id: Number(body.layanan),
        waktu: new Date(body.waktu),
        keterangan: body.pilihan
      }
    })
  }catch(e){
    prisma.$disconnect
    return res.status(500).json({
      success: false,
      error: null,
      message: "server tidak dapat dihubungi"
    })
    }
  prisma.$disconnect
  return res.status(200).redirect("/booking/list")
}