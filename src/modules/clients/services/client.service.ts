import { ClientRepository } from '../repositories/client.repository.js'

import type { CreateClientDto } from '../dto/create-client.dto.js'
import type { UpdateClientDto } from '../dto/update-client.dto.js'

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

  async update(id: string, data: UpdateClientDto) {
    await this.findById(id)

    return this.clientRepository.update(id, data)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.clientRepository.delete(id)

    return {
      message: 'Client deleted successfully',
    }
  }
}
