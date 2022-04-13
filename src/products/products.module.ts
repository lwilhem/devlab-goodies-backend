import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controllers/products.controller';
import { ProductEntity } from './entities/product.entity';
import { GetProductsService } from './service/get-products.service';
import { ProductsService } from './service/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [ProductsService, GetProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}