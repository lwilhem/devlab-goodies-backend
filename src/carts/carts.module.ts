import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CartsController } from './controller/carts.controller';
import { CartsService } from './service/carts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
