import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { CreateProductDTO } from 'src/dtos/createProduct.dto';
import { ProductDocument } from 'src/entity/product.entity';

import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  //Constructor that helps us with dependency injection, it
  // allows us to call product Service method from this file.
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDTO,
  ): Promise<ProductDocument> {
    try {
      const category = await this.productsService.create(createProductDto);
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async find(): Promise<ProductDocument[]> {
    try {
      const category = await this.productsService.find();
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:barcode')
  async findByBarcode(@Param() params: any): Promise<ProductDocument[]> {
    try {
      const category = await this.productsService.find(params);
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async delete(@Param() id: string): Promise<String> {
    try {
      const deletion = await this.productsService.delete(id);
      return deletion;
    } catch (error) {
      console.log(error);
    }
  }
}
