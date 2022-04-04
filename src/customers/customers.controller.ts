import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
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

  @Get('search/:id')
  async readCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = await this.customersService.findCustomerById(id);
    return customer;
  }

  @Patch('update/:id')
  async updateOneCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() newData: UpdateCustomerDto,
  ) {
    const updatedcustomer = await this.customersService.updateCustomer(
      id,
      newData,
    );
    return updatedcustomer;
  }

  @Delete('delete/:id')
  async deleteOneCustomer(@Param('id', ParseIntPipe) id: number) {
    const deleteCustomer = await this.customersService.deleteCustomer(id);
    return deleteCustomer;
  }
}
