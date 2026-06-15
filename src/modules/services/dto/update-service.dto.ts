import { z } from 'zod'

export const updateServiceSchema = z.object({
  name: z.string().min(3).max(100).optional(),

  description: z.string().max(500).optional(),

  duration: z.number().int().positive().optional(),

  price: z.number().positive().optional(),

  active: z.boolean().optional(),
})

export type UpdateServiceDto = z.infer<typeof updateServiceSchema>
