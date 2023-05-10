import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { SalesController } from 'src/controllers/sales/sales.controller';
import { Category, CategorySchema } from 'src/entity/category.entity';
import { CategoriesService } from 'src/services/categories/categories.service';
import { SalesService } from 'src/services/sales/sales.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://biccs:Kondas123@cluster0.ihoyt.mongodb.net/storeAPI/categories?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
