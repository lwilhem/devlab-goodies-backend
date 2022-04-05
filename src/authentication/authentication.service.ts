import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './interface/tokenPayload.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async registerUser(registerData: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerData.password, salt);
    const createdUser = await this.userService.createUser({
      ...registerData,
      password: hashedPassword,
    });
    return createdUser;
  }

  async getAuthenticatedUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    const passwordTest = await bcrypt.compare(password, user.password);
    if (passwordTest) return user;
  }

  public getCookieWithJwtToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwt.sign(payload);
    return token;
  }
}
