import { Category } from './category.entity';

export class Product {
  id: number;
  name: string;
  barcode: string;
  category: Category;
  price: number;
  stock: number;
}
