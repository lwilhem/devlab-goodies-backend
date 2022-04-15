import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RetainerController } from './controller/retainer.controller';
import { RetainerService } from './service/retainer.service';

@Module({
  imports: [DatabaseModule],
  providers: [RetainerService],
  controllers: [RetainerController],
})
export class AuthModule {}
