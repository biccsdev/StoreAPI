//Create nest service component with: nest g s services/name
import { Injectable, Query } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Sale, SaleDocument } from 'src/entity/sale.entity';
import { CreateSaleDTO } from 'src/dtos/createSale.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel(Sale.name) private saleModel: Model<SaleDocument>,
    private productService: ProductsService,
  ) {}

  async create(createSaleDto: CreateSaleDTO): Promise<SaleDocument> {
    var prods = [];
    if (createSaleDto) {
      for (let i = 0; i < createSaleDto.products.length; i++) {
        const prod = await this.productService.find({
          barcode: createSaleDto.products[i],
        });
        await this.productService.update(
          { _id: prod[0]._id },
          { stock: prod[0].stock - 1 },
        );
        prods.push(prod[0]);
      }
      return new this.saleModel({ items: prods, date: Date.now() });
    }
  }

  async findOne(filter: FilterQuery<SaleDocument>): Promise<SaleDocument> {
    return this.saleModel.findOne(filter);
  }

  async findById(id: string): Promise<SaleDocument> {
    return this.saleModel.findById({ _id: new Types.ObjectId(id) });
  }

  async find(
    @Query() query?: FilterQuery<SaleDocument>,
  ): Promise<SaleDocument[]> {
    return this.saleModel.find(query);
  }

  async delete(id: string): Promise<String> {
    return this.saleModel.deleteOne({ _id: new Types.ObjectId(id) })
      ? 'Succesfully deleted the Sale'
      : "Couldn't delete Sale";
  }
}
