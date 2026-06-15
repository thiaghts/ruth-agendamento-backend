import { Router } from 'express'

import { authRoutes } from '../modules/auth/routes/auth.routes.js'
import { clientRoutes } from '../modules/clients/routes/client.routes.js'
import { serviceRoutes } from '../modules/services/routes/service.routes.js'
import { appointmentRoutes } from '../modules/appointments/routes/appointment.routes.js'

export const routes = Router()

routes.get('/health', (_, res) => {
  return res.status(200).json({
    success: true,
    status: 'ok',
    timestamp: new Date(),
  })
})

routes.use('/auth', authRoutes)

routes.use('/clients', clientRoutes)

routes.use('/services', serviceRoutes)

routes.use('/appointments', appointmentRoutes)

routes.get('/teste-auth', (_, res) => {
  return res.json({
    success: true,
    message: 'auth carregado',
  })
})
