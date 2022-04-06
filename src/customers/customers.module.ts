import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Module({
  providers: [CustomersService],
  imports: [TypeOrmModule.forFeature([Customer])],
  exports: [CustomersService],
})
export class CustomersModule {}
