import { PrismaClient } from '@prisma/client'

export default async function handler(
    ) {
    const prisma=new PrismaClient()
    prisma.$connect
    let result = await prisma.layanan.findMany()
    prisma.$disconnect
    return result
}