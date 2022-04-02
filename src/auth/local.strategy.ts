import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validateCustomer(username: string, password: string): Promise<any> {
    const foundCustomer = await this.authService.validateCustomer(
      username,
      password,
    );
    if (!foundCustomer) {
      throw new UnauthorizedException();
    }
    return foundCustomer;
  }
}
