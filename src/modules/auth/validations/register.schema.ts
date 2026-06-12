import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(3).max(100),

  email: z.string().email().max(255),

  password: z.string().min(8).max(100),
})

export type RegisterSchema = z.infer<typeof registerSchema>
