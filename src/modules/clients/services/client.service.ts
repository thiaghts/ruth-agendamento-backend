import { ClientRepository } from '../repositories/client.repository.js'

import type { CreateClientDto } from '../dto/create-client.dto.js'

export class ClientService {
  private readonly clientRepository = new ClientRepository()

  async create(data: CreateClientDto) {
    return this.clientRepository.create(data)
  }

  async findAll() {
    return this.clientRepository.findAll()
  }

  async findById(id: string) {
    const client = await this.clientRepository.findById(id)

    if (!client) {
      throw new Error('Client not found')
    }

    return client
  }
}
