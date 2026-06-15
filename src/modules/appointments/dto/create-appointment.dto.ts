export interface CreateAppointmentDto {
  clientId: string

  appointmentDate: string

  startTime: string

  endTime: string

  notes?: string

  travelFee?: number

  serviceIds: string[]
}
