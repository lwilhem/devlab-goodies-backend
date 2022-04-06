import { Module } from '@nestjs/common';
import { CustomersModule } from '../customers/customers.module';
import { AuthenticationService } from './authentication.service';

@Module({
  providers: [AuthenticationService],
  imports: [CustomersModule],
})
export class AuthenticationModule {}
