import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CustomersService } from '../customers/customers.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { tokenPayload } from './interface/token-payload.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly customersService: CustomersService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {}

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

  async createJwtToken(id: number) {
    const payload: tokenPayload = { id };
    const token = this.jwt.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
