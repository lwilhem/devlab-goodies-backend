import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Controller('customers')
@UseFilters(HttpExceptionFilter)
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post('create')
  async createOneCustomer(
    @Body() data: CreateCustomerDto,
  ): Promise<CustomerEntity> {
    const newCustomer = await this.customersService.createCustomer(data);
    return newCustomer;
  }

  @Get('search')
  async readAllCustomers() {
    const customers = await this.customersService.findAllCustomers();
    return customers;
  }
}
