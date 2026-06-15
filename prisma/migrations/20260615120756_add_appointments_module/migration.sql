-- CreateIndex
CREATE INDEX "appointments_appointmentDate_idx" ON "appointments"("appointmentDate");

-- CreateIndex
CREATE INDEX "blocked_dates_date_idx" ON "blocked_dates"("date");

-- CreateIndex
CREATE INDEX "notifications_userId_idx" ON "notifications"("userId");
