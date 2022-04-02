import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //Manage query parameters with default values, which Type Annotation is Implicit.
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  //This method uses a path similar to getProduct(), the difference is
  // getProduct() has dynamic parameters, so it goes second
  // so getFilter() path doesnt get mistaken with getProduct() path parameter "id".
  @Get('filter')
  getFilter() {
    return 'This is a filter of Product';
  }

  //Manage one parameter.
  @Get(':id')
  getProduct(@Param('id') params: string) {
    return `Product ${params}`;
  }
}
