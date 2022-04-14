import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsController } from './controllers/shops.controller';
import { ShopEntity } from './entities/shop.entity';
import { ShopsService } from './service/shops.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopsService],
  controllers: [ShopsController],
})
export class ShopsModule {}
