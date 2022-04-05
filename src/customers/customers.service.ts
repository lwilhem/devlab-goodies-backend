import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerEntity: Repository<CustomerEntity>,
  ) {}

  async createCustomer(data: CreateCustomerDto): Promise<CustomerEntity> {
    const newUser = this.customerEntity.save(data);
    return newUser;
  }

  async findAllCustomers() {
    return this.customerEntity.find();
  }

  async findCustomerById(id: number): Promise<CustomerEntity> {
    const findUser = this.customerEntity.findOne({ id: id });
    return findUser;
  }

  async findCustomerByEmail(
    email: string,
  ): Promise<CustomerEntity | undefined> {
    const customer = this.customerEntity.findOne({ email: email });
    if (customer) return Promise.resolve(customer);
    else return undefined;
  }

  async updateCustomer(target_id: number, data: UpdateCustomerDto) {
    const updatedData = this.customerEntity.update({ id: target_id }, data);
    return updatedData;
  }

  async deleteCustomer(id: number) {
    const deleteUser = this.customerEntity.delete({ id: id });
    return deleteUser;
  }
}
