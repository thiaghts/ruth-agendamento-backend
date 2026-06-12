import { z } from 'zod'

export const createClientSchema = z.object({
  name: z.string().min(3).max(100),

  email: z.string().email().optional(),

  phone: z.string().min(8).max(20),

  address: z.string().min(5).max(255),
})

export type CreateClientSchema = z.infer<typeof createClientSchema>
