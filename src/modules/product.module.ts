import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/services/products/products.service';
import { CategoriesModule } from './categories.module';
import { Product, ProductSchema } from 'src/entity/product.entity';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI/products?retryWrites=true&w=majority',
    // ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    CategoriesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CategoriesModule],
  exports: [ProductsService],
})
export class ProductModule {}
