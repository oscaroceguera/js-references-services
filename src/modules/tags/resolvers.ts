import Tag from './models/tags.model'

const resolvers = {
  Query: {
    tags: () => Tag.find({}),
    tag: (_: any, args: any) => Tag.findById(args.id)
  },
  Mutation: {
    addTag: (_: any, tag: any) =>{
      const newTag = new Tag({ name: tag.name })
      return newTag.save()
    },
    updateTag: (_: any, args: any)  => {
      const { id, name } = args
      return Tag.findByIdAndUpdate(id, { name })
    },
    deleteTag: (_: any, args: any) => {
      const { id } = args
      return Tag.findByIdAndRemove(id)
    }
  }
}

export default resolvers