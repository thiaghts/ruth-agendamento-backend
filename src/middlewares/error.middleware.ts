import { NextFunction, Request, Response } from 'express'

import { logger } from '../config/logger.js'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(error)

  return res.status(400).json({
    success: false,
    message: error.message,
  })
}
