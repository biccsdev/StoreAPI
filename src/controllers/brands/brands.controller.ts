import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('total') total: number) {
    const str = 'Brand';
    const brandNames: string[] = [];
    for (let i = 0; i < total; i++) {
      brandNames.push(str + (i + 1));
    }
    return { brandNames };
  }

  @Get(':id')
  getBrand(@Param('id') id: number) {
    return `Product with id: ${id}`;
  }

  @Get('filter')
  getFilter() {
    return 'This is a filter of Product';
  }
}
