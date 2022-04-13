import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from './entities/shop.entity';
import { ShopsService } from './service/shops.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopsService],
})
export class ShopsModule {}
