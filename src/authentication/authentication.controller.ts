import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { AuthenticationService } from './authentication.service';
import JwtAuthenticationGuard from './guards/jwt-auth.guard';
import { LocalAuthenticationGuard } from './guards/local-auth.guard';
import { RequestWithCustomer } from './interface/customer-request.interface';

@Controller('authentication')
@UseFilters(HttpExceptionFilter)
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() customer: CreateCustomerDto) {
    return this.authenticationService.registerCustomer(customer);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Req() request: RequestWithCustomer, @Res() response: Response) {
    const { customer } = request;
    const cookie = await this.authenticationService.createJwtToken(customer.id);
    response.setHeader('Set-Cookie', cookie);
    return response.send(customer);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logout(@Req() request: RequestWithCustomer, @Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('getinfo')
  authenticate(@Req() request: RequestWithCustomer) {
    const customer = request.user;
    return customer;
  }
}
