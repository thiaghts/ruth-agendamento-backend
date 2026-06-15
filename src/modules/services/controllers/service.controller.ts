import { Request, Response, NextFunction } from 'express'

import { ServiceService } from '../services/service.service.js'

export class ServiceController {
  private readonly serviceService = new ServiceService()

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.serviceService.create(req.body)

      return res.status(201).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.serviceService.findAll()

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id

      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Service id is required',
        })
      }

      const result = await this.serviceService.findById(id)

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id

      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Service id is required',
        })
      }

      const result = await this.serviceService.update(id, req.body)

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id

      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Service id is required',
        })
      }

      const result = await this.serviceService.delete(id)

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }
}
