import { Schema, Document, model } from 'mongoose';
import { ITag } from './Tag';

export interface ICategory extends Document {
  name: string;
  tags: ITag['_id'][];
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tag'
    }
  ]
});

export default model<ICategory>('category', categorySchema);
