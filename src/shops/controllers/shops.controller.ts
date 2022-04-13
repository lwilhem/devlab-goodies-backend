import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createShopDto } from '../entities/dto/create-shop.dto';
import { updateShopDto } from '../entities/dto/update-shop.dto';
import { ShopsService } from '../service/shops.service';

@Controller('shops')
export class ShopsController {
  private shopService: ShopsService;

  @Post('/create')
  async create(@Body() shop: createShopDto) {
    return this.shopService.createShop(shop);
  }

  @Get('/find')
  async findAll() {
    return this.shopService.getAllShops();
  }

  @Put('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() shop: updateShopDto,
  ) {
    return this.shopService.updateShop(id, shop);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.shopService.deleteShop(id);
  }
}
