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
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthenticationService } from './authentication.service';
import { LocalAuthenticationGuard } from './guards/localAuthentication.guard';
import RequestWithUser from './interface/requestWithUser.interface';

@Controller('authentication')
@UseFilters(HttpExceptionFilter)
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: CreateUserDto) {
    return this.authenticationService.registerUser(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
    const { user } = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return response.send(user);
  }
}
