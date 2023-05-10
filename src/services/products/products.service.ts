//Create nest service component with: nest g s services/name
import { BadRequestException, Injectable, Query } from '@nestjs/common';

import { Product, ProductDocument } from '../../entity/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateProductDTO } from 'src/dtos/createProduct.dto';
import { CategoriesService } from '../categories/categories.service';
import { query } from 'express';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private categoriesService: CategoriesService,
  ) {}

  async create(createProductDto: CreateProductDTO): Promise<ProductDocument> {
    if (createProductDto) {
      const categ = await this.categoriesService.findOne({
        name: createProductDto.category,
      });
      return new this.productModel({ ...createProductDto, category: categ });
    } else {
      throw new BadRequestException('Product missing properties');
    }
  }

  // async findOne(
  //   filter: FilterQuery<ProductDocument>,
  // ): Promise<ProductDocument> {
  //   return this.categoryModel.findOne(filter);
  // }

  async find(
    @Query() query?: FilterQuery<ProductDocument>,
  ): Promise<ProductDocument[]> {
    return this.productModel.find(query);
  }

  async update(filter, update): Promise<Product> {
    return await this.productModel.findOneAndUpdate(filter, update);
  }

  async delete(id: string): Promise<String> {
    return this.productModel.deleteOne({ _id: new Types.ObjectId(id) })
      ? 'Succesfully deleted the Product'
      : "Couldn't delete Product";
  }
}
