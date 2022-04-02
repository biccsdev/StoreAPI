import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

//Method used to create this and products.controller.specs.ts file
//nest g controller controller/categories --flat

//TS takes care of slashes in path
//Use plurals for endpoints
//This layer recieves and takes care of http requests
// verifying type.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Default Get Request Handler.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Simple Get Request Handler with endpoint.
  @Get('new')
  newEndpoint() {
    return 'HELLO NEW';
  }
}
