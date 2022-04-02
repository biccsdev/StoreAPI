import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //Manage multiple parameters.
  @Get(':id')
  getCategory(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get()
  getCategories(@Query('total') total: number) {
    const str = 'Category ';
    const categories: string[] = [];
    for (let i = 0; i < total; i++) {
      categories.push(str + (i + 1));
    }
    return { categories };
  }

  @Get('filter')
  getFilter() {
    return 'This is a filter of Categories';
  }
}
