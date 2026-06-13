import { prisma } from '../../../config/prisma.js'

import type { Prisma } from '@prisma/client'

export class ClientRepository {
  async create(data: Prisma.ClientCreateInput) {
    return prisma.client.create({
      data,
    })
  }

  async findAll() {
    return prisma.client.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  async findById(id: string) {
    return prisma.client.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: string, data: Prisma.ClientUpdateInput) {
    return prisma.client.update({
      where: {
        id,
      },
      data,
    })
  }

  async delete(id: string) {
    return prisma.client.delete({
      where: {
        id,
      },
    })
  }
}
