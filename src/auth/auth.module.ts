import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../customers/entities/customer.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([CustomerEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
