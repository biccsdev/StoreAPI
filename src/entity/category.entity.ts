import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CategoryDocument = Category & mongoose.Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: false },
})
export class Category {
  @Prop({ required: true, type: String, trim: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
CategorySchema.loadClass(Category);
