import { z } from 'zod'

export const createServiceSchema = z.object({
  name: z.string().min(3).max(100),

  description: z.string().max(500).optional(),

  duration: z.number().int().positive(),

  price: z.number().positive(),
})

export type CreateServiceSchema = z.infer<typeof createServiceSchema>
