import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [DatabaseModule, PassportModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
