import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { SalesController } from './controllers/sales/sales.controller';
import { ProductsService } from './services/products/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product.module';
import { CategoriesModule } from './modules/categories.module';
import { SalesModule } from './modules/sales.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI?retryWrites=true&w=majority',
    ),
    ProductModule,
    CategoriesModule,
    SalesModule,
  ],

  providers: [],
})
export class AppModule {}
