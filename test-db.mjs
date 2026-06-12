import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

try {
  const clients = await prisma.client.findMany()

  console.log(clients)
} catch (error) {
  console.error(error)
} finally {
  await prisma.$disconnect()
}
