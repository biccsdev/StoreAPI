import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  //Manage multiple parameters.
  @Get(':id')
  getCostumer(@Param('id') id: string) {
    return { customer: id };
  }

  @Get()
  getCostumers(@Query('total') total: number) {
    const str = 'Costumer ';
    const costumers: string[] = [];
    for (let i = 0; i < total; i++) {
      costumers.push(str + (i + 1));
    }
    return { costumers };
  }

  @Get('filter')
  getFilter() {
    return { message: 'This is a filter of Costumer' };
  }
}
