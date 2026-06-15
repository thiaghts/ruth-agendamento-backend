import { prisma } from '../../../config/prisma.js'

import type { Prisma } from '@prisma/client'

export class ServiceRepository {
  async create(data: Prisma.ServiceCreateInput) {
    return prisma.service.create({
      data,
    })
  }

  async findAll() {
    return prisma.service.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  async findById(id: string) {
    return prisma.service.findUnique({
      where: {
        id,
      },
    })
  }

  async update(
    id: string,
    data: {
      name?: string
      description?: string
      duration?: number
      price?: number
      active?: boolean
    },
  ) {
    return prisma.service.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: string) {
    return prisma.service.delete({
      where: {
        id,
      },
    })
  }
}
