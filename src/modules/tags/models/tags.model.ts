import { Schema, model } from 'mongoose'

const tagSchema = new Schema({
  name: String
})

const Tag = model('tag', tagSchema)

export default Tag