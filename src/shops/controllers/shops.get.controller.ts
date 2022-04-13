import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ShopsGetService } from '../service/shops.get.service';

@Controller('shops')
export class ShopsGetController {
  constructor(private readonly shopGetService: ShopsGetService) {}

  @Get('search/id/:id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.shopGetService.getShopById(id);
  }
}
