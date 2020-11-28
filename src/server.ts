import express, { Application } from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import connectDB from'./config/db'
import typeDefs from './modules/tags/graphqlSchema'
import resolvers from './modules/tags/resolvers'

const PORT: string = process.env.PORT as string

const server = new ApolloServer({ typeDefs, resolvers })

const app: Application = express()
app.use(cors())

server.applyMiddleware({ app })

connectDB()

app.listen(PORT, () => {
  console.log(`🚀  server running on http://localhost:${PORT}${server.graphqlPath}`)
})