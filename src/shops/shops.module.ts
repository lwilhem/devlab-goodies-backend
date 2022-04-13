import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsController } from './controllers/shops.controller';
import { ShopsGetController } from './controllers/shops.get.controller';
import { ShopEntity } from './entities/shop.entity';
import { ShopsGetService } from './service/shops.get.service';
import { ShopsService } from './service/shops.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopsService, ShopsGetService],
  controllers: [ShopsController, ShopsGetController],
})
export class ShopsModule {}
