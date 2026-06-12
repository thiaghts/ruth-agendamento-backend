import { Router } from 'express'

import { authMiddleware } from '../../../middlewares/auth.middleware.js'

import { AuthController } from '../controllers/auth.controller.js'

const authRoutes = Router()

const authController = new AuthController()

authRoutes.post(
  '/register',
  authController.register,
)

authRoutes.post(
  '/login',
  authController.login,
)

authRoutes.get(
  '/me',
  authMiddleware,
  authController.me,
)

export { authRoutes }