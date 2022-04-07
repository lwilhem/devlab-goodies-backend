import {
  Body,
  Controller,
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
}
