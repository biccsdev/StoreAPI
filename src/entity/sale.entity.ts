import { Date } from 'mongoose';
import { Product } from './product.entity';

export class Sale {
  id: number;
  items: Product[];
  date: Date;
}
