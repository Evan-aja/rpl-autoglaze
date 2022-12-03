// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    res: NextApiResponse
    ) {
    const prisma=new PrismaClient()
    prisma.$connect
    try {
        let result = await prisma.booking.findMany()
        prisma.$disconnect
        res.status(200).json({result})
    }catch(e){
        prisma.$disconnect
        res.status(500).json({
            success: false,
            error: null,
            message: "server tidak dapat dihubungi"
        })
    }
}