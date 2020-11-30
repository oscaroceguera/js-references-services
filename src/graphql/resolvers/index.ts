import tagsResolvers from './tags';
import categoriesResolvers from './categories';
import postsResolvers from './posts';

export default {
  Query: {
    ...tagsResolvers.Query,
    ...categoriesResolvers.Query,
    ...postsResolvers.Query
  },
  Mutation: {
    ...tagsResolvers.Mutation,
    ...categoriesResolvers.Mutation,
    ...postsResolvers.Mutation
  }
};
