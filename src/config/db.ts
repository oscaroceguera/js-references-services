import { ConnectionOptions, connect } from 'mongoose'

const connectDB = async () => {
  try {
    const mongoURI = process.env.DB_URI as string

    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }

    await connect(mongoURI, options)
    console.log("MongoDB connected...")
  } catch (err) {
    console.log(err.message)
    process.exit(1)   
  }
}

export default connectDB;