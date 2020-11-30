import { Schema, Document, model } from 'mongoose';
import { ICategory } from './Category';
import { ITag } from './Tag';

export interface IPost extends Document {
  title: string;
  category: ICategory['_id'];
  tags: ITag['_id'][];
  content: string;
}

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'tag',
        required: true
      }
    ]
  },
  { timestamps: true }
);

export default model<IPost>('post', postSchema);
