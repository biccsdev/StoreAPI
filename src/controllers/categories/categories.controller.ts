import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('total') total = 100) {
    const str = 'Category #';
    const categories: string[] = [];
    for (let i = 0; i < total; i++) {
      categories.push(str + (i + 1));
    }
    return { categories };
  }

  @Get('filter')
  getFilter() {
    return { message: 'This is a filter of Categories' };
  }

  //Manage multiple parameters.
  @Get(':id')
  getCategory(@Param('id') id: string) {
    return { category: id };
  }
}
