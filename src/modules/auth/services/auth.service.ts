import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UserRole } from '@prisma/client'

import { env } from '../../../config/env.js'
import { UserRepository } from '../repositories/user.repository.js'

import type { LoginDto } from '../dto/login.dto.js'
import type { RegisterDto } from '../dto/register.dto.js'

export class AuthService {
  private readonly userRepository = new UserRepository()

  async register(data: RegisterDto) {
    const existingUser = await this.userRepository.findByEmail(data.email)

    if (existingUser) {
      throw new Error('Email already registered')
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: UserRole.CLIENT,
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }
  }
  async me(userId: string) {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
      emailVerified: user.emailVerified,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
    }
  }

  async login(data: LoginDto) {
    const user = await this.userRepository.findByEmail(data.email)

    if (!user) {
      throw new Error('Invalid credentials')
    }

    if (!user.active) {
      throw new Error('User is inactive')
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }

    await this.userRepository.updateLastLogin(user.id)

    const accessToken = jwt.sign(
      {
        sub: user.id,
        role: user.role,
      },
      env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    )

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
    }
  }
}
