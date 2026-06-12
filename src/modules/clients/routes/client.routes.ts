import { Router } from 'express'

import { authMiddleware } from '../../../middlewares/auth.middleware.js'

import { ClientController } from '../controllers/client.controller.js'

const clientRoutes = Router()

const clientController = new ClientController()

clientRoutes.post('/', authMiddleware, clientController.create)

clientRoutes.get('/', authMiddleware, clientController.findAll)

clientRoutes.get('/:id', authMiddleware, clientController.findById)

export { clientRoutes }
