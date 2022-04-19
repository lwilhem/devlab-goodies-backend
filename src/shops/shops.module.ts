import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ShopsController } from './controllers/shops.controller';
import { ShopsService } from './service/shops.service';

@Module({
  imports: [DatabaseModule],
  providers: [ShopsService],
  controllers: [ShopsController],
})
export class ShopsModule {}
