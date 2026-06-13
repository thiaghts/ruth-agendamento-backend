import { Router } from 'express'

import { debugRoutes } from './debug.routes.js'

import { authRoutes } from '../modules/auth/routes/auth.routes.js'
import { clientRoutes } from '../modules/clients/routes/client.routes.js'

export const routes = Router()

routes.get('/health', (_, res) => {
  return res.status(200).json({
    success: true,
    status: 'ok',
    timestamp: new Date(),
  })
})

routes.use('/auth', authRoutes)

routes.use('/debug', debugRoutes)

routes.use('/clients', clientRoutes)

routes.get('/teste-auth', (_, res) => {
  return res.json({
    success: true,
    message: 'auth carregado',
  })
})
