import tagsResolvers from './tags'
import categoriesResolvers from './categories'

export default {
  Query: {
    ...tagsResolvers.Query,
    ...categoriesResolvers.Query
  },
  Mutation: {
    ...tagsResolvers.Mutation,
    ...categoriesResolvers.Mutation
  }
}
