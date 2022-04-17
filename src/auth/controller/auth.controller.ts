import { Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { AuthService } from '../service/auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
@ApiTags('Authentication & Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register() {
    return 'new user created';
  }

  @Post('login')
  async login() {
    return 'nex user logged in';
  }
}
