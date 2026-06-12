import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'

import { env } from '../config/env.js'

import type { AuthRequest } from '../modules/auth/types/auth-request.type.js'

interface JwtPayload {
  sub: string
  role: string
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Token not provided',
    })
  }

  const [, token] = authHeader.split(' ')

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    })
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload

    req.user = {
      id: decoded.sub,
      role: decoded.role as any,
    }

    next()
  } catch {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    })
  }
}
