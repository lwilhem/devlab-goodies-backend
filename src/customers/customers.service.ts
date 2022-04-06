import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
@UseFilters(HttpExceptionFilter)
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getCustomerByEmail(email: string): Promise<Customer> {
    const customer = await this.customerRepository.findOne({ email });
    if (customer) return customer;
    else throw new NotFoundException('Customer not found');
  }

  async createCustomer(customer: CreateCustomerDto): Promise<Customer> {
    const newUser = this.customerRepository.create(customer);
    await this.customerRepository.save(customer);
    return newUser;
  }
}
