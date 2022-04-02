import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id') id: number) {
    return `Order #${id}`;
  }

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
    return 'This is a filter of Order';
  }
}
