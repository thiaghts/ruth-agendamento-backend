import { Router } from 'express'
import { prisma } from '../config/prisma.js'

const debugRoutes = Router()

debugRoutes.get('/debug-db', async (_, res) => {
  try {
    const users = await prisma.user.findMany()

    return res.json({
      success: true,
      count: users.length,
      users,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      error: String(error),
    })
  }
})

export { debugRoutes }
