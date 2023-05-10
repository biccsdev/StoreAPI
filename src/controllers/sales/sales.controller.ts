import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Delete,
} from '@nestjs/common';
import { CreateSaleDTO } from 'src/dtos/createSale.dto';
import { SaleDocument } from 'src/entity/sale.entity';
import { SalesService } from 'src/services/sales/sales.service';

@Controller('orders')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  async create(@Body() createSaleDto: CreateSaleDTO): Promise<SaleDocument> {
    try {
      const sale = await this.salesService.create(createSaleDto);
      return sale;
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async find(): Promise<SaleDocument[]> {
    try {
      const sales = await this.salesService.find();
      return sales;
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async delete(@Param() id: string): Promise<String> {
    try {
      const deletion = await this.salesService.delete(id);
      return deletion;
    } catch (error) {
      console.log(error);
    }
  }
}
