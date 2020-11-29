import Tag, { ITag } from '../../models/Tag'

export default {
  Query: {
    tags: async (): Promise<ITag[]> => {
      try {
        return await Tag.find({})
      } catch (error) {
        throw new Error(error)
      }
    },
    tag: async (
      _: any,
      { _id }: { _id: ITag['_id'] }
    ): Promise<ITag | null> => {
      try {
        const tag = await Tag.findById(_id)

        return tag
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  Mutation: {
    addTag: (_: any, tag: any): Promise<ITag> => {
      try {
        const newTag = new Tag({ name: tag.name })
        return newTag.save()
      } catch (error) {
        throw new Error(error)
      }
    },
    updateTag: async (
      _: any,
      { _id, name }: { _id: ITag['_id']; name: string }
    ): Promise<ITag | null> => {
      try {
        return await Tag.findByIdAndUpdate(_id, { name })
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteTag: async (
      _: any,
      { _id }: { _id: ITag['_id'] }
    ): Promise<ITag | null> => {
      try {
        return await Tag.findByIdAndRemove(_id)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
