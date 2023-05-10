import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesController } from 'src/controllers/sales/sales.controller';
import { SalesService } from 'src/services/sales/sales.service';
import { ProductModule } from './product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI/sales?retryWrites=true&w=majority',
    ),
  ],
  controllers: [SalesController],
  providers: [SalesService, ProductModule],
  exports: [SalesService],
})
export class SalesModule {}
