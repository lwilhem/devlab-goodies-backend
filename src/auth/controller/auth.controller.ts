import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { CreateUserDto } from '../entities/dto/create-user.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
@ApiTags('Authentication & Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUseDto: CreateUserDto): Promise<User> {
    return this.authService.registerUser(createUseDto);
  }

  @Post('login')
  async login() {
    return 'nex user logged in';
  }
}
