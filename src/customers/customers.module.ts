import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { CustomersService } from './service/customers.service';

@Module({
  providers: [CustomersService],
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
})
export class CustomersModule {}
