import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { CustomerEntity } from '../customers/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerEntity: Repository<CustomerEntity>,
  ) {}

  async registerCustomer(newCustomer: CreateCustomerDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(newCustomer.password, salt);
    newCustomer.password = hash;
    return await this.customerEntity.save(newCustomer);
  }
}
