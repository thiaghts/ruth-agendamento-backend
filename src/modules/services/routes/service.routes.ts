import { Router } from 'express'

import { authMiddleware } from '../../../middlewares/auth.middleware.js'

import { ServiceController } from '../controllers/service.controller.js'

const serviceRoutes = Router()

const serviceController =
  new ServiceController()

serviceRoutes.post(
  '/',
  authMiddleware,
  serviceController.create,
)

serviceRoutes.get(
  '/',
  authMiddleware,
  serviceController.findAll,
)

serviceRoutes.get(
  '/:id',
  authMiddleware,
  serviceController.findById,
)

serviceRoutes.put(
  '/:id',
  authMiddleware,
  serviceController.update,
)

serviceRoutes.delete(
  '/:id',
  authMiddleware,
  serviceController.delete,
)

export { serviceRoutes }