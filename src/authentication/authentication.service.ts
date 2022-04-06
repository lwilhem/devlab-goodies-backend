import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CustomersService } from '../customers/customers.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly customersService: CustomersService) {}

  // Replace the customer password by an encrypted version of that password, and save it in db
  public async registerCustomer(toRegisterCustomer: CreateCustomerDto) {
    const newSalt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(toRegisterCustomer.password, newSalt);
    const createdUser = this.customersService.createCustomer({
      ...toRegisterCustomer,
      password: hash,
    });
    return createdUser;
  }

  // Throw the same error to limit attempst to breach in db
  public async getAuthenticatedCustomer(email: string, password: string) {
    try {
      const customer = await this.customersService.getCustomerByEmail(email);
      await this.verifyPassword(password, customer.password);
      return customer;
    } catch (error) {
      throw new BadRequestException('Invalid Credentials');
    }
  }

  // To Improve Code Readability, I chose to implements the password verification as a separate method
  private async verifyPassword(inputPassword: string, targetPassword: string) {
    const passwordMatching = await bcrypt.compare(
      inputPassword,
      targetPassword,
    );
    if (!passwordMatching) throw new BadRequestException('Invalid Credentials');
  }
}
