import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/services/products/products.service';
import { CategoriesModule } from './categories.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI/products?retryWrites=true&w=majority',
    ),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CategoriesModule],
  exports: [ProductsService],
})
export class ProductModule {}
