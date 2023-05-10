import { Category } from './category.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: false },
})
export class Product {
  @Prop({ required: true, type: String, trim: true })
  name: string;

  @Prop({ required: false, type: String, trim: true })
  barcode: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: Category;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.loadClass(Product);
