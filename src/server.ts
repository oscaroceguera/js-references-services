import express, { Application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import connectDB from './config/db';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

console.log(process.env.NODE_ENV);
const PORT: string = process.env.PORT as string;

const server = new ApolloServer({ typeDefs, resolvers });

const app: Application = express();
app.use(cors());

server.applyMiddleware({ app });

connectDB();

app.listen(PORT, () => {
  console.log(
    `🚀  server running on http://localhost:${PORT}${server.graphqlPath}`
  );
});
