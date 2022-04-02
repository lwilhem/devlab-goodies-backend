import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../customers/entities/customer.entity';
import { AuthService } from './service/auth.service';

@Module({
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([CustomerEntity]), JwtModule.register({})],
})
export class AuthModule {}
