import { Types } from 'mongoose';
import Post, { IPost } from '../../models/Post';

export default {
  Query: {
    posts: async (): Promise<IPost[]> => {
      try {
        return await Post.find({}).populate('category').populate('tags');
      } catch (error) {
        throw new Error(error);
      }
    },
    post: async (
      _: any,
      { _id }: { _id: IPost['_id'] }
    ): Promise<IPost | null> => {
      try {
        const post = await Post.findById(_id)
          .populate('category')
          .populate('tags');

        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
    searchPost: async (
      _: any,
      {
        search,
        category,
        tags = []
      }: { search: string; category: string; tags: string[] }
    ): Promise<IPost[]> => {
      let searchQuery = {};

      if (search || category || tags.length > 0) {
        let andQuery = [];

        if (search) {
          andQuery.push({
            $or: [
              { title: { $regex: search, $options: 'i' } },
              { content: { $regex: search, $options: 'i' } }
            ]
          });
        }

        if (category) {
          andQuery.push({ category: Types.ObjectId(category) });
        }

        if (tags && tags.length > 0) {
          let andTags: any = [];
          tags.forEach((element) => {
            andTags.push({ tags: Types.ObjectId(element) });
          });

          andQuery.push({ $and: andTags });
        }

        searchQuery = { $and: andQuery };
      }

      try {
        const post = await Post.find(searchQuery)
          .populate('category')
          .populate('tags');
        return post;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    addPost: (_: any, post: any): Promise<IPost> => {
      try {
        const newPost = new Post(post.PostInput);
        return newPost.save();
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePost: async (
      _: any,
      { _id, PostUpdateInput }: { _id: IPost['_id']; PostUpdateInput: IPost }
    ): Promise<IPost | null> => {
      try {
        return await Post.findByIdAndUpdate(_id, PostUpdateInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    deletePost: async (
      _: any,
      { _id }: { _id: IPost['_id'] }
    ): Promise<IPost | null> => {
      try {
        return await Post.findByIdAndRemove(_id);
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
