import { Request, Response, NextFunction } from 'express'

import { ClientService } from '../services/client.service.js'

export class ClientController {
  private readonly clientService = new ClientService()

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.clientService.create(req.body)

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
      const result = await this.clientService.findAll()

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
          message: 'Client id is required',
        })
      }

      const result = await this.clientService.findById(id)

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
          message: 'Client id is required',
        })
      }

      const result = await this.clientService.update(id, req.body)

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
          message: 'Client id is required',
        })
      }

      const result = await this.clientService.delete(id)

      return res.status(200).json({
        success: true,
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }
}
