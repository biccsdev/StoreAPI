import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id') id: number) {
    return `User #${id}`;
  }

  @Get()
  getUsers(@Query('total') total = 100) {
    const str = 'User #';
    const users: string[] = [];
    for (let i = 0; i < total; i++) {
      users.push(str + (i + 1));
    }
    return { users };
  }

  @Get('filter')
  getFilter() {
    return 'This is a filter of User';
  }
}
