import { ServiceRepository } from '../repositories/service.repository.js'

import type { CreateServiceDto } from '../dto/create-service.dto.js'

export class ServiceService {
  private readonly serviceRepository = new ServiceRepository()

  async create(data: CreateServiceDto) {
    return this.serviceRepository.create(data)
  }

  async findAll() {
    return this.serviceRepository.findAll()
  }

  async findById(id: string) {
    const service = await this.serviceRepository.findById(id)

    if (!service) {
      throw new Error('Service not found')
    }

    return service
  }
}
