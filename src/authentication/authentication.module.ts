import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomersModule } from '../customers/customers.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthenticationService, LocalStrategy],
  imports: [CustomersModule, PassportModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
