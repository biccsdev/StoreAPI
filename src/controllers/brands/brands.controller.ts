import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('total') total = 100) {
    const str = 'Brand #';
    const brandNames: string[] = [];
    for (let i = 0; i < total; i++) {
      brandNames.push(str + (i + 1));
    }
    return { brandNames };
  }

  @Get('filter')
  getFilter() {
    return { message: 'This is a filter of Brands' };
  }

  @Get(':id')
  getBrand(@Param('id') id: number) {
    return { brand: id };
  }
}
