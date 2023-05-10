import { Product, ProductSchema } from './product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SaleDocument = Sale & mongoose.Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: false },
})
export class Sale {
  @Prop({ type: [ProductSchema], required: true })
  items: Product[];

  @Prop({ required: false })
  date: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
SaleSchema.loadClass(Sale);
