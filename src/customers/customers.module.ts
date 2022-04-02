import { Module } from '@nestjs/common';
import { CustomersService } from './service/customers.service';

@Module({
  providers: [CustomersService],
})
export class CustomersModule {}
