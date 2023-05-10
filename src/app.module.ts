import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { SalesController } from './controllers/sales/sales.controller';
import { ProductsService } from './services/products/products.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI?retryWrites=true&w=majority',
    ),
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    SalesController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
