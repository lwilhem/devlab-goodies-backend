import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from './entities/shop.entity';

@Module({
  providers: [],
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  controllers: [],
})
export class ShopsModule {}
