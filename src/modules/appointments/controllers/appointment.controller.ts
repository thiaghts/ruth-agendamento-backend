import { Request, Response, NextFunction } from 'express'

import { AppointmentService } from '../services/appointment.service.js'

export class AppointmentController {
  private readonly appointmentService = new AppointmentService()

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.appointmentService.create(req.body)

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
      const result = await this.appointmentService.findAll()

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
          message: 'Appointment id is required',
        })
      }

      const result = await this.appointmentService.findById(id)

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
          message: 'Appointment id is required',
        })
      }

      const result = await this.appointmentService.update(id, req.body)

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
          message: 'Appointment id is required',
        })
      }

      await this.appointmentService.delete(id)

      return res.status(200).json({
        success: true,
        data: {
          message: 'Appointment deleted successfully',
        },
      })
    } catch (error) {
      next(error)
    }
  }
}
