import { PrismaClient } from '@prisma/client'

export default async function handler() {
    const prisma=new PrismaClient()
    prisma.$connect
    try {
        let result = await prisma.booking.findMany({
            include:{
                layanan: true,
                customer: true
            }
        })
        prisma.$disconnect
        return result
    }catch(e){
        prisma.$disconnect
        console.log("failed")
    }
}