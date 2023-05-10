import { Product } from './product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SaleDocument = Sale & mongoose.Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: false },
})
export class Sale {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  })
  _items: mongoose.Types.ObjectId[];

  items: Product[];

  @Prop({})
  date: Date;
}
