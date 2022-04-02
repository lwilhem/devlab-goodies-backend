//Writter By Wilhem Lecanu
//Define the Business Logic for The Authentication Process
//Authorization To-Do
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../../customers/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customersRepository: Repository<CustomerEntity>,
    private jwt: JwtService,
  ) {}

  async signInCustomers(customer: CustomerEntity): Promise<CustomerEntity> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(customer.password, salt);
    customer.password = hash;
    return await this.customersRepository.save(customer);
  }

  async validateCustomer(email: string, password: string): Promise<any> {
    const foundCustomer = await this.customersRepository.findOne({ email });
    if (foundCustomer) {
      if (await bcrypt.compare(password, foundCustomer.password)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = foundCustomer;
        return result;
      }
      return null; // Authors Note : Send Incorrect Credentials message
    }
    return null; // Authors Note : Send Incorrect or Incomplete Credentials message
  }

  async login(customer: any) {
    const payload = { username: customer.name, sub: customer.id };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
