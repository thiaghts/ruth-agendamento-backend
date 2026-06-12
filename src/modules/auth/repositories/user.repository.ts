import { UserRole } from '@prisma/client'

import { prisma } from '../../../config/prisma.js'

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async create(data: {
    name: string
    email: string
    password: string
    role: UserRole
  }) {
    return prisma.user.create({
      data,
    })
  }

  async updateLastLogin(id: string) {
    return prisma.user.update({
      where: {
        id,
      },
      data: {
        lastLoginAt: new Date(),
      },
    })
  }
}
