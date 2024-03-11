import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { errorMiddleware } from './middleware/error.js'
import router from './routes/form-route.js'
import { dbConnection } from './db.js'

const app = express()
dotenv.config()

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/reservation', router)
// eslint-disable-next-line no-unused-vars
app.get('/', (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: 'HELLO WORLD AGAIN'
  })
})

dbConnection()

app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`)
})
