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

import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  //Constructor that helps us with dependency injection, it
  // allows us to call product Service method from this file.
  constructor(private productsService: ProductsService) {}

  //Manage query parameters with default values, which Type Annotation is Implicit.
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   limit: `${limit}`,
    //   offset: `${offset}`,
    //   brand: `${brand}`,
    // };
    this.productsService.findAll();
  }

  //This method uses a path similar to getProduct(), the difference is
  // getProduct() has dynamic parameters, so it goes second
  // so getFilter() path doesnt get mistaken with getProduct() path parameter "id".
  @Get('filter')
  getFilter() {
    return { message: 'This is a filter of Product' };
  }

  //Manage one parameter.
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('id') params: string) {
    response.status(200).send({ product: `${params}` });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: `Updated Product #${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
