import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './service/products.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
