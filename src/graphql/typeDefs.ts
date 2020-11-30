import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    category: Category!
    tags: [Tag!]
  }

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

  input PostInput {
    title: String!
    content: String!
    category: ID!
    tags: [ID!]
  }

  input PostUpdateInput {
    title: String
    content: String
    category: ID
    tags: [ID]
  }

  type Query {
    tags: [Tag]
    tag(_id: ID!): Tag
    categories: [Category]
    category(_id: ID!): Category
    posts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addTag(name: String!): Tag
    updateTag(_id: ID!, name: String!): Tag
    deleteTag(_id: ID!): Tag
    addCategory(CategoryInput: CategoryInput): Category
    updateCategory(_id: ID!, CategoryInput: CategoryInput): Category
    deleteCategory(_id: ID!): Category
    addPost(PostInput: PostInput!): Post
    updatePost(_id: ID!, PostUpdateInput: PostUpdateInput!): Post
    deletePost(_id: ID!): Post
  }
`;

export default typeDefs;
