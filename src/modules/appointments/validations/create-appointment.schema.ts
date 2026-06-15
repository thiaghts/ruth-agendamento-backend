import { z } from 'zod'

export const createAppointmentSchema = z.object({
  clientId: z.string().uuid(),

  appointmentDate: z.string(),

  startTime: z.string(),

  endTime: z.string(),

  notes: z.string().optional(),

  travelFee: z.number().optional(),

  serviceIds: z.array(z.string().uuid()).min(1),
})

export type CreateAppointmentSchema = z.infer<typeof createAppointmentSchema>
