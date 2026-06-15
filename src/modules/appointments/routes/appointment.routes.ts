import { Router } from 'express'

import { authMiddleware } from '../../../middlewares/auth.middleware.js'

import { AppointmentController } from '../controllers/appointment.controller.js'

const appointmentRoutes = Router()

const appointmentController = new AppointmentController()

appointmentRoutes.post('/', authMiddleware, appointmentController.create)

appointmentRoutes.get('/', authMiddleware, appointmentController.findAll)

appointmentRoutes.get('/:id', authMiddleware, appointmentController.findById)

appointmentRoutes.put('/:id', authMiddleware, appointmentController.update)

appointmentRoutes.delete('/:id', authMiddleware, appointmentController.delete)

export { appointmentRoutes }
