import { Controller, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { AuthService } from './auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerCustomer() {
    return 'Registered Customer';
  }
}
