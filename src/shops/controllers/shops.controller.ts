import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';
import { ShopsService } from '../service/shops.service';

@Controller('shops')
@UseFilters(HttpExceptionFilter)
@ApiTags('Shops')
export class ShopsController {
  constructor(private readonly shopService: ShopsService) {}

  @Post('create')
  async newShop(@Body() shop: createShopDto) {
    const test = await this.shopService.createShop(shop);
    return test;
  }

  @Get('search')
  async returnAllShops() {
    const findAll = await this.shopService.readAllShops();
    return findAll;
  }

  @Put('update/:id')
  async updateShopData(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateShopDto,
  ) {
    return await this.shopService.updateShop(id, data);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.shopService.deleteShop(id);
  }
}
