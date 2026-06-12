import { z } from 'zod'

export const updateClientSchema = z.object({
  name: z.string().min(3).max(100).optional(),

  email: z.string().email().optional(),

  phone: z.string().min(8).max(20).optional(),

  address: z.string().min(5).max(255).optional(),
})

export type UpdateClientSchema = z.infer<typeof updateClientSchema>
