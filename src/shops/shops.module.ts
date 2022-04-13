import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from './entities/shop.entity';
import { ShopsService } from './service/shops.service';
import { ShopsController } from './controllers/shops.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity])],
  providers: [ShopsService],
  controllers: [ShopsController],
})
export class ShopsModule {}
