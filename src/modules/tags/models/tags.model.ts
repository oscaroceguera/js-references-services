import { Schema, Document, model } from 'mongoose'

export interface ITag extends Document {
  name: string;
}

const tagSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default model<ITag>('tag', tagSchema)