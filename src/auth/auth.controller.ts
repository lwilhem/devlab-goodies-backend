import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { AuthService } from './auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerCustomer(@Body() newCustomer: CreateCustomerDto) {
    const createdUser = this.authService.registerCustomer(newCustomer);
    return createdUser;
  }
}
