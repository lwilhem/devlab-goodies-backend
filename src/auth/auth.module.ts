import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BuyerController } from './controller/buyer.controller';
import { RetainerController } from './controller/retainer.controller';
import { BuyerService } from './service/buyer.service';
import { RetainerService } from './service/retainer.service';

@Module({
  imports: [DatabaseModule],
  providers: [RetainerService, BuyerService],
  controllers: [RetainerController, BuyerController],
})
export class AuthModule {}
