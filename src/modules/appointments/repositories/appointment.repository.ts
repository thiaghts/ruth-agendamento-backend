import { prisma } from '../../../config/prisma.js'

export class AppointmentRepository {
  async create(data: {
    clientId: string
    appointmentDate: Date
    startTime: string
    endTime: string
    notes?: string
    travelFee: number
    totalPrice: number
  }) {
    return prisma.appointment.create({
      data,
    })
  }

  async findAll() {
    return prisma.appointment.findMany({
      include: {
        client: true,
        services: {
          include: {
            service: true,
          },
        },
      },
      orderBy: {
        appointmentDate: 'asc',
      },
    })
  }

  async findById(id: string) {
    return prisma.appointment.findUnique({
      where: {
        id,
      },
      include: {
        client: true,
        services: {
          include: {
            service: true,
          },
        },
      },
    })
  }

  async update(id: string, data: any) {
    return prisma.appointment.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: string) {
    await prisma.appointmentService.deleteMany({
      where: {
        appointmentId: id,
      },
    })

    return prisma.appointment.delete({
      where: {
        id,
      },
    })
  }

  async createAppointmentService(data: {
    appointmentId: string
    serviceId: string
    priceAtBooking: number
    durationAtBooking: number
  }) {
    return prisma.appointmentService.create({
      data,
    })
  }
}
