import { prisma } from '../../../config/prisma.js'

import { AppointmentRepository } from '../repositories/appointment.repository.js'

import type { CreateAppointmentDto } from '../dto/create-appointment.dto.js'

import type { UpdateAppointmentDto } from '../dto/update-appointment.dto.js'

export class AppointmentService {
  private readonly appointmentRepository = new AppointmentRepository()

  async create(data: CreateAppointmentDto) {
    const client = await prisma.client.findUnique({
      where: {
        id: data.clientId,
      },
    })

    if (!client) {
      throw new Error('Client not found')
    }

    const services = await prisma.service.findMany({
      where: {
        id: {
          in: data.serviceIds,
        },
      },
    })

    if (services.length === 0) {
      throw new Error('Services not found')
    }

    const totalServicesPrice = services.reduce(
      (total, service) => total + Number(service.price),
      0,
    )

    const travelFee = data.travelFee ?? 0

    const appointment = await this.appointmentRepository.create({
      clientId: data.clientId,
      appointmentDate: new Date(data.appointmentDate),
      startTime: data.startTime,
      endTime: data.endTime,
      notes: data.notes,
      travelFee,
      totalPrice: totalServicesPrice + travelFee,
    })

    for (const service of services) {
      await this.appointmentRepository.createAppointmentService({
        appointmentId: appointment.id,
        serviceId: service.id,
        priceAtBooking: Number(service.price),
        durationAtBooking: service.duration,
      })
    }

    return this.findById(appointment.id)
  }

  async findAll() {
    return this.appointmentRepository.findAll()
  }

  async findById(id: string) {
    const appointment = await this.appointmentRepository.findById(id)

    if (!appointment) {
      throw new Error('Appointment not found')
    }

    return appointment
  }

  async update(id: string, data: UpdateAppointmentDto) {
    return this.appointmentRepository.update(id, data)
  }

  async delete(id: string) {
    await this.findById(id)

    return this.appointmentRepository.delete(id)
  }
}
