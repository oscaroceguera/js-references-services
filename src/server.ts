import express, { Application } from 'express'
import cors from 'cors'
import connectDB from'./config/db'

const PORT: string = process.env.PORT as string

const app: Application = express()
app.use(cors())

connectDB()

app.listen(PORT, () => {
  console.log(`🚀  server running on http://localhost:${PORT}`)
})