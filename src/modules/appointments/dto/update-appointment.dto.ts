export interface UpdateAppointmentDto {
  appointmentDate?: string

  startTime?: string

  endTime?: string

  notes?: string

  status?: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'

  travelFee?: number
}
