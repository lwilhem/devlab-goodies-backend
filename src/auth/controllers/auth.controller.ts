//Defines The API routes for the Authentication Process
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CustomerEntity } from '../../customers/entities/customer.entity';
import { AuthService } from '../service/auth.service';

@Controller('auth/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerCustomer(
    @Body() customer: CustomerEntity,
  ): Promise<CustomerEntity> {
    return this.authService.signUpCustomer(customer);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async logInCustomer(@Request() req) {
    return this.authService.logInCustomer(req.customer);
  }
}
