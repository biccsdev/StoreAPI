import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesController } from 'src/controllers/sales/sales.controller';
import { SalesService } from 'src/services/sales/sales.service';
import { ProductModule } from './product.module';
import { Sale, SaleSchema } from 'src/entity/sale.entity';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI/sales?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    ProductModule,
  ],
  controllers: [SalesController],
  providers: [SalesService, ProductModule],
  exports: [SalesService],
})
export class SalesModule {}
