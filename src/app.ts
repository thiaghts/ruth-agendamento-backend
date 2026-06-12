import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { routes } from './routes/index.js'
import { notFoundMiddleware } from './middlewares/not-found.middleware.js'
import { errorMiddleware } from './middlewares/error.middleware.js'

export const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
)

app.use(helmet())

app.use(express.json())

app.use('/api', routes)

app.use(notFoundMiddleware)

app.use(errorMiddleware)
