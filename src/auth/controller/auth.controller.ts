import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';
import { CreateUserDto } from '../entities/dto/create-user.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
@ApiTags('Authentication & Authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('logout/:id')
  async logout(@Param('id', ParseIntPipe) id: number) {
    return this.authService.logoutUser(id);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}
