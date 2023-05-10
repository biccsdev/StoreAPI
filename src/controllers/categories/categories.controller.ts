import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParamData,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCategoryDTO } from 'src/dtos/createCategory.dto';
import { CategoryDocument } from 'src/entity/category.entity';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDTO,
  ): Promise<CategoryDocument> {
    try {
      const category = await this.categoriesService.create(createCategoryDto);
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async find(): Promise<CategoryDocument[]> {
    try {
      const category = await this.categoriesService.find();
      console.log(category);
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async delete(@Param() id: string): Promise<String> {
    try {
      const deletion = await this.categoriesService.delete(id);
      return deletion;
    } catch (error) {
      console.log(error);
    }
  }
}
