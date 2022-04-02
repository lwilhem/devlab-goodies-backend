import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../customers/entities/customer.entity';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './service/auth.service';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([CustomerEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
})
export class AuthModule {}
