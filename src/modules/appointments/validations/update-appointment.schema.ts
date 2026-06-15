import { z } from 'zod'

export const updateAppointmentSchema = z.object({
  appointmentDate: z.string().optional(),

  startTime: z.string().optional(),

  endTime: z.string().optional(),

  notes: z.string().optional(),

  status: z.enum(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED']).optional(),

  travelFee: z.number().optional(),
})

export type UpdateAppointmentSchema = z.infer<typeof updateAppointmentSchema>
