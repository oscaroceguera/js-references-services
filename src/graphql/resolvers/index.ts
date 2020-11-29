import tagsResolvers from './tags'

export default {
  Query: {
    ...tagsResolvers.Query
  },
  Mutation: {
    ...tagsResolvers.Mutation
  }
}