import 'dotenv/config'

import { PrismaClient } from '@prisma/client'

console.log('DATABASE_URL FROM API:')
console.log(process.env.DATABASE_URL)

declare global {
  var prisma: PrismaClient | undefined
}

console.log(
  'DATABASE_URL:',
  process.env.DATABASE_URL?.replace(/:\/\/.*@/, '://***@'),
)

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
