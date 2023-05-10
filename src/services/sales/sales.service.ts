//Create nest service component with: nest g s services/name
import { Injectable } from '@nestjs/common';

import { Product } from '../../entity/product.entity';
import { Category } from 'src/entity/category.entity';

@Injectable()
export class SalesService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      barcode: 'sd8f78sd7f',
      category: Category.,
      price: 12,
      stock: 55,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(payload: any) {
    this.products.forEach((element) => {
      element.id == payload.id
        ? { ...element, ...payload } //Code on left merges two objects into one
        : (element = element);
    });
    return this.findOne(payload.id);
  }

  delete(id: number) {
    const index = this.products.indexOf(this.findOne(id));
    if (index > -1) {
      this.products.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
import { Injectable } from '@nestjs/common';

import { Product } from '../../entity/product.entity';
import { Category } from 'src/entity/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      barcode: 'sd8f78sd7f',
      category: Category.,
      price: 12,
      stock: 55,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(payload: any) {
    this.products.forEach((element) => {
      element.id == payload.id
        ? { ...element, ...payload } //Code on left merges two objects into one
        : (element = element);
    });
    return this.findOne(payload.id);
  }

  delete(id: number) {
    const index = this.products.indexOf(this.findOne(id));
    if (index > -1) {
      this.products.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
