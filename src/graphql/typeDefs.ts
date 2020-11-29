import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Tag {
    _id: ID!
    name: String!
  }

  type Query {
    tags: [Tag]
    tag(_id: ID!): Tag
  }

  type Mutation {
    addTag(name: String!): Tag
    updateTag(_id: ID!, name: String!): Tag
    deleteTag(_id: ID!): Tag
  }
`

export default typeDefs