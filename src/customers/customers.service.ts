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
    return await this.customerEntity.find();
  }

  async updateCustomer(target_id: number, data: UpdateCustomerDto) {
    const updatedData = await this.customerEntity.update(
      { id: target_id },
      data,
    );
    return updatedData;
  }

  async deleteCustomer(id: number) {
    const deleteUser = await this.customerEntity.delete({ id: id });
    return deleteUser;
  }
}
