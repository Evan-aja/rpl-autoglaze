import { PrismaClient } from ".prisma/client";

const prisma=new PrismaClient()
async function main(){
    await prisma.user.create({
        data:{
            username: 'admin1',
            phone: '0812',
            password: 'password',
            user_level: 1
        }
    })
    await prisma.user.create({
        data:{
            username: 'admin2',
            phone: '0819',
            password: 'password',
            user_level: 1
        }
    })
    await prisma.admin.create({
        data:{
            user_id: 1
        }
    })
    await prisma.admin.create({
        data:{
            user_id: 2
        }
    })
    await prisma.customer.create({
        data:{
            user_id: 1
        }
    })
    await prisma.customer.create({
        data:{
            user_id: 2
        }
    })
    await prisma.layanan.create({
        data:{
            admin_id: 1,
            jenis: 'Detailing Exterior',
            small: "Rp. 1.900.000",
            medium: "Rp. 2.100.000",
            large: "Rp. 2.300.000"
        }
    })
    await prisma.layanan.create({
        data:{
            admin_id: 2,
            jenis: 'Detailing Interior',
            small: "Rp. 900.000",
            medium: "Rp. 1.100.000",
            large: "Rp. 1.300.000"
        }
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })