import Category, { ICategory } from '../../models/Category'

export default {
  Query: {
    categories: async (): Promise<ICategory[]> => {
      try {
        return await Category.find({}).populate('tags')
      } catch(error) {
        throw new Error(error)
      }
    },
    category: async (_: any, { _id }: { _id: ICategory["_id"]}): Promise<ICategory | null> => {
      try {
        const category = await Category.findById(_id).populate('tags')
        
        return category
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  Mutation: {
    addCategory: (_: any, category: any): Promise<ICategory> =>{
      try {
        const newCategory = new Category(category.CategoryInput)
        return newCategory.save()
      } catch (error) {
        throw new Error(error)
      }
    },
    updateCategory: async (_: any, {_id, CategoryInput}: { _id: ICategory["_id"], CategoryInput: ICategory }): Promise<ICategory | null>  => {
      try {
        return await Category.findByIdAndUpdate(_id, CategoryInput)
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteCategory: async (_: any, { _id }: { _id: ICategory["_id"] }): Promise<ICategory | null> => {
      try {
        return await Category.findByIdAndRemove(_id)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}

