import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('total') total = 100) {
    const str = 'Order #';
    const orders: string[] = [];
    for (let i = 0; i < total; i++) {
      orders.push(str + (i + 1));
    }
    return { orders };
  }

  @Get('filter')
  getFilter() {
    return { message: 'This is a filter of Orders' };
  }

  @Get(':id')
  getOrder(@Param('id') id: number) {
    return { order: id };
  }
}
