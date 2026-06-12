import { Request, Response, NextFunction } from 'express'

import type { AuthRequest } from '../types/auth-request.type.js'

import { AuthService } from '../services/auth.service.js'

export class AuthController {
  private readonly authService = new AuthService()

  register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const result = await this.authService.register(req.body)

      return res.status(201).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const result = await this.authService.login(req.body)

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  me = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const result = await this.authService.me(
        req.user!.id,
      )

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }
}