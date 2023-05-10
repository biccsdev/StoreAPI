import { Injectable, Query } from '@nestjs/common';

import { Product } from '../../entity/product.entity';
import { Category, CategoryDocument } from 'src/entity/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateCategoryDTO } from 'src/dtos/createCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDTO,
  ): Promise<CategoryDocument> {
    if (createCategoryDto) {
      return new this.categoryModel(createCategoryDto);
    }
  }

  async findOne(
    filter: FilterQuery<CategoryDocument>,
  ): Promise<CategoryDocument> {
    return this.categoryModel.findOne(filter);
  }

  async find(
    @Query() query?: FilterQuery<CategoryDocument>,
  ): Promise<CategoryDocument[]> {
    return this.categoryModel.find(query);
  }

  async findById(id?: string): Promise<CategoryDocument> {
    return this.categoryModel.findById({ _id: new Types.ObjectId(id) });
  }

  async delete(id: string): Promise<String> {
    return this.categoryModel.deleteOne({ _id: new Types.ObjectId(id) })
      ? 'Succesfully deleted the Category'
      : "Couldn't delete category";
  }
}
