import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signup(user: User): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return await this.userService.createUser(user);
  }
}
