import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
    tags: [Tag]
  }

  type Tag {
    _id: ID!
    name: String!
  }

  input CategoryInput {
    name: String!
    tags: [ID]
  }

  type Query {
    tags: [Tag]
    tag(_id: ID!): Tag
    categories: [Category]
    category(_id: ID!): Category
  }

  type Mutation {
    addTag(name: String!): Tag
    updateTag(_id: ID!, name: String!): Tag
    deleteTag(_id: ID!): Tag
    addCategory(CategoryInput: CategoryInput): Category
    updateCategory(_id: ID!, CategoryInput: CategoryInput): Category
    deleteCategory(_id: ID!): Category
  }
`

export default typeDefs